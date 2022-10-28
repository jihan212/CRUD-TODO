import React, { useState, useEffect } from 'react';
import '../index.css';
import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai';

const URL = 'http://localhost:5000/api/todos';

const Todos = () => {
	const [todo, setTodo] = useState(null);

	useEffect(() => {
		axios.get(URL).then((response) => {
			setTodo(response.data);
		});
	}, []);

	return (
		<>
			{todo?.map((todo) => (
				<div
					key={todo.id}
					className='bg-teal-50 p-2 m-2 rounded-lg text-lg flex justify-between'
				>
					<p className='text-left'>{todo.Title}</p>
					<button className='text-red-600 text-2xl'>
						<AiFillDelete />
					</button>
				</div>
			))}
		</>
	);
};

export default Todos;
