import React from 'react'
import s from './ToDo.module.scss'


export const ButtonHeaderToDo = (
	{
		tasks,removeTask,editDescriptionStatus,changeStatusTaskEditForm
	}) => {

	const statusBtn = tasks.every(t => t.status === false);

	const disableBtnAdd = tasks.length>=50;

	const setChangeStatusTaskEditForm = () => changeStatusTaskEditForm(true);

	const dellTask = () => removeTask();

	return (
		<div className={s.todoButtons}>
			<button className={s.todoBtnAdd}
							disabled={disableBtnAdd || editDescriptionStatus}
							onClick={setChangeStatusTaskEditForm}>
				{
					!disableBtnAdd
						? 'Добавить новое задание'
						: 'Максимум 50 заданий'
				}

			</button>
			<button className={s.todoBtnDell}
							disabled={statusBtn}
							onClick={dellTask}>
				Удалить завершенные
			</button>
		</div>
	)
};



export const MarkAllTasks = (
	{
		allMark, changeStatusAllTasks
	}) => {

	const setChangeStatusAllTasks = event => changeStatusAllTasks(event.target.checked);

	return (
		<div className={s.allMark}>
			<input className={s.allMarkCheck}
						 onChange={setChangeStatusAllTasks}
						 checked={allMark}
						 type="checkbox"/>
						 <span>
							 Отметить все
						 </span>
		</div>
	)
};


