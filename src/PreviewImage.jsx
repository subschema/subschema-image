"use strict";
import React, {Component} from 'react';
import {PropTypes} from 'Subschema';
import PreviewImageLess from './PreviewImage.less';

export default class PreviewImage extends Component {
    static propTypes = {
        className: PropTypes.cssClass
    };

    static defaultProps = {
        className: ''
    };

    render() {
        var backgroundImage = this.props.src ? `url(${this.props.src})` : '';
        return <div className={this.props.className}
                    style={{backgroundImage}}
                    className={'preview-image '+this.props.className}
        ></div>
    }
}