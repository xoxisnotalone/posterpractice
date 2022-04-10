//requiring path and fs modules
// var path = require('path');
// var fs = require('fs');

import path from "path"
import fs from "fs"

import image_invert from "./ImageInvert.js"

//joining path of directory 


const select_random_ascii = () => {
    var directoryPath = path.resolve('ASCI/IMG');
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

const select_random_image = () => {
var directoryPath = path.resolve('IMAGE');
return new Promise((resolve, reject) => {
        //passsing directoryPath and callback function
        fs.readdir(directoryPath, async function (err, files) {
            //handling error
            if (err) {
                reject(err)
                return console.log('Unable to scan directory: ' + err);
            }
            const filtered = []

            //listing all files using forEach
            files.forEach(function (file) {
                // Do whatever you want to do with the file
                if (file != ".DS_Store") {
                    filtered.push(file)
                }
            });
            let random = directoryPath + "/" + filtered[Math.floor(Math.random() * filtered.length)]
            
            if (Math.random() < 0.3333) {
                random = await image_invert(random)
                console.log("NEG FILE!!", random)
            } else {
                console.log("NOT gonna NEG FILE!!")
            }
            
            resolve(random)
        });
    });
}


export {
    select_random_image, select_random_ascii
}