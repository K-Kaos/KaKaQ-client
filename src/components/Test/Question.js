import React, { useState } from "react";

function Question({ question }) {
    return (
        <div class="mb-3">
            <h3>{question}</h3>
        </div>
    );
}

export default Question;