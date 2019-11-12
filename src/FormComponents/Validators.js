
export const required = value => (value ? undefined : 'Обязательное поле');


export const maxLength = max => value =>
	value && value.length > max ? `Максимум ${max} символов` : undefined;




export const minLength = min => value =>
	value && value.length < min ? `Минимум ${min} символ` : undefined;





export const minValue = min => value =>
	value && value < min ? `Must be at least ${min}` : undefined;

