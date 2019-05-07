# Counter App

A simple counter app using React

## Author

Liz Mahoney

## Overview

For this assignment, you will be creating a simple counter application that uses this.setState and this.state to update and capture the state of a displayed counter each time that a button is clicked. For example, if the "+" button is clicked, the displayed counter will increment by 1. If the "-" button is clicked, the counter will decrement by 1.

# Time Estimate

```
Number and name of feature: Add Counter Feature

Estimate of time needed to complete: 1 hr

Start time: 9:00am

Finish time: 930am

Actual time needed to complete: 30 mins
```

## Requirements
Create the following components, all within your app.js file.

```
 <App>
```
Should contain your `<Counter>` component and should be wrapped in `<React.Fragment>`. The component hierarchy should looks as follows:

```
<App>
  <Counter>
<Counter>
Should contain the following state:
this.state = {
  count: 0,
};

```

Should contain a <p> element that contains the current number of clicks against your counter. On initialization, it should start with/display "0".
Should contain a button that displays a "+" for incrementing the counter. On click, the count property on your state should update/increment by 1 and the <p> element referenced above should display the result.
Should contain a button that displays a "-" for decrementing the counter. On click, the count property on your state should update/decrement by 1 and the <p> element referenced above should display the result.

## In the project directory, you can run 
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
