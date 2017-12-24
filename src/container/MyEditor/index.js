//我的富文本编辑器组件
import React from 'react';
import {Editor, EditorState, SelectionState, RichUtils, convertFromRaw, convertToRaw, Modifier} from 'draft-js';
import { convertToHTML, convertFromHTML } from 'draft-convert'
import DropDown from '../../component/common/DropDown';
import defaultOptions from '../../config/options.js';
// import 'draft-js/dist/Draft.css'
import './MyEditor.css';
import '../../assets/icon/icon.css';

class MyEditor extends React.Component{
    constructor(...args){
        super(...args);
        this.state = {
            editorState: EditorState.createEmpty()
        }  
        this.options = {};
        this._initOptions();
        this.styleMap = this._initStyleMap(this.options);
       
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
    _onGetContent(){
        const contentState = this.state.editorState.getCurrentContent();
        console.log('raw', convertToRaw(contentState));
        console.log('html', convertToHTML({
                                styleToHTML: (style) => {
                                    style = style.toLowerCase();
                                    if (style.indexOf('fontsize-'===0)) {
                                        return <span style={{fontSize: style.split('-')[1] + 'px'}} />;
                                    }
                                }
                            })(contentState));        
    }
    _initOptions(){
        this.options = this.props.options|| defaultOptions;
        return this.options
    }
    _initStyleMap(options){
        let styleMap = {};
        for(var key in options){
            if(key==='fontSizes'){
                // console.log('key', key, options[key])
                options[key].forEach((v,i)=>{
                    const fontSizeKey = 'FONTSIZE-'+v;
                    styleMap[fontSizeKey] = {
                        fontSize: v
                    }
                })
            }
        }
        return styleMap
    }
    _onSelectFontSize(v){
        const FONTSIZE = 'FONTSIZE-'+v;
        // removeInlineStyle
        //         removeInlineStyle(
        //   contentState: ContentState,
        //   selectionState: SelectionState,
        //   inlineStyle: string
        // ): ContentState
        const selectionState = this.state.editorState.getSelection();
        console.log('selectionState',selectionState)
        Modifier.removeInlineStyle(
            this.state.editorState.getCurrentContent(),
            selectionState,
            'FONTSIZE-40'
        )
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, FONTSIZE)); 
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
                                {this.options.fontSizes.map((v,i)=>(
                                     <li data-size={v} 
                                         key={i}
                                         onClick={ ()=>{ this._onSelectFontSize.bind(this)(v) } }
                                     >{v}px</li>
                                ))}
                            </ul>
                        </div>
                    </DropDown>
                    <button onClick={this._onGetContent.bind(this)}>预览</button>
                </div>
                <Editor 
                    editorState={this.state.editorState} 
                    onChange={this.onChange.bind(this)} 
                    customStyleMap={this.styleMap}
                />   
            </div>
        )
    }
}
export default MyEditor;