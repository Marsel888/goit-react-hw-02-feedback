import style from '../statistick/style.module.css'

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
