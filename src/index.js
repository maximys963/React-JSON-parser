console.log("hello world");
import React from "react"
import {render} from "react-dom"
import App from "./App"


render(
    <App/>,
    document.querySelector('#mount_place')
);