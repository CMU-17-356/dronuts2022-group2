/**
 *  Populates the DB with the donuts by adding each donut in
 *  frontend/src/assets/ to the database.
 *
 *  Run with ts-node makeDB.ts.
 */
import mongoose from 'mongoose';
import 'dotenv/config';
import fs from 'fs';
import { DonutModel, Donut} from './frontend/database/schemas/donut_schema';

const uri = 'mongodb+srv://dronut:' + process.env.MONGO_PASSWORD + '@cluster0.gasy8.mongodb.net/Cluster0?retryWrites=true&w=majority'
mongoose.connect(uri, {}, () => {console.log("connected")});

const donutPrice = 1.69;
const imageDir = './frontend/src/assets/';

// Delete all donuts so we don't get duplicates.
DonutModel.deleteMany({}, addDonuts);

/** Add all donuts to the database  */
function addDonuts() {
  fs.readdir(imageDir, async (err, files) => {
    let numImages = 0;
    files.forEach(async (fileName, i) => {
      // Reformat the file names from donutName.jpg to 'donut name' and
      // 'Donut Name'.
      const removeUnderscore = fileName.replace(/_/g, ' ');
      const noJpg = removeUnderscore.slice(0, removeUnderscore.length - 4);
      const capitalized = noJpg.split(' ').map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      }).join(' ');
      const donut = new DonutModel({
        name: capitalized,
        price: donutPrice,
        imageurl: imageDir + fileName,
        description: 'A nice ' + noJpg + ' donut',
      });
      console.log(donut)
      // Save all donuts to the database and close the connection when the last
      // finishes.
      await donut.save().then((value) => {
        numImages++;
        if (numImages == files.length) {
          mongoose.connection.close();
        }
        console.log('success');
      }).catch(e => console.log(e));
    });
  });
}
