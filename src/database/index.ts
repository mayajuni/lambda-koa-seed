import { Sequelize } from 'sequelize-typescript';
import { Service } from 'typedi';

@Service()
export default class Database {
    sequelize: Sequelize;

    async connect() {
        const sequelize: Sequelize = this.sequelize = new Sequelize({
            database: 'DATABASE',
            dialect: 'postgres',
            host: process.env.DB_HOST,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            pool: {
                max: 20,
                min: 10,
                acquire: 500,
                idle: 500,
            },
            models: [__dirname + '/models'],
        });

        try {
            await sequelize.authenticate();
        } catch (e) {
            await sequelize.sync();
        }

        return sequelize;
    }
}
