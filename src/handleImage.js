"use strict";


export default function handleImage(readAs) {
    readAs = readAs || 'DataUrl';
    var readAsName = `readAs${readAs}`;
    return function handleImage$promise(file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onerror = reject;
            reader.onload = function (evt) {
                var src = evt.target.result, image = new Image();
                image.onerror = reject;
                image.onload = function () {
                    resolve({
                        name: file.name,
                        type: file.type,
                        height: image.height,
                        width: image.width,
                        size: file.size,
                        lastModified: file.lastModified,
                        data: src
                    });
                }
                image.src = src;
            };
            reader[readAsName](file);
        });
    }
}