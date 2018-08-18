const connection = require("../config/connection.js");



/* In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

* `selectAll()`
* `insertOne()`
* `updateOne()` */


let orm = {

    selectAll: function (callBack) {
        let queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            callBack(res);
        });
    },
    insertOne: function(table, newBurger, callBack) {
        let queryString = "INSERT INTO " + table + " SET ?";
        connection.query(queryString, newBurger, function(err, res) {
            if (err) {
                throw err;
            }
            console.log('this is WORKING')
            callBack(res);
        });
    },
    updateOne: function(table, id, callBack) {
        let queryString = "UPDATE " + table + " SET devoured = true WHERE id = ?";
        connection.query(queryString, id, function(err, res) {
            if (err) {
                throw err;
            }
            console.log("Update One Working")
            callBack(res);
        });
    }

};


module.exports = orm;