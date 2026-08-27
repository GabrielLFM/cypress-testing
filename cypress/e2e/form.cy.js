
beforeEach(() => {
  cy.visit('http://localhost:3000')
})

describe('form', () => {
  it('passes', () => {
    cy.login('4DM@gmail.com', '4DM')
    cy.contains('button', 'Formulários').should('be.visible').click()
    cy.contains('h1', 'Consultoria').should('be.visible')

    cy.get('#name').type('fds vtnc')
    cy.get('#email').type('fds@gmail.com')
    cy.get('#phone').type('1')
    
    cy.contains('label', 'Pessoa Jurídica').find('input[type=radio]').click().should('be.checked')
    cy.contains('label', 'Pessoa Física').find('input[type=radio]').should('not.be.checked')
    
    // cy.contains('label', 'Udemy').find('input[type=checkbox]').click().should('be.checked')

    cy.get('#consultancyType').select('In Company')
    
    cy.contains('label', 'Li e aceito os termos de uso *').click()

    cy.contains('button[type=submit]', 'Enviar formulário').click()


    const sociais = [
      'Instagram',
      'LinkedIn',
      'Udemy',
      'YouTube',
      'Indicação de Amigo'
    ]

    sociais.forEach((social) => {
        cy.contains('label', social)
        .find('input[type=checkbox').click()
        .should('be.checked')
    })

    const tecnologias = [
      'JavaScript',
      'Java',
      'HTML',
      'Git'
    ]

    tecnologias.forEach((tecnologias) => {
      cy.get('#technologies').type(tecnologias + '{enter}')
    })

  })
})