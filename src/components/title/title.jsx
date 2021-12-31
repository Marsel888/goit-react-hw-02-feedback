import propTypes from 'prop-types'

export default function Title({ title, children }) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  )
}
Title.propTypes = {
  title: propTypes.string,
  children: propTypes.array,
}
