import sharp from "sharp";


export default (afb) => {
    const new_file = './.tmp/' + new Date().getTime() + ".png"
    return new Promise((resolve, reject) => {
        sharp(afb)
        .negate({
            alpha: false
        })
            .toFile(new_file, function (err) {
                if (err) {
                    console.log("err sharp", err)
                    reject(err)

                }
                    resolve(new_file)
                // output.jpg is a 300 pixels wide and 200 pixels high image
                // containing a scaled and cropped version of input.jpg
            });
    });
}


