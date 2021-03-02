import React from "react";
import FirebaseSignIn from '../FiresBaseSignIn/FirebaseSignIn';
import SignInWithLinkedIn from '../LinkedInLogin/SignInWithLinkedIn';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LinkedIn from "../LinkedIn";
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import AmazonSignIn from '../Amazon/AmazonSignIn';
import AmazonLogin from '../react-social-login/AmazonLogin';


export default function AppRouting() {



    const handleSuccess = (data) => {
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

    const handleFailure = (error) => {
        console.log(error);
        this.setState({
            code: '',
            errorMessage: error.errorMessage,
        });
    }
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {/* <li>
                        <Link to="/linkedin">linkedin</Link>
                    </li> */}
                    <li>
                        <Link to="/amazon">Amazon</Link>
                    </li>
                    <li>
                        <Link to="/amazonsignin">Amazon2</Link>
                    </li>
                    <li>
                        <Link to="/firebase">Dashboard</Link>
                    </li>

                </ul>

                <hr />


                <Switch>

                    <Route exact path="/firebase">
                        <FirebaseSignIn />
                    </Route>
                    <Route path="/linkedin">
                        <LinkedInPopUp />
                    </Route>
                    <Route path="/amazon">
                        <AmazonLogin />
                    </Route>
                    <Route path="/amazonsignin">
                        <AmazonSignIn />
                    </Route>
                    <Route path="/">
                        {/* <LinkedIn loading={false} onSuccess={handleSuccess} onFailure={handleFailure} /> */}
                        <SignInWithLinkedIn />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}