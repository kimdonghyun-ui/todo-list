import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = (props) => {
   const { form, children } = props;

  return (
    <main className="todo-list-template">
      <div className="title">
        TITLE
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default TodoListTemplate;