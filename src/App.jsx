import React, {useState} from "react";
import List from "./components/List";
import * as styles from "./App.module.css";

const App = () =>{
   const [counter, setCounter] = useState(0);

   const handlePlusBtnClick = (event)=>{
    console.log(event)
    setCounter(counter + 1)
   }

    return <List text ="text">
    <div className={styles.test}>{counter}</div>
    {counter %2 === 0 ? <p>Четное</p> : <p>Не Четное</p>}
    <button onClick={handlePlusBtnClick}>plus</button>
    </List>
};

export default App;