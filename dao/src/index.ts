import { TrainerDTO } from "./trainer/trainer.dto";
import { TrainerRepository } from "./trainer/repository/trainer.repository";
import { MongoConnection } from "./database";

(async () => {
  const connection = await MongoConnection.connect();
  if (!connection) {
    process.exit(0);
  }

  const _trainer: TrainerDTO = {
    name: "Ash",
    ciudad: "Paleta",
    edad: 25,
  };
  
  const trainerRepository: TrainerRepository = new TrainerRepository();
  // trainerRepository.save(_trainer)?.then(console.log);
  const trainers = await trainerRepository.getAll();
  console.log(trainers);
})();
