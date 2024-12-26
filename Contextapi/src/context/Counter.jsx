
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, memo, useContext, useState } from "react";

export const CountContext = createContext();

export const CountProvider = ({ children }) => {

    const [count, setCount] = useState(0);

    const CountTitle = () => {
        console.log("This is Counter Title Componants")
        return (
            <>
                <h1>Counter Title</h1>
            </>
        )
    }

    const MemoizedCountTitle = memo(CountTitle);

    const CountDisplay = () => {
        console.log("This is Counter Display Component")
        const { count } = useContext(CountContext)
        return (
            <>
                <div style={{ margin: '10px' }}>Count : {count} </div>
            </>
        )
    }

    const CounterButton = () => {
        console.log("This is Counter incariment Componants")
        const { count, setCount } = useContext(CountContext)
        return (
            <>
                <button onClick={() => setCount(count + 1)}>increase</button>
            </>
        )
    }

    return <CountContext.Provider value={{ count, setCount , CountDisplay , MemoizedCountTitle , CounterButton }}>
        {children}
    </CountContext.Provider>
}



// export default function Counter() {
//     return (
//         <CountProvider>
//             <CounterButton />
//         </CountProvider>
//     )
// }