import {
  obtenerSuperheroes,
  obtenerSuperheroePorId,
  agregarSuperheroe,
  actualizarSuperheroe,
  eliminarSuperheroe,
  buscarSuperheroesPorAtributo,
  obtenerSuperheroesMayoresDe30,
} from "../services/superheroesService.mjs";

import {
  renderizarSuperheroe,
  renderizarListaSuperheroes,
} from "../views/responseView.mjs";

export function obtenerSuperheroePorIdController(req, res) {
  const { id } = req.params;
  const superheroe = obtenerSuperheroePorId(parseInt(id));
  if (superheroe) {
    res.send(renderizarSuperheroe(superheroe));
  } else {
    res.status(404).send({ mensaje: "Superhéroe no encontrado" });
  }
}

export function buscarSuperheroesPorAtributoController(req, res) {
  const { atributo, valor } = req.params;
  const superheroes = buscarSuperheroesPorAtributo(atributo, valor);
  res.send(renderizarListaSuperheroes(superheroes));
}

export function obtenerSuperheroesMayoresDe30Controller(req, res) {
  const superheroes = obtenerSuperheroesMayoresDe30();
  res.send(renderizarListaSuperheroes(superheroes));
}

// ===================================================
// ======== Funciones adicionales - obsoletas ========
// ===================================================

export function obtenerTodosLosSuperheroes(req, res) {
  const superheroes = obtenerSuperheroes();
  res.send(renderizarListaSuperheroes(superheroes));
}

export function agregarNuevoSuperheroe(req, res) {
  const {
    nombreSuperHeroe,
    nombreReal,
    nombreSociedad,
    edad,
    planetaOrigen,
    debilidad,
    poderes,
    habilidadEspecial,
    aliados,
    enemigos,
  } = req.body;

  const nuevoSuperheroe = agregarSuperheroe(
    nombreSuperHeroe,
    nombreReal,
    nombreSociedad,
    edad,
    planetaOrigen,
    debilidad,
    poderes,
    habilidadEspecial,
    aliados,
    enemigos
  );
  if (nuevoSuperheroe == false) {
    res.status(400);
    res.send("Los datos del nuevo superhéroe son invalidos");
    return;
  }
  res.send(nuevoSuperheroe);
}

export function actualizarSuperheroePorId(req, res) {
  const { id } = req.params;
  const datos = req.body;
  const resultado = actualizarSuperheroe(parseInt(id), datos);
  res.send(resultado ? "Superhéroe actualizado" : "Superhéroe no encontrado");
}

export function eliminarSuperheroePorId(req, res) {
  const { id } = req.params;
  const resultado = eliminarSuperheroe(parseInt(id));
  res.send(resultado ? "Superhéroe eliminado" : "Superhéroe no encontrado");
}
