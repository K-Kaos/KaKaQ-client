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
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
    );
}

export default InputBox;