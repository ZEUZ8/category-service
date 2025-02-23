const mongoose = require("mongoose");
const { default: slugify } = require("slugify");

const subCategorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
      default: null,
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // Refers to the parent category
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

subCategorySchema.pre("save", async function (next) {
  if (this.isModified("categoryName") || this.isNew) {
    let slug = slugify(this.categoryName, { lower: true, strict: true });
    let existingSubCategory = await mongoose
      .model("SubCategory")
      .findOne({ slug });

    let count = 1;
    while (existingSubCategory) {
      slug = `${slug}-${count}`;
      existingSubCategory = await mongoose
        .model("SubCategory")
        .findOne({ slug });
      count++;
    }

    this.slug = slug;
  }
  next();
});

const SubCategory = mongoose.model("SubCategory", subCategorySchema);

module.exports = SubCategory;
