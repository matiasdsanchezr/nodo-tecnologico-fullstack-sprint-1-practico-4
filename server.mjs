import express from "express";
import {
  obtenerTodosLosSuperheroes,
  obtenerSuperheroePorIdController,
  agregarNuevoSuperheroe,
  actualizarSuperheroePorId,
  eliminarSuperheroePorId,
  buscarSuperheroesPorAtributoController,
  obtenerSuperheroesMayoresDe30Controller,
} from "./controllers/superheroesController.mjs";

const app = express();
app.use(express.json());
const PORT = 3005;

app.get("/superheroes/id/:id", obtenerSuperheroePorIdController);
app.get("/superheroes/atributo/:atributo/:valor", buscarSuperheroesPorAtributoController);
app.get("/superheroes/edad/MayorA30", obtenerSuperheroesMayoresDe30Controller);

// Obsoleto
app.get("/superheroes", obtenerTodosLosSuperheroes);
app.post("/superheroes", agregarNuevoSuperheroe);
app.put("/superheroes/:id", actualizarSuperheroePorId);
app.delete("/superheroes/:id", eliminarSuperheroePorId);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
