# Detox Coding Sample

## Instructions

You'll write two test suites. One for various login cases and another for navigating through the "App Flow".

Wherever possible, use `testID` instead of finding elements by text.

## Login Test Suite

In `e2e/login.test.js` write a suite of test cases for the following login scenarios.

- If a user inputs an invalid email address, an Alert should pop up with a message and should be dismissed by pressing 'Okay'
- If a user inputs an invalid password, an Alert should pop up with a message and should be dismissed by pressing 'Okay'
- If a user inputs valid email and password, the app should navigate to the Characters screen. Assert that the user's email is in the `Welcome` message. For example, if you login with bob@test.com, "Welcome bob@test.com!" should be found on the Characters screen

## App Flow Test Suite

Create a new file: `e2e/app-flow.test.js`

Write a test suite with the following test cases:

- Login with a valid username and password
- Scroll in the character list until the "Obi-wan Kenobi" tile is visible and tap on it to view the character details
- When the character details screen loads, assert that the loading indicator is visible
- Assert that all of the fields have the correct values:
  - height: '182'
  - mass: '77'
  - hair_color: 'auburn, white'
  - skin_color: 'fair'
  - eye_color: 'blue-gray'
  - birth_year: '57BBY'
  - gender: 'male'
  - homeworld: https://swapi.dev/api/planets/20/
  - created: '2014-12-10T16:16:29.192000Z'
  - edited: '2014-12-20T21:17:50.325000Z'
  - url: https://swapi.dev/api/people/10/

## Tips

- Using the right detox [action method](https://wix.github.io/Detox/docs/api/actions/#methods) for the job will make things a lot easier
- There are a number of different [assertion methods](https://wix.github.io/Detox/docs/api/expect#methods) that will be helpful
- Setting good testIDs is key, especially when you're working with `FlatList` and `ScrollView` and the items in them.
- You may need to wait for things to appear. Some detox `timeout` methods can help
- In one case, you'll likely need to add a `testID` to a component's TypeScript prop types
- You can do any sort of transformation you want to make a unique `testID`.
  For example, "testID={${value.toLowerCase().strip()}`}"
