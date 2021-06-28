import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { MdAdd } from 'react-icons/md'

/* 버튼, form, form 위치, input */
const CircleButton = styled.div `
  background: hotpink;
  &:hover {
    background: lightpink;
  }
  &:active {
    background: lightpink;
  }

  width: 80px;
  height: 80px;

  margin-left : 90%;
  margin-bottom: 10%;

  display: flex;  
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  transition: 0.125s all ease-in;

  ${props => 
    props.open && 
    css `
    background: lightpink;
    &:hover {
      background: hotpink;
    }
    &:active {
      background: lightpink;
    }

    transform: translate(-50%, 50%) rotate(45deg);

    `}
`

const InsertForm = styled.form `
  background: lightpink;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
  border-radius: 20px;
`

const InsertFormPositioner = styled.div `
    bottom: 0;

`

const Input = styled.input `
  width: 100%;
  height: 150px;
  font-size: 18px;
  border: 1px solid black;  
`

function TodoCreate() {

  const [open, setOpen] = useState(false); // useState를 이용해 open을 false로 미리 설정해 놓는다.
  const onToggle = () => setOpen(!open); // open을 toggle 할 수 있는 ontoggle 함수를 한 줄인 화살표 함수로 선언하였다.

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input autoFocus placeholder="할 일을 입력하세요"/>            
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  )
}

export default TodoCreate;