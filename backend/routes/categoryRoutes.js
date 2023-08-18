const express = require("express");
const router = express.Router();
const {isAuthenticatedUser,authorizeRoles} = require('../middlewares/authMiddleware')
const {
  newCategory,
  getAllCategory,
  getCategory, updateCategory, deleteCategory

} = require("../controllers/categoryController");

router.route("/categories").get(getAllCategory);
router.route("/admin/category/new").post(isAuthenticatedUser,authorizeRoles('1'),newCategory);
router.route("/category/:id").get(getCategory);
router.route("/admin/category/:id").put(isAuthenticatedUser,authorizeRoles('1'),updateCategory).delete(isAuthenticatedUser,authorizeRoles('1'),deleteCategory);

module.exports = router;
