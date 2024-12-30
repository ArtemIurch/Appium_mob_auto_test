
class Login{

   async login(email, password){
    await $('//*[@text="Enter your email"]').addValue(email)
    await  $('//*[@text="Enter your password"]').setValue(password);
    await  $('//*[@text="Log in"]').click();
    }

}

export default new Login();