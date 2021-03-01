import React, { Component } from 'react'
import SocialButton from './SocialButton';
// import { OldSocialLogin as SocialLogin } from 'react-social-login'

class SignInWithAmazon extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        console.log('hiiiiiiiii');
        
    }

    handleSocialLogin(user) {
        
        console.log(user)
    }

    handleSocialLoginFailure(err) {
        console.error(err)

    }

    render() {
        return (
            <div>
                <SocialButton
                    provider='amazon'
                    appId='amzn1.application-oa2-client.8f7078cea0ff48ca87ac807b8e60ae4e'
                    onLoginSuccess={this.handleSocialLogin}
                    onLoginFailure={this.handleSocialLoginFailure}
                >
                    Login with Amazon
    </SocialButton>
            </div>
        )
    }
}

export default SignInWithAmazon

