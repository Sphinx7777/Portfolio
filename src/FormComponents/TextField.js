import React from 'react'
import s from './../ToDo/ToDo.module.scss'


export const TextField = (props) => {

	let {
		input,
		type,
		autoFocus,
		typeComponent,
		placeholder,
		maxLength,
		cols,
		rows,
		meta:
			{
				touched,
				error,
				warning
			}
	} = props;


	return (
		<>
			{
				typeComponent === 'input'
					? <input
						maxLength={maxLength}
						{...input}
						placeholder={placeholder}
						type={type}
						autoFocus={autoFocus}/>
					: <textarea
						{...input}
						placeholder={placeholder}
						cols={cols}
						rows={rows}
						autoFocus={autoFocus}
					/>
			}

			{touched &&
			((error && <span className={s.error}>{error}</span>) ||
				(warning && <span className={s.warning}>{warning}</span>))}
		</>
	)
};

