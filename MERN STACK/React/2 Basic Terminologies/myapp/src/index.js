import React from "react";
import {createRoot} from 'react-dom/client';
/*
createRoot(document.getElementById("root")).render("This is my second react example");
*/

/*
const content = "This is my third react example";
const rootElement = document.getElementById("root");
createRoot(rootElement).render(content);
*/

const content = <div>
    <h2>Home Element</h2>
    <blockquote>
        This is an example of react js This is an example of react js This is an example of react js This is an example of react js This is an example of react js This is an example of react js This is an example of react js This is an example of react js This is an example of react js This is an example of react js This is an example of react js This is an example of react js This is an example of react js This is an example of react js This is an example of react js 
    </blockquote>
</div>;
const rootElement = document.getElementById("root");
createRoot(rootElement).render(content);
