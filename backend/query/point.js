var config = require('../config/dbconfig');
const sql = require('mssql');
const router = require('../router/auth');
async function getPoints() {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request().query(`select CAST(ID AS int) as id,username, accpoint,point from USER_INFO ORDER BY id ASC`);
        return order.recordset
    }
    catch (error) {
        return error
    }
}
async function getpointVolatilityDay() {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .query('select sum(amount) as amountTotal,FORMAT(CREATED_AT, \'yyyy-MM-dd\') as date from POINT_HISTORY group by FORMAT(CREATED_AT, \'yyyy-MM-dd\')');
        return order.recordset
    }
    catch (error) {
        return error
    }
}
async function getpointVolatilityMonth() {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .query('select sum(amount) as amountTotal,FORMAT(CREATED_AT, \'yyyy-MM\') as date from POINT_HISTORY group by FORMAT(CREATED_AT, \'yyyy-MM\')');
        return order.recordset
    }
    catch (error) {
        return error
    }
}
async function getpointVolatilityYear() {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .query('select sum(amount) as amountTotal,FORMAT(CREATED_AT, \'yyyy\') as date from POINT_HISTORY group by FORMAT(CREATED_AT, \'yyyy\')');
        return order.recordset
    }
    catch (error) {
        return error
    }
}

async function getRemainPointsDay(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .query(`SELECT Accpoint,(sum(AMOUNT)) as total ,FORMAT(POINT_HISTORY.CREATED_AT, 'yyyy-MM-dd') as date from USER_INFO,POINT_HISTORY where USER_INFO.ID=POINT_HISTORY.USER_ID and USER_ID=${req.params.id} group by FORMAT(POINT_HISTORY.CREATED_AT, 'yyyy-MM-dd'),ACCPOINT`);
        return order.recordset
    }
    catch (error) {
        return error
    }
}
async function getRemainPointsMonth(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .query(`SELECT Accpoint,(sum(AMOUNT)) as total ,FORMAT(POINT_HISTORY.CREATED_AT, 'yyyy-MM') as date from USER_INFO,POINT_HISTORY where USER_INFO.ID=POINT_HISTORY.USER_ID and USER_ID=${req.params.id} group by FORMAT(POINT_HISTORY.CREATED_AT, 'yyyy-MM'),ACCPOINT`);
        return order.recordset
    }
    catch (error) {
        return error
    }
}
async function getRemainPointsYear(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .query(`SELECT Accpoint,(sum(AMOUNT)) as total ,FORMAT(POINT_HISTORY.CREATED_AT, 'yyyy') as date from USER_INFO,POINT_HISTORY where USER_INFO.ID=POINT_HISTORY.USER_ID and USER_ID=${req.params.id} group by FORMAT(POINT_HISTORY.CREATED_AT, 'yyyy'),ACCPOINT`);
        return order.recordset
    }
    catch (error) {
        return error
    }
}
module.exports = {
    getPoints: getPoints,
    getpointVolatilityDay:getpointVolatilityDay,
    getpointVolatilityMonth:getpointVolatilityMonth,
    getpointVolatilityYear:getpointVolatilityYear,
    getRemainPointsDay:getRemainPointsDay,
    getRemainPointsMonth:getRemainPointsMonth,
    getRemainPointsYear:getRemainPointsYear
    
}