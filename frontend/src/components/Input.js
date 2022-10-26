import React from 'react';

const Input = () => {
	return (
		<div>
			<form className='bg-white p-1 m-1 rounded-md flex justify-between'>
				<input
					className='bg-slate-200 p-1 m-1 rounded-md w-3/6'
					placeholder='What do you want to do?'
				/>
				<button
					className='btn btn-submit bg-slate-200 p-1 m-1 rounded-md w-1/6 '
					type='submit'
				>
					Add
				</button>
			</form>
		</div>
	);
};

export default Input;
