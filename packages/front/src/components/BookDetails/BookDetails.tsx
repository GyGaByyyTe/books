import {Book} from "../../types.ts";

const getBookDescription = (book: Book | null): string | null => book && book.description ? book.description : book && book.title;

const BookDetails = ({book}: { book: Book | null }) => <div className="detail">
    <h2 className="book-title">{book && book.title}</h2>
    <p data-testid="book-description" className="book-description">{getBookDescription(book)}</p>
</div>


export default BookDetails;