import {useEffect, useState} from "react";
import {Book} from "../types.ts";
import axios from "axios";
import BooksList from "./BooksList.tsx";

const BookListContainer = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/books').then(res => setBooks(res.data));
    }, [])

    return <BooksList books={books}/>
}

export default BookListContainer;