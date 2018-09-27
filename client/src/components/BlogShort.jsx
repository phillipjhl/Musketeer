import React from 'react';
import NextArrow from './documents/next_arrow.png';
import ImageHead from './documents/header.jpg';

function BlogShort(props) {
    return (
        <div className="card border-0 mb-3">
            <img className="card-img-top" src={ImageHead} alt="Card image cap" className="img-fluid" />
            <div className="card-body">
                <h5 className="card-title">Blog title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="row">
                    <img src={NextArrow} alt="Go To Article" className="img-fluid mx-auto h-100" height="40px" width="40px" />
                </div>
            </div>
        </div>

    );
}

export default BlogShort;