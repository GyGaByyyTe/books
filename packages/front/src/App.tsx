import {useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import axios from 'axios';
import BooksList from "./components/BooksList.tsx";
import {Book} from "./types.ts";

function App() {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/books').then(res => setBooks(res.data));
    }, [])

    return (<>
        <Typography variant='h2' component='h2' data-test='heading'>
            Books
        </Typography>
        <BooksList books={books}/>
    </>);
}

export default App
