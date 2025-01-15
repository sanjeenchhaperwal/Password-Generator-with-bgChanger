
import { useState,useCallback,useEffect,useRef } from "react"

function ApplicationPass () {

    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed ] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [passWord, setPassword] = useState("");

    // useRef Hook

    const passwordRef = useRef(null);

    const buildPassword = useCallback(() => {
        
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz";
        if(numberAllowed) str += "0123456789"
        if(charAllowed) str += "!@#$%^&*()-_+={}[]`~"

        for( let i = 1; i <= length; i++){
            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }

        setPassword(pass);

    }, [length, numberAllowed, charAllowed, setPassword])

       useEffect(() => {
        buildPassword()
       },[length,numberAllowed,charAllowed,setPassword, buildPassword])

    const copyPasswordToClip = useCallback(() => {
            window.navigator.clipboard.writeText(passWord);
    },[passWord])

    return(
         <div className="border-4 border-white rounded-3xl h-[320px] w-[700px] p-8 text-4xl text-orange-500 text-center bg-gray-950 shadow-xl">
            <h1>Password Generator</h1>
            <h5 className="text-xs">Made By Sanjeen</h5>

            <div className="flex shadow rounded-lg overflow-hidden  mt-14 mx-10 text-[22px]">
                <input 
                    type="text"
                    value={passWord}
                    className="outline-none pb-[4px] px-3 w-full bg-gray-700 text-white"
                    placeholder="Password"
                    readOnly
                    ref={passwordRef}
                />
                <button onClick={copyPasswordToClip} className="outline-none bg-blue-800 text-white px-3 shrink-0">Copy</button>
            </div>

            <div className="flex text-sm gap-x-10 mx-10 mt-10">
                <div className="flex items center gap-x-4 text-xl">
                    <input
                        type="range"
                        min={6}
                        max={100}
                        className="cursor-pointer"
                        onChange={(e) => {setLength(e.target.value)} }
                     />
                     <label>Length : {length}</label>
                </div>

                <div className="flex items-center gap-x-1 text-xl">
                    <input 
                        type="checkbox"
                        defaultChecked={numberAllowed}
                        id = "numberInput"
                        onChange={() => {
                            setNumberAllowed((prev) => !prev);
                        }}
                    />
                    <label htmlFor="numberInput">Numbers</label>
                </div>

                <div className="flex items-center gap-x-1 text-xl">
                    <input 
                        type="checkbox"
                        defaultChecked={charAllowed}
                        id = "charInput"
                        onChange={() => {
                            setCharAllowed((prev) => !prev);
                        }}
                    />
                    <label htmlFor="charInput">Characters</label>
                </div>
            </div>
         </div>
    )
}

export default ApplicationPass