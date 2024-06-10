import pg from 'pg';

process.loadEnvFile();

const {DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE} = process.env;

const pool = new pg.Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    allowExitOnIdle: true,
});

pool.query('SELECT NOW()', (err, res) => {
    if(err){
        console.log('Error al conectar la DB:', err);
    } else {
        console.log('DB conectada', res.rows[0].now);
    }
});

export default pool;