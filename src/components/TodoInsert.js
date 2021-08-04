import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onClick = useCallback(
        e => {
            onInsert(value);
            setValue('');
        },
        [onInsert, value],
    );

    return(
        <form className="TodoInsert" onSubmit={onsubmit}>
            <input 
            placeholder="할 일을 입력하세요"
            value={value}
            onChange={onChange}
            />
            <button onClick={onClick}>
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;