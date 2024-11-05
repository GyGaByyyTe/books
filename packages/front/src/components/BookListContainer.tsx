import BooksList from "./BooksList.tsx";
import useBooks from "./useBooks.ts";

const BookListContainer = () => {
    const {loading, error, books} = useBooks()

    // if(loading) {
    //   return <p>Loading...</p>
    // }
    // if(error) {
    //   return <p>Error...</p>
    // }

    return <BooksList books={books}/>
}

export default BookListContainer;