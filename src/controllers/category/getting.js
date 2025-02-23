const Category = require("../../models/category");

const getCategory = async (req, res) => {
  console.log("consoling in the getting function");
  try {
    const category = await Category.find({});
    if (category) {
      return res.status(201).json({ msg: "getting successfull", category });
    } else {
      console.log("the category list is empty  ----");
      return res.status(200).json({ msg: "Empty Category Collection" });
    }
  } catch (error) {
    console.log("erorr at category getting function", error);
    return res.json(500).json({ msg: "error getting categories" });
  }
};

const getSingleCategory = async () => {
  console.log("consoling in the getting function");
  try {
    const category = await Category.find({});
    if (category) {
      console.log("the category list consoling --- ", category);
      return res.status(201).json({ msg: "getting successfull", category });
    } else {
      console.log("the category list is empty  ----");
      return res.status(200).json({ msg: "Empty Category Collection" });
    }
  } catch (error) {
    console.log("erorr at category getting function", error);
    return res.json(500).json({ msg: "error getting categories" });
  }
};

module.exports = {getCategory,getSingleCategory}
