//我的富文本编辑器组件
import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
// import 'draft-js/dist/Draft.css'

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
        console.log('RichUtils',RichUtils);  
    }
    onChange(editorState){
        this.setState({
            editorState: editorState
        })
    }
    _onBoldClick(){
        // this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'FONTSIZE-36'));
        // this.toggleSelectionInlineStyle('FONTSIZE-' + fontSize, this.fontSizeList.map(item => 'FONTSIZE-' + item))
        // console.log(this.state.editorState)        
    }
    render(){
        return (      
            <div>
                <div style={{padding:10}}>
                    <button onClick={this._onBoldClick.bind(this)}>粗体</button>
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