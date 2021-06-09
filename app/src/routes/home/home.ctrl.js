"use strict";

const db = require("../../config/db");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  site: (req, res) => {
    const no = req.params.no;
    const name = req.params.name;
    res.render("home/view", { no, name });
  },
  insertSite: (req, res) => {
    const no = req.params.no;
    const name = req.params.name;
    res.render("home/insert", { no, name });
  },
};

const read = {
  customers: (req, res) => {
    const query = req.query;
    if ("search" in query) {
      const sql =
        "SELECT no, name, contract_description AS contractDescription, date_format(contract_start_date, '%Y년 %m월 %d') AS contractStartDate, date_format(contract_end_date, '%Y년 %m월 %d') AS contractEndDate FROM customers WHERE name >= ? ORDER BY name;";

      db.query(sql, [query.search], (err, customers) => {
        if (err) throw err;
        res.json(customers);
      });
    } else {
      const sql =
        "SELECT no, name, contract_description AS contractDescription, date_format(contract_start_date, '%Y년 %m월 %d') AS contractStartDate, date_format(contract_end_date, '%Y년 %m월 %d') AS contractEndDate FROM customers ORDER BY name;";

      db.query(sql, (err, customers) => {
        if (err) throw err;
        res.json(customers);
      });
    }
  },
  sites: (req, res) => {
    const customerNo = req.params.no;
    const customerName = req.params.name;

    const sql = `SELECT st.no AS no, st.name AS name, st.address AS address
    FROM sites AS st
    JOIN customers AS ctm
    ON st.customer_no = ctm.no
    WHERE ctm.no=? AND ctm.name=?;`;

    db.query(sql, [customerNo, customerName], (err, sites) => {
      if (err) throw err;
      res.json(sites);
    });
  },
};

const create = {
  site: (req, res) => {
    const customerNo = req.body.customerNo;
    const siteName = req.body.siteName;
    const siteAddress = req.body.siteAddress;

    const sql = `INSERT INTO sites(customer_no, name, address) VALUES (?, ?, ?);`;

    db.query(sql, [customerNo, siteName, siteAddress], (err, result) => {
      if (err) throw err;
      res.json(Boolean(result.affectedRows));
    });
  },
};

module.exports = {
  output,
  read,
  create,
};
