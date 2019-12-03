import React from 'react';
import { auth } from 'firebase';
import { Redirect } from "react-router-dom";

export default function Login({ ...rest }) {
    auth().signOut()
    return <Redirect to="/" />;
}