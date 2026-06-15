import { useEffect, useState } from 'react'
import './App.css'

type Task = {
  id: string
  text: string
  done: boolean
}

const STORAGE_KEY = 'task-board.tasks'

function loadTasks(): Task[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Task[]) : []
  } catch {
    return []
  }
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks)
  const [input, setInput] = useState('')

  // タスクが変わるたびに localStorage へ保存
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    const text = input.trim()
    if (!text) return
    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text, done: false },
    ])
    setInput('')
  }

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    )
  }

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  const remaining = tasks.filter((t) => !t.done).length

  return (
    <main className="board">
      <h1>Task Board</h1>

      <form
        className="add-form"
        onSubmit={(e) => {
          e.preventDefault()
          addTask()
        }}
      >
        <input
          type="text"
          className="add-input"
          placeholder="タスクを入力..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="新しいタスク"
        />
        <button type="submit" className="add-button">
          追加
        </button>
      </form>

      {tasks.length === 0 ? (
        <p className="empty">タスクはありません。追加してみましょう。</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`task-item${task.done ? ' done' : ''}`}
            >
              <label className="task-label">
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                />
                <span className="task-text">{task.text}</span>
              </label>
              <button
                type="button"
                className="delete-button"
                onClick={() => deleteTask(task.id)}
                aria-label={`「${task.text}」を削除`}
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      )}

      {tasks.length > 0 && (
        <p className="status">未完了: {remaining} 件 / 全 {tasks.length} 件</p>
      )}
    </main>
  )
}

export default App
