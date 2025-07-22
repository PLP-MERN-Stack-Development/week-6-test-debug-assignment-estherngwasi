describe('Bug Tracker E2E', () => {
  it('should create, update, and delete a bug', () => {
    cy.visit('/');
    cy.get('input[placeholder="Title"]').type('E2E Bug');
    cy.get('textarea[placeholder="Description"]').type('E2E bug description');
    cy.contains('Report Bug').click();
    cy.contains('E2E Bug');
    cy.contains('In Progress').click();
    cy.contains('Status: in-progress');
    cy.contains('Resolve').click();
    cy.contains('Status: resolved');
    cy.contains('Delete').click();
    cy.contains('No bugs reported.');
  });
}); 