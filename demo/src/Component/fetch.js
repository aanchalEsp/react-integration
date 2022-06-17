import React from "react";
import { useState, useEffect } from 'react';

function LoadBackground() {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [show, hide] = useState(false)
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")
    const [pas, setPass] = useState("")
    const [error, setError] = useState({ text: '', pas: "" })

    const text_Set = (e) => {
        setText(e.target.value)
    }
    const text_Pass = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.length < 5) {
            setError({ text: "length is small" });
        }
        else if (pas.length < 5) {
            setError({ pas: "pass is small" })

        }
        console.log(text, pas)
    }
      useEffect(()=>{
        console.log("mew")
      })
     useEffect(() => {
        if (data.length !== 0) {
            setLoader(false);
        }
        console.log(data);
      }, [data]);



    const fetchData=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setData(json)).catch(err=>console.log(err))
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: 'foo',
              body: 'bar',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));

    
    return (
        <div>
        <button onClick={fetchData}>fetch</button>
     {loader?<h1>loading data</h1>:
     data.map((item)=>{
        return <li>{item.title}{item.id}</li>
     
      })} 
    
        {/* <button onClick={showData}>sow data</button> */}
      {show?<h1>show data</h1>:""}
      {/* <button onClick={increase}>increase</button> */}
      <h3>{count}</h3>
      
            <form>
                <label>enter name</label>
                <input type="text" onChange={text_Set} value={text}></input>
                {error.text && <p style={{ color: "red" }}>{error.text}</p>}

                <br></br>
                <label>enter password</label>
                <input type="password" onChange={text_Pass} value={pas}></input>
                {error.pas && <p style={{ color: "red" }}>{error.pas}</p>}
                <br></br>
                <button onClick={handleSubmit}>submit</button>
                <li>{text}</li>
                <li>{pas}</li>

            </form>
        </div>
    );
    }

export default LoadBackground;