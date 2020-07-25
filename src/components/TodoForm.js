import React from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddIcon from '@material-ui/icons/Add';


class TodoForm extends React.Component {
  constructor() {
    super();
    //manage state of inputs here. Make sure to add value/onChange to input attr
    this.state = {
      todo: "",
    };
  }

  //Todo Form Handlers
  handleChanges = (e) => {
    //update state with each keystroke
    this.setState({
      todo: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTaskFn(this.state.todo);

    //to clear input after add
    this.setState({
      todo: "",
    });
  };

  render() {
    const { clearTodoFn } = this.props;
    return (
      <Card variant="outlined">
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Task..."
            variant="outlined"
            type="text"
            name="todo"
            value={this.state.todo}
            onChange={this.handleChanges}
          />
          <div className="btn">
          <Button style={{backgroundColor:"#00dd76"}} variant="contained" type="submit" disableElevation><AddIcon/></Button>
          <Button style={{backgroundColor:"#057be0" }}  variant="contained" onClick={clearTodoFn} disableElevation><DeleteOutlineIcon/></Button>
          </div>
        </form>
      </Card>
    );
  }
}
export default TodoForm;
