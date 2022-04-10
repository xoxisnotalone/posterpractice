import generate_pdf from './GeneratePDF.js'
import {select_random_image, select_random_ascii} from './GetRandomImage.js'

// lijst maken

let list_images = []

// zoeken op internet: loop array n times


  for (let i = 0; i < 4; i++) {
    const afb = await select_random_image()
    list_images.push(afb)
  } 

  for (let i = 0; i < 3; i++) {
    const afb = await select_random_ascii()
    list_images.push(afb)
  } 
// n keer afbeelding maken en toevoegen aan de lijst

let txts= []

txts.push({text: "DATALISP", fontSize: "XL"})
txts.push({text: "A B C D E ABCDE", fontSize: "L"})
txts.push({text: "A B C D E ABCDE", fontSize: "L"})
txts.push({text: "A B C D E ABCDE", fontSize: "L"})
txts.push({text: "A B C D E ABCDE", fontSize: "L"})
txts.push({text: "My Subtitle 2", fontSize: "L"})
txts.push({text: "My Subtitle 3", fontSize: "L"})

generate_pdf(list_images, txts)

list_images = null