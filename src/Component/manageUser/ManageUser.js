import React from 'react';


const ManageUser = props => {
    return localStorage.getItem('role') === 'box' ? <p>Manege User</p> : null
}

export default ManageUser;