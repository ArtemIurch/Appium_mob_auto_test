import Login from '../../pages/flow/flow'
import login_page from '../../pages/login_page'
import loginPage from '../../pages/login_page'




describe('title',()=>{
    it("first test", async()=>{
       await Login.login('artemiuyr@gmail.com', 'Aa123456!')
       await browser.pause(3000)
       await login_page.homePage_is_logedin()
       

    })
    it.only("validation", async()=>{
        await loginPage.click_login()
        await expect(loginPage.email).toHaveText("Please provide a valid email")  
        await expect(loginPage.Password).toHaveText("Password should be more than 8 characters")
        await login_page.enter_email('artemiuyr@gmail.com');
        let a = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[6]')
        await a.click()
        await expect(await loginPage.email.isExisting()).toBe(false)// проверка на то что елемента нет на странице 
        await login_page.enter_password('Aa123456!')
        await a.click()
        await expect(await loginPage.Password.isExisting()).toBe(false)// проверка на то что елемента нет на странице 

    })



})

