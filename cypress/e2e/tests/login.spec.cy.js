import LoginPage  from '../page_objects/LoginPage'

describe('Login Page Module', ()=>{
    const login = new LoginPage()

    beforeEach(() => {
        login.navigate()
    })

    it('Validate sucessful login with valid user details', ()=>{
        login.loginForm("Admin", "admin123")
        cy.get('.oxd-topbar-header').should('exist')
        cy.get('.oxd-topbar-header-userarea > ul').should('exist')
    })

    it('verify error for invalid username or password', ()=>{
        login.loginForm("ad", "admin123")
        cy.get('.oxd-alert-content > .oxd-text').should('exist').and('contain.text', 'Invalid credentials')
    })

    it('verify username is a required field when is empty', ()=>{
        login.loginForm("Admin", " ");
        cy.get('.oxd-input-group > .oxd-text').should('exist').and('contain.text', 'Required')
    })

    it('verify password is a required field when is empty', ()=>{
        login.loginForm(" ", "admin123");
        cy.get('.oxd-input-group > .oxd-text').should('exist').and('contain.text', 'Required')
    })
})