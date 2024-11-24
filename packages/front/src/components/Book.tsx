import {Book} from "../types.ts";

const BookItem = ({title, id}: Book) => {
    return (<div className="book-item">
        <h2 data-test="book-title">{title}</h2>
        <a href={`/books/${id}`}>View Details</a>
    </div>);
}

export default BookItem