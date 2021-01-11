const express = require("express");
const { protectRoute } = require("../Controller/authController");
const { createPaymentSession , checkoutCompleted } = require("../Controller/bookingController");


const bookingRouter = express.Router();



bookingRouter.post("/createPaymentSession" , protectRoute , createPaymentSession);
bookingRouter.post("/checkoutCompleted" , checkoutCompleted);

module.exports = bookingRouter;