describe('Books application', function() {
    it('Visits the books', function() {
        cy.visit('http://localhost:5173');
        cy.get('h2[data-test="heading"]').contains('Books')
    })
})