/* state를 조회하고 전달 해 주는 역할을 해야 한다. */

import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'
import { useTodoState } from '../TodoContext'

const TodoListBlock = styled.div `
  flex: 1;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
`

function TodoList() {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
}


export default TodoList;