import React from 'react'
import s from './ToDo.module.scss'


export const EditNameInput = (
	{
		setChangedText, setName, setError,
		toggleEditStatus, id, name, error
	}) => {

	const onChange = event => setName(event.currentTarget.value);

	const setOnKeyUpAction = (event) => {
		if (event.key === 'Enter') {
			setChangedText(id);
		} else if (event.key === 'Escape') {
			setError(false);
			toggleEditStatus(id, false);
		}
	};

	return (
		<div>
			<span
				className={!error ? s.fieldEditMode : s.fieldEditMode + ' ' + s.error}>
				Min 1 && Max 25 symbols :
			</span>
			<input className={!error ? s.editName : s.editName + ' ' + s.error}
						 defaultValue={name}
						 maxLength='25'
						 minLength='1'
						 autoFocus={true}
						 placeholder='Min 1 && Max 25 symbols'
						 onChange={onChange}
						 onKeyUp={setOnKeyUpAction}/>
		</div>
	)
};
