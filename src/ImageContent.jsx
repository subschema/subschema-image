"use strict";
import React,{Component} from 'react';
import {PropTypes, types} from 'Subschema';
import ImageContentLess from './ImageContent.less';
var {Text, List} = types;

export default class Image extends Component {
    //(pos, val, pid)
    handleClick = (e)=> {
        e && e.preventDefault();
        this.props.onClick(this.props.pos, this.props.value.value, this.props.pid);
    }

    render() {
        var {value} = this.props.value;
        value = value || {};
        return <span className={`${this.props.className || ''} clearfix image-container`} onClick={this.handleClick}>
            <div className='image-bg' style={{
                backgroundImage:`url('${value.data}')`,
            }}/>
            <span className="image-content">
                <span className="image-name">{value.name}</span>
                <span className="image-info">size: {value.size} {value.height}px x {value.width}px</span>
            </span>
        </span>
    }

}