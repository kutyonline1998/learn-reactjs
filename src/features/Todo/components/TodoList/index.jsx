import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';
import todo from '../TodoList';
import idx from '../TodoList';

TodoList.propTypes = {
  TodoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
  TodoList: [],
  onClick: null,
};

function TodoList({todoList, onTodoClick}) {
  const handleTodoClick = () => {
    if (!onTodoClick) return;

    onTodoClick(todo, idx);
  }
  return (
    <ul class-name="todo-list">
      {todoList.map((todo, idx) => (
        <li
          key={todo.id}
          className={classnames({
            'todo-item': true,
            completed: todo.status === 'completed'
          })}
          onClick={() => handleTodoClick(todo, idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;