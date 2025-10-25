import React from "react";
import {createRoot} from "react-dom/client";
import result from "./test5.jsx"; // default import 
import { res11, res22 } from "./test5.jsx"; // named import 

createRoot(document.getElementById("root1")).render(result);
createRoot(document.getElementById("root2")).render(res11);
createRoot(document.getElementById("root3")).render(res22);