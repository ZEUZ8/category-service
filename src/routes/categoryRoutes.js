const { Router } = require("express");

const router = Router();

router.get("/", (re, res) => {
  console.log("coknsoing the router");
  res.status(200).json({ msg: "chumma consoling in the value" });
});


// router.post("/admin/category", addCategory);
// router.get("/admin/category", getCategory);

// router.post("/admin/subCategory", addSubCategory);
// router.get("/admin/subCategory", (req, res) => res.status(200).json({ msg: "gottd teh cfunction" }));
// router.get("/admin/subCategory/:id", getSubCategory);



module.exports = router;
