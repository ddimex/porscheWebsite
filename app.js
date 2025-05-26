const express = require("express");
const controller = require("./controller/controller");

const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", controller.getIndex);
app.get("/home", controller.getIndex);
app.get("/models", controller.getModels);
    app.get("/718", controller.get718);
    app.get("/911", controller.get911);
    app.get("/panamera", controller.getPanamera);
    app.get("/taycan", controller.getTaycan);

app.get("/gallery", controller.getGallery);
app.post("/gallery", controller.postGallery);


app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("server started successfully on port 10000");
});
