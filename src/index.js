"use strict";

import {loaderFactory} from 'Subschema';
import Image from './Image';
import ImageList from './ImageList';
import PreviewImage from './PreviewImage.jsx';
import ImageContent from './ImageContent.jsx';
import ImageDrop from './ImageDrop.jsx';

const loader = loaderFactory();

loader.addType({
    Image,
    ImageList,
    ImageDrop
});

loader.addTemplate({
    PreviewImage,
    ImageContent
});

export default loader;
