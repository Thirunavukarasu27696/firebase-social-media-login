import React, { useEffect, useState } from 'react'
import avatar3 from '../assets/img/avatar3.png';
import AmazonButton from './AmazonButton';
export default function AmazonSignIn() {
    const [userObj, setUserObj] = useState(null);
    const [token, setToken] = useState(null);


    useEffect(() => {
        if (localStorage.user) {

            setUserObj(JSON.parse(localStorage.user._profile));
            setToken(localStorage._token);

        } else {
            localStorage.clear();
        }
    }, [])

    const handleSocialLogin = (user) => {
        console.log(user)
        if (user._profile) {
            setUserObj(user._profile);
            localStorage.user = JSON.stringify(user._profile);
        }
        if (user._token) {
            setToken(user._token);
            localStorage._token = JSON.stringify(user._token.accessToken);

        }
    }

    const handleSocialLoginFailure = (err) => {
        console.error(err)
    }
    const logoutAmazon = () => {
        window.amazon && window.amazon.Login.logout();
        localStorage.clear();
        setUserObj(null);
        setToken(null);
    }
    return (
        <div>
            {!userObj && <AmazonButton
                provider='amazon'
                appId='amzn1.application-oa2-client.22381abab3e44f0b9d83a1a6970b27b1'
                onLoginSuccess={handleSocialLogin}
                onLoginFailure={handleSocialLoginFailure}
            >  Login with Amazon
    </AmazonButton>}
            <hr></hr>

            {userObj && <div>
                <p><strong>Email: </strong> {userObj.email}</p>
                <p> <strong>FirstName: </strong>{userObj.firstName}</p>
                <p><strong>LastName: </strong> {userObj.lastName}</p>
                <p><strong>Id: </strong> {userObj.id}</p>
                <p><strong>AccessToke: </strong> {token.accessToken}</p>

                <img src={userObj.profilePicURL ? userObj.profilePicURL : avatar3} alt="profile_picture" />

            </div>}
            <hr></hr>
            <button onClick={logoutAmazon}>logout</button>
        </div>
    )
}
