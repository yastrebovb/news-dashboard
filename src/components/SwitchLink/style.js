export const defaultStyle = {
  position: 'fixed',
  top: '40px',
  right: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60px',
  height: '60px',
  fontSize: '36px',
  textDecoration: 'none',
  color: '#fff',
  borderRadius: '50%',
  background: 'linear-gradient(110deg, #fa957b 0%, #f7496a 100%)',
  boxShadow: '7px 10px 20px 8px rgba(255,107,149,0.2)',
  transition: 'all .2s linear',
  transformOrigin: 'center center'
}

export const activeStyle = {
  color: '#f7496a',
  background: '#fff',
  boxShadow: 'none',
  transform: 'rotate(-45deg)'
}
