import React from 'react';

const NotFound = () => {
    return (
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', height: '400px'}}>
            <div style={{textAlign: 'center', color: 'gray', fontSize:'25px'}}>
            <h1>404 Error!</h1>
            <h2>Page Not Found</h2>
            </div>
        </div>
    );
};

export default NotFound;