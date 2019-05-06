import styled from 'styled-components'

export const List = styled.ul`
  display: table;
  margin: 0 auto;
  list-style-type: none;
`

export const Item = styled.li`
  position: relative;
  left: ${props => (props.selected ? '30px' : null)};
  margin-bottom: 18px;
  font-family: 'Playfair Display', Times, serif;
  font-size: 24px;
  text-transform: capitalize;
  color: ${props => (props.selected ? '#fff' : 'rgba(255,255,255,0.4)')};
  transition: all 0.2s linear;

  &:after {
    display: ${props => (props.selected ? 'block' : 'none')};
    position: absolute;
    left: -30px;
    top: 50%;
    width: 24px;
    height: 2.5px;
    background-color: #fff;
    content: '';
  }
`
