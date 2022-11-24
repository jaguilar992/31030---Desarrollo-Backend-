import { DAO } from "../daos/dao.interface";
import { TrainerDAOFactory } from "../daos/trainer";
import { TrainerDTO } from "../trainer.dto";

export class TrainerRepository {
  private dao: DAO<TrainerDTO, string> | null;
  constructor () {
    this.dao = TrainerDAOFactory.getDAO();
  }
  public getAll(){
    return this.dao?.getAll();
  }

  public getById(id: string) {
    return this.dao?.getById(id);
  }

  public update(id: string, object: TrainerDTO) {
    return this.dao?.update(id, object);
  }

  public save(object: TrainerDTO) {
    return this.dao?.save(object);
  }

  public delete (id: string) {
    return this.dao?.delete(id);
  }
}