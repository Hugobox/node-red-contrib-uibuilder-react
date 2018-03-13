/* React stuff */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

import uibuilder from '../../components/uibuilder/uibuilderfe.js'
//import uibuilder from 'node-red-contrib-uibuilder'
//import uibuilder from './uibuilderfe.min.js'

//import uibuilder from './components/uibuilder/uibuilderfe.js'

// import * as data from '../../assets/data/data.js';

/* external libs */
import 'webix/webix.js';
import 'webix/webix.css';

/* component */
//import WebixTree from '../../components/WebixTree/'

/* styles */
//import './styles.sass'

class UserData extends Component {
    //uibuilder.get('msgsReceived')
	//console.info('REACT: test', 'msgsReceived')
    render() {
      return (
        <div ref="root" style={{height:"50vh"}}></div>
      );
    }

    componentDidMount(){
      var tree = {
        view:"tree", id:"tree", gravity: 0.6,
        select:true
      };

      var grid = {
        view:"datatable", id:"grid", autoConfig:true,
        scroll:false,
        select:true
      };

      this.ui = window.webix.ui({
        cols:[
          tree,
          { view:"resizer" },
          grid
        ],
        isolate:true,

        container:ReactDOM.findDOMNode(this.refs.root)
      });

	  // As noted, we could get the msg here too
      uibuilder.onChange('msgsReceived', function(newVal){
          console.info('REACT: New msg sent to us from Node-RED over Socket.IO. Total Count: ', newVal)
          //$('#msgsReceived').text(newVal)
          // uibuilder.msg is a shortcut for uibuilder.get('msg')
          //$('#showMsg').text(JSON.stringify(uibuilder.msg))
      })

	  var data_grid = [
	  	{ id:1, title:"The Shawshank Redemption", year:1994, votes:678790 },
	  	{ id:2, title:"The Godfather", year:1972, votes:511495 },
	  	{ id:3, title:"The Godfather: Part II", year:1974, votes:319352 },
	  	{ id:4, title:"The Good, the Bad and the Ugly", year:1966, votes:213030 },
	  	{ id:5, title:"My Fair Lady", year:1964, votes:533848 },
	  	{ id:6, title:"12 Angry Men", year:1957, votes:164558 }
	  ];

	  var data_tree = [
	      {id:"root", value:"Films data", open:true, data:[
	  		{ id:"1", open:true, value:"The Shawshank Redemption", data:[
	  			{ id:"1.1", value:"Part 1" },
	  			{ id:"1.2", value:"Part 2", data:[
	  				{ id:"1.2.1", value:"Page 1" },
	  				{ id:"1.2.2", value:"Page 2" },
	  				{ id:"1.2.3", value:"Page 3" },
	  				{ id:"1.2.4", value:"Page 4" },
	  				{ id:"1.2.5", value:"Page 5" }
	  			]},
	  			{ id:"1.3", value:"Part 3" }
	  		]},
	  		{ id:"2", open:true, value:"The Godfather", data:[
	  			{ id:"2.1", value:"Part 1" },
	  			{ id:"2.2", value:"Part 2" }
	  		]}
	  	]}
	  ];

      this.ui.$$("tree").parse(data_tree)
      this.ui.$$("grid").parse(data_grid)
    }

    componentWillUnmount(){
      this.ui.destructor();
      this.ui = null;
    }

    shouldComponentUpdate(){
    	// as component is not linked to the external data, there is no need in updates
      return false;
    }

}

export default UserData
