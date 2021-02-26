import React, { Component } from 'react'
import SocialLogin from 'react-social-login'
class ReactSocialLogin extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.triggerLogin} {...this.props}>
                    {this.props.children}
                </button>
            </div>
        )
    }
}

export default SocialLogin(ReactSocialLogin);
