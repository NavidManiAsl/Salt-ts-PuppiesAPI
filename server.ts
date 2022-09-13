import mongoose from 'mongoose';
import dotenv from 'dotenv'
import app from './app';
dotenv.config()




const {USER_NAME,PASS,PORT}=process.env


mongoose.connect(`mongodb+srv://${USER_NAME}:${PASS}@cluster0.0bskaek.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully to the database");
  app.listen(PORT, (): void => {
    console.log(`app listening on port ${PORT}`);
  });
});



