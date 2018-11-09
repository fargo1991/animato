import React from 'react';
import './components.css';

import Unfolding from '../../../components/unfolding';

class Components extends React.Component{

  components = [
    { name : 'Unfolding' , component : Unfolding }
  ]

  render(){

    return(
      <div className="components-container">
        { this.components.map( component =>
          <div className="component-wrapper"  key={component.name}>
            <div className="component-wrapper-header">
              { component.name }
            </div>
            <div className="component-container">
              {
                <component.component>
                  <div className="example"
                       // style={{ width : 200, height : 200, overflow : 'hidden', overflowText: 'ellipsis', margin : 'auto', marginTop : 25, border : 'solid 1px #ccc'}}
                  >
                    <h4 style={{ padding : '10px 20px 10px 20px', backgroundColor : "#c9c9c9", margin : 0}}>Title</h4>
                    <hr style={{ border: 'none', backgroundColor :"#ccc", height : 1, margin : 0}}/>
                    <p style={{ padding : '10px 20px 10px 20px'}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ... </p>
                  </div>
                </component.component>
              }
            </div>
          </div> )}
      </div>
    )

  }

}

export default Components