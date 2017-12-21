// 下拉按钮组件

import React from 'react';
import { UniqueIndex } from '../../../util/tool.js'

class DropDown extends React.Component{
    constructor(...args){
        super(...args); 
        this.state = {
            active: false
        }
        this.componentId = 'drop-down-'+UniqueIndex();
    }
    componentDidMount(){
        document.body.addEventListener('click', (event) => {
            this.registerClickEvent(event)
        })
        
    }
    componentWillUnmount(){
        document.body.removeEventListener('click', (event) => {
            this.registerClickEvent(event)
        })
    }
    registerClickEvent(event){
        if(event.target.dataset.editorComponentId!==this.componentId){
            //非当前点击元素
            this.setState({
                active: false
            })           
        }
    }
    handleActive(e){
        this.setState({
            active: !this.state.active
        })
    }
    render(){         
        return(           
            <div className={'editor-dropdown editor-font-size-dropdown '+(this.state.active?'active':'')}
                 onClick={this.handleActive.bind(this)} 
            >
                <button className="dropdown-handler">
                    <span                         
                        data-editor-component-id={this.componentId} 
                        className="dropdown-word">字号
                    </span>
                    <i className="icon-chevron-down"></i>
                </button>
                {React.Children.map(this.props.children, child => {
                    return child
                })}                    
            </div>
        ) 
    }
}
export default DropDown;
