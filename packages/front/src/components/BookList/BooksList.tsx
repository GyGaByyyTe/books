import {Book} from "../../types.ts";
import BookItem from "./Book.tsx";
import {Grid2 as Grid} from "@mui/material";

const BooksList = ({loading, error, books}: { loading: boolean, error: boolean, books: Book[] }) => {
    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error...</p>
    }

    return <div data-test="book-list">
        <Grid container spacing={2}>
            {books.map((book) => <BookItem key={book.id} title={book.title} id={book.id}/>)}
        </Grid>
    </div>;
}

export default BooksList