import React,{useState} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';


function App() {

  const [inputs, setInputs] = useState('');
  const [todos, setTodos] = useState([
      { id: 0, text: ' 리액트 소개', checked: false },
      { id: 1, text: ' 리액트 소개', checked: true },
      { id: 2, text: ' 리액트 소개', checked: false }
    ]);



  let id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  function handleChange(e) {
    // this.setState({ fruit: 'orange' })와 같은 효과를 냅니다.
    setInputs(e.target.value);
  }


  function handleCreate () {
    setInputs('');
    setTodos([
      ...todos,{
      id: id,
      text: inputs,
      checked: false
      }
    ]);
    id++;
  }
  function handleKeyPress (e) {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      handleCreate();
    }
  }

  return (
      <TodoListTemplate form={(
        <Form
          value={inputs}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={todos}/>
      </TodoListTemplate>
  );
}

export default App;
