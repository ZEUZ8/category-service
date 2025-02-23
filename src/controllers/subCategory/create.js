const SubCategory = require("../../models/subCategory")

const addSubCategory = async (req, res) => {
  try {
    const { categoryName, description, isActive, parentId } = req.body;
    console.log(req.body, " the request body in the console");

    /*checking if there is any existing Category in the name then we are
    returning warning for changing it to prevent the upcoming conflict */
    const existingCategory = await SubCategory.findOne({ categoryName });
    console.log(existingCategory, "the finding one ies here");

    if (existingCategory) {
      return res.status(200).json({ msg: "Category already exists" });
    } else {
      // 3️⃣ Create new subCategory instance
      const newsubCategory = new SubCategory({
        categoryName,
        description,
        parentId,
        isActive,
      });

      //Save SubCategory to database
      await newsubCategory.save();

      return res.status(201).json({ msg: "SubCategory created successfully" });
    }
  } catch (err) {
    console.log(err, " consoling in the error ");
    return res.status(500).json({ msg: "error at adding SubCategory" });
  }
};


module.exports = { addSubCategory};
