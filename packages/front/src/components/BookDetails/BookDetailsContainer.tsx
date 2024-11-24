import useBookDetails from "./useBookDetails.ts";
import BookDetails from "./BookDetails.tsx";

const BookDetailsContainer = () => {
    const {book} = useBookDetails()

    return <BookDetails book={book}/>
}

export default BookDetailsContainer;