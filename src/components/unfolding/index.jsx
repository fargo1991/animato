import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Unfolding extends React.Component{
  state = {
    opacity:0
  }

  constructor(){
    super()
    this.renderChildren = this.renderChildren.bind(this)
  }

  renderChildren(){
    const cloned =
      React.cloneElement(this.props.children, {
        style : { opacity : this.state.opacity },
        id : 'amt-unfolding-child'
      })

    return cloned
  }

  el = null;

  componentDidMount(){

    console.log('componentDidMount')
    console.log(document.getElementById("123").clientWidth)

  }

  render(){


    if(this.state.opacity == 0) {
      var timer;
      timer = setInterval(() => {
        let opacity = this.state.opacity += 0.1;
        // console.log(opacity)
        if (opacity >= 1.0) {
          clearInterval(timer);
          return false;
        }
        this.setState({opacity})
      }, 100);
    }


    // console.log (document.getElementById('amt-unfolding-child') ? document.getElementById('amt-unfolding-child').clientWidth : 'render');
    setTimeout( () => {
      document.getElementById('amt-unfolding-child').style.width = "50px";
    }, 500)


    return(
      <div className="amt-unfolding" id = "123">
        <div className="amt-unfolding-animator">
          { this.renderChildren() }
        </div>
      </div>)

  }

}

export default Unfolding