const express = require("express");

const {
  registerUser,
  userLogin,
  getUserDetails,
  updateUserDetails,
  sendEventRegistrationEmail,
  sendProgressReport,
} = require("../controllers/userControllers");

const { protect } = require("../middlewares/protectedRoutes");

const router = express.Router();

// Register new user
router.route("/userRegister").post(registerUser);

// Post user auth
router.route("/userLogin").post(userLogin);

// User gets his/her own details - Only logged in user
router.route("/userDetails/:id").get(protect, getUserDetails);

// User updates his/her own details - Only logged in user
router.route("/userUpdate/:id").put(protect, updateUserDetails);

router.route("/sendEventRegistrationEmail").post(sendEventRegistrationEmail);

router.route("/sendProgressReport").post(sendProgressReport);

module.exports = router;
