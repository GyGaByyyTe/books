import {describe, expect, it} from 'vitest'
import {render, screen} from '@testing-library/react';
import BookDetails from './BookDetails';
import {Book} from "../types.ts";

describe('BookDetails', () => {
    it('render title', async () => {
        const props: { book: Book } = {
            book: {'title': 'Refactoring', 'id': 1}
        };
        render(<BookDetails {...props} />);
        const title = screen.getByRole("heading");
        expect(title.innerHTML).toEqual(props.book.title);
    })
    it('render description', async () => {
        const props: { book: Book } = {
            book: {
                'title': 'Refactoring',
                'description': "Martin Fowler's Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software.",
                'id': 1
            }

        };
        render(<BookDetails {...props} />);
        const description = screen.getByText(props.book.description as string);
        expect(description).toBeInTheDocument();
    })
});