var mysql = require('mysql');

var MysqlConnection = (function () {

    var connection = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "",
        database: "nodedb"
    });


    return {
        getConnection: function () {
            return connection;
        }
    }
})();
module.exports = MysqlConnection;