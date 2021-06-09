"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// View Rendering
router.get("/", ctrl.output.home);
router.get("/site/:no/:name", ctrl.output.site);
router.get("/site/new/:no/:name", ctrl.output.insertSite);

// Read Data
router.get("/api/customers", ctrl.read.customers);
router.get("/api/sites/:no/:name", ctrl.read.sites);

// Create Data
router.post("/api/site", ctrl.create.site);

module.exports = router;
