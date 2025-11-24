const Button = ({show, onClick}) => {
  const text = show ? "Hide" : "Show"
  return (
    <button onClick={onClick}>{text}</button>
  )
}
export default Button