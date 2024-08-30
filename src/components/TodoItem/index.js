// Write your code here
import './index.css'
import {useState} from 'react'

const TodoItem = props => {
  const {todoItem, deleteUser} = props
  const {title, id} = todoItem

  const [toEdit, setEdit] = useState(false)
  const [ttitle, setTitle] = useState(title)
  const onChangeTitle = event => setTitle(event.target.value)
  const [checked, setChecked] = useState(false)
  const clicktocheck = () => {
    setChecked(prev => !prev)
  }
  const onDelete = () => {
    deleteUser(id)
  }
  const onClicktoEdit = () => {
    setEdit(true)
  }
  const onClicktoSave = () => {
    setTitle(ttitle)
    setEdit(false)
  }
  return (
    <li className="card">
      <input type="checkbox" className="input" onClick={clicktocheck} />
      <div className="contain">
        {!toEdit ? (
          <p className={checked ? 'active-title' : 'title'}>{ttitle}</p>
        ) : (
          <input type="text" value={ttitle} onChange={onChangeTitle} />
        )}
        {!toEdit ? (
          <button onClick={onClicktoEdit}>Edit</button>
        ) : (
          <button onClick={onClicktoSave}>Save</button>
        )}
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
