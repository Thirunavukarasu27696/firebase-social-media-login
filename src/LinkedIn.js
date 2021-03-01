import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { addLinkedInScript } from './Utils/Scripts';
// var IN = window.IN;
export default class LinkedIn extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    async componentDidMount() {
        try {
            await addLinkedInScript();
            // Initializtoin with you API_KEY
            // window.IN.init({ api_key: '86fl22mto3b92u' });
        } catch (error) {
            console.log(error.name, ':', error.message);
        }
    }
    /**
     * Handle click button
     */
    handleClick(e) {
        const {
            loading,
            onSuccess,
            onFailure,
        } = this.props;

        if (loading || !window.IN.User) {
            return;
        }
        window.IN.User.authorize(() => {
            // If authorization pass well, we take profile info
            window.IN.API.Profile('me')
                .fields(['id', 'firstName', 'lastName', 'emailAddress'])
                .result((res) => {
                    const data = {};
                    data.identity = {
                        uid: window.IN.User.getMemberId(),
                        provider: 'linkedin'
                    };
                    data.user = {
                        email: res.values[0].emailAddress,
                        firstName: res.values[0].firstName,
                        lastName: res.values[0].lastName,
                    };
                    data.auth = window.IN.ENV.auth;
                    // Send data to back end
                    onSuccess(data);
                });
        },
            err => onFailure(err));
    }
    render() {
        return (
            <span
                className="btn linkedin"
                onClick={this.handleClick.bind(this)}
            >
                LinkedIn
                <i className="icon-in" />
            </span>
        );
    }
}
LinkedIn.propTypes = {
    loading: PropTypes.bool.isRequired,
    onSuccess: PropTypes.func.isRequired,
    onFailure: PropTypes.func.isRequired,
};