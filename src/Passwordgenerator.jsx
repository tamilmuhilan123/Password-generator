import { useState } from "react"

const Passwordgenerator = () => {
    const[length,setLength]=useState()
    const[upperCase,setUpperCase]=useState(false)
    const[lowrerCase,setLowerCase]=useState(false)
    const[number,setNumber]=useState(false)
    const[symbol,setSymbol]=useState(false)
    const[password,setPassword]=useState("")
    
    function lengthChange(e){
        setLength(e.target.value)
    }

    function generate(){
        let charset="";
        if(upperCase){ charset += "QWERTYUIOPASDFGHJKLZXCVBNM"}
        if(lowrerCase){charset += "qwertyuiopasdfghjklzxcvbnm"}
        if(number) {charset += "1234567890"}
        if(symbol) {charset += "~!@#$%^&*()_-+=?/\|"}
        let generatedPassword="";
        for(let i=0;i<length;i++){
            const randomInt=Math.floor(Math.random()*charset.length)
            generatedPassword+=charset[randomInt]
        }
        setPassword(generatedPassword)
    }
    async function copyButton() {
        if (!password) {
            alert("Nothing to copy. Generate a password first.");
            return;
        }
        try {
            await navigator.clipboard.writeText(password);
            alert("Password copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy: ", err);
            alert("Failed to copy password. Please try again.");
        }
    }
    
  return (
    <>
        <div className="main">
            <div className="submain">
                <div className="heading">
                    <h1>Password Generator</h1>
                </div>
                <div className="inputbox">
                    <p>Password Length : </p>
                    <input type="text" value={length} onChange={lengthChange}/>
                </div>
                <div className="checkboxes">
                    <div className="uppercase">
                        <input type="checkbox" id='uppercase'checked={upperCase} onChange={(e)=>{setUpperCase(e.target.checked)}}/><label htmlFor="uppercase">Include Uppercase</label>
                    </div>
                    <div className="uppercase">
                        <input type="checkbox" id='lowercase'  checked={lowrerCase} onChange={(e)=>{setLowerCase(e.target.checked)}}/><label htmlFor="lowercase">Include Lowercase</label>
                    </div>
                    <div className="uppercase">
                        <input type="checkbox" id='numbers'  checked={number} onChange={(e)=>{setNumber(e.target.checked)}}/><label htmlFor="numbers">Include Numbers</label>
                    </div>
                    <div className="uppercase">
                        <input type="checkbox" id='symbols' checked={symbol} onChange={(e)=>{setSymbol(e.target.checked)}}/><label htmlFor="symbols">Include Symbols</label>
                    </div>
                </div>
                <div className="generatebutton">
                    <button onClick={generate}>Generate Password</button>
                </div>
                <div className="outputbox">
                    <input type="text" readOnly value={password}/><button onClick={copyButton}>Copy</button>
                </div>
                <div className="footer">
                    <p>Designed by <a href="https://tamilmuhilan.netlify.app">@developertamil</a></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Passwordgenerator

