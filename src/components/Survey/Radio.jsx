import React, { useState } from "react";

function Radio({ children, value, name, defaultChecked, disabled }) {
    return (
        <label>
            <input
                type="radio"
                value={value}
                name={name}
                defaultChecked={defaultChecked}
                disabled={disabled}
            />
            <span> </span>{children}
        </label>
    );
}

export default Radio;
