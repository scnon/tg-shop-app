import mysql from 'mysql2';

export const getDB = () => {
    return mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '123123',
        database: 'tg-shop',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }).promise();
}