import express from "express";
import estimate from "./../controller/estimator";

const router = express.Router();

router.post("/api/v1/on-covid-19", estimate.jsonRequest);
router.post("/api/v1/on-covid-19/json", estimate.jsonRequest);
router.post("/api/v1/on-covid-19/xml", estimate.xmlRequest);

export default router;
