import {describe, expect, it} from 'vitest'
import {render, screen} from '@testing-library/react';
import BookList from './BooksList';
import {Book} from "../types.ts";

describe('BookList', () => {
    it('loading', () => {
        const props = {
            loading: true, error: false, books: []
        };
        const {container} = render(<BookList {...props} />);
        const content = container.querySelector('p') as HTMLParagraphElement;
        expect(content.innerHTML).toContain('Loading');
    });

    it('error', () => {
        const props = {
            loading: false, error: true, books: []
        };
        const {container} = render(<BookList {...props} />);
        const content = container.querySelector('p') as HTMLParagraphElement;
        expect(content.innerHTML).toContain('Error');
    });
    it('render books', async () => {
        const props: {
            loading: boolean, error: boolean, books: Book[]
        } = {
            loading: false,
            error: false,
            books: [{'title': 'Refactoring', 'id': 1}, {'title': 'Domain-driven design', 'id': 2},]
        };
        render(<BookList {...props} />);
        const headings = await screen.findAllByRole('heading')
        headings.forEach((heading, index) => {
            expect(heading).toHaveTextContent(props.books[index].title);
        });
    })
});