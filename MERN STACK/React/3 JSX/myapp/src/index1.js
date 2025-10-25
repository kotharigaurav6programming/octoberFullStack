import React from "react";
import {createRoot} from "react-dom/client";

const res = "This is an example of React Js";
const result = <del>{res}</del>

createRoot(document.getElementById("root")).render(result);