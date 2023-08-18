const Category = require("../models/CategoryModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/cathAsyncErrorsMiddleware");
const APIFeatures = require("../utils/APIFeatures");

// Create new category
exports.newCategory = catchAsyncErrors(async (request, response) => {

  try {
    const category = await Category.create(request.body);
    response.status(201).json({
      success: true,
      category,
    });
  } catch (error) {
    response.status(401).json({
      success: false,
      error,
    });
  }
 
});

// get all categories


exports.getAllCategory = catchAsyncErrors(async (request, response, next) => {

  const apiFeatures = new APIFeatures(Category.find(), request.query)
    .search()
  const categories = await apiFeatures.query;
  response.status(200).json({
    success: true,
    categories,
  });
});

// get single category

exports.getCategory = catchAsyncErrors(async (request, response, next) => {
  const category = await Category.findById(request.params.id);

  if (!category) {
    return next(new ErrorHandler("Category cannot found", 404));
  }
  response.status(200).json({
    success: true,
    category,
  });
});

// Update category

exports.updateCategory = catchAsyncErrors(async (request, response, next) => {
  let category = await Category.findById(request.params.id);

  if (!category) {
    return next(new ErrorHandler("Category not Found !", 404));
  }

  category = await Category.findOneAndUpdate(request.params.id, request.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  response.status(200).json({
    success: true,
    category,
  });
});

// Delete single category

exports.deleteCategory = catchAsyncErrors(async (request, response, next) => {
  const category = await Category.findById(request.params.id);

  if (!category) {
    return next(new ErrorHandler("Category cannot found", 404));
  }

  await category.remove();
  response.status(200).json({
    success: true,
    messege: "Category deleted succfully!",
  });
});
