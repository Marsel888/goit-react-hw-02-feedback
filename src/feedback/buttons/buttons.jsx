import style from '../statistick/style.module.css'

export default function Buttons({ value, options }) {
  return (
    <div className={style.buttonContent}>
      {options.map((option) => (
        <button
          className={style.buttonStyle}
          type="button"
          onClick={() => {
            value(option)
          }}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

// <div className={style.buttonContent}>
// <button
//   className={style.buttonStyle}
//   type="button"
//   onClick={() => {
//     value('good')
//   }}
// >
//   good
// </button>

// <button
//   className={style.buttonStyle}
//   type="button"
//   onClick={() => {
//     value('neutral')
//   }}
// >
//   neutral
// </button>

// <button
//   className={style.buttonStyle}
//   type="button"
//   onClick={() => {
//     value('bad')
//   }}
// >
//   bad
// </button>
// </div>
