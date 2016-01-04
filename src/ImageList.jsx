"use strict";
import React,{Component} from 'react';
import {PropTypes, types, tutils} from 'Subschema';
var {List} = types;

var {...copyDefaultProps} = List.defaultProps;
var {...copyPropTypes} = List.propTypes;

export default class ImageList extends Component {
    static inputClassName = List.inputClassName;
    static defaultProps = tutils.extend(copyDefaultProps, {
        canEdit: true,
        canReorder: true,
        canDelete: true,
        contentTemplate: 'ImageContent',
        readAs: "DataURL",
        image: "Image",
        itemType: {
            type: 'Object',
            subSchema: {
                data: {
                    type: 'Image'
                },
                name: 'Text'
            }
        }
    });

    static propTypes = tutils.extend(copyPropTypes, {
        readAs: PropTypes.oneOf(['ArrayBuffer', 'BinaryString', 'DataURL', 'Text']),
        image: PropTypes.type
    });

    render() {
        var {readAs, image,   ...rest} = this.props;
        var Image = image;
        return <div>
            <Image type="file" multiple={true} name={`${this.props.name}-input`} src={this.props.placeholder}
                   onChange={this.props.onChange} multiple={true}/>
            <List {...rest} />
        </div>
    }
}