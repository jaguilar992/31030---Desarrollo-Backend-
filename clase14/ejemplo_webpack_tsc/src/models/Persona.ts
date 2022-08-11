export default class Persona {
  private nombre: string;
  private apellido: string;

  constructor(nombre: string, apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getApellido(): string {
    return this.apellido;
  }

  public getFullName(): string {
    return this.nombre + ' ' + this.apellido;
  }
}