import express from "express";
import cors from "cors";
import dataSource from "./utils";
import wilderController from "./controller/WilderController";
import skillController from "./controller/SkillController";
import gradeController from "./controller/GradeController";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world from express");
});

app.post("/api/wilder", wilderController.create);
app.get("/api/wilder", wilderController.read);
app.put("/api/wilder/:id", wilderController.update);
app.delete("/api/wilder/:id", wilderController.delete);

app.post("/api/skill", skillController.create);
app.get("/api/skill", skillController.read);
app.delete("/api/skill/:id", skillController.delete);
app.put("/api/skill/:id", skillController.update);

app.post("/api/grade", gradeController.create);

// app.put("/api/addskills", wilderController.addSkills);

const start = async (): Promise<void> => {
  await dataSource.initialize();

  app.listen(5000, () => {
    console.log("Server started");
  });
};

void start();
