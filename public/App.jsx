"use strict";
import React, {Component} from 'react';
import Subschema, {loader, Form} from 'Subschema';
import imageloader from 'subschema-image';

loader.addLoader(imageloader);

//A simple Schema for this configuration
var schema = {
    schema: {
        image: {
            "type": "Image",
            "help": "Single Image"
        },
        images: {
            "type": "ImageList",
            "help": "Multiple Images"
        },
        dropMultiple: {
            "type": "ImageDrop",
            "help": "Drop images"
        },
        dropSingle: {
            "type": "ImageDrop",
            "help": "Drop images",
            "multiple": false
        }

    }
}

export default class App extends Component {

    render() {
        return <div>
            <h3>Subschema Image Type</h3>
            <Form schema={schema}/>
        </div>
    }
}
