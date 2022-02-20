import mongoose from 'mongoose';
import 'dotenv/config';
import fs from 'fs';
import { DonutModel } from './frontend/database/schemas/donut_schema';

mongoose.connect("mongodb+srv://dronuts:" + process.env.MONGO_PASSWORD + "@cluster0.qbzmg.mongodb.net/dronutsDB?retryWrites=true&w=majority");

const donutPrice = 1.69
const imageDir = './frontend/src/assets/';

// Delete all donuts so we don't get duplicates.
DonutModel.deleteMany({}, addFiles);

function addFiles() {
  fs.readdir(imageDir, (err, files) => {
    let numImages = 0;
    files.forEach((fileName, i) => {
      // Reformat the file names from donutName.jpg to 'donut name' and
      // 'Donut Name'.
      const removeUnderscore = fileName.replace(/_/g, " ");
      const noJpg = removeUnderscore.slice(0, removeUnderscore.length - 4);
      const capitalized = noJpg.split(" ").map((word) => {
          return word[0].toUpperCase() + word.substring(1);
      }).join(" ");
      const donut = new DonutModel({
        name: capitalized,
        price: donutPrice,
        imageurl: imageDir + fileName,
        description: "A nice " + noJpg + " donut"
      })
      // Save all donuts to the database and close the connection when the last
      // finishes.
      donut.save().then((value) => {
        numImages++;
        if (numImages == files.length) {
          mongoose.connection.close();
        }
      });
      console.log(donut);
    });
  });
}
