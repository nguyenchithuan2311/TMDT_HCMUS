var config = require('../config/dbconfig');
const sql = require('mssql');
async function getUsers() {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request().query(`SELECT * from USER_INFO`);
        return order.recordset
    }
    catch (error) {
        return error
    }
}
async function getUser(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .input('ID',sql.Char(5), req)
        .query(`SELECT USERNAME, FIRST_NAME, TEL, ADDR_LINE1, CITY from USER_INFO UF, USER_ADD UD 
        where @ID = UF.ID AND UF.ID = UD.USER_ID`);
        return order.recordset
    }
    catch (error) {
        return error
    }
}
async function createUser(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .input('ID', sql.Char(5), req.ID)
        .input('USERNAME', sql.Char(40), req.USERNAME)
        .input('PASS', sql.Char(12), req.PASS)
        .input('CUST_TYPE', sql.Int, req.CUST_TYPE)
        .input('FIRST_NAME', sql.NChar(10), req.FIRST_NAME)
        .input('LAST_NAME', sql.NChar(20), req.LAST_NAME)
        .input('TEL', sql.Char(15), req.TEL)
        .input('ACCPOINT', sql.Int, req.ACCPOINT)
        .input('POINT', sql.Int, req.POINT)
        .input('CREATED_AT', sql.Date, req.CREATED_AT)
        .input('MODIFIED_AT', sql.Date, req.MODIFIED_AT)
        .query(`INSERT INTO USER_INFO VALUES(@ID,@USERNAME,@PASS,
                @CUST_TYPE,@FIRST_NAME,@LAST_NAME, @TEL, @ACCPOINT, 
                @POINT,@CREATED_AT,@MODIFIED_AT);`);
        return "Successful"
    }
    catch (error) {
        return error
    }
}
async function updateUser(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .input('id', sql.Char(5), req.ID)
        .input('Email', sql.Char(40), req.USERNAME)
        .input('Name', sql.NChar(10), req.FIRST_NAME)
        .input('tel', sql.Char(15), req.TEL)
        .input('add', sql.NChar(100), req.ADDR_LINE1)
        .execute(`updateUser`);
        // const connection = new sql.connect(config);
        // const query = `EXEC updateUser @Name = @FIRST_NAME, @Email = @USERNAME, @add = @ADDR, @tel = @TELE, @id = @UID`;
        // connection.query(query, {
        //     FIRST_NAME: req.FIRST_NAME,
        //     USERNAME: req.USERNAME,
        //     ADDR: req.ADDR_LINE1,
        //     TELE: req.TEL,
        //     UID: req.ID

        //   }).then(resultSet => {
        //     // Process the results of the query
        //     console.log(resultSet.rows);
        //   });
        console.log(order)
        return "Successful"
    }
    catch (error) {
        return error
    }
}
async function deleteUser(req) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
        .input('ID', sql.Char(5), req)
        .query(`DELETE FROM USER_INFO
                WHERE ID = @ID;`);
        return "Successful"
    }
    catch (error) {
        return error
    }
}
module.exports = {
    getUsers: getUsers,
    getUser: getUser,
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}