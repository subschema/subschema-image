"use strict";
import React, {Component} from 'react';
import Subschema, {loader, Form} from 'Subschema';
import image from '../src';

/**
 * This adds the GSuggests Processor.
 */
loader.addType(image.types);
loader.addTemplate(image.templates);

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
