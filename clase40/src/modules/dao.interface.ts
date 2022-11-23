import { TrainerDTO } from "./trainer/trainer.dto";

// Generics <Tipo, TipoId>
export interface DAOInterface <Tipo, TipoId> {
  [x: string]: any;
  getAll();
  getById(id: TipoId);
  save(object: Tipo);
  update(id: TipoId, object: Tipo);
  delete(id: TipoId);
}