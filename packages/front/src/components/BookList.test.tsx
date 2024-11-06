import {describe, expect, it} from 'vitest'
import {render, screen} from '@testing-library/react';
import BookList from './BooksList';
import {Book} from "../types.ts";

describe('BookList', () => {
    it('render books', async () => {
        const props:{
            books:Book[]
        } = {
            books: [{'title': 'Refactoring', 'id': 1}, {'title': 'Domain-driven design', 'id': 2},]
        };
        render(<BookList {...props} />);
        const headings = await screen.findAllByRole('heading')
        headings.forEach((heading, index) => {
            expect(heading).toHaveTextContent(props.books[index].title);
        });
    })
});