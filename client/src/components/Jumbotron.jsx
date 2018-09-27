import React from 'react';

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid bg-dark text-white">
            <div className="container">
                <div className="col-sm-9 mx-auto inner-cover text-center">
                    <h6>WELCOME TO THE</h6>
                    <hr className="my-6 border-white" />
                    <h1>JOURNAL</h1>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;