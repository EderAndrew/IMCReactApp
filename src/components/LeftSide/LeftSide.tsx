import styles from './LeftSide.module.css'
import { levels, calculateImc, Level } from '../../helpers/imc'

type ImcProps ={
  heighField: number
  weightField: number
  setHeight: (value: number) => void
  setWeight: (value: number) => void
  show: (value: Level | null) => void
  toShow: Level | null
}
const LeftSide = ({heighField, weightField, setHeight, setWeight, show, toShow}: ImcProps) => {
  const handleCalculate = () => {
    if(heighField && weightField){
      show(calculateImc(heighField, weightField))
    }else{
      alert("Digite todos os campos!")
    }
  }
  return (
    <div className={styles.leftSide}>
      <h1>Calcule o seu IMC.</h1>
      <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
      <input 
        type="number"
        placeholder='Digite a sua Altura. Ex: 1.5 (em metros)'
        value={heighField > 0 ? heighField : ""}
        onChange={e => setHeight(parseFloat(e.target.value))}
        disabled={toShow ? true : false}
      />
      <input 
        type="number"
        placeholder='Digite o seu peso. Ex: 75.5 (em kg)'
        value={weightField > 0 ? weightField : ""}
        onChange={e => setWeight(parseFloat(e.target.value))}
        disabled={toShow ? true : false}
      />
      <button onClick={handleCalculate} disabled={toShow ? true : false}>Calcular</button>
    </div>
  )
}

export default LeftSide