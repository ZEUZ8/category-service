const mongoose = require("mongoose");
const { default: slugify } = require("slugify");

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
      unique: true, // To prevent duplicate categories
    },
    slug: {
      type: String,
      unique: true, // SEO-friendly URL
    },
    description: {
      type: String,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

categorySchema.pre("save", async function (next) {
  if (this.isModified("categoryName") || this.isNew) {
    let slug = slugify(this.categoryName, { lower: true, strict: true });
    let existingCategory = await mongoose.model("Category").findOne({ slug });

    let count = 1;
    while (existingCategory) {
      slug = `${slug}-${count}`;
      existingCategory = await mongoose.model("Category").findOne({ slug });
      count++;
    }

    this.slug = slug;
  }
  next();
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
