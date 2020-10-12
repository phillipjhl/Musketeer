import React from 'react';
import { Link } from 'react-router-dom';
import NextArrow from '../assets/documents/next_arrow.png';
import ImageHead from '../assets/documents/header.jpg';

function BlogShort(props) {
    
    return (
        <div className="card border-0 mb-3">
            <img className="card-img-top" src={ImageHead} alt="Card image cap" className="img-fluid" />
            <div className="card-body">
                <h5 className="card-title text-center">{props.data.title}</h5>
                <p className="card-text">{props.data.content}</p>
                <p className="card-text">{props.data.date}</p>
                <Link to={`/blogs/${props.data.id}`} className="btn" >
                    <img src={NextArrow} alt={`Go To ${props.data.title}`} className="img-fluid mx-auto h-100" height="40px" width="40px" />
                </Link>
            </div>
        </div>

    );
}

export default BlogShort;