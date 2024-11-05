import {Typography} from "@mui/material";
import BookListContainer from "./components/BookListContainer.tsx";

function App() {
    return (<>
        <Typography variant='h2' component='h2' data-test='heading'>
            Books
        </Typography>
        <BookListContainer/>
    </>);
}

export default App
