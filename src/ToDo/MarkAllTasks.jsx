import React from 'react'
import s from './ToDo.module.scss'


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


