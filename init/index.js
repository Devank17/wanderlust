const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const mongoUrl = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then((res) => {
    console.log(`Connected to Database`);
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6756c33389e8b3aa9a4fe821",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

initDB();
