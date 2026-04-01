import { useEffect, useState } from 'react';

const API_URL = 'http://127.0.0.1:8000/api/tasks/';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setTasks)
      .catch(() => setTasks([]));
  }, []);

  const addTask = async (event) => {
    event.preventDefault();
    const text = title.trim();
    if (!text) return;

    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: text, completed: false }),
    });

    if (!res.ok) return;
    const task = await res.json();
    setTasks([task, ...tasks]);
    setTitle('');
  };

  const deleteTask = async (id) => {
    await fetch(`${API_URL}${id}/`, { method: 'DELETE' });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = async (task) => {
    const res = await fetch(`${API_URL}${task.id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...task, completed: !task.completed }),
    });

    if (!res.ok) return;
    const updated = await res.json();
    setTasks(tasks.map((item) => (item.id === updated.id ? updated : item)));
  };

  return (
    <div style={{ maxWidth: 520, margin: '0 auto', padding: 20 }}>
      <h1>Task List</h1>
      <form onSubmit={addTask} style={{ marginBottom: 16 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task"
          style={{ padding: 8, width: '70%', marginRight: 8 }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>
          Add
        </button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <label style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="checkbox" checked={task.completed} onChange={() => toggleCompleted(task)} />
              <span>{task.title}</span>
            </label>
            <button onClick={() => deleteTask(task.id)} style={{ padding: '6px 12px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
