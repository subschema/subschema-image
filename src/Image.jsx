"use strict";
import React,{Component} from 'react';
import {PropTypes, types, tutils} from 'Subschema';
import handleImage from './handleImage';
import PreviewImage from './PreviewImage';
var asArray = Function.call.bind(Array.prototype.slice);
var {Text} = types;

export default class Image extends Component {
    static propTypes = {
        onChange: PropTypes.valueEvent,
        readAs: PropTypes.string,
        multiple: PropTypes.bool,
        previewTemplate: PropTypes.template
    }
    static defaultProps = {
        readAs: "DataURL",
        multiple: false,
        previewTemplate: 'PreviewImage'
    }

    handleChange = (e)=> {
        if (!(e.target.files && e.target.files.length > 0)) {
            return;
        }
        Promise.all(asArray(e.target.files).map(handleImage(this.props.readAs))).then(this._handleChange);
    }
    _handleChange = (files)=> {
        if (this.props.multiple) {
            this.props.onChange(files);
        } else {
            this.props.onChange(files[0]);
        }
    }

    render() {
        var {value,readAs, multiple, name} = this.props;
        var inputName = `${name}-input`;
        value = value && value.data ? value : {data: value} || {data: this.props.placeholder}
        var isMissing = !value.data;
        return <div>
            <Text type="file" name={inputName} id={inputName} style={{display:'none'}} multiple={multiple}
                  onChange={this.handleChange}/>
            <label className='image-label' htmlFor={inputName}>
                <PreviewImage src={multiple ? this.props.placeholder : value.data} height="50" width="50"/>
            </label>
        </div>
    }

}