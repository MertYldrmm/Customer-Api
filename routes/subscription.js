const express = require('express');
const router = express.Router();

//controllers
const subscription = require('../controllers/subscriptionContreller');

/* GET customers by phone number. */
router.get('/getCustomerInfo/:phoneNumber', subscription.getCustomerInfoByPhoneNumber);

/* GET orders by subscriptionId. */
router.post('/getSubscriptionOrders', subscription.getOrdersBySubscriptionId);

module.exports = router;
