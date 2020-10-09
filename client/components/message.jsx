import React from "react";

export default function MessageBanner (props) {

    return (
        <div className="message-banner container-fluid d-flex justify-content-center align-items-center bg-dark text-white text-bold">
            <div>{props.message}</div>
        </div>
    )
}