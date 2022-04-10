//const PDFDocument = require('pdfkit');
//const fs = require('fs');

import PDFDocument from 'pdfkit'
import fs from 'fs'

//import select_random_image from './GetRandomImage.js'

//console.log("getting random image")
//const afb1 = await select_random_image()
//const afb2 = await select_random_image()


//console.log("got image", afb1, afb2)

const fontSizes = {
  XL: Math.random() * 75 + 20,
  L: Math.random() * 55 + 18,
}

const generate_pdf = (list_of_images, texts) => {

  // Create a document
  const doc = new PDFDocument({
    //size: 'A0'
    margin: 0
  });

  // Pipe its output somewhere, like to a file or HTTP response
  // See below for browser usage
  doc.pipe(fs.createWriteStream('OUTPUT/output_' + new Date().getTime() + '.pdf'));

  for (var image of list_of_images) {
    console.log(image);

    doc.image(image, Math.random() * 200, Math.random() * 600, { width: 300 })
  }

  for (var textObj of texts) {
    console.log(textObj);

    //doc.image(image, Math.random() *200, Math.random() *600, { width: 300 })
    doc
      .font('FONTS/Space_Mono/SpaceMono-Regular.ttf')
      .fontSize(fontSizes[textObj.fontSize])
      .text(textObj.text, Math.random() * 200, Math.random() * 600);
  }

  //doc.image(afb1, 0, 15, { width: 300 })
  //doc.image(afb2, 60, 15, { width: 300 }).stroke()




  doc.end();
  console.log("done")

}

export default generate_pdf