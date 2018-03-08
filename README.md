# node-red-contrib-uibuilder-react
A React.js templated dashboard for Node-RED. Built on uibuilder.

#What is it?
node-red-contrib-uibuilder-react is built on uibuilder.
UIBuilder is used to deliver the page and manage the websocket communications.
Use React as normal, and build when the site is ready.

# How to use?

`npm install`
`npm start`



# To install from scratch
1. From scratch, install node-red and uibuilder.
2. Create a uibuilder node name it react_ui and deploy (you can choose automatic creation of .html and .css files)
3. 'cd uibuilder'
4. mkdir src
5. 'cd src'
6. Install react in here (https://reactjs.org/tutorial/tutorial.html)
npm install -g create-react-app
create-react-app my-app
7. cd my-applicable
8. IMPORTANT, in your react package file, add ``"hostpage":"/react_ui"``
9. In your setting file of node-red, add the following:
10. `uibuilder: {
        userVendorPackages: ['reactjs'],
        debug: true
    },`
