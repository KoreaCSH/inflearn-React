import React from 'react';
import useInput from "../hooks/useInput"

const HookExam = () => {

    const [input, onChangeInput] = useInput();

    return (
        <div>
            <input 
                value={input}
                onChange={onChangeInput}/>
        </div>
    )
}

export default HookExam;