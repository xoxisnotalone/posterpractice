//requiring path and fs modules
// var path = require('path');
// var fs = require('fs');

import path from "path"
import fs from "fs"


//joining path of directory 
var directoryPath = path.resolve('ASCI/IMG');


const select_random_ascii = () => {
    return new Promise((resolve, reject) => {
        //passsing directoryPath and callback function
        fs.readdir(directoryPath, function (err, files) {
            //handling error
            if (err) {
                reject(err)
                return console.log('Unable to scan directory: ' + err);
            }
            const filtered = []

            //listing all files using forEach
            files.forEach(function (file) {
                // Do whatever you want to do with the file
                if (file != ".DS_Store")
                    filtered.push(file)
            });
            const random = filtered[Math.floor(Math.random() * filtered.length)]
            resolve(directoryPath + "/" + random)
        });
    });
}


export default select_random_ascii
