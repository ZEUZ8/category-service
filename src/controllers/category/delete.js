const Category = require("../../models/category");

const deleteOne = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await Category.deleteOne({ _id: id });
    if (deletedCategory) {
      return res.status(200).json({ msg: "Category Deleted" });
    } else {
      return res.status(201).json({ msg: "Category not Deleted" });
    }
  } catch (err) {
    console.log(err, " consoling in the error, category deleting controller");
    return res.status(500).json({ msg: "error at deleting Category" });
  }
};

module.exports = { deleteOne };
