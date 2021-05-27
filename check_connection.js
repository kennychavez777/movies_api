const oracledb = require('oracledb');

const mypw = '123'  // set mypw to the hr schema password

async function run() {
  let pool;

  try {
    pool = await oracledb.createPool({
      user          : "movies",
      password      : mypw,
      connectString : "0.0.0.0/ORCL18"
    });

    let connection;
    try {
      connection = await pool.getConnection();
      result = await connection.execute(`SELECT * FROM contenido`);
      console.log("Result is:", result);
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

run();