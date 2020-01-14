import axiosApi from '../axiosAPI';


export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

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
    }, (e) => {
      throw (e) ;
    })
  }
};
export const addTodo = (task)=> {
  return dispatch => {
    dispatch(fetchingData());
    axiosApi.post('/tasks.json', task).then(() => {
      dispatch(getData())
    }, e=> {throw(e)})
  }
};
export const markDone = (id) => {
  return dispatch => {
    dispatch(fetchingData());
    axiosApi.patch(`/tasks/${id}.json`, {completed: true}).then(() => {
      dispatch(getData())
    }, e=> {throw(e)})
  }
};
export const deleteTask = (id)=> {
  return dispatch => {
    dispatch (fetchingData());
    axiosApi.delete(`/tasks/${id}.json`).then(()=> {
      dispatch(getData())
    }, e=> {throw(e)})
  }
};