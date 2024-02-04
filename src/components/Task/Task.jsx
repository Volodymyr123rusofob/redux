import css from './Task.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../../redux/actions';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));
  const hendleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={hendleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        close
      </button>
    </div>
  );
};
