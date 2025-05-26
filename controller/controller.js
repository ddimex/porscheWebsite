const cars = require("../models/cars");
const imagesArr = [];

const getIndex = async (req, res) => {
  res.render("index", { imagesArr });
};

const getModels = async (req, res) => {
  res.render("models");
};

const getGallery = (req, res) => {
    res.render("gallery", { imagesArr });
  };

  const postGallery = (req, res) => {
    const newImage = req.body.input;
    imagesArr.push(newImage);
    res.redirect("/gallery");
};

const get718 = async (req, res) => {
    const data = await cars.list();
    const cars718 = data.filter(car => car.title.startsWith("Cayman")); 
    res.render("718", { cars: cars718 }); 
}

const get911 = async (req, res) => {
    const data = await cars.list();
    const cars911 = data.filter(car => car.title.startsWith("911")); 
    res.render("911", { cars: cars911 }); 
}

const getPanamera = async (req, res) => {
    const data = await cars.list();
    const carsPanamera = data.filter(car => car.title.startsWith("Panamera")); 
    res.render("panamera", { cars: carsPanamera }); 
}

const getTaycan = async (req, res) => {
    const data = await cars.list();
    const carsTaycan = data.filter(car => car.title.startsWith("Taycan")); 
    res.render("taycan", { cars: carsTaycan }); 
}

module.exports = {
  getIndex,
  getModels,
  getGallery,
  postGallery,
  get718,
  get911,
  getPanamera,
  getTaycan,
};
