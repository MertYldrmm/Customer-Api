exports.getCustomerInfoByPhoneNumber = async (req, res, next) => {
  const { phoneNumber } = req.params;

  let sqlSorgusu = `SELECT * FROM subscription WHERE phoneNumber = ?`;

  connection.query(sqlSorgusu, phoneNumber, function (err, results) {
    if (err) {
      next({ status: "500", message: "Sunucu hatası. Lütfen tekrar deneyin.", });
    }
    else if (results.length <= 0) {
      next({ status: "403", message: "Belirtilen telefona ait kayıt bulunamamıştır." })
    } else
      res.json(results);
  });
};

exports.getOrdersBySubscriptionId = async (req, res, next) => {
  const { subscriptionId } = req.body;

  let sqlSorgusu = `SELECT * FROM orders WHERE subscriptionId= ? `;

  connection.query(sqlSorgusu, subscriptionId, function (err, results) {
    if (err) {
      next({ status: "500", message: "Sunucu hatası. Lütfen tekrar deneyin.", });
    }
    else if (results.length <= 0) {
      next({ status: "403", message: "Belirtilen telefona ait kayıt bulunamamıştır." })
    } else
      res.json(results);
  });
};