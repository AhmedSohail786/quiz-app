import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
import Start from "./Components/Start"
import "./Components/Start.css"

import {QuizContext} from "./Context/QuizHolder";
import { useContext } from "react";
function App (){
  const { start, exit }= useContext(QuizContext);
  return(
<>{
  start===true
  ?
  <Quiz/>
  :
  <Start/>

}
      
      
      {/* <Result/> */}
      </>

  );
}
export default App;