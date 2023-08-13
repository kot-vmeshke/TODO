import './Button.css';
const Button = ({children, active = false, onClick = null}) => {
  return (
    <button className={`${active ? 'active' : ''} button`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
