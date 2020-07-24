import React, { Component } from 'react';
import '../App.css';


export default class Skills extends Component {
  render() {
    return (
      <div className="centered" style={{display: 'flex', flexDirection: 'column'}}>
          <p className='subTitleLg CG'>Skills</p>
          <div style={{}}>
          {
                Object.keys(this.props.skills).map((skill, index) => {
                  return (
                    <p 
                        className={this.props.skills[skill].active ? "tagActive skill" : "tag skill"} 
                        onClick={()=>this.props.handleClick(skill)}
                    >
                            {skill}
                    </p>
                  )
                })
            }
          </div>
      </div>
    );
  }
}
