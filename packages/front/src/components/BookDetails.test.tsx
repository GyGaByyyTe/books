import {describe, expect, it} from 'vitest'
import {render, screen} from '@testing-library/react';
import BookDetails from './BookDetails';
import {Book} from "../types.ts";

describe('BookDetails', () => {
    it('render book details', async () => {
        const props: { book: Book } = {
            book: {'title': 'Refactoring', 'id': 1}
        };
        render(<BookDetails {...props} />);
        const title = screen.getByRole("heading");
        expect(title.innerHTML).toEqual(props.book.title);
    })
});