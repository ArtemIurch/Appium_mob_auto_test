{
  "platformName": "Android",
  "appium:deviceName": "R58M361RWAP",
  "appium:automationName": "UiAutomator2",
  "appium:appPackage": "io.archrival.field.qa",
  "appium:appActivity": "io.archrival.field.MainActivity",
  "appium:noReset": true
}

adb devices

appium --allow-cors

 capabilities: [{
        platformName: 'Android',
        'appium:platformVersion': '11.0',
        'appium:deviceName': 'R58M361RWAP',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'io.archrival.field.qa',
        'appium:appActivity': 'io.archrival.field.MainActivity',
        'appium:noReset': true,
        'appium:fullReset': false,
    }],

запустить тесты - npx wdio run wdio.conf.js
    

 capabilities: [{
        platformName: 'Android',
        'appium:platformVersion': '15.0',
        'appium:deviceName': 'emulator-5554',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'io.archrival.field.qa',
        'appium:appActivity': 'io.archrival.field.MainActivity',
        'appium:noReset': true,
        'appium:fullReset': false,
    }],

{
  "platformName": "Android",
  "appium:deviceName": "emulator-5554 ",
  "appium:automationName": "UiAutomator2",
  "appium:appPackage": "io.archrival.field.qa",
  "appium:appActivity": "io.archrival.field.MainActivity",
  "appium:noReset": true
}


appium --port 4723 --allow-cors
appium --port 4725 --allow-cors


    hostname: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',

//////////////////////////////////////////////////////////////////////////
для запуска на 2х емулятора
1 - надо удалить с конфига 
  hostname: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
2- вставить это значение 
capabilities: [
        {
            platformName: 'Android',
            'appium:platformVersion': '15.0',
            'appium:deviceName': 'emulator-5554',
            "appium:udid": "emulator-5554",
            'appium:automationName': 'UiAutomator2',
            'appium:appPackage': 'io.archrival.field.qa',
            'appium:appActivity': 'io.archrival.field.MainActivity',
            'appium:noReset': true,
            'appium:fullReset': false
        },
        {
            platformName: 'Android',
            'appium:platformVersion': '15.0',
            'appium:deviceName': 'emulator-5556',
            "appium:udid": "emulator-5556",
            'appium:automationName': 'UiAutomator2',
            'appium:appPackage': 'io.archrival.field.qa',
            'appium:appActivity': 'io.archrival.field.MainActivity',
            'appium:noReset': true,
            'appium:fullReset': false
        }
    ],
3 - вставить 
 services: [
        ['appium', { args: { port: 4723 } }], // для первого устройства
        ['appium', { args: { port: 4725 } }], // для второго устройства
],

4 - запустить 2 сервера 
appium --port 4723 --allow-cors
appium --port 4725 --allow-cors

....................................
для поиска елементов - https://inspector.appiumpro.com