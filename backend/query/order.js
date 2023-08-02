var config = require('../config/dbconfig');
const sql = require('mssql');
async function getOrders(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request().query(`SELECT * from ORDER_DETAILS`);
        return order.recordset
    }
    catch (error) {
        return error
    }
}
module.exports = {
    getOrders: getOrders
}