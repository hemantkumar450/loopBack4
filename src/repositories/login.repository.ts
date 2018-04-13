import { DefaultCrudRepository, DataSourceType } from '@loopback/repository';
import { Login } from '../models';
import { inject } from '@loopback/context';

export class LoginRepository extends DefaultCrudRepository<Login, string> {
  constructor(@inject('dataSources.memory') dataSource: DataSourceType) {
    super(Login, dataSource);
  }
}
