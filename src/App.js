import React from "react";
// import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";
import { BottomNav } from "./components/BottomNav";
import SideNav from "./components/SideNav";
import "./sass/styles.scss";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false,
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false,
        },
      ],

      theme: createMuiTheme({
        palette: {
          type: "dark"
        }
      })
    };
  }

  //Add to state new tasks here
  addTask = (todoName) => {
    // console.log(e.target.value)
    const newTask = {
      task: todoName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTask],
    });
  };

  //Clear completed todo's
  clearTodo = (e) => {
    e.preventDefault();
    let todos = this.state.todos.filter((todo) => !todo.completed);

    this.setState({ todos });
  };

  //Toggle Items when clicked
  toggleTask = (todoId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Paper>
          <div className="light-mode">
            <div className="header">
              {/* <TodoForm addTaskFn={this.addTask} clearTodoFn={this.clearTodo} /> */}
            </div>
            {/* <TodoList todos={this.state.todos} toggleTask={this.toggleTask} /> */}
            <SideNav
              addTaskFn={this.addTask}
              clearTodoFn={this.clearTodo}
              todos={this.state.todos}
              toggleTask={this.toggleTask}
            />
            <BottomNav />
          </div>
        </Paper>
      </ThemeProvider>
    );
  }
}
