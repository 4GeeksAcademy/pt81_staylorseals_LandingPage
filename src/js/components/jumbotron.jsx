import React from 'react';

const Jumbotron = () => {
    return (
    <div className="p-5 mb-4 bg-body-tertiary rounded-3"> 
        <div className="container-fluid py-5"> 
            <h1 className="display-5 fw-bold">Hello There!</h1> 
            <p className="col-md-8 fs-4"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
            <button className="btn btn-primary btn-lg" type="button">Example button</button> 
            </div> 
    </div>
    );
};

export default Jumbotron;