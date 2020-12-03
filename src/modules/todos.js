// import { createAction, handleActions } from 'redux-actions';
// import produce from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo 를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo 를 체크/체크해제 함
const REMOVE = 'todos/REMOVE'; // todo 를 제거함

export const changeInput = input => ({
  type: CHANGE_INPUT,
  input
});

let id = 3; // insert 가 호출 될 때마다 1씩 더해집니다.
export const insert = text => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    checked: false,
  },
});

export const toggle = id => ({
  type: TOGGLE,
  id
});
export const remove = id => ({
  type: REMOVE,
  id
});

const initialState = {
  input: 'a',
  todos: [
      { id: 0, text: ' 리액트 소개1', checked: false },
      { id: 1, text: ' 리액트 소개2', checked: true },
      { id: 2, text: ' 리액트 소개3', checked: false }
  ],
};


function todos (state = initialState, action){
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      };
    case INSERT:
      return {
        ...state,
        input:'',
        todos: state.todos.concat(action.todo)
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
        )
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
}

export default todos;
