import { PoolCluster } from 'mysql2';
import mysql from 'mysql2/promise';


defineNitroPlugin(() => {
    const access: PoolCluster = ({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'test'
    });

    const conn = mysql.createPool(access)
});