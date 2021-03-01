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
import SignInWithAmazon from '../AmazonLogin/SignInWithAmazon';


export default function AppRouting() {



    const handleSuccess = (data) => {
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

    const handleFailure = (error) => {
        debugger
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
                    <li>
                        <Link to="/linkedin">linkedin</Link>
                    </li>
                    <li>
                        <Link to="/firebase">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/amazon">Amazon</Link>
                    </li>
                </ul>

                <hr />


                <Switch>
                    <Route path='/amazon'>
                        <SignInWithAmazon />
                    </Route>
                    <Route exact path="/firebase">
                        <FirebaseSignIn />
                    </Route>
                    <Route path="/linkedin">
                        <LinkedInPopUp />
                    </Route>
                    <Route path="/">
                        <LinkedIn loading={false} onSuccess={handleSuccess} onFailure={handleFailure} />
                        {/* <SignInWithLinkedIn /> */}
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}