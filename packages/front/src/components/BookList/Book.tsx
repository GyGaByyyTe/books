import {Button, Card, CardActions, CardContent, Grid2 as Grid, Typography} from "@mui/material";
import {Book} from "../../types.ts";
import {Link} from "react-router";

const BookItem = ({title, id}: Book) => {
    return (<Grid size={4} component="div" className="book-item">
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" data-test="book-title">{title}</Typography>
                <Typography variant="body2" component="p" color="textSecondary"
                            data-test="book-description">{title}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    <Link to={`/books/${id}`}>View Details</Link>
                </Button>
            </CardActions>
        </Card>
    </Grid>);
}

export default BookItem