import style from '../statistick/style.module.css'
import propTypes from 'prop-types'

export default function Statistick({ good, neutral, bad, total, feedback }) {
  return (
    <div>
      {' '}
      <span className={style.span}> good {good}</span>
      <span className={style.span}>neutral {neutral}</span>
      <span className={style.span}>bad {bad}</span>
      <span className={style.span}> Total {total}</span>
      <span className={style.span}>feedback {feedback}%</span>
    </div>
  )
}
Statistick.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  tota: propTypes.object,
  feedback: propTypes.number,
}
