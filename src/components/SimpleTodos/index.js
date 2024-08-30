import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
    taskInput: '',
  }

  deleteUser = id => {
    const {todoList} = this.state
    const FilterTodoList = todoList.filter(each => each.id !== id)
    this.setState({todoList: FilterTodoList})
  }

  onSubmission = event => {
    event.preventDefault()
    const {taskInput} = this.state
    const newTask = {
      id: uuidv4(),
      title: taskInput,
    }
    this.setState(prevState => ({
      todoList: [...prevState.todoList, newTask],
      taskInput: '',
    }))
  }

  onChangetoUpdate = event => {
    this.setState({taskInput: event.target.value})
  }

  renderAddbutton = () => {
    const {taskInput} = this.state
    return (
      <form onSubmit={this.onSubmission}>
        <input
          type="text"
          className="input"
          id="input"
          onChange={this.onChangetoUpdate}
          value={taskInput}
        />
        <label htmlFor="input" className="label">
          <button className="button2" type="submit">
            Add
          </button>
        </label>
      </form>
    )
  }

  render() {
    const {todoList} = this.state
    return (
      <div className="bgcontainer">
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>
          {this.renderAddbutton()}
          <ul className="list-container">
            {todoList.map(eachone => (
              <TodoItem
                todoItem={eachone}
                key={eachone.id}
                deleteUser={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
