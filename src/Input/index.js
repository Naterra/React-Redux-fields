import React from 'react';

const Input = ({ input, value, type='text', label='', placeholder='', className='',  disabled, meta: { touched, error, warning } }) => {
    return (
        <div className="input-field">
			<input {...input}  type={type} placeholder={placeholder} disabled={disabled} autoComplete="off" />
            <label className="active" htmlFor={input.name}>{label}</label>

			{touched && (error || warning) &&  <div className="form-field-error">
				{error && <span className="field-error">{error}</span>}
				{warning && <span className="field-warn">{warning}</span>}
			</div>}
        </div>
    );
};

Input.defaultProps = {
    type: 'text',
    value: 'New York',
    placeholder: 'City',
    className: 'validate'
};

export default Input;
