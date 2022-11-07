import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const TodoList = (props) => {
	const { Title, createdAt } = props.todo;
	return (
		<div className='bg-teal-50 p-2 m-2 rounded-lg text-lg flex justify-between'>
			<p className='text-left'>{Title}</p>
			<button className='text-red-600 text-2xl'>
				<AiFillDelete />
			</button>
		</div>
	);
};

export default TodoList;
