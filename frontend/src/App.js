import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
	return (
		<div className='flex h-screen'>
			<div className='bg-slate-800 shadow-lg shadow-slate-500/50 p-4 m-2 rounded-lg w-1/2 m-auto'>
				<h1 className='text-2xl text-white p-1 m-1'>Add New ToDo</h1>
				<AddTodo />
				<Todos />
			</div>
		</div>
	);
}

export default App;
