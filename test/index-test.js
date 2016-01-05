import index from 'subschema-image';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

describe('index', ()=> {

    ['Image', 'ImageList', 'ImageDrop'].forEach((type)=> {
        it(`should load type: ${type}`, ()=>expect(index.loadType(type)).toExist(`${type} should be found in loader`))
    });

    ['PreviewImage', 'ImageContent'].forEach((type)=> {
        it(`should load template: ${type}`, ()=>expect(index.loadTemplate(type)).toExist(`${type} should be found in loader`))
    });

});
