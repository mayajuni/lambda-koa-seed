import { Model } from 'sequelize';
import { Service } from 'typedi';
import { Table } from 'sequelize-typescript';

@Service()
@Table
export default class User extends Model<User> {

}