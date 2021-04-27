import React, {useState} from 'react';

function TestForm() {
    const [id, setId] = useState('');

    const handleChange = ({target: {value}}) => setId(value);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`${id}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="id"
                value={id}
                onChange={handleChange}
            />
            <button type="submit">아이디 변경</button>
        </form>
    )
}

export default TestForm;