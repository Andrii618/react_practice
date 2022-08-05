import React, { Component } from 'react';
import CreateTaskInput from './CreateTaskInput';
import Task from './Task';
import { createTask, deleteTask, updateTask, fetchTasks } from './tasksGateway';

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.handleTasksFetch();
  }

  handleTasksFetch = () => {
    fetchTasks().then(tasks => {
      this.setState({ tasks });
    });
  };

  handleTaskCreate = text => {
    if (text.length === 0) {
      return;
    }

    createTask(text).then(() => {
      this.handleTasksFetch();
    });
  };

  handleTaskDelete = id => {
    deleteTask(id).then(() => {
      this.handleTasksFetch();
    });
  };

  handleStatusToggle = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);

    updateTask(id, { text, done: !done }).then(() => {
      this.handleTasksFetch();
    });
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.handleTaskCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onToggle={this.handleStatusToggle}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
