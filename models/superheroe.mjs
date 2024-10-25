export default class Superheroe {
  constructor(
    id,
    nombreSuperHeroe,
    nombreReal,
    nombreSociedad,
    edad,
    planetaOrigen,
    debilidad,
    poderes = [],
    habilidadEspecial,
    aliados = [],
    enemigos = []
  ) {
    this.id = id;
    this.nombreSuperHeroe = nombreSuperHeroe;
    this.nombreReal = nombreReal;
    this.nombreSociedad = nombreSociedad;
    this.edad = edad;
    this.planetaOrigen = planetaOrigen;
    this.debilidad = debilidad;
    this.poderes = poderes;
    this.habilidadEspecial = habilidadEspecial;
    this.aliados = aliados;
    this.enemigos = enemigos;
  }

  // Método para agregar un nuevo poder al superhéroe
  agregarPoder(poder) {
    this.poderes.push(poder);
  }

  // Método para agregar un aliado
  agregarAliado(aliado) {
    this.aliados.push(aliado);
  }

  // Método para agregar un enemigo
  agregarEnemigo(enemigo) {
    this.enemigos.push(enemigo);
  }

  actualizarDatos(datos) {
    if (datos.hasOwnProperty("nombreSuperHeroe")) {
      this.nombreSuperHeroe = datos.nombreSuperHeroe;
    }
    if (datos.hasOwnProperty("nombreReal")) {
      this.nombreReal = datos.nombreReal;
    }
    if (datos.hasOwnProperty("nombreSociedad")) {
      this.nombreSociedad = datos.nombreSociedad;
    }
    if (datos.hasOwnProperty("edad")) {
      this.edad = datos.edad;
    }
    if (datos.hasOwnProperty("planetaOrigen")) {
      this.planetaOrigen = datos.planetaOrigen;
    }
    if (datos.hasOwnProperty("debilidad")) {
      this.debilidad = datos.debilidad;
    }
    if (datos.hasOwnProperty("aliados")) {
      this.aliados = datos.aliados;
    }
  }

  // Método para validar la información de un superhéroe
  validar() {
    if (!Number.isInteger(this.id)) {
      return false;
    }
    if (this.nombreSuperHeroe == null) {
      return false;
    }
    if (this.nombreReal == null) {
      return false;
    }
    if (this.nombreSociedad == null) {
      return false;
    }
    if (this.edad == null || !Number.isInteger(this.edad)) {
      return false;
    }
    if (this.planetaOrigen == null) {
      return false;
    }
    if (this.debilidad == null) {
      return false;
    }
    if (!Array.isArray(this.poderes)) {
      return false;
    }
    if (this.habilidadEspecial == null) {
      return false;
    }
    if (!Array.isArray(this.aliados)) {
      return false;
    }
    if (!Array.isArray(this.enemigos)) {
      return false;
    }
    return true;
  }
}
