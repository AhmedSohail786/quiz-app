import React, { useContext, useState } from "react";
import { QuizContext } from "../Context/QuizHolder";
export default function Quiz(){
    const [current,setCurrent]=useState(0);
    return(
        <div className="Quiz"> 
            <Box current={current} handle={setCurrent}/>
            </div>
    )
}
const  Box = ({current}) =>{
    const {quizzes} = useContext(QuizContext);
    console.log(quizzes[current]);
    return(
    <div className="Orange">
        <div className="Qs"> 
            the question will be here      
        </div>
        <div className="Grid">
<div className="Opt1">option 1</div>
<div className="Opt2">option 2</div>
<div className="Opt3">option 3</div>
<div className="Opt4">option 4</div>

        </div>
        <div className="Three">
<div className="One">reset</div>
<div className="Two">save</div>
<div className="Threee">exit</div>
        </div>

        </div>

    )
}