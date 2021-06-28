import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SearchDestination = () => {

    const { searchUrl } = useParams()

    const [pickFrom, setPickFrom] = useState("")
    const [pickTo, setPickTo] = useState("")

    return (
        <div className="compSearchDestination">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-3">
                        <div style={{ background: "#EFEFEF", border: "none", borderRadius: "15px" }} className="card">
                            <div className="card-body">
                                <div class="mb-3">
                                    <label for="pickFrom" class="form-label">Pick From</label>
                                    <input onChange={(e) => setPickFrom(e.target.value)} type="text" class="form-control" id="pickFrom" placeholder="" />
                                </div>
                                <div class="mb-3">
                                    <label for="pickTo" class="form-label">Pick To</label>
                                    <input onChange={(e) => setPickTo(e.target.value)} type="text" class="form-control" id="pickTo" placeholder="" />
                                </div>
                                <Link to={pickFrom || pickTo ? `/destination/${searchUrl}?from=${pickFrom}&to=${pickTo}`: `/search/${searchUrl}`} className="btn color-bg w-100 text-light">Search</Link>
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

export default SearchDestination;