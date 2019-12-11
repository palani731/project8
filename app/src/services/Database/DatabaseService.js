const admin = require("firebase-admin");

/*
    @Params:
    databaseURL: Firebase database url
    credentials: The path to the service account file

    @Methods and Usage:

    @Import
    const DatabaseService = require('./src/services/Database/DatabaseService.js');

    @Init
    const database = new DatabaseService();

    @Methods@

    database.insert("test", {name: "Aiza", type: "User"})
    .then(
      result => console.log(result),
      error => console.log(error.message) 
    );


    database.push("test", {name: "Aiza", type: "User"})
    .then(
      result => console.log(result),
      error => console.log(error.message) 
    );

    database.get("test")
    .then(
      result => console.log(result),
      error => console.log(error.message) 
    );

    database.update("test", {name: "Aiza", type: "User"})
    .then(
      result => console.log(result), 
      error => console.log(error.message) 
    );

    database.listen("test", function(data) {
      console.log(data);
    });

    database.copy("test", "hello")
    .then(
      result => console.log(result), 
      error => console.log(error.message) 
    );

    database.move("copy1", "copy2")
    .then(
      result => console.log(result), 
      error => console.log(error.message) 
    );
*/

class DatabaseService {
    constructor() {
        this.db = admin.database();
    }

    insert(path, data) {
        return new Promise((resolve, reject) => {
            this.db.ref(path).set(data, (err) => {
                (err) ? reject(err) : resolve("success");
            });
        });
    }

    push(path, data) {
        return new Promise((resolve, reject) => {
            this.db.ref(path).push(data, (err) => {
                (err) ? reject(err) : resolve("success");
            });
        });
    }

    update(path, data) {
        return new Promise((resolve) => {
            this.db.ref(path).update(data, (err) => {
                (err) ? reject(err) : resolve("success");
            });
        });
    }

    getList(path) {
        return new Promise((resolve, reject) => {
            this.db.ref(path).once("value", function (snapshot) {
                if (snapshot.exists()) {
                    var list = [];
                    snapshot.forEach((e) => { list.push(e.val()) } );
                    resolve(list);
                } else {
                    reject(new Error("Data does not exist at the given path"));
                }
            });
        });
    }

    get(path) {
        return new Promise((resolve, reject) => {
            this.db.ref(path).once("value", function (snapshot) {
                snapshot.exists() ? resolve(snapshot.val()) : reject(new Error("Data does not exist at the given path"));
            });
        });
    }

    listen(path, cb) {
        this.db.ref(path).on("value", function (snapshot) {
            cb(snapshot.exists() ? snapshot.val() : undefined);
        });
    }

    copy(origin, destination) {
        return new Promise((resolve, reject) => {
            this.get(origin)
                .then(
                    result => this.insert(destination, result).then(
                        result => resolve("success"),
                        error => reject(error)
                    ),
                    error => reject(error)
                );
        });
    }

    move(origin, destination) {
        return new Promise((resolve, reject) => {
            this.get(origin)
                .then(
                    result => this.insert(destination, result).then(
                        result => this.insert(origin, null).then(
                            result => resolve("success"),
                            error => reject(new Error("Could not delete data from the origin"))
                        ),
                        error => reject(error)
                    ),
                    error => reject(error)
                );
        });
    }

    remove(path) {
        return new Promise((resolve, reject) => {
            this.db.ref(path).remove(function (err) {
                err ? reject(new Error("Data does not exist at the given path")) : resolve("success");
            });
        });
    }

    specific(path, child, equal){

        return new Promise((resolve, reject) => {
            this.db.ref(path).orderByChild(child).equalTo(equal).on("value", function (snapshot) {
                snapshot.exists() ? resolve(snapshot.val()) : reject(new Error("Data does not exist at the given path"));
            });
        });
    }

    test() {
        console.log("Database ready..");
    }
}

module.exports = DatabaseService;
