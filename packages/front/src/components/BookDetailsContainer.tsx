import useBookDetails from "./useBookDetails.ts";

const BookDetailsContainer = () => {
    const {book} = useBookDetails()


    return <div className="detail">
        <h2 className="book-title">{book && book.title}</h2>
    </div>
}

export default BookDetailsContainer;