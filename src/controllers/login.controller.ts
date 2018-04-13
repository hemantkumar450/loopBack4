import { api } from '@loopback/rest';
import { def } from './login.controller.api';
import { LoginRepository } from '../repositories';
import { repository } from '@loopback/repository';
import { Login } from '../models';
import { Filter, Where } from '@loopback/repository/src/query';
import { json } from 'body-parser';
let jwt = require('jsonwebtoken')

@api(def)
export class LoginController {
  constructor(
    @repository('LoginRepository')
    private loginRepository: LoginRepository,
  ) { }

  async getLogin(userName: string, password: string) {
    let tokenReturn = {
      userName: userName,
      token: null,
      status: 401,
      description: 'failed'
    }
    let response = await this.loginRepository.findOne({ where: { userName: userName } });
    console.log(response.password);
    if (response.password === password) {
      tokenReturn.token = jwt.sign({}, 'conQsys');
      tokenReturn.status = 200;
      tokenReturn.description = 'success';
      tokenReturn.userName = userName
      return tokenReturn;
    };
    return tokenReturn;
  }

  async createlogin(loginInstance: {
    userName: string;
    password: string;
  }): Promise<Login> {
    return await this.loginRepository.create(loginInstance);
  }

}