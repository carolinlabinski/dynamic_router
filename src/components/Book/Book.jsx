// import React from "react";
import books from "../../data/books";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Book = () => {
	let { bookSlug } = useParams();
	console.log(books[0].slug);
	const [currentBook, setCurrentBook] = useState(null);

	useEffect((bookSlug) => {
		setCurrentBook(books.find((book) => book === bookSlug));
		console.log(bookSlug);
	}, []);

	return <div>hello{bookSlug}</div>;
};
export default Book;
