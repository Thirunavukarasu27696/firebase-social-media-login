import React, { Component } from 'react'
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
    apiKey: 'AIzaSyCd8RdsIPnAcRgF9yBDU3KFFyuNLWznWm0',
    authDomain: 'fir-social-media-login.firebaseapp.com'
})

class FirebaseSignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isSignedIn: false,
            uiConfig: {
                signInFlow: "popup",
                signInOptions: [
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                    firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                    firebase.auth.GithubAuthProvider.PROVIDER_ID

                ],
                callbacks: {
                    signInSuccess: () => false
                }
            }
        }
    }

    // state = { isSignedIn: false };

    componentDidMount() {

        firebase.auth().onAuthStateChanged(
            (user) => {
                this.setState({ isSignedIn: !!user })
                console.log('user', JSON.stringify(user));
            }

        );
    }

    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {
        this.unregisterAuthObserver();
    }



    render() {
        return (
            <div>
                {this.state.isSignedIn ? (
                    <>
                        <div>Signed In! </div>
                        <button onClick={() => firebase.auth().signOut()}>Sign Out!</button>
                        <h1>
                            {firebase.auth().currentUser.displayName}
                        </h1>
                        <img alt='Profile picture' src={firebase.auth().currentUser.photoURL} />
                    </>
                ) : (
                        <StyledFirebaseAuth
                            uiCallback={ui => ui.disableAutoSignIn()}
                            uiConfig={this.state.uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                    )}
            </div>
        )
    }
}

export default FirebaseSignIn