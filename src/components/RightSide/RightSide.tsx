import { Level, levels } from '../../helpers/imc'
import GridItem from './GridItem/GridItem'
import styles from './RightSide.module.css'
import leftArrowImage from '../../assets/leftarrow.png'

type showProps = {
    toShow: Level | null
    show: (value: Level | null) => void
    setHeight: (value: number) => void
    setWeight: (value: number) => void
}
const RightSide = ({toShow, setHeight, setWeight, show}: showProps) => {
    const handleBackButton = () => {
        show(null)
        setHeight(0)
        setWeight(0)
    }
  return (
    <div className={styles.rightSide}>
        {!toShow && 
            <div className={styles.grid}>
                {levels.map((item, key)=>(
                    <GridItem key={key} data={item}/>
                ))}
            </div>
        }
        {toShow && 
            <div className={styles.rightBig}>
                <div className={styles.rightArrow} onClick={handleBackButton}>
                    <img src={leftArrowImage} alt="" width={window.screen.width > 770 ? 25 : 18} />
                </div>
                <GridItem data={toShow} />
            </div>
        }
        
    </div>
  )
}

export default RightSide