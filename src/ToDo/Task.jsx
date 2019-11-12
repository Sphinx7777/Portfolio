import React, {useState, useEffect} from 'react'
import s from './ToDo.module.scss'
import settings from '../images/settings.ico'
import add from '../images/add.ico'
import {EditNameInput} from "./EditNameInput";
import {EditDescriptionArea} from "./EditDescriptionArea";


export const Task = (
	{
		newTasks, changeTask, changeTaskStatus, editTask, editMode,
		toggleEditStatus, defaultName, defaultValue
	}) => {

	const [editValue, setEditValue] = useState(defaultValue);
	const [name, setName] = useState(defaultName);
	const [error, setError] = useState(false);

	useEffect(() => {
		setName(defaultName);
		setEditValue(defaultValue);
	}, [defaultValue, defaultName]);

	const setChangedText = (id) => {
		if (name.length >= 1 && editValue.length >= 1) {
			changeTask(id, editValue, name, false);
			setError(false);
		} else {
			setError(true)
		}
	};


	return (
		<>
			{
				newTasks.map((t, i) => {
					return (
						<div key={t.id + i} className={s.taskWrapper}>
							<div className={s.taskName}>
								{
									!t.editStatus
										? <div>
									<span>
										Название :
									</span>
											<span className={s.name}
														onDoubleClick={() => {
															editTask(t.id, t.name, t.description)
														}}>
										{t.name}
								</span>
										</div>
										: <EditNameInput {...
											{
												setChangedText,
												setName,
												setError,
												error,
												toggleEditStatus,
												id: t.id,
												name: t.name
											}}/>
								}
								<div>
								<span>
									Дата создания :
								</span>
									<span className={s.date}>
									{t.createDate}
								</span>
								</div>
							</div>
							<div className={s.task}>
								<div className={!t.status ? s.inputWrapper : s.inputWrapper + ' ' + s.changed}>
									<input className={s.taskStatus}
												 type="checkbox"
												 checked={t.status}
												 onChange={(event) => {
													 changeTaskStatus(t.id, event.target.checked)
												 }}/>
									{!t.status ? <span>Завершить</span> : <span className={s.taskCompleted}>Ок!</span>}

								</div>
								{
									!t.editStatus
										? <div onDoubleClick={() => {
											editTask(t.id, t.name, t.description)
										}}
													 className={!t.status
														 ? s.taskDescription
														 : s.taskDescription + ' ' + s.taskDescriptionOff}>
											{
												t.description
													? t.description
													: 'Странно...что то да должно было быть...забыли написать наверное'
											}
										</div>
										:
										<EditDescriptionArea {...
											{
												setChangedText,
												description: t.description,
												setError,
												toggleEditStatus,
												id: t.id,
												setEditValue,
												error
											}}/>
								}
								{
									!t.editStatus
										? <button className={s.taskEdit}
															title='Редактировать'
															disabled={editMode}
															onClick={() =>
																editTask(t.id, t.name, t.description)}>
											<img className={s.settingsIcon}
													 src={settings}
													 alt="Редактировать"/>
										</button>
										: <div className={s.edit}>
										<span className={s.taskEdit}
													title='Сохранить'
													onClick={() =>
														setChangedText(t.id)}>
												<img className={s.settingsIcon}
														 src={add}
														 alt="Сохранить"/>
									</span>
											<span className={s.closeEdit}
														onClickCapture={() => {
															setError(false);
														}}
														onClick={() => toggleEditStatus(t.id, false)}
														title='Закрыть'>
										X
									</span>
										</div>
								}
							</div>
						</div>
					)
				})
			}
		</>
	)
};

