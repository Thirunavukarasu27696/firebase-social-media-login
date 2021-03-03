import React from 'react'
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
    console.log(response);
}

function FaceBookLogin() {
    return (
        <div>
            <FacebookLogin
                appId="1380380918988208"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="my-facebook-button-class"
                scope="public_profile,email"
                icon="fa-facebook"
                version="3.1"
            />
        </div>
    )
}

export default FaceBookLogin
