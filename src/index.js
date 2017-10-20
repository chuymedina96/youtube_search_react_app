import React 		from 'react';
import ReactDOM 	from 'react-dom';
// Importing Components
import SearchBar 	from './components/search_bar.js';

const API_KEY = 'AIzaSyBzKjnEbIbwEwdPa_friOp6Dt1oNArrh5Y';
//const is similar to declaring a variable.
const App = () => {
	return(
	<div>
		<SearchBar />
	</div>
	);
}
ReactDOM.render(<App />, document.querySelector('.container'));