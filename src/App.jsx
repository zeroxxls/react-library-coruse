import React, {useState, useEffect, useLayoutEffect} from "react";
import List from "./components/List";
import * as styles from "./App.module.css";

const App = () =>{
   const [list, setList] = useState([0,1,2,3]);
   const [counter, setCounter] = useState(0)
   useEffect(()=>{},[]);

   useLayoutEffect(()=>{},[]);

   

    return <List text ="text">
    {list.map((item,index)=>{
        return(
            <div key={item} className="{styles.test}">
                {item}
            </div>
        );
    })}
    </List>
};

export default App;