import React from 'react';


import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function AdminRoute({ component: Component, ...rest }){

    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render = {props => {
               return ((localStorage.getItem('role') === 'box') && currentUser) ? <Component {...props} /> : <Redirect to="/" />
            }}>
        </Route>
    );
}