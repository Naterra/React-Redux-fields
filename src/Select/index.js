import React, { Fragment, useState, useRef, useEffect } from 'react';

const Select = ({input, id = 1, label, defaultValue, options, disabled, extraClass='', onChangeCallback, children }) => {
	const [value, setValue] = useState(defaultValue || '');
	const elRef = useRef();

	const _options = options ? options
		: {
				dropdownOptions: {
					coverTrigger: false
				}
			};

	useEffect(() => {
		const instance = M.FormSelect.init(elRef.current, _options);
		return () => {
			instance && instance.destroy();
		};
	});

	const onChangeEvent = val => {
		if (onChangeCallback) onChangeCallback(val, id);
		setValue(val);
	};

	return (
		<div className={`input-field select-block ${extraClass}`}>
			<select id={id} ref={elRef} disabled={disabled} onChange={e => onChangeEvent(e.target.value)} value={value}>
				<option value="">---</option>
				{options &&
					options.map((item, i) => {
						return (
							<option key={i} value={item.value}>
								{item.name}
							</option>
						);
					})}
				{!options && children && <Fragment>{children}</Fragment>}
			</select>

			<label>{label}</label>
		</div>
	);
};

Select.defaultProps = {
	id: 1,
	label: '',
	defaultValue: '',
	options: {},
	disabled: false,
	onChange: false
};

export default Select;
