import {Book} from "../types.ts";

const BookItem = ({title}: Book) => {
    return (<div className="book-item">
        <h2 data-test="book-title">{title}</h2>
    </div>);
}

export default BookItem