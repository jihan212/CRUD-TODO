import React, { useState } from 'react';

const AddTodo = ({addTodo}) => {
	const [input, setInput] = useState(``);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!input) return;

		addTodo(input);
		setInput('');

		// props.onSubmit({
		// 	id: Math.floor(Math.random() * 1000),
		// 	text: input,
		// });
	};

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='bg-white p-1 m-1 rounded-md flex justify-between'
		>
			<input
				type='text'
				className=' p-1 m-1 w-5/6'
				placeholder='What do you want to do?'
				value={input}
				onChange={handleChange}
			/>
			<button
				className='btn btn-submit bg-slate-200 p-1 m-1 rounded-md w-1/6 '
				type='submit'
			>
				Add
			</button>
		</form>
	);
};

export default AddTodo;
