import css from './TaskCounter.module.css';
import { useSelector } from 'react-redux';
import { getTasks } from '../../redux/selectors';

export const TaskCounter = () => {
  const tasks = useSelector(getTasks);
  const count = tasks.reduce(
    (aсс, task) => {
      if (task.completed) {
        aсс.completed += 1;
      }
      return aсс;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
