import React from 'react';
import { useState, useRef, useEffect } from "react"
import '../styles/Register.css'

const Register = () => {

    const countRef = useRef(0);

    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className='Register'>
            <input
                name="name"
                value={input.name}
                onChange={onChange}
                placeholder='이름'/>
            <input
                name="birth"
                value={input.birth}
                onChange={onChange}
                type="date"/>
            <select
                name="country"
                value={input.country}
                onChange={onChange}>
                <option></option>
                <option>KR</option>
                <option>US</option>
                <option>UK</option>
            </select>
            <textarea
                name="bio" 
                value={input.bio}
                onChange={onChange}/>
        </div>
    )
}

export default Register;