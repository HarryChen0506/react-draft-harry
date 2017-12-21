//我的富文本编辑器组件
import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import DropDown from '../../component/common/DropDown';
// import 'draft-js/dist/Draft.css'
import './MyEditor.css';
import '../../assets/icon/icon.css';

const styleMap = {
    'FONTSIZE-36':{
        fontSize: 36
    }
};

class MyEditor extends React.Component{
    constructor(...args){
        super(...args);
        this.state = {
            editorState: EditorState.createEmpty()
        }           
    }
    componentDidMount(){
        // console.log(this.state);   
        // console.log('RichUtils',RichUtils);        
    }
    onChange(editorState){
        this.setState({
            editorState: editorState
        })
    }
    _onBoldClick(){
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));       
    }
    _onFontSizeClick(){
         this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'FONTSIZE-36'));
    }
    render(){
        return (      
            <div className="editor-root">
                <div style={{padding:10}}>
                    {/*<button onClick={this._onBoldClick.bind(this)}>粗体</button>
                    <button onClick={this._onFontSizeClick.bind(this)}>36号字体</button>*/}
                    <DropDown>
                        <div className="dropdown-content">
                            <i className="dropdown-arrow arrow"></i>
                            <ul className="editor-font-sizes-wrap">
                                <li data-size="12">12px</li>
                                <li data-size="14">14px</li>
                                <li data-size="16">16px</li>
                                <li data-size="18">18px</li>
                                <li data-size="20">20px</li>
                                <li data-size="24">24px</li>
                                <li data-size="28">28px</li>
                                <li data-size="30">30px</li>
                                <li data-size="32">32px</li>
                                <li data-size="36">36px</li>
                                <li data-size="40">40px</li>
                                <li data-size="48">48px</li>
                                <li data-size="56">56px</li>
                                <li data-size="64">64px</li>
                                <li data-size="72">72px</li>
                                <li data-size="96">96px</li>
                                <li data-size="120">120px</li>
                                <li data-size="144">144px</li>
                            </ul>
                        </div>
                    </DropDown>
                </div>
                <Editor 
                    editorState={this.state.editorState} 
                    onChange={this.onChange.bind(this)} 
                    customStyleMap={styleMap}
                />   
            </div>
        )
    }
}
export default MyEditor;