import { useState } from "react"
import styles from "./App.module.css"
//Assets
import powerdImage from './assets/powered.png'
//Components
import LeftSide from "./components/LeftSide/LeftSide"
import RightSide from "./components/RightSide/RightSide"
import { Level } from "./helpers/imc"

const App = () => {
  const [height, setHeightField] = useState<number>(0)
  const [weight, setWeightField] = useState<number>(0)
  const [toShow, setToShow] = useState<Level | null>(null)

  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={powerdImage} alt="" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <LeftSide 
          heighField={height}
          weightField={weight} 
          setHeight={setHeightField}
          setWeight={setWeightField}
          show={setToShow}
          toShow={toShow}
        />
        <RightSide
          toShow={toShow}
          show={setToShow}
          setHeight={setHeightField}
          setWeight={setWeightField}
        />
      </div>
    </div>
  )
} 

export default App