import React, {Component} from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import List from "./components/List/List";
import {addTodo, deleteTask, getData, markDone} from "./store/actions";
import {connect} from "react-redux";
import Spinner from "./components/Spinner/Spinner";

class App extends Component {
  state = {
    currentTask: '',
  };

  componentDidMount() {
    this.props.getData();
  }

  onChange = e =>{
    this.setState({currentTask: e.target.value})
  };
  onSubmit = e=>{
    e.preventDefault();
    if(this.state.currentTask.trim()) {
      this.props.submitTask({text:this.state.currentTask, completed: false});
      this.setState({currentTask: ''})
    } else {
      alert('Enter info!')
    }
  };

  render() {
    return (
        <Container>
          <Form onSubmit={(e)=>this.onSubmit(e)}>
            <Row form>
              <Col md={6}>
              <FormGroup>
              <Label for="text">Task name</Label>
              <Input required type="text" name="text" id="text"
                     placeholder="Enter task name"
                     value={this.state.currentTask}
                     onChange={(e)=>this.onChange(e)}/>
              <Button>Submit</Button>
            </FormGroup>
              </Col>
            </Row>
          </Form>
          {this.props.tasks &&
          <List tasks={this.props.tasks}
                onClick={this.props.markDone}
                deleteTask={this.props.deleteTask}
          />}
          { this.props.loading && <Spinner/>}
        </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    loading: state.loading,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    getData : ()=> dispatch(getData()),
    submitTask: (task)=> dispatch(addTodo(task)),
    markDone: (id)=> dispatch(markDone(id)),
    deleteTask: (id)=> dispatch(deleteTask(id))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);