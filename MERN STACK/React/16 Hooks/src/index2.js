// example showing the concept of context api (solution of prop drilling)
import React, { createContext, useContext, useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
var context = createContext(null);

function MyComponent(){
    const [firstName,setFirstName] = useState("Andrew");
    const [lastName,setLastName] = useState("Anderson");
    return (<context.Provider value={{firstName,lastName}}>
        <ClassA/>
    </context.Provider>);
}
function ClassA(){
    return (<>
        <ClassB/>
    </>);
}
function ClassB(){
    return (<>
        <ClassC/>
    </>);
}
function ClassC(){
    const {firstName,lastName} = useContext(context);
    return (<>
        <h2>First name : {firstName}</h2>
        <h2>Last name : {lastName}</h2>
    </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);