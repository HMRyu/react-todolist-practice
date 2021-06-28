import React from 'react'
import styled, {css} from 'styled-components'
import { MdDone, MdDelete } from 'react-icons/md'

const Remove = styled.div `
  display: flex;
  color : hotpink;
  font-size : 24px;

  &:hover {
    background: lightpink;
  }
`

const TodoItemBlock = styled.div `
  display: flex;
  margin-top: 10px;

`

// display: flex ==> 체크모양 가운데로 정렬 

const CheckCircle = styled.div `
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid hotpink;
  cursor: pointer;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: hotpink;
  display: flex;

  ${props => 
    props.done && 
    css`
      border: 1px solid hotpink;
      color : hotpink
    `}
`

const Text = styled.div `
  flex: 1;
  font-size: 21px;
  color: black;
  ${props =>
    props.done &&
    css`
      color: darkgray;
    `}
`

/* todoitem 에서는 일이 끝났는지 끝나지 않았는지 확인해야 할 필요가 있음 */
function TodoItem ({ id, done, text }) {
  return (
    <TodoItemBlock>
      <CheckCircle done = {done}> {done && <MdDone />} </CheckCircle>
      <Text done = {done}> {text} </Text>
      <Remove> <MdDelete /> </Remove>
    </TodoItemBlock>
  )
}

export default TodoItem;
