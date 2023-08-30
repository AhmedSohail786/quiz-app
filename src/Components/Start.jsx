import React, { useContext } from "react"
import { QuizContext } from "../Context/QuizHolder";

export default function Start (){
    const{setStart} =useContext(QuizContext)
    return (
<div className="Button">
<button onClick={()=> setStart(true)} className="Small" >start</button>
</div>
    ); 
}