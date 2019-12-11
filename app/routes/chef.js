var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chef');

    // filmArray.forEach(element => {
    //     //Add corresponding film key in film.
    //     db.ref(`/films/${element}/issues/${issue.id}`).set(true, function (error) {
    //         if (error) {
    //             console.log("issue key could not be saved under film: " + error);
    //         }
    //     });

    //     //Add films into issue.
    //     db.ref(`/films/${element}`).once("value", function (snapshot) {
    //         db.ref(`/issues/${issue.id}/films/${element}`).set(snapshot.val(), function (error) {
    //             if (error) {
    //                 console.log("Film data could not be saved under issue. " + error);
    //             }
    //         })
    //     });
    // });
});

module.exports = router;
