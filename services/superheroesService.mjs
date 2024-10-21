import SuperheroesRepository from "../persistence/superheroesRepository.mjs";
const repository = new SuperheroesRepository();

export function obtenerSuperheroes() {
  return repository.obtenerTodos();
}

export function obtenerSuperheroePorId(id) {
  const superheroes = repository.obtenerTodos();
  return superheroes.find((superheroe) => superheroe.id === id);
}

export function agregarSuperheroe(datos) {
  const superheroes = repository.obtenerTodos();
  const nuevoSuperheroe = { id: superheroes.length + 1, ...datos };
  superheroes.push(nuevoSuperheroe);
  repository.guardar(superheroes);
  return nuevoSuperheroe;
}

export function actualizarSuperheroe(id, datos) {
  const superheroes = repository.obtenerTodos();
  const superheroe = superheroes.find((superheroe) => superheroe.id === id);
  if (superheroe) {
    Object.assign(superheroe, datos);
    repository.guardar(superheroes);
    return true;
  }
  return false;
}

export function eliminarSuperheroe(id) {
  const superheroes = repository.obtenerTodos();
  const nuevaLista = superheroes.filter((superheroe) => superheroe.id !== id);
  if (superheroes.length !== nuevaLista.length) {
    repository.guardar(nuevaLista);
    return true;
  }
  return false;
}

export function buscarSuperheroesPorAtributo(atributo, valor) {
  const superheroes = repository.obtenerTodos();
  return superheroes.filter((superheroe) =>
    String(superheroe[atributo]).toLowerCase().includes(valor.toLowerCase())
  );
}

export function obtenerSuperheroesMayoresDe30YConFiltros() {
  const superheroes = repository.obtenerTodos();
  return superheroes.filter(
    (superheroe) =>
      superheroe.edad > 30 &&
      superheroe.planetaOrigen === "Tierra" &&
      superheroe.poderes.length >= 2
  );
}
