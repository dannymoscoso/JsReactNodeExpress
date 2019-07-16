const { Pool } = require("pg");
const connectionString = "postgresql://postgres:123@192.168.159.128:5432/myapp";

const pool = new Pool({
  connectionString: connectionString
});

module.exports = {
  pool,
  query: (text, params) => pool.query(text, params)
};
