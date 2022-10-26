import React from 'react';
import '../index.css';

const Todos = () => {

	return (
		<div>
			<div className='bg-teal-50 p-2 m-2 rounded-lg text-lg'>
				<p className='text-left'>Eating</p>
			</div>
			<div className='bg-teal-50 p-2 m-2 rounded-lg text-lg'>
				<p className='text-left'>Reading</p>
			</div>
			<div className='bg-teal-50 p-2 m-2 rounded-lg text-lg'>
				<p className='text-left'>Writing</p>
			</div>
		</div>
	);
};

export default Todos;
