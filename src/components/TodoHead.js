import React from 'react'
import styled from 'styled-components'
import { long } from 'webidl-conversions';
import { useTodoState } from '../TodoContext'

const TodoHeadBlock = styled.div `
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid hotpink;

  h1 {
    margin: 0;
    font-size: 36px;
    color: black;
  }

  .tasks-left {
    margin-top: 20px;
    font-weight: bold;
    color: hotpink;
  }
`

function TodoHead() {
  const todos = useTodoState(); // todoState를 가져와서 사용한다.
  const undone = todos.filter(todo => !todo.done); // todo가 done인 것을 filter 함수를 사용하여 undone에 저장한다.

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year:'numeric',
    month: 'long',
    day: 'numeric'
  });

  const dayName = today.toLocaleDateString('ko-KR', {weekday : 'long'});

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className='day'>{dayName}</div>
      <div className='tasks-left'>남은 할 일 : {undone.length} 개 </div>
    </TodoHeadBlock>
  )
}

export default TodoHead;
