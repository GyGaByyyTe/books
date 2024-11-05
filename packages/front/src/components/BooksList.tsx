import {Book} from "../types.ts";
import BookItem from "./Book.tsx";

const BooksList = ({books}: { books: Book[] }) => {
    return <div data-test="book-list">
        {books.map((book) => <BookItem key={book.title} title={book.title}/>)}
    </div>;
}

export default BooksList