export interface DAO<T, K> {
  getAll(): Promise<T[]>;
  getById(id: K): Promise<T | null>;
  update(id: K, object: T): Promise<T>;
  delete(id: K): Promise<boolean>;
  save(object: T): Promise<T>;
}