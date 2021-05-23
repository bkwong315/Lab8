# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
   1. 1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   1. You wouldn't test the message feature using a unit test because the message feature interacts with other components on an application level. Unit testing cannot test this level of interaction.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
   1. You would use a unit test to test the "max message length" feature because it does not require interaction with other parts of the application. It something that is easy to test on a small scale.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
   1. If we run our Puppeteer tests with the field "headless" set to true, then the Chromium browser will not appear when running the tests. In other words, it will run the tests without the browser ui.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
   1. ```JavaScript
         // Code that uses page.goto inside the beforeEach
         beforeAll(async () => {
            beforeEach(async () => {
            await page.goto('http://127.0.0.1:5500');
            await page.click('header img');
          })
       });
       
   1. ```JavaScript
         // Code that doesn't use page.goto inside the beforeEach
         beforeAll(async () => {
            await page.goto('http://127.0.0.1:5500');
            beforeEach(async () => {
            await page.click('header img');
          })
       });
      ```
      
