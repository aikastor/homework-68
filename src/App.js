import React, {Component} from 'react';
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import List from "./components/List/List";
import {addTodo, getData} from "./store/actions";
import {connect} from "react-redux";

class App extends Component {
  state = {
    currentTask: '',
    formValid: false,
  };
  componentDidMount() {
    this.props.getData();
  }

  onChange = e =>{
    this.setState({currentTask: e.target.value})
  };
  onSubmit = e=>{
    e.preventDefault();
    this.props.submitTask({text:this.state.currentTask, completed: false})
  };
  render() {
    return (
        <Container>
          <Form onSubmit={(e)=>this.onSubmit(e)}>
            <FormGroup>
              <Label for="text">Task name</Label>
              <Input required type="text" name="text" id="text"
                     placeholder="Enter task name"
                     value={this.state.currentTask}
                     onChange={(e)=>this.onChange(e)}/>
              <Button>Submit</Button>
            </FormGroup>
          </Form>
            <List tasks={this.props.tasks}
                  markDone={this.props.markDone}/>
        </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
};
const mapDispatchToProps = dispatch => {
  return {
    getData : ()=>dispatch(getData()),
    submitTask :(task)=>dispatch(addTodo(task)),
    markDone : ()=> dispatch(),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);