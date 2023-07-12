
const loginPage = require('../pages/login.page')
describe('Demo Test', () => {

    it('Login Test', async () =>{
        browser.url('https://the-internet.herokuapp.com/login')

        await loginPage.login('tomsmith','SuperSecretPassword!')


    })
})