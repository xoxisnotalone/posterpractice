//const PDFDocument = require('pdfkit');
//const fs = require('fs');

import PDFDocument from 'pdfkit'
import fs from 'fs'

//import select_random_image from './GetRandomImage.js'

//console.log("getting random image")
//const afb1 = await select_random_image()
//const afb2 = await select_random_image()


//console.log("got image", afb1, afb2)
const fonts = [
  'FONTS/Space_Mono/SpaceMono-Regular.ttf',
  'FONTS/datalisp.otf',
]

const font = () => {
//'FONTS/Space_Mono/SpaceMono-Regular.ttf'

  return fonts[Math.floor(Math.random() * fonts.length)]

}

const fontSizes = {
  XL: Math.random() * 75 + 20,
  L: Math.random() * 55 + 18,
  M: Math.random() * 35 + 16,
  S: Math.random() * 15 + 16,

}

const generate_pdf = (list_of_images, texts) => {

  // Create a document
  const doc = new PDFDocument({
    size: 'A2',
    margin: 0
  });

  // Pipe its output somewhere, like to a file or HTTP response
  // See below for browser usage
  doc.pipe(fs.createWriteStream('OUTPUT/output_' + new Date().getTime() + '.pdf'));



  for (var image of list_of_images) {
    console.log(image);

    doc.image(image, Math.random() * 1200, Math.random() * 1600, { width: 300 })
  }

  for (var textObj of texts) {
    console.log(textObj);

    //doc.image(image, Math.random() *200, Math.random() *600, { width: 300 })
    doc
      .font(font())
      .fontSize(fontSizes[textObj.fontSize])
      .text(textObj.text, Math.random() * 200, Math.random() * 600);
  }

  //doc.image(afb1, 0, 15, { width: 300 })
  //doc.image(afb2, 60, 15, { width: 300 }).stroke()
  doc.lineWidth(25);
/*
  // line cap settings
  doc.lineCap('butt')
     .moveTo(50, 20)
     .lineTo(100, 20)
     .stroke();
  
  doc.lineCap('round')
     .moveTo(150, 20)
     .lineTo(200, 20)
     .stroke();
  
  // square line cap shown with a circle instead of a line so you can see it
  doc.lineCap('square')
     .moveTo(250, 20)
     .circle(275, 30, 15)
     .stroke();
  
  // line join settings
  doc.lineJoin('miter')
     .rect(50, 100, 50, 50)
     .stroke();
  
  doc.lineJoin('round')
     .rect(150, 100, 50, 50)
     .stroke();
  
  doc.lineJoin('bevel')
     .rect(250, 100, 50, 50)
     .stroke();

  doc.moveTo(0, 20)                               // set the current point
  .lineTo(100, 160)                            // draw a line
  .quadraticCurveTo(130, 200, 150, 120)        // draw a quadratic curve
  .bezierCurveTo(190, -40, 200, 200, 300, 150) // draw a bezier curve
  .lineTo(400, 90)                             // draw another line
  .stroke(); 
*/
  doc.end();
  console.log("done")

}

export default generate_pdf