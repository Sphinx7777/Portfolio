import React, {useState, useEffect} from 'react'
import s from './ToDo.module.scss'
import FormForTask from "./FormForTask";
import {ButtonHeaderToDo} from "./ButtonHeaderToDo";
import {Task} from "./Task";
import {SearchTask} from "./SearchTask";
import {MarkAllTasks} from "./MarkAllTasks";


export const Todo = (
	{
		tasks, addNewTask, removeTask, changeTask, changeTaskStatus,
		editMode, changeStatusTaskEditForm, allMark, changeStatusAllTasks,
		editDescriptionStatus, toggleEditStatus, defaultName, defaultValue
	}) => {

	const newDate = new Date();
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	};
	const createDate = (newDate.toLocaleString("ru", options));

	const onSubmit = (e) => {
		addNewTask(
			{
				id: Math.random(),
				editStatus: false,
				name: e.name,
				description: e.description,
				status: false,
				createDate
			}
		)
	};

	const [newTasks, setNewTasks] = useState(tasks);

	const activeTask = tasks.filter(t => !t.status);

	const completedTask = tasks.filter(t => t.status);

	const searchTaskByName = (name) => {
		setNewTasks(() => tasks.filter(t => t.name.match(name)));
	};

	const searchTaskByDescription = (description) => {
		setNewTasks(() => tasks.filter(t => t.description.match(description)));
	};

	const editTask = (id, name, value) => {
		toggleEditStatus(id, true, name, value)
	};

	useEffect(() => {
		setNewTasks(tasks)
	}, [tasks]);


	return (
		<div className={s.todoWrapper}>
			<div className={s.todo}>
				<div className={s.filterWrapper}>
					<div className={s.allCount}>
						Общее количество : {tasks.length} Показано : {newTasks.length}
					</div>
					<div className={s.filter}>
						<div className={s.filterItem}
								 onClick={() => setNewTasks(tasks)}>
							Все
						</div>
						<div className={s.filterItem}
								 onClick={() => setNewTasks(activeTask)}>
							В процессе
						</div>
						<div className={s.filterItem}
								 onClick={() => setNewTasks(completedTask)}>
							Завершенные
						</div>
					</div>
				</div>
				<div>
					<h2>Это надо запомнить, а лучше сделать ...</h2>
				</div>
				<ButtonHeaderToDo {...
					{
						tasks,
						removeTask,
						changeStatusTaskEditForm,
						editDescriptionStatus,
						editMode
					}}/>
				{
					editMode &&
					<div className={s.formForTask}>
						<FormForTask {...
							{
								onSubmit, changeStatusTaskEditForm
							}}/>
					</div>
				}
				<div className={s.markAndSearchWrapper}>
					<MarkAllTasks {...
						{
							allMark, changeStatusAllTasks
						}}/>
					<SearchTask {...
						{
							searchTaskByName, searchTaskByDescription
						}}/>
				</div>
				<div className={s.todoList}>
					<div className={s.listWrapper}>
						<Task {...
							{
								newTasks,
								changeTask,
								editTask,
								editMode,
								changeTaskStatus,
								toggleEditStatus,
								defaultName,
								defaultValue
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	)
};
