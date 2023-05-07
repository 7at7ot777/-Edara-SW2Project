import { EntityRepository, Repository } from 'typeorm';
import { Model } from './model';
import { User } from "./User";

//Repository<User>.extends(Model)
@EntityRepository(Model)
export class ModelRepository<T extends Model> extends Repository<T> {}
