const Category = require("../../models/category");

const addCategory = async (req, res) => {
  try {
    const { categoryName, description, isActive } = req.body;
    /*checking if there is any existing Category in the name then we are
    returning warning for changing it to prevent the upcoming conflict */
    console.log(categoryName, description, "the value", isActive, "the body");
    const existingCategory = await Category.findOne({ categoryName });

    if (existingCategory) {
      return res.status(200).json({ msg: "Category already exists" });
    } else {
      // 3️⃣ Create new Category instance
      const newCategory = new Category({
        categoryName,
        description,
        isActive,
      });

      //Save Category to database
      await newCategory.save();

      return res
        .status(201)
        .json({ msg: "Category created successfully", category: newCategory });
    }
  } catch (err) {
    console.log(err, " consoling in the error ");
    return res.status(500).json({ msg: "error at adding Category" });
  }
};

module.exports = { addCategory };
