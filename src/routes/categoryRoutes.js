const { Router } = require("express");
const { addCategory } = require("../controllers/category/create");
const { getCategory } = require("../controllers/category/getting");
const { addSubCategory } = require("../controllers/subCategory/create");
const { getSubCategory } = require("../controllers/subCategory/getting");
const { deleteOne } = require("../controllers/category/delete");

const router = Router();

router.get("/", (re, res) => {
  console.log("coknsoing the router");
  res.status(200).json({ msg: "chumma consoling in the value" });
});


// Admin Category routes for CRED operation
router.post("/admin/category", addCategory);
router.get("/admin/category", getCategory);
router.delete("/admin/category/:id",deleteOne)

// Admin SubCategory Routes for CRED Operation
router.post("/admin/subCategory", addSubCategory);
router.get("/admin/subCategory", (req, res) => res.status(200).json({ msg: "gottd teh cfunction" }));
router.get("/admin/subCategory/:id", getSubCategory);



module.exports = router;
