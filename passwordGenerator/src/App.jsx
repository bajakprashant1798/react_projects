import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // useState hook
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  // let char = Math.floor(Math.random() * 52+1)
  // console.log("char:", char);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "$%#@!~&*_+"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(password)
  }, [password])

  // useEffect hook
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  // passwordGenerator()

  return (
    <>
      <div className='w-full max-w-xl mx-auto shadow-md rounded-lg p-4 m-5 bg-gray-600 text-orange-500'>
        <h1 className='font-bold text-4xl text-center text-white mb-4'>Password Generator</h1>
        <div className='flex shadow-lg overflow-hidden rounded-lg mb-4'>
          <input 
            type='text' 
            value={password} 
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly 
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none text-white bg-blue-700  px-3 py-2 font-semibold hover:bg-blue-900 focus:scale-100 transition ease-in-out'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer outline-none'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label className='font-semibold'>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev) => !prev)
              }}
              className='cursor-pointer outline-none'
            />
            <label htmlFor='numberInput' className='font-semibold'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
              defaultChecked={charAllowed}
              id="charInput"
              onChange={()=>{
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='charInput' className='font-semibold'>Charactor</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
