import React, { Component } from 'react';

import { LinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png'
import { APIService } from '../Utils/APIService';

class SignInWithLinkedIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            code: '',
            errorMessage: '',
            redirectURL: `https://firebase-social-media-login.herokuapp.com/linkedin`
        }
        // this.handleSuccess.bind(this);
        // this.handleFailure.bind(this);

    }

    componentDidMount() {

    }

    handleSuccess(data) {
        debugger
        console.log(data);
        if (data.code) {
            this.getAccessToken(data.code);
        }
        this.setState({
            code: data.code,
            errorMessage: '',
        }, () => {
        });
    }

    handleFailure(error) {
        debugger
        console.log(error);
        this.setState({
            code: '',
            errorMessage: error.errorMessage,
        });
    }

    getAccessToken(code) {
        // const { code } = this.state;
        const url = `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&redirect_uri=${this.state.redirectURL}/linkedin&client_id=86fl22mto3b92u&client_secret=FHeTaubxVPzl7WJN&code=${code}`;

        APIService.get(url, null).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        const { code, errorMessage, redirectURL } = this.state;

        return (
            <div>
                <LinkedIn
                    clientId="86fl22mto3b92u"
                    onFailure={e => this.handleFailure(e)}
                    onSuccess={e => this.handleSuccess(e)}
                    redirectUri={redirectURL}
                >
                    <img src={linkedin} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
                </LinkedIn>

                {!code && <div>No code</div>}
                {code && <div>Code: {code}</div>}
                {errorMessage && <div>{errorMessage}</div>}
            </div>
        );
    }
}


export default SignInWithLinkedIn
