import style from '../feedback/statistick/style.module.css'
import propTypes from 'prop-types'
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
Buttons.propTypes = {
  value: propTypes.func,
  options: propTypes.array,
}
