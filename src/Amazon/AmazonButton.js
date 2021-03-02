import React, { Component } from 'react'
import SocialLogin from 'react-social-login'
class AmazonButton extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        const { children, triggerLogin, ...props } = this.props;

        return (
            <div>
                <button onClick={triggerLogin} {...props}>
                    {children}
                </button>
            </div>
        )
    }
}

export default SocialLogin(AmazonButton);
