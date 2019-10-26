import {load} from "redux-localstorage-simple";

const ADD_NEW_TASK = '/todoReducer___ADD_NEW_TASK';
const REMOVE_CHANGED_TASK = '/todoReducer___REMOVE_CHANGED_TASK';
const CHANGE_TASK = '/todoReducer___CHANGE_TASK';
const CHANGE_TASK_STATUS = '/todoReducer___CHANGE_TASK_STATUS';
const EDIT_MODE_STATUS = '/todoReducer___EDIT_MODE_STATUS';
const MARK_ALL_TASKS = '/todoReducer___MARK_ALL_TASKS';
const TOGGLE_EDIT_TASK = '/todoReducer___CLOSE_EDIT_TASK';
const EDIT_STATUS_TASK = '/todoReducer___EDIT_STATUS_TASK';
const DEFAULT_DATA_TASK = '/todoReducer___DEFAULT_DATA_TASK';
const TOGGLE_SHOW_SIDE_BAR = '/todoReducer___TOGGLE_SHOW_SIDE_BAR';


let data = load({namespace:'Tasks-list'});
let initialState = data.toDo;

if(!initialState || !initialState.tasks || !initialState.tasks.length){
	initialState = {
		tasks:[{id: 1, name: 'Образец',editStatus:false, description: 'Описание задачи', status: false,createDate:"01 января 2000 г. 00:00"}],
		filterTasksStatus: null,
		editMode: false,
		allMark: false,
		editDescriptionStatus: false,
		defaultName: null,
		defaultValue: null,
		menuShowStatus: false

	}
}


const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_TASK: {
			return {...state, ...state.tasks.unshift({...action.task})}
		}
		case EDIT_MODE_STATUS: {
			return {...state, editMode: action.status}
		}
		case DEFAULT_DATA_TASK: {
			return {...state, defaultName: action.name,defaultValue: action.value}
		}
		case REMOVE_CHANGED_TASK: {
			return {...state,tasks:state.tasks.filter(t=>t.status!==true),allMark: false
			}
		}
		case TOGGLE_EDIT_TASK: {
			return {...state,editDescriptionStatus: action.status}
		}
		case CHANGE_TASK: {
			return {
				...state, tasks: state.tasks.map(t => {
					if (t.id === action.id) {
						t.description = action.description;
						t.name = action.name;
						return t;
					}
					return t;
				})
			}
		}
		case CHANGE_TASK_STATUS: {
			return {
				...state, tasks: state.tasks.map(t => {
					if (t.id === action.id) {
						t.status = action.status;
						return t;
					}
					return t;
				})
			}
		}
		case EDIT_STATUS_TASK: {
			return {
				...state, tasks: state.tasks.map(t => {
					if (t.id === action.id) {
						t.editStatus = action.status;
						return t;
					}
					return t;
				})
			}
		}
		case MARK_ALL_TASKS: {
			return {
				...state, ...state.tasks.map(t => t.status = action.status)
				, allMark: action.status
			}
		}
		case TOGGLE_SHOW_SIDE_BAR: {
			return {...state, menuShowStatus: action.status}
		}
		default:
			return state;
	}

};

const setNewTask = (task) => ({type: ADD_NEW_TASK, task});
const setRemoveTask = () => ({type: REMOVE_CHANGED_TASK});
const setChangeTask = (taskDesc) => ({type: CHANGE_TASK, ...taskDesc});
const setChangeTaskStatus = (taskStatus) => ({type: CHANGE_TASK_STATUS, ...taskStatus});
const setEditModeStatus = (status) => ({type: EDIT_MODE_STATUS, status});
const setStatusMarkAllTasks = (status) => ({type: MARK_ALL_TASKS, status});
const setToggleEditTask = (status) => ({type: TOGGLE_EDIT_TASK,status});
const setEditStatusTask = (status) => ({type: EDIT_STATUS_TASK,...status});
const setDefaultDataTask = (data) => ({type: DEFAULT_DATA_TASK,...data});
export const setToggleShowSideBar = (status) => ({type: TOGGLE_SHOW_SIDE_BAR,status});



export const toggleEditStatus = (id,status,name,value) => {
	return (dispatch) => {
		dispatch(setDefaultDataTask({name,value}));
		dispatch(setEditStatusTask({id,status}));
		dispatch(setToggleEditTask(status));
	}
};

export const addNewTask = (task) => {
	return (dispatch) => {
		dispatch(setNewTask(task));
		dispatch(setEditModeStatus(false));
	}
};
export const changeStatusTaskEditForm = (status) => {
	return (dispatch) => {
		dispatch(setEditModeStatus(status));
	}
};
export const changeStatusAllTasks = (status) => {
	return (dispatch) => {
		dispatch(setStatusMarkAllTasks(status));
	}
};
export const removeTask = (id) => {
	return (dispatch) => {
		dispatch(setRemoveTask(id));
	}
};
export const changeTask = (id, description,name,status) => {
	return (dispatch) => {
		dispatch(setChangeTask({id, description,name}));
		dispatch(setEditStatusTask({id,status}));
		dispatch(setToggleEditTask(false));

	}
};
export const changeTaskStatus = (id, status) => {
	return (dispatch) => {
		dispatch(setChangeTaskStatus({id, status}));
		dispatch(setToggleEditTask(false));
	}
};

export default todoReducer;

