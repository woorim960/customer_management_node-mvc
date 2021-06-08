"use strict";

const db = require("../../config/db");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
};

const read = {
  customers: (req, res) => {
    const sql =
      "SELECT no, name, contract_description, date_format(contract_start_date, '%Y년 %m월 %d') AS contractStartDate, date_format(contract_end_date, '%Y년 %m월 %d') AS contractEndDate FROM customers;";

    db.query(sql, (err, customers) => {
      if (err) throw err;
      res.json(customers);
    });
  },
};

module.exports = {
  output,
  read,
};
