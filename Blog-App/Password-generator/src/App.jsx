import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [number_allowed, set_number_allowed] = useState(false);
  const [Charallow, set_Char_allow] = useState(false);
  const [Password, setPassword] = useState("");

  //useref Hook
  const Passwordref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number_allowed) str += "0123456789";
    if (Charallow) str += "!@#$%^&*(){}?/";

    for (let i = 1; i <= length; i++) {
      let Char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(Char);
    }

    return pass;
  }, [length, number_allowed, Charallow, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    Passwordref.current?.select();
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  useEffect(() => {
    const newPassword = passwordGenerator();
    setPassword(newPassword);
  }, [length, number_allowed, Charallow, passwordGenerator]);

  const refreshPassword = () => {
    const newPassword = passwordGenerator();
    setPassword(newPassword);
  };

  return (
    <>
      <div className="w-full  mx-auto h-screen bg-slate-600 text-center p-10 overflow-auto">
        <h1 className="text-3xl font-semibold  text-white-100 ">
          Password Generator
        </h1>
        <div className="w-1/2 max-w-md mx-auto shadow-md rounded-lg border-solid border-black border-2 p-4 my-8  bg-gray-400 overflow-auto ">
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              ref={Passwordref}
              value={Password}
              className="outline-none text-black w-full py-1 px-3 "
              placeholder="Password"
              readOnly
              onChange={(e) => setPassword(e.target.value)}
              name=""
              id=""
            />
            <button
              className="outline-none hover:bg-blue-500 bg-blue-700 text-white px-3 py-1 shrink-0  hover:font-semibold "
              onClick={copyPasswordToClipboard}
            >
              Copy
            </button>
          </div>
          <div className="flex flex-wrap text-sm gap-x-2">
            <div className="flex flex-wrap items-center gap-x-1 ">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className=" cursor-pointer "
                onChange={(e) => {
                  setlength(e.target.value);
                }}
              />
              <label className="text-l px-1">Length:{length}</label>
            </div>
            <div className="flex flex-wrap items-center gap-x-1 ">
              <input
                type="checkbox"
                defaultChecked={number_allowed}
                id="numberinput"
                onChange={() => {
                  set_number_allowed((prev) => !prev);
                }}
              />
              <label className="text-l px-1">Number</label>
            </div>
            <div className="flex flex-wrap items-center gap-x-1 ">
              <input
                type="checkbox"
                defaultChecked={Charallow}
                id="Characterinput"
                onChange={() => {
                  set_Char_allow((prev) => !prev);
                }}
              />
              <label className="text-l px-1">Characters</label>
            </div>
          </div>
        </div>
        <div>
          <button
            className="outline-none hover:bg-blue-500 bg-blue-700 text-white px-3 py-1 shrink-0 hover:font-semibold"
            onClick={refreshPassword}
          >
            Refresh Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
