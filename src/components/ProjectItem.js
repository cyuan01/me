import React, { Component } from 'react';
import '../App.css';
import {FiLink2} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'

export default class ProjectItem extends Component {
  render() {
    return (
      
      <div className="projectItem">
        {/* <a href="https://realtimesports.io" target="_blank" className="projectButton" onCick={()=>{}}> */}
          <p className='subTitleLg CG'>{this.props.title}</p>
          <p className = "content CB">
            {this.props.desc}
          </p>
          <div style={{display: 'flex'}}>
            {
              this.props.links.map((link)=> {
                return (
                  <a href={link.href} target="_blank">
                    <p className="CA link">
                      {link.type == 'gen' ? <FiLink2 /> : <FiGithub />}
                    </p>
                  </a>
                )
              })
            }
          </div>

            {/* <Tags /> */}
            <div style={{width: '65%', alignItems: 'center'}}>
              {
                this.props.tags.map((tag, index) => {
                  return (
                    <p className={tag.active ? "tagActive skill" : "tag skill"}>{tag.skill}</p>
                  )
                })
              }
            </div>
            {/* </a> */}
      </div>
    );
  }
}
