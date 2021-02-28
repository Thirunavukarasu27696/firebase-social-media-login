import React from "react";
import FirebaseSignIn from '../FiresBaseSignIn/FirebaseSignIn';
import SignInWithLinkedIn from '../LinkedInLogin/SignInWithLinkedIn';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function AppRouting() {
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
                </ul>

                <hr />


                <Switch>
                    <Route exact path="/firebase">
                        <FirebaseSignIn />
                    </Route>
                    <Route path="/linkedin">
                        <LinkedInPopUp />
                    </Route>
                    <Route path="/">
                        <SignInWithLinkedIn />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}