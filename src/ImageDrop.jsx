"use strict";

import React,{Component} from 'react';
import {PropTypes} from 'Subschema';
import handleImage from './handleImage';
import Dropzone from 'react-dropzone';

const map = Function.call.bind(Array.prototype.map);

export default class ImageDrop extends Component {
    static propTypes = {
        onChange: PropTypes.valueEvent,
        readAs: PropTypes.string,
        multiple: PropTypes.bool,
        message: PropTypes.string,
        previewTemplate: PropTypes.template
    };
    static defaultProps = {
        readAs: "DataURL",
        multiple: true,
        message: "Try dropping some files here, or click to select files to upload.",
        previewTemplate: 'PreviewImage'
    };

    handleChange = (files)=> {
        Promise.all(map(files, handleImage(this.props.readAs))).then(this._handleChange);
    };

    _handleChange = (files)=> {
        if (this.props.multiple) {
            var {value} = this.props;
            this.props.onChange(value ? value.concat(files) : files);
        } else {
            this.props.onChange(files[0]);
        }
    };

    renderImages() {
        var {value,multiple,previewTemplate} = this.props;
        var PreviewImage = previewTemplate;
        if (value == null) return null;
        value =  multiple ? value : [value];
        return value.map((img, k)=> {
            var data = img && img.data ? img.data : img;
            return <PreviewImage key={`preview-image-${k}`} src={data}
                                 className={multiple ? 'image-drop-mutiple' : 'image-drop-single'}/>
        });
    }

    render() {
        var {message,value, multiple} = this.props;

        return <div className="image-drop">
            <Dropzone onDrop={this.handleChange} multiple={multiple}>
                {(!value || multiple) ? <div>{message}</div> : this.renderImages()}
            </Dropzone>
            <div className="image-drop-container">
                {multiple ? this.renderImages() : null}
            </div>
        </div>
    }

}