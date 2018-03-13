import React, { Component } from 'react';
import $ from 'jquery'; //make sure you have jquery as dependency in package.json
//import './uibuilderfe.min.js'

class Uibuiler extends Component {


	render() {
	  return (
		<div ref="root" style={{height:"50vh"}}></div>
	  );
	}
  componentDidMount() {
	//let uibuilderFunct = $.fn.
    // let owlCarousel = $.fn.owlCarousel; //accessing jquery function
    // let magnificPopup = $.fn.magnificPopup; //accessing jquery function
	//
    // $('.owl-carousel').owlCarousel({ //call directly on mount
    // });
	//
    // $('.popup-gallery').magnificPopup({
    // });
  }
}
export default Uibuiler




// constructor() {
// super();
// }
//
// handleToggle = () => {
// 	const el = findDOMNode(this.refs.toggle);
// 	$(el).slideToggle();
// };
