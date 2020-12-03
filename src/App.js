import React from 'react';
import {  useSelector } from 'react-redux';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import { changeInput, insert, toggle, remove } from './modules/todos';
import useActions from './lib/useActions';

function App() {

  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos
  }));
  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  );

  function handleKeyPress(e) {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === 'Enter') {
      onInsert(input);
    }
  }

  return (
    <TodoListTemplate
      form={
        <Form
          input={input}
          onKeyPress={handleKeyPress}
          onChangeInput={onChangeInput}
          // onCreate={handleCreate}
          onCreate={onInsert}
        />
      }
    >
      <TodoItemList
        todos={todos}
        onToggle={onToggle}
        //onRemove={handleRemove}
        onRemove={onRemove}
      />
    </TodoListTemplate>
  );
}

// const mapStateToProps = state => ({
//   todos: state.todos.todos,
//   input: state.todos.input
// })


// const mapDispatchToProps = (dispatch) => ({
//     changeInput: (todos) => {
//       dispatch(changeInput(todos));
//     },
//     insert: (input) => {
//       dispatch(insert(input));
//     },
//     toggle: (todos) => {
//       dispatch(toggle(todos));
//     },
//     remove: (todos) => {
//       dispatch(remove(todos));
//     },
// });



export default App;
