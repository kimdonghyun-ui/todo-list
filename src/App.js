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


  const [ids, setIds] = useState(3); // 이미 0,1,2 가 존재하므로 3으로 설정


  function handleChange(e) {
    // this.setState({ fruit: 'orange' })와 같은 효과를 냅니다.
    setInputs(e.target.value);
  }


  function handleCreate () {
    setInputs('');
    setTodos([
      ...todos,{
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
      handleCreate();
    }
  }



function handleToggle (id) {
    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    setTodos(nextTodos);
  }

  function handleRemove (id) {
    const data = todos.filter(todo => todo.id !== id);
        setTodos(data);
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
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      </TodoListTemplate>
  );
}

export default App;
