import {Route, Routes} from 'react-router-dom';
import {Typography} from "@mui/material";
import BookListContainer from "./components/BookListContainer.tsx";
import BookDetailsContainer from "./components/BookDetailsContainer.tsx";

function App() {
    return (<>
        <Typography variant='h2' component='h2' data-test='heading'>
            Books
        </Typography>
        <Routes>
            <Route path='/books' element={<BookListContainer/>}/>
            <Route path='/books/:id' element={<BookDetailsContainer/>}/>
        </Routes>
    </>);
}

export default App
