import {Book} from "../types.ts";

const BookDetails = ({book}: { book: Book | null }) => <div className="detail">
    <h2 className="book-title">{book && book.title}</h2>
</div>


export default BookDetails;