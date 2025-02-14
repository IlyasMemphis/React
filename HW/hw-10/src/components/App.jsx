import React from "react";
import CatImage from "./CatImage";
import styles from "./App.module.css"

const App = () => {
    return (
        <div className={styles.app}>
            <CatImage /> 
        </div>
    )
}

export default App;