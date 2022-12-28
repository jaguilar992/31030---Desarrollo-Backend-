export interface Pokemon {
  _id: {$oid: string}
  id: number;
  name: string;
  type: string;
}