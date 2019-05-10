import styled from 'styled-components'

export const List = styled.ul`
  display: table;
  margin: 0 auto;
  list-style-type: none;
`

export const Item = styled.li`
  position: relative;
  margin-bottom: 18px;
  font-family: 'Playfair Display', Times, serif;
  font-size: 24px;
  text-transform: capitalize;
  color: ${props => (props.selected ? '#fff' : 'rgba(255,255,255,0.4)')};
  transition: all 0.1s linear;

  &:before {
    position: absolute;
    left: -30px;
    top: 50%;
    width: ${props => (props.selected ? '24px' : '0')};
    height: 2.5px;
    background-color: #fff;
    content: '';
    transition: all 0.1s linear;
  }
`
