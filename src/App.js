import React from 'react';
import { connect } from 'react-redux';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import { changeInput, insert, toggle, remove } from './modules/todos';

function App({ input, todos,  changeInput, insert, toggle, remove }) {

  function handleKeyPress(e) {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === 'Enter') {
      insert(input);
    }
  }

  return (
    <TodoListTemplate
      form={
        <Form
          input={input}
          onKeyPress={handleKeyPress}
          onChangeInput={changeInput}
          // onCreate={handleCreate}
          onCreate={insert}
        />
      }
    >
      <TodoItemList
        todos={todos}
        onToggle={toggle}
        //onRemove={handleRemove}
        onRemove={remove}
      />
    </TodoListTemplate>
  );
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  input: state.todos.input
})


const mapDispatchToProps = (dispatch) => ({
    changeInput: (todos) => {
      dispatch(changeInput(todos));
    },
    insert: (input) => {
      dispatch(insert(input));
    },
    toggle: (todos) => {
      dispatch(toggle(todos));
    },
    remove: (todos) => {
      dispatch(remove(todos));
    },
});



export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
