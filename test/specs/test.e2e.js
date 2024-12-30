import { expect, browser, $ } from '@wdio/globals'
import loginPage from '../../pages/login_page'

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await browser.url(`https://the-internet.herokuapp.com/login`)

//         await $('#username').setValue('tomsmith')
//         await $('#password').setValue('SuperSecretPassword!')
//         await $('button[type="submit"]').click()

//         await expect($('#flash')).toBeExisting()
//         await expect($('#flash')).toHaveText(
//             expect.stringContaining('You logged into a secure area!'))
//     })
// })
describe('Пример теста', () => {
    it('должен открыть приложение', async () => {
      
      await browser.pause(4000)
      await $('//android.widget.EditText[@text="Enter your email"]').setValue('artemiuyr@gmail.com')
      await $('//android.widget.EditText[@text="Enter your password"]').setValue('Aa123456!')
      
      await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[6]').click()
      await $('//android.view.View[@text="Home"]').isDisplayed()// находим елемен по тексту 
      await $('//android.widget.Button[@content-desc="Profile, tab, 5 of 5"]').click()
      const element = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup');
      await element.scrollIntoView();
      await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup').click()
      
    
    
      await browser.pause(8000)
      await driver.terminateApp('io.archrival.field.qa'); // закрываем апку 

    });
    it('должен открыть приложение', async () => {
      await browser.pause(4000)
     let a = await $('android.widget.EditText')
     console.log(await a.getText()); // получитьтекст с елемента
     await expect(a).toHaveText('Enter your email')// асершен который сравнивает что у нас есть текст 

     const contexts = await driver.getContexts();
     
      console.log(contexts);
     await driver.terminateApp('io.archrival.field.qa'); // закрываем апку 

    });



    it('должен открыть приложение', async () => {
      await browser.pause(4000)
    //  await $('//*[@text="Log in"]').click()// поиск по тексту
      const a = '//*[@text="Enter your email"]'
      let b = '//*[@text="Enter your password"]'
      let c = '//*[@text="Log in"]'
      let d = '//*[@text="123"]'
      let cv = '//android.widget.ScrollView'

      await $(a).addValue('123')
      await $(d).addValue('artemiuyr@gmail.com')//добавить заначение в конец елемента 
      await $(b).setValue('Aa123456!')// стирает значание и вставляетсвое 
      await $(c).click()
      await browser.pause(6000)

       let test = await $('//android.widget.TextView[@text="new edit new edit new editnew edit new edit new edit new edit"]')
      await test.scrollIntoView();
       console.log(await test.getText());
 
       await expect(test).toHaveText('new edit new edit new editnew edit new edit new edit new edit')// асершен который сравнивает что у нас есть текст 
      
    });

    it('проверка когда елемент появиться на екране', async () => {
      await browser.pause(4000)
    //  await $('//*[@text="Log in"]').click()// поиск по тексту
      const a = '//*[@text="Enter your email"]'
      let b = '//*[@text="Enter your password"]'
      let c = '//*[@text="Log in"]'
      let d = '//*[@text="123"]'
      let cv = '//android.widget.Button[@content-desc="Schedule, tab, 4 of 5"]'

      await $(a).addValue('artemiuyr@gmail.com')//добавить заначение в конец елемента 
      await $(b).setValue('Aa123456!')// стирает значание и вставляетсвое 
      await $(c).click()
      await $(cv).waitForDisplayed({timeout:6000})// дожидаемся появление лемента 
      await $(cv).click()

    });
    it('делаем скриншот', async () => {
      await browser.pause(4000)
    //  await $('//*[@text="Log in"]').click()// поиск по тексту
      const a = '//*[@text="Enter your email"]'
      let b = '//*[@text="Enter your password"]'
      let c = '//*[@text="Log in"]'
      let d = '//*[@text="123"]'
      let cv = '//android.widget.Button[@content-desc="Schedule, tab, 4 of 5"]'
      let part = '//android.widget.ScrollView/android.view.ViewGroup'

      await $(a).addValue('artemiuyr@gmail.com')//добавить заначение в конец елемента 
      await $(b).setValue('Aa123456!')// стирает значание и вставляетсвое 
      await $(c).click()
      await $(cv).waitForDisplayed({timeout:6000})// дожидаемся появление лемента 
      await $(cv).click()
      await browser.pause(1000);
      await browser.saveScreenshot('./screenshot/appi.png')// делаем скриншот всей страницы
      await $(part).saveScreenshot('./screenshot/part.png')// делаем скриншот отдельного елемента 
    });


    it('скролинг вертикальный', async () => {
      await browser.pause(4000);
  
      // Авторизация
      const emailField = '//*[@text="Enter your email"]';
      const passwordField = '//*[@text="Enter your password"]';
      const loginButton = '//*[@text="Log in"]';
  
      await $(emailField).addValue('artemiuyr@gmail.com');
      await $(passwordField).setValue('Aa123456!');
      await $(loginButton).click();
      await browser.pause(6000);
  
      // Выполнение свайпа для скроллинга
      await browser.performActions([{
          type: 'pointer',
          id: 'finger1',
          parameters: { pointerType: 'touch' },
          actions: [
              { type: 'pointerMove', duration: 0, x: 500, y: 1900 }, // Начало свайпа
              { type: 'pointerDown' },
              { type: 'pointerMove', duration: 1000, x: 500, y: 100 }, // Перемещение вверх
              { type: 'pointerUp' }
          ]
      }]);
  });
  
  it('скролинг горизонтальный', async () => {
    await browser.pause(4000);

    // Авторизация
    const emailField = '//*[@text="Enter your email"]';
    const passwordField = '//*[@text="Enter your password"]';
    const loginButton = '//*[@text="Log in"]';

    await $(emailField).addValue('artemiuyr@gmail.com');
    await $(passwordField).setValue('Aa123456!');
    await $(loginButton).click();
    await browser.pause(6000);

    // Выполнение свайпа для скроллинга
    await browser.performActions([{
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
            { type: 'pointerMove', duration: 0, x: 918, y: 500 }, // Начало свайпа
            { type: 'pointerDown' },
            { type: 'pointerMove', duration: 1000, x: 205, y: 500 }, // Перемещение вверх
            { type: 'pointerUp' }
        ]
    }]);
});


it('скролинг горизонтальный на странице(переход на другую пейджу)', async () => {
  await browser.pause(4000);

  // Авторизация
  const emailField = '//*[@text="Enter your email"]';
  const passwordField = '//*[@text="Enter your password"]';
  const loginButton = '//*[@text="Log in"]';

  //await $(emailField).addValue('artemiuyr@gmail.com');
  await loginPage.wait_till_page_is_loaded()// дожидаемся что страница загрузилась и потом выполняем все остальные действия чтобы не ждать каждый отдельный елемент
  await loginPage.mail.addValue('artemiuyr@gmail.com')
  await $(passwordField).setValue('Aa123456!');
  await $(loginButton).click();
  await browser.pause(6000);
  await $('//android.widget.Button[@content-desc="Profile, tab, 5 of 5"]').click()
  await browser.pause(2000);

  // Выполнение свайпа для скроллинга
  await browser.performActions([{
      type: 'pointer',
      id: 'finger1',
      parameters: { pointerType: 'touch' },
      actions: [
          { type: 'pointerMove', duration: 0, x: 999, y: 500 }, // Начало свайпа
          { type: 'pointerDown' },
          { type: 'pointerMove', duration: 1000, x: 105, y: 500 }, // Перемещение вверх
          { type: 'pointerUp' }
      ]
  }]);
});
  

it.only('работаем с ожиданиями, експектами', async () => {
  await browser.pause(4000);

  // Авторизация
  const elem = await $('//*[@text="Enter your email"]')

  const emailField = '//*[@text="Enter your email"]';
  const passwordField = '//*[@text="Enter your password"]';
  const loginButton = '//*[@text="Log in"]';

  //await $(emailField).addValue('artemiuyr@gmail.com');
  await loginPage.wait_till_page_is_loaded()// дожидаемся что страница загрузилась и потом выполняем все остальные действия чтобы не ждать каждый отдельный елемент
  await loginPage.mail.addValue('artemiuyr@gmail.com')
  //await expect(elem).toHaveText('artemiuyr@gmail.com')
  await loginPage.check_text(elem, 'artemiuyr@gmail.com')

});
  });

  

  
