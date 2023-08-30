import React, { useState } from "react"
import { createContext } from "react";

const QuizContext = createContext();
const quizzes=[
    {
        "question":"what is the scientific name  of a butterfly?",
        "a": "apis",
        "b": "coleopatra",
        "c":"fomicidea",
        "d":"rhopalocera",
        "correct":"d"
    },
    {
        "question":"what is the scientific name  of a butterfly?",
        "a": "apis",
        "b": "coleopatra",
        "c":"fomicidea",
        "d":"rhopalocera",
        "correct":"d"
    },
    {
        "question":"what is the scientific name  of a butterfly?",
        "a": "apis",
        "b": "coleopatra",
        "c":"fomicidea",
        "d":"rhopalocera",
        "correct":"d"
    },
    {
        "question":"what is the scientific name  of a butterfly?",
        "a": "apis",
        "b": "coleopatra",
        "c":"fomicidea",
        "d":"rhopalocera",
        "correct":"d"
    },
    {
        "question":"what is the scientific name  of a butterfly?",
        "a": "apis",
        "b": "coleopatra",
        "c":"fomicidea",
        "d":"rhopalocera",
        "correct":"d"
    },
]
export default function QuizHolder (props){
    const [start,setStart]=useState(false);
    const [exit,setExit]=useState(false);
    return (
        <QuizContext.Provider value={{
            start,exit,setStart,setExit,quizzes
        }}>
            {props.children}
</QuizContext.Provider>
    )
}
export {QuizContext};