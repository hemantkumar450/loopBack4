import { Entity, model } from '@loopback/repository';
import { loginDefinition } from './login.definition';

@model(loginDefinition)
export class Login extends Entity { }