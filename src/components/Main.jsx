import { Component } from "react";
import Form from "./form";
import Task from "./task";

export default class Main extends Component {
  state = {
    newTask: "",
    task: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { newTask, task } = this.state;
    if (!newTask) return;
    const taskList = [...task, { id: Math.random(), name: newTask }];
    this.setState({ task: taskList, newTask: "" });
  };

  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  removeTask = (id) => {
    const taskList = this.state.task.filter((item) => item.id !== id);
    this.setState({ task: taskList });
  };

  editTask = (id) => {
    const taskList = this.state.task.map((item) => {
      if (item.id === id) {
        const name = prompt("Editar tarefa:", item.name);
        return { ...item, name };
      }
      return item;
    });
    this.setState({ task: taskList });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.task !== this.state.task) {
      localStorage.setItem("task", JSON.stringify(this.state.task));
    }
  }

  componentDidMount() {
    const taskList = JSON.parse(localStorage.getItem("task")) || [];
    this.setState({ task: taskList });
  }

  render() {
    const { newTask, task } = this.state;
    return (
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center mt-20 gap-4">
        <h1>Lista de Tarefas</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
        />

        <Task
          task={task}
          removeTask={this.removeTask}
          editTask={this.editTask}
        />
      </main>
    );
  }
}
