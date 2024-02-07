import { useState } from 'react';
import { useContext } from 'react';
import { TasksDispatchContext } from './TaskContext';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContext);
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        dispatch({
          type: 'added',
          id: nextId++,
          text: text
        });
      }}>Add</button>
    </>
  )
}
