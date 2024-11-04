import {Typography} from "@mui/material";
import BooksList from "./components/BooksList.tsx";
import {BOOKS} from "./constants.ts";

function App() {
    return (<>
        <Typography variant='h2' component='h2' data-test='heading'>
            Books
        </Typography>
        <BooksList books={BOOKS}/>
    </>);
}

export default App
