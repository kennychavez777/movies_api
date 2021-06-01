const oracledb = require('oracledb');

const credentials = {
    user: 'PROYECTOPELICULAS',
    pass: 'PROYECTOPELICULAS',
    host: 'bdpeliculasproduccion.cvmhgfetzxey.us-east-2.rds.amazonaws.com',
    port: 1522,
    sid: 'DATABASE'
}

const getResults = async(query) => {
    let pool;
    try {
        pool = await oracledb.createPool({
          user: credentials.user,
          password: credentials.pass,
          connectString: credentials.host + ':' + credentials.port + '/' + credentials.sid
        });
    
        let connection;
        try {
            connection = await pool.getConnection();
            return await connection.execute(
                query,
                [], // no binds
                {
                outFormat: oracledb.OBJECT,
                autoCommit: true
            });
        } catch (err) {
            throw (err);
        } finally {
            if (connection) {
                try {
                    await connection.close(); // Put the connection back in the pool
                } catch (err) {
                    throw (err);
                }
            }
        }
    } catch (err) {
        console.error(err.message);
    } finally {
        await pool.close();
    }
}

module.exports = {
    getResults
}