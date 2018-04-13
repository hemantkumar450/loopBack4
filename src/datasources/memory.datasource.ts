import { DataSourceConstructor, DataSourceType } from '@loopback/repository';
import * as path from 'path';

const config = {
  connector: require('loopback-connector-mongodb'),
  host: 'localhost',
  port: 27017,
  database: 'mySample',
}

export const dataSource: DataSourceType = new DataSourceConstructor(config);
