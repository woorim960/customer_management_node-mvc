"use strict";

const db = require("../../config/db");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
};

const read = {
  customers: (req, res) => {
    const query = req.query;
    if (query.search) {
      const sql =
        "SELECT no, name, contract_description, date_format(contract_start_date, '%Y년 %m월 %d') AS contractStartDate, date_format(contract_end_date, '%Y년 %m월 %d') AS contractEndDate FROM customers ORDER BY name;";

      db.query(sql, (err, customers) => {
        if (err) throw err;
        res.json(customers);
      });
    } else {
      const sql =
        "SELECT no, name, contract_description, date_format(contract_start_date, '%Y년 %m월 %d') AS contractStartDate, date_format(contract_end_date, '%Y년 %m월 %d') AS contractEndDate FROM customers WHERE name >= ? ORDER BY name;";

      db.query(sql, [search], (err, customers) => {
        if (err) throw err;
        res.json(customers);
      });
    }
  },
  sites: (req, res) => {
    const sql = "SELECT no, name, address FROM sites;";

    db.query(sql, (err, sites) => {
      if (err) throw err;
      res.json(sites);
    });
  },
};

module.exports = {
  output,
  read,
};
