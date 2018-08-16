const connection = require("../config/connection.js");



/* In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

* `selectAll()`
* `insertOne()`
* `updateOne()` */


let orm = {

    selectAll: function (cb) {
        let queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: function(burger, cb) {
        let queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    updateOne: function(id, cb) {
        let queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        conneciton.query(queryString, [id], function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }

};






module.exports = orm;