import SuperheroesRepository from "../persistence/superheroesRepository.mjs";
import Superheroe from "../models/superheroe.mjs";

const repository = new SuperheroesRepository();

export function obtenerSuperheroePorId(id) {
  const superheroes = repository.obtenerTodos();
  return superheroes.find((superheroe) => superheroe.id === id);
}

export function buscarSuperheroesPorAtributo(atributo, valor) {
  const superheroes = repository.obtenerTodos();
  return superheroes.filter((superheroe) =>
    String(superheroe[atributo]).toLowerCase().includes(valor.toLowerCase())
  );
}

export function obtenerSuperheroesMayoresDe30() {
  const superheroes = repository.obtenerTodos();
  return superheroes.filter(
    (superheroe) =>
      superheroe.edad > 30 &&
      superheroe.planetaOrigen === "Tierra" &&
      superheroe.poderes.length >= 2
  );
}

// ===================================================
// ======== Funciones adicionales - obsoletas ========
// ===================================================
export function obtenerSuperheroes() {
  return repository.obtenerTodos();
}

export function agregarSuperheroe(
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
) {
  // Generar id. Debe ser reemplazado por un generador de claves UUID
  const id = Date.now();
  const superheroes = repository.obtenerTodos();
  const nuevoSuperheroe = new Superheroe(
    id,
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
  if (nuevoSuperheroe.validar() == false) {
    return false;
  }
  superheroes.push(nuevoSuperheroe);
  repository.guardar(superheroes);
  return nuevoSuperheroe;
}

export function actualizarSuperheroe(id, datos) {
  const superheroes = repository.obtenerTodos();
  const superheroeData = superheroes.find((superheroe) => superheroe.id === id);
  if (!superheroeData) {
    return false;
  }
  const superheroe = new Superheroe(...Object.values(superheroeData));
  superheroe.actualizarDatos(datos);
  if (superheroe.validar() == false) {
    return false;
  }
  Object.assign(superheroeData, superheroe);
  repository.guardar(superheroes);
  return true;
}

export function eliminarSuperheroe(id) {
  const superheroes = repository.obtenerTodos();
  const nuevaLista = superheroes.filter((superheroe) => superheroe.id !== id);
  if (superheroes.length === nuevaLista.length) return false;

  repository.guardar(nuevaLista);
  return true;
}
