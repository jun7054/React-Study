import { useState } from "react";

const IterationSample = () => {
    const [names, setNames] = useState([
        {id:1, text:'눈사람'},
        {id:2, text:'얼음'},
        {id:3, text:'눈'},
        {id:4, text:'바람'}
    ]);
    
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);

    const onclick = () => {
        const nextNames = names.concat({
            id : nextId,
            text : inputText
        });
    }

    const nameList = names.map(name => <li key={name.id}>{name.text}</li>);
    console.log(nameList);
    return(
        <>
        <input value={inputText} onChange={onChange}></input>
        <button>추가</button>
        <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;