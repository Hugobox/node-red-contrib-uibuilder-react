# node-red-contrib-uibuilder-react
A React.js templated dashboard for Node-RED. Built on uibuilder.

#What is it?
node-red-contrib-uibuilder-react is built on uibuilder. 
UIBuilder is used to deliver the page and manage the websocket communications.
Use React as normal, and build when the site is ready.

#How to use?


1. Open a terminal in `uibuilder/my-react/`
2. execute the command
	npm run build
You will need to install `npm install -g create-react-app`. Also, make sure that the 'hostname' in your package.json is set to '/react'. React is hosted by node-red and the build command have to know where it will be located.
3. Create a link of the build folder to /uibuilder/react/src
	`ln -s node-red-contrib-uibuilder-react/uibuilder/my-react react/src`
4. start node-red and go to `localhost:1880/react`
