import axios from "axios";


describe('Books application', function () {
    before(() => {
        cy.wrap(axios
            .delete('http://localhost:8080/books?_cleanup=true')
            .catch((err) => err));
    });

    beforeEach(() => {
        const books = [
            {'title': 'Refactoring', 'id': 1},
            {'title': 'Domain-driven design', 'id': 2},
            {'title': 'Building Microservices', 'id': 3}]
        return cy.wrap(books.map(item => axios.post('http://localhost:8080/books', item, {headers: {'Content-Type': 'application/json'}})))
    })

    afterEach(() => {
        return cy.wrap(axios
            .delete('http://localhost:8080/books?_cleanup=true')
            .catch(err => err))
    })

    it('Visits the books', function () {
        cy.visit('http://localhost:3000');
        cy.get('h2[data-test="heading"]').contains('Books')
    })

    it('Shows a book list', () => {
        cy.visit('http://localhost:3000/');
        cy.get('div[data-test="book-list"]').should('exist');
        cy.get('div.book-item').should((books) => {
            expect(books).to.have.length(3);
            const titles = [...books].map(book => book.querySelector('h2').innerHTML);
            expect(titles).to.deep.equal(['Refactoring', 'Domain-driven design','Building Microservices']);
        })
    })
})
