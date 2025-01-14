import React from "react";
import ReactDOM from "react-dom/client"
import MyRouter from "../MyRouter";
import './index.css';


const RootElement = document.getElementById("root");
const root = ReactDOM.createRoot(RootElement);
root.render(<MyRouter />);