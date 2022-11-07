import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddTodo = ({ addTodo }) => {
	const [input, setInput] = useState(``);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!input) return;

		addTodo(input);
		setInput('');

		// const url = `https://cors-anywhere.herokuapp.com/http://localhost:5000/api`;

		// fetch(url, {
		// 	method: 'POST',
		// 	headers: {
		// 		'content-type': 'application/json',
		// 	},
		// 	body: JSON.stringify(input),
		// }).then((response) => console.log('Server side response', response));
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
