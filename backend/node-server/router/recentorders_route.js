let express = require("express");
let router = express.Router({}),
RecentOrderDataModel = require("../data-model/recentOrderDataModel");

router.post("/api/saveRecentOrder", (req, res)=>{

   let recentOrderObj = new RecentOrderDataModel(req.body);

   recentOrderObj.save()
    .then((recentOrder) => {
        res.json(recentOrder);
    })
    .catch((err) => {
        res.send("Error while saving recent Order: ", err)
    })
});

// Define a route to fetch recent orders by user ID
router.post("/api/getrecentorders", (req, res) => {
    RecentOrderDataModel.find({userid: req.body.userid})
        .then((recentorders) => {res.json(recentorders)})
        .catch((err) => {res.send("Error occurred: ", err);})
  });

module.exports = router;