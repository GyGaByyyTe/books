import {Book} from "../types.ts";
import BookItem from "./Book.tsx";

const BooksList = ({loading, error, books}: { loading: boolean, error: boolean, books: Book[] }) => {
    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error...</p>
    }

    return <div data-test="book-list">
        {books.map((book) => <BookItem key={book.title} title={book.title}/>)}
    </div>;
}

export default BooksList