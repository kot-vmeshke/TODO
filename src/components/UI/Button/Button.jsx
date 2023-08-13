import './Button.css';
const Button = ({children, active = false, onClick = null, dataFilter = ''}) => {
  return (
    <button data-filter={dataFilter} className={`${active ? 'active' : ''} button`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
