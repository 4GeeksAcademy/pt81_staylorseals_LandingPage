import React from 'react';
import kittenImg from '../../img/red-kitten.jpg';

const Card = () => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={kittenImg} className="card-img-top" alt="red kitten"></img>
            <div className="card-body">
                <h5 className="card-title">Red Kitten</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default Card;