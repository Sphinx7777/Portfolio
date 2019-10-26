import React from 'react'
import s from './ToDo.module.scss'


export const EditDescriptionArea = ({
																setChangedText, description, setError,
																toggleEditStatus, id, setEditValue,error
															}) => {


	return (
		<div className={s.areaWrapper}>
			<div className={!error ? s.areaEditMode : s.areaEditMode + ' ' + s.error}>Min 1 && Max 300 symbols
			</div>
			<textarea className={!error ? s.area : s.area + ' ' + s.error} cols='30' rows='3' maxLength='300'
								minLength='1'
								placeholder='Min 1 && Max 300 symbols'
								defaultValue={description}
								onChange={(e) => {
									setEditValue(e.currentTarget.value)
								}}
								onKeyUp={(event) => {
									if (event.key === 'Enter') {
										setChangedText(id)
									} else if (event.key === 'Escape') {
										setError(false);
										toggleEditStatus(id, false)
									}
								}}/>
		</div>
	)
};
