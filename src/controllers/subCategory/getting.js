const SubCategory = require("../../models/subCategory");

const getSubCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const subCategory = await SubCategory.find({ parentId: id });
    if (subCategory) {
      return res.status(201).json({ msg: "getting successfull", subCategory });
    } else {
      console.log("the subcategory list is empty  ----");
      return res.status(200).json({ msg: "Empty SubCategory Collection" });
    }
  } catch (error) {
    console.log("erorr at subbategory getting function", error);
    return res.json(500).json({ msg: "error getting categories" });
  }
};

const getSingleSubCategory = async () => {
  console.log("consoling in the getting function");
  try {
    const subCategory = await SubCategory.find({});
    if (subCategory) {
      console.log("the subCategory list consoling --- ", subCategory);
      return res.status(201).json({ msg: "getting successfull", subCategory });
    } else {
      console.log("the subCategory list is empty  ----");
      return res.status(200).json({ msg: "Empty Category Collection" });
    }
  } catch (error) {
    console.log("erorr at subCategory getting function", error);
    return res.json(500).json({ msg: "error getting categories" });
  }
};

module.exports = { getSubCategory, getSingleSubCategory };
