# React Gallery app

React Gallery app is an image library that allow users to retrieve images that are tag with specific category of the web using the Flickr API. It is built with [React](https://reactjs.org/).

To complete this project, I used : 

- [Create React App](https://github.com/facebook/create-react-app) to initiate the project.
- JavaScript and JSX to build out the gallery components needed in a modular fashion.
- React Router to set up routes for three default topic pages as well as the search component.
- Axios to fetch data from the Flickr API and use it to display images in your app.
- And added logic to handle the search and various requirements of the project.

### Instruction on testing out this project on your own computer

1. Click on the arrow down of the green button of the project to expand it.
2. Once expanded, click on download.
3. Unzip the Download folder then open your terminal on your computer, 
3. From the terminal, navigate to the project directory
4. type npm install to install the project dependencies

5. get to an [***apikey***](https://www.flickr.com/services/apps/create/apply/) from the Flickr. 
  - Open your code editor, create a file named ***config.js*** in the src folder. 
    - Add the code below in the config.js file by replacing the Xs with you with your actual API key then save.
    
    ```
    const apikey = "xxxxxxxxxxxxxxxx";
    export default apikey;
    ```
    
6. in the terminal of your computer run "npm start" to start/lunch the App. 
  - Running npm start should open your web browser and lunch the App. If it did not, open your web browser then type 'localhost:3000' to start the App.
