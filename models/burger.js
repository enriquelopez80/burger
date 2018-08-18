const orm = require("../config/orm.js");


//all, create, update

let burger = {
    all: function(callBack) {
        orm.selectAll(function(res) {
            callBack(res);
        })
    },
    create: function(newBurger, callBack) {
        orm.insertOne("burgers", newBurger, function(res) {
            console.log("WORKING")
            callBack(res)
        })
    },
    update: function(id, callBack) {
        orm.updateOne("burgers", id, function (res) {
            console.log ("burger working")
            callBack(res)
        })
    }
};


module.exports = burger;