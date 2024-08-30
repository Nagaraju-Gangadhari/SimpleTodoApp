// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteUser} = props
  const {title, id} = todoItem
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="card">
      <div className="contain">
        <p className="title">{title}</p>
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
