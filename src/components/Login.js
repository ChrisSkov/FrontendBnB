import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import * as firebaseui from 'firebaseui';

import { auth, initializeApp } from 'firebase';
// Configure Firebase.
const config = {
    apiKey: "AIzaSyDgrHIQnlPHFuYHTdPNM_e2TFwOMmgCqiA",
    authDomain: "trend-maker.firebaseapp.com",
    databaseURL: "https://trend-maker.firebaseio.com",
    projectId: "trend-maker",
    storageBucket: "trend-maker.appspot.com",
    messagingSenderId: "399114553962",
    appId: "1:399114553962:web:6d0c2fbb14b5b312f7d813",
    measurementId: "G-0ZK97R4YVS"
};
initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/my-reservations',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        // auth.GoogleAuthProvider.PROVIDER_ID,
        auth.EmailAuthProvider.PROVIDER_ID
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
};
export default function Login() {
    return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />;
}