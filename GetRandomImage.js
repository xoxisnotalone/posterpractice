//requiring path and fs modules
// var path = require('path');
// var fs = require('fs');

import path from "path"
import fs from "fs"

import image_invert from "./ImageInvert.js"

//joining path of directory 
var directoryPath = path.resolve('IMAGE');


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

const select_random_image = () => {
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
            files.forEach(async function (file) {
                // Do whatever you want to do with the file
                if (file != ".DS_Store") {

                    if (Math.random() < 0.3333) {
                        console.log("gonna NEG FILE!!", file)
                        const neg_file = await image_invert(directoryPath + "/" + file)
                        console.log("NEG FILE!!", neg_file)
                        filtered.push(neg_file)
                    } else {

                        console.log("NOT gonna NEG FILE!!", file)
                        filtered.push(file)
                    }


                }

            });
            const random = filtered[Math.floor(Math.random() * filtered.length)]
            resolve(directoryPath + "/" + random)
        });
    });
}


export {
    select_random_image, select_random_ascii
}