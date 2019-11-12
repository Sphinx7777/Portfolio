import React from 'react'
import s from './ToDo.module.scss'
import {Field, reduxForm} from "redux-form";
import {TextField} from "../FormComponents/TextField";
import {maxLength, required} from "../FormComponents/Validators";


const maxLength300 = maxLength(300);
const maxLength25 = maxLength(25);


const FormForTask = (props) => {
	const {
		handleSubmit,
		pristine,
		reset,
		submitting,
		onSubmit,
		changeStatusTaskEditForm
	} = props;

	const enterForSubmit = (event) => {
		if (event.key === 'Enter') {
			handleSubmit();
		}
	};

	const closeForm = () => changeStatusTaskEditForm(false);

	return (
		<div className={s.formWrapper}>
			<form onSubmit={handleSubmit(onSubmit)} onKeyPress={enterForSubmit}>
				<div className={s.fieldWrapper}>
					<Field className={s.textField}
								 typeComponent='input'
								 autoFocus={false}
								 placeholder='Min 1 && Max 25 symbols'
								 name="name"
								 type="text"
								 maxLength='25'
								 component={TextField}
								 label="Название"
								 validate={[required, maxLength25]}
					/>
					<Field className={s.textField}
								 cols='30'
								 rows='3'
								 placeholder='Min 1 && Max 300 symbols'
								 typeComponent='textarea'
								 autoFocus={false}
								 name="description"
								 type="text"
								 component={TextField}
								 label="Описание"
								 validate={[required, maxLength300]}
					/>
				</div>
				<div>
					<button type="submit"
									disabled={submitting}>
						Сохранить
					</button>
					<button type="button"
									disabled={pristine || submitting}
									onClick={reset}>
						Очистить
					</button>
				</div>
				<div className={s.closeForm}>
					<span className={s.closeFormBtn}
								onClick={closeForm}>
						X
					</span>
				</div>
			</form>
		</div>
	)
};

export default reduxForm(
	{
		form: 'taskForm'
	})(FormForTask)

