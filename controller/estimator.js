import xml2js from "xml2js";
import covid19ImpactEstimator from "../functions/estimator";

const builder = new xml2js.Builder({
  xmldec: { standalone: null, version: "1.0", encoding: "UTF-8" },
});

class Estimator {
  jsonRequest(req, res) {
    if (!req.body.data) {
      return res.status(400).send({
        success: "false",
        message: "Invalid Data",
      });
    }

    const result = covid19ImpactEstimator(data);
    return res.status(201).send(result);
  }

  xmlRequest(req, res) {
    if (!req.body.data) {
      return res.status(400).send({
        success: "false",
        message: "Invalid Data",
      });
    }
    res.contentType("application/xml");
    const result = covid19ImpactEstimator(data);
    res.status(200).send(builder.buildObject(result));
  }
}

const estimate = new Estimator();
export default estimate;
