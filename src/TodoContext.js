/* Context 생성
   context를 생성하면 깊은 위치에 존재하는 컴포넌트에게도 쉽게 todo를 전달할 수 있게 된다. 
   useContext를 생성하여 사용할 컴포넌트에서 usecontext를 따로 생성하지 않고 한 번에 사용할 수 있도록 한다.
   그리고 Create 시 새로운 item에 대한 id가 필요하기 때문에 useRef를 이용하여 nextId를 지정할 수 있도록 한다. */

import React, { useReducer, createContext, useContext, useRef } from 'react';

/* 할 일을 저장하는 todo list 생성
   먼저 initialTodos 부터 생성하여 초기화 */

const initialTodos = [
  {
    id: 1,
    text: '1',
    done: true
  },
  {
    id: 2,
    text: '2',
    done: true
  },
  {
    id: 3,
    text: '3',
    done: true
  },
  {
    id: 4,
    text: '4',
    done: true
  }
];

/* CREATE, TOGGLE, REMOVE를 usereducer를 사용하여 구현 */
function todoReducer(state, action) {
  switch (action.type) {
    // CREATE라면 현재의 todo에 연결한다.
    case 'CREATE':
      return state.concat(action.todo);

    // TOGGLE 일 때는 만약 todo의 id와 action의 id가 같다면 현재의 todo를 그대로 가져와서 상태를 변경한다. 만약 todo의 id와 action의 id가 같지 않다면 todo의 상태를 변경하지 않고 그대로 가져온다.
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );

    // REMOVE 라면 todo의 id와 action의 id가 다른 todo 들을 filter 함수를 이용하여 제거한다.
    // todo에서 id가 다른 값들만 반환하게 된다면 결국 같은 값은 선택되지 않고 반환되지 않으니 제거된 효과를 얻을 수 있게 된다.
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext(); // 상태 전달
const TodoDispatchContext = createContext(); // todo item 전달
const TodoNextIdContext = createContext(); // nextId context 생성

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5); // 현재 아이디가 4개까지 할당되어 있기 때문에 useRef를 이용하여 id를 5로 지정하여 준다.

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}