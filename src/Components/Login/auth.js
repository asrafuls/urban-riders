import React, { createContext, useContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { Redirect, Route } from 'react-router-dom';

// Initialize firebase
firebase.initializeApp(firebaseConfig)

// Create and set context
const AuthContext = createContext()
export const AuthContextProvider = (props) => {
    const auth = Auth()
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext)

// Private route for privacy
export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

// All authentication
const Auth = () => {

    const [user, setUser] = useState(null)

    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)

    // Get current user
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (usr) {
            if (usr) {
                const currentUser = getUser(usr)
                setUser(currentUser)
            } else {

            }
        })
    }, [])

    // Set specific value in user
    const getUser = (usr) => {
        const { displayName, email, photoUrl } = usr;
        return { name: displayName, email, photo: photoUrl }
    }

    // Google sign in
    const googleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                setUser(getUser(res.user))
                setError(false)
            })
            .catch(err => {
                setUser(null)
                setError(true)
                setErrorMsg(err.message)
            })
    }

    // Password sign up
    const pwdSignUp = (name, email, pass) => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(res => {
                setUser(getUser(res.user))
                setError(false)
            })
            .catch(err => {
                setUser(null)
                setError(true)
                setErrorMsg(err.message)
            })
    }

    // Password sign in
    const pwdSignIn = (email, pass) => {
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(res => {
                setUser(getUser(res.user))
                setError(false)
            })
            .catch(err => {
                setUser(null)
                setError(true)
                setErrorMsg(err.message)
            });
    }

    // Sign out
    const signOut = () => {
        firebase.auth().signOut()
            .then(() => {
                setUser(null)
                console.log(user)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return {
        user,
        error,
        errorMsg,
        googleLogin,
        pwdSignUp,
        pwdSignIn,
        signOut
    }
}