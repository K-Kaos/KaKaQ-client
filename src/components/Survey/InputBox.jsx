import { useState } from 'react';

function InputBox({ id, value, name, size }) {
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage(`Thank you for submitting!`);
    };

    return (
        <div class="mb-3">
            <input
                size={size}
                id={id}
                type="text"
                name={name}
                placeholder={name}
            />
        </div>
    );
}

export default InputBox;