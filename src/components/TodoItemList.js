import React from 'react';
import TodoItem from './TodoItem';

const TodoItemList = (props) => {
     const { todos, onToggle, onRemove } = props;
  return (
      <div>
        {todos.map((item, index) => (
        <TodoItem
          id={item.id}
          text={item.text}
          checked={item.checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={index}
        />
        ))}
      </div>
  );
};

export default TodoItemList;