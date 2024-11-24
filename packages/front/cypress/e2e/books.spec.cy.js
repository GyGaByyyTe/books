import axios from "axios";


describe('Books application', function () {
    before(() => {
        cy.wrap(axios
            .delete('http://localhost:8080/books?_cleanup=true')
            .catch((err) => err));
    });

    beforeEach(() => {
        const books = [{'title': 'Refactoring', 'id': 1}, {
            'title': 'Domain-driven design', 'id': 2
        }, {'title': 'Building Microservices', 'id': 3}]
        cy.wrap(null).then(() => {
            for (const item of books) {
                axios.post('http://localhost:8080/books', item, {headers: {'Content-Type': 'application/json'}})
            }
        })
    })

    afterEach(() => {
        return cy.wrap(axios
            .delete('http://localhost:8080/books?_cleanup=true')
            .catch(err => err))
    })

    it('Visits the books', function () {
        cy.visit('http://localhost:3000/books');
        cy.get('h2[data-test="heading"]').contains('Books')
    })

    it('Shows a book list', () => {
        cy.visit('http://localhost:3000/books');
        cy.get('div[data-test="book-list"]').should('exist');
        cy.get('div.book-item').should((books) => {
            expect(books).to.have.length(3);
            const titles = [...books].map(book => book.querySelector('h2').innerHTML);
            expect(titles).to.deep.equal(['Refactoring', 'Domain-driven design', 'Building Microservices']);
        })
    })

    it('Goes to the details page', () => {
        cy.visit('http://localhost:3000/books');
        cy.get('div.book-item').contains('View Details').eq(0).click();
        cy.url().should('include', "/books/1");
        cy.get('h2.book-title').contains('Refactoring');
    })
})
