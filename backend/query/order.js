var config = require('../config/dbconfig');
const sql = require('mssql');
async function getOrders() {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request().query(`select CAST(od.ID AS int) as ID,UI.USERNAME,UA.ADDR_LINE1,UA.CITY,od.STATUS
        from ORDER_DETAILS OD,USER_ADD UA,USER_INFO UI
        where od.USER_ID=ua.USER_ID and od.ADD_ID=UA.ID and UA.USER_ID=UI.ID
        ORDER BY ID ASC`);
        return order.recordset
    }
    catch (error) {
        return error
    }
}
async function getUOrder(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .input('USER_ID',sql.Char(5), req)
        .query(`SELECT * from ORDER_DETAILS where @USER_ID = USER_ID`);
        return order.recordset
    }
    catch (error) {
        return error
    }
}
async function createOrders(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .input('ID', sql.Char(5), req.ID)
        .input('USER_ID', sql.Char(5), req.USER_ID)
        .input('TOTAL', sql.Decimal, req.TOTAL)
        .input('POINT', sql.Int, req.POINT)
        .input('PAYMENT_ID', sql.Char(5), req.PAYMENT_ID)
        .input('STATUS', sql.NChar(20), req.STATUS)
        .input('CREATED_AT', sql.DateTime, req.CREATED_AT)
        .input('MODIFIED_AT', sql.DateTime, req.MODIFIED_AT)
        .query(`INSERT INTO ORDER_DETAILS VALUES(@ID,@USER_ID,@TOTAL,@POINT,@PAYMENT_ID,@STATUS,@CREATED_AT,@MODIFIED_AT);`);
        return "Successful"
    }
    catch (error) {
        return error
    }
}
async function updateOrders(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .input('ID', sql.Char(5), req.ID)
        .input('USER_ID', sql.Char(5), req.USER_ID)
        .input('TOTAL', sql.Decimal, req.TOTAL)
        .input('POINT', sql.Int, req.POINT)
        .input('PAYMENT_ID', sql.Char(5), req.PAYMENT_ID)
        .input('STATUS', sql.NChar(20), req.STATUS)
        .input('CREATED_AT', sql.DateTime, req.CREATED_AT)
        .input('MODIFIED_AT', sql.DateTime, req.MODIFIED_AT)
        .query(`UPDATE ORDER_DETAILS SET USER_ID = @USER_ID, TOTAL = @TOTAL,
                POINT = @POINT,PAYMENT_ID = @PAYMENT_ID, STATUS = @STATUS, CREATED_AT = @CREATED_AT, MODIFIED_AT = @MODIFIED_AT
                WHERE ID = @ID`);
        return "Successful"
    }
    catch (error) {
        return error
    }
}
async function deleteOrders(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .input('ID', sql.Char(5), req)
        .query(`DELETE FROM ORDER_DETAILS
                WHERE ID = @ID;`);
        return "Successful"
    }
    catch (error) {
        return error
    }
}
async function getRevenue() {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request().query('SELECT FORMAT(MODIFIED_AT, \'yyyy-MM-dd\') as MODIFIED_AT , SUM(total) AS total FROM ORDER_DETAILS GROUP BY FORMAT(MODIFIED_AT, \'yyyy-MM-dd\')');
        return order.recordset
    }
    catch (error) {
        return error
    }
}
async function getRevenueMonth() {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request().query('SELECT FORMAT(MODIFIED_AT, \'yyyy-MM\') as MODIFIED_AT , SUM(total) AS total FROM ORDER_DETAILS GROUP BY FORMAT(MODIFIED_AT, \'yyyy-MM\')');
        return order.recordset
    }
    catch (error) {
        return error
    }
}
async function getRevenueYear() {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request().query('SELECT FORMAT(MODIFIED_AT, \'yyyy\') as MODIFIED_AT , SUM(total) AS total FROM ORDER_DETAILS GROUP BY FORMAT(MODIFIED_AT, \'yyyy\')');
        return order.recordset
    }
    catch (error) {
        return error
    }
}
module.exports = {
    getOrders: getOrders,
    getUOrder: getUOrder,
    createOrders: createOrders,
    updateOrders: updateOrders,
    deleteOrders: deleteOrders,
    getRevenue:getRevenue,
    getRevenueMonth:getRevenueMonth,
    getRevenueYear:getRevenueYear
}