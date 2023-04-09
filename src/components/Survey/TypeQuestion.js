import React, { useState } from "react";

function TypeQuestion({ question }) {
    return (
        <div class="mb-3">
            <h3><b>{question}</b></h3>
            <div class="btn-group" style={{float:"left"}}>
                <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item">Action</a></li>
                    <li><a class="dropdown-item">Another action</a></li>
                    <li><a class="dropdown-item">Something else here</a></li>
                    <li><a class="dropdown-item">Separated link</a></li>
                </ul>
                </div>
        </div>
        
    );
}

export default TypeQuestion;