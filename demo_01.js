import generate_pdf from './GeneratePDF.js'
import {select_random_image} from './GetRandomImage.js'
import select_random_ascii from './GetRandomASCII.js'

// lijst maken

const list_images = []

// zoeken op internet: loop array n times


  for (let i = 0; i < 3; i++) {
    const afb = await select_random_image()
    list_images.push(afb)
  } 

  for (let i = 0; i < 3; i++) {
    const afb = await select_random_ascii()
    list_images.push(afb)
  } 
// n keer afbeelding maken en toevoegen aan de lijst

let txts= []

txts.push({text: "My Title", fontSize: "XL"})
txts.push({text: "My Subtitle 1", fontSize: "L"})
txts.push({text: "My Subtitle 2", fontSize: "L"})
txts.push({text: "My Subtitle 3", fontSize: "L"})

generate_pdf(list_images, txts)