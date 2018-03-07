# node-red-contrib-uibuilder-react
A React.js templated dashboard for Node-RED. Built on uibuilder.

#What is it?
node-red-contrib-uibuilder-react is built on uibuilder.
UIBuilder is used to deliver the page and manage the websocket communications.
Use React as normal, and build when the site is ready.

#How to use?

##This exemple contain an exemple of a webix component.
1. `cd uibuilder/react_ui/src/react_webix`
2. `npm install`
	`npm run build`
	You will need to install `npm install -g create-react-app`.
	Also, make sure that the 'hostname' in your package.json is set to `/react_ui`.
	React is hosted by node-red and the build command have to know where it will be located.
3. Create a symlink of the build folder to /uibuilder/react/src
	`ln -s uibuilder/react_ui/src/react_webix/build uibuilder/react_ui/dist`
4. Install node-red `npm install` and start it `npm start`
4. Your UI is located: `localhost:1880/react_ui`


#From scratch
1. From scratch, install node-red and uibuilder.
2. Create a uibuilder node name it react_ui and deploy (you can choose automatic creation of .html and .css files)
3. 'cd uibuilder'
4. mkdir src
5. 'cd src'
6. Install react in here (https://reactjs.org/tutorial/tutorial.html)
npm install -g create-react-app
create-react-app my-app
7. cd my-applicable
8. IMPORTANT, in your react package file, add "hostname":"/react_ui"
9. In your setting file of node-red, add the following:
10. `uibuilder: {
        userVendorPackages: ['reactjs'],
        debug: true
    },`
