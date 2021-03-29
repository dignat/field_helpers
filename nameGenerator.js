'use strict'
module.exports.nameGenerator = function (str, slices, idKey) {
    let regex = str.replace(/[\d,&,-/_?():.]/g,"").toLowerCase();
    let strArray = regex.split(' ');
    let idModifier = idKey ?? 'Id';
    if (strArray.length > 1) {
        if (slices.length > 0) {
            switch(slices.length) {
                case 1:
                    return strArray[slices[0]+idModifier];
                    break;
                case 2:
                    return strArray[slices[0]].concat(strArray[slices[1]].charAt(0).toUpperCase()+strArray[slices[1]].slice(1))+idModifier;
                    break;
                case 3:
                    return strArray[slices[0]].concat(strArray[slices[1]].charAt(0).toUpperCase()+strArray[slices[1]].slice(1)+strArray[slices[2]].charAt(0).toUpperCase()+strArray[slices[2]].slice(1))+idModifier;
                    break;
                case 4:
                    return strArray[slices[0]].concat(strArray[slices[1]].charAt(0).toUpperCase()+strArray[slices[1]].slice(1)+strArray[slices[2]].charAt(0).toUpperCase()+strArray[slices[2]].slice(1)+strArray[slices[3]].charAt(0).toUpperCase()+strArray[slices[3]].slice(1))+idModifier;
                    break;

            }
        } else {
            return strArray[0].concat(strArray[1].charAt(0).toUpperCase()+strArray[1].slice(1))+idModifier;
        }
    } else {
        return strArray[0]+idModifier;
    }

}