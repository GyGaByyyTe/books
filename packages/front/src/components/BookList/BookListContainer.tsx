import BooksList from "./BooksList.tsx";
import useBooks from "./useBooks.ts";

const BookListContainer = () => {
    const {loading, error, books} = useBooks()


    return <BooksList loading={loading} error={error} books={books}/>
}

export default BookListContainer;