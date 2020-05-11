import React from "react";
import "./App.css";
import Book from "./components/Book";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path={`/books/:bookSlug`}>
						<Book />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
