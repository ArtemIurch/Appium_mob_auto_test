class Login{

    wait_till_page_is_loaded(){
        $('//*[@text="Enter your email"]').waitForDisplayed({timeout:6000})
    }

    get mail(){
         return $('//*[@text="Enter your email"]')
    }

    get email(){
        return $('//android.widget.TextView[@text="Please provide a valid email"]')
   }
   get Password(){
    return $('//android.widget.TextView[@text="Password should be more than 8 characters"]')
    }
    get home_title(){
        return $('//android.view.View[@text="Home"]')
        }

   get validation_message(){
    return $('//android.widget.TextView[@text="You entered incorrect email or password."]')
   }

    check_text(elem, a){
         expect(elem).toHaveText(a)
    }

    click_login(){
        $('//*[@text="Log in"]').click()
    }

    async homePage_is_logedin(){
         await expect(this.home_title).toHaveText('Home')
    }

    async enter_email(email, ){
        await $('//*[@text="Enter your email"]').addValue(email)
        }
    async enter_password(password){
        await  $('//*[@text="Enter your password"]').setValue(password);
        }
}

export default new Login();