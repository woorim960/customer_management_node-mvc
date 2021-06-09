"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/site/:no/:name", ctrl.output.site);

router.get("/api/customers", ctrl.read.customers);
router.get("/api/sites/:no/:name", ctrl.read.sites);

module.exports = router;
