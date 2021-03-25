module.exports.uniqueFieldName = function (items) {
    if (items.length > 1) {
        let arrayOfNames = items.map((item) => item.name);
        arrayOfNames = arrayOfNames.filter((item) => item !== "");
        return arrayOfNames.some((item, index) => arrayOfNames.indexOf(item) !== index)
    }
}