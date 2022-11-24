import { model, Schema, Types } from "mongoose";

export interface TrainerDTO {
  name: string;
  edad: number;
  ciudad: string;
  _id?: Types.ObjectId;
  pokemons: any[];
}