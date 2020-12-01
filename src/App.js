import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import { changeInput, insert, toggle, remove } from './modules/todos';

function App({ todos,input,changeInput, insert, toggle, remove }) {

  const [inputs, setInputs] = useState(todos.input);
  const [todos_data, setTodos_data] = useState(todos.todos);

//   useEffect(() => {
//  console.log(input)
//     //setTodos(todos_data);
//     //console.log(todos_data)
//     //console.log(todos)
//   },[todos_data]);

  const [ids, setIds] = useState(3); // 이미 0,1,2 가 존재하므로 3으로 설정


  function handleChange(e) {
    // this.setState({ fruit: 'orange' })와 같은 효과를 냅니다.
    setInputs(e.target.value);
  }


  function handleCreate () {
    setInputs('');
    setTodos_data([
      ...todos_data,{
      id: ids,
      text: inputs,
      checked: false
      }
    ]);

    setIds(ids + 1)
    //id+=1;
  }
  function handleKeyPress (e) {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      insert();
    }
  }



// function handleToggle (id) {
//     // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
//     const index = todos.findIndex(todo => todo.id === id);
//     const selected = todos[index]; // 선택한 객체

//     const nextTodos = [...todos]; // 배열을 복사

//     // 기존의 값들을 복사하고, checked 값을 덮어쓰기
//     nextTodos[index] = {
//       ...selected,
//       checked: !selected.checked
//     };
//     setTodos_data(nextTodos);
//   }

  // function handleRemove (id) {
  //   const data = todos.filter(todo => todo.id !== id);
  //       setTodos_data(data);
  // }


  return (
      <TodoListTemplate form={(
        <Form
          input={input}
          onKeyPress={handleKeyPress}
          onChange={changeInput}
          // onCreate={handleCreate}
          onCreate={insert}
        />
      )}>
        <TodoItemList todos={todos} onToggle={toggle}
      //onRemove={handleRemove}
      onRemove={remove}
      />
      </TodoListTemplate>
  );
}





export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  },
)(App);