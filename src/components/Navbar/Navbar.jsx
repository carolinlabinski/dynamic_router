import React from "react";
import books from "../../data/books";
import { Link } from "react-router-dom";

const Navbar = () => {
	// console.log(books);
	// console.log(books[0].slug);
	// console.log(books[0].title);

	const xx = books.map((book, key) => (
		<div key={key}>
			<Link to={`/book/${book.slug}`}>{book.title}</Link>
		</div>
	));

	return <div className="topnav">{xx}</div>;
};
export default Navbar;
