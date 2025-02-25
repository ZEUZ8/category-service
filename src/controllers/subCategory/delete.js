const SubCategory = require("../../models/subCategory");

const deleteSingleSubCategory = async (req, res) => {
  console.log("consling the value");
  try {
    const { id } = req.params;
    console.log(id);
    const deletedCategory = await SubCategory.deleteOne({ _id: id });
    if (deletedCategory) {
      return res.status(200).json({ msg: "subCategory Deleted" });
    } else {
      return res.status(201).json({ msg: "subCategory not Deleted" });
    }
  } catch (err) {
    console.log(
      err,
      " consoling in the error, subcategory deleting controller"
    );
    return res.status(500).json({ msg: "error at deleting subCategory" });
  }
};

module.exports = { deleteSingleSubCategory };
