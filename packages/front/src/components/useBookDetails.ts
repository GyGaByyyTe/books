import {Book} from "../types.ts";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";

const useBookDetails = () => {
    const {id} = useParams<string>();
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchBook = async () => {
            setError(false);
            setLoading(true);
            try {
                const res = await axios.get(`http://localhost:8080/books/${id}`);
                setBook(res.data);
            } catch (e) {
                console.log(e)
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchBook();
    }, [id]);

    return {
        loading, error, book
    }
}

export default useBookDetails