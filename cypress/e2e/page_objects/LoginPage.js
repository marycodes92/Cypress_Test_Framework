export default class LoginPage {
  navigate(){
    cy.visit('/')
  }

  loginForm(username, password){
    cy.get('input[name=username]').type(username);
    cy.get('input[name=password]').type(password);
    cy.get('button[type=submit]').click();
  }
}