# Field Name Helpers

### Introduction

Field Name helpers is a small library (for now ) just with two function.
1. nameGenerator(str, slices, idKey) - accepts three non mandatory arguments.

a)str - the string from to generate a field name

b) slices - array (indexed slices from the string) -example some long name -> slices would be [0,1,2] and result came case name someLongName

    let name = "some name";
    const modifiedName = nameGenerator(name,[],null)
    modifiedName= "someName";

if you leave the slices array empty it will create by default a name from the first two indexes of the string
2. uniqueFieldName(items) - accepts array of objects which must have as a key name.

#Installation

    npm install --save field_name_helper

#Licence

This project is licensed under the terms of the MIT license.