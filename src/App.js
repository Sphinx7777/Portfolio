import React, {Component, Suspense} from 'react';
import s from './App.module.scss';
import {Route, Switch} from "react-router-dom";
import {Footer} from "./Footer/Footer";
import {Header} from "./Header/Header";
import {SideBar} from "./SideBar/SideBar";
import {connect} from "react-redux";
import {
	addNewTask, changeStatusAllTasks, changeStatusTaskEditForm, changeTask,
	changeTaskStatus, removeTask, setToggleShowSideBar, toggleEditStatus
} from "./././Redux/todoReducer";
import {Todo} from "./ToDo/Todo";

const Resume = React.lazy(() => import("./Resume/Resume"));


class App extends Component {
	render() {
		let {menuShowStatus, setToggleShowSideBar} = this.props;
		return (
			<div className={s.appWrapper}>
				<Header {...{menuShowStatus, setToggleShowSideBar}}/>
				<SideBar {...{menuShowStatus, setToggleShowSideBar}}/>
				<div className={!menuShowStatus ? s.contentWrapper : s.contentWrapper + ' ' + s.contentDisableMenu}>
					<Switch>
						<Route exact path='/' render={() => <Todo {...this.props} />}/>
						<Route path='/resume' render={() =>
							<Suspense fallback={<div>Загрузка...</div>}>
							<Resume />
						</Suspense>}/>
					</Switch>
				</div>
				<Footer {...{menuShowStatus}}/>
			</div>
		);
	}
}

export let mapStateToProps = (state) => ({
	tasks: state.toDo.tasks,
	editMode: state.toDo.editMode,
	allMark: state.toDo.allMark,
	editDescriptionStatus: state.toDo.editDescriptionStatus,
	defaultName: state.toDo.defaultName,
	defaultValue: state.toDo.defaultValue,
	menuShowStatus: state.toDo.menuShowStatus,
});
export default connect(mapStateToProps,
	{
		addNewTask, removeTask, changeTask, changeTaskStatus, setToggleShowSideBar,
		changeStatusAllTasks, changeStatusTaskEditForm, toggleEditStatus
	})(App);
