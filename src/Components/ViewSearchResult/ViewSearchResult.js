import React, { useEffect, useState } from 'react';
import queryString from 'query-string'
import { useParams } from 'react-router-dom';
import desData from '../../desData/desData';
import tripeData from '../../desData/tripeData';

const ViewSearchResult = (props) => {

    const [destinationData, setDestinationData] = useState({})
    const [searchResult, setSearchResult] = useState([])

    const query = window.location.search

    const toLowerCase = (data) => {
        return data.toLowerCase()
    }

    const { from, to } = queryString.parse(toLowerCase(query))

    const { methodUrl } = useParams()

    useEffect(() => {
        const findOption = desData.find(dt => dt.option === methodUrl)
        setDestinationData(findOption)
    }, [])

    useEffect(() => {
        const filterSearchData = tripeData.filter(dt => dt.from === from && dt.to === to)
        if (filterSearchData.length > 0) {
            setSearchResult(filterSearchData)
        } else {
            setSearchResult(null)
        }
    }, [])

    console.log(destinationData)

    return (
        <div className="searchResultComp">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-3">
                        <div style={{ background: "#EFEFEF", border: "none", borderRadius: "15px" }} className="card">
                            <div className="card-body">
                                <div className="card color-bg">
                                    <div className="card-body">
                                        <div className="col-11">
                                            <h2 className="text-light">{from}</h2>
                                            <br />
                                            <h2 className="text-light">{to}</h2>
                                        </div>
                                    </div>
                                </div>
                                {
                                    searchResult ?
                                        <>
                                            {
                                                searchResult.map(dt =>
                                                    <div style={{cursor: "pointer"}} className="card bg-light mt-3">
                                                        <div className="card-body">
                                                            <div className="d-flex text-dark">
                                                                <div className="">
                                                                    <img src={destinationData.img} alt="" style={{ width: "30px" }} />
                                                                </div>
                                                                <div style={{ marginTop: "5px" }} className="ms-3 me-2">
                                                                    <h6>{destinationData.title}</h6>
                                                                </div>
                                                                <div className="d-flex mt-1 me-auto">
                                                                    <img className="ms-1" src="https://raw.githubusercontent.com/ProgrammingHero1/urban-riders/main/images/peopleicon.png" alt="" style={{ width: "20px", height: "20px" }} />
                                                                    <h6>{dt.sit[0]}</h6>
                                                                </div>
                                                                <div className="mt-1">
                                                                    <h6>$ {dt.price[0]}</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </>
                                        :
                                        <div className="text-center">
                                            <div className="text-danger py-3">No trip in your destination</div>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <img src="https://raw.githubusercontent.com/ProgrammingHero1/urban-riders/main/images/Map.png" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewSearchResult;