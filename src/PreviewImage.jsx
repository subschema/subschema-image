"use strict";
import React, {Component} from 'react';
import {PropTypes} from 'Subschema';
import PreviewImageLess from './PreviewImage.less';

export default class PreviewImage extends Component {
    static propTypes = {
        width: PropTypes.string,
        height: PropTypes.string,
        className: PropTypes.cssClass
    };
    static defaultProps = {
        width: '50px',
        height: '50px',
        className: 'preview-image'
    }

    render() {
        var backgroundImage = this.props.src ? `url(${this.props.src})` : '';
        return <div className={this.props.className}
                    style={{backgroundImage}}
                    className={'preview-image'}
        ></div>
    }
}