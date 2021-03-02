import React, { Component } from 'react'
import SocialLogin from 'react-social-login'
class ReactSocialLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        console.log(this.props);
    }
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
