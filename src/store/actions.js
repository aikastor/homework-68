import axiosApi from '../axiosAPI';

export const ADD_TASK = 'ADD_TASK';
export const MARK_COMPLETED = 'MARK_TASK_COMPLETED';
export const DELETE_TASK = 'DELETE_TASK';
export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export const addTask = (task) => {
  return {type: ADD_TASK, task}
};
export const markCompleted = (id)=> {
  return {type: MARK_COMPLETED, id}
};
export const deleteTask = (id)=> {
  return {type: DELETE_TASK, id}
};
export const fetchingData = ()=> {
  return {type: REQUEST_DATA}
};
export const receiveData = (data)=> {
  return {type: RECEIVE_DATA, data}
};

export const getData = () => {
  return dispatch => {
    dispatch(fetchingData());
    axiosApi.get('/tasks.json').then(response => {
      dispatch(receiveData(response.data))
    }, e => {
      throw new e;
    })
  }
};
export const addTodo = (task)=> {
  return dispatch => {
    dispatch(fetchingData());
    axiosApi.post('/tasks.json', task).then(response => {
      dispatch(getData())
    })
  }
};