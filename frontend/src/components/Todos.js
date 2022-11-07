import React, { useState, useEffect } from 'react';
import '../index.css';
import axios from 'axios';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const URL = 'http://localhost:5000/api/todos';

const Todos = () => {
	const [todo, setTodo] = useState(null);

	useEffect(() => {
		axios.get(URL).then((response) => {
			setTodo(response.data);
		});
	}, []);

	const addTodo = (Title) => {
		const newTodo = [
			...todo,
			{ Title, status: false, id: Math.floor(Math.random() * 1000) },
		];
		setTodo(newTodo);
	};

	const deleteTodo = (id) => {
		const removeTodo = todo.filter((todo) => {
			return todo.id !== id;
		});
		setTodo(removeTodo);
		console.log(todo)
	};

	return (
		<>
			<div className='flex h-screen'>
				<div className='bg-slate-800 shadow-lg shadow-slate-500/50 p-4 m-2 rounded-lg w-1/2 m-auto'>
					<h1 className='text-2xl text-white p-1 m-1'>
						Add New ToDo
					</h1>
					<AddTodo addTodo={addTodo} />
					{todo?.map((todo) => (
						<TodoList
							key={todo.id}
							todo={todo}
							id={todo.id}
							deleteTodo={deleteTodo}
						></TodoList>
					))}
				</div>
			</div>
		</>
	);
};

export default Todos;
