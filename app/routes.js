// import routes
import exampleRouter from "./api/v1/controllers/example/router";

import upload from "./config/multer";

const BASE_URL = "/api/v1";

export default function(app) {
  // define routes
  app.use(BASE_URL + "/examples", exampleRouter);

  // test file uploads using multer
  app.post(
    "/test-upload",
    upload.fields([
      { name: "test", maxCount: 1 },
    ]),
    (req, res) => {
      res.status(200).json({
        files: req.files,
        body: req.body
      });
    }
  );
  // for testing that the router works properly
  app.use(BASE_URL + "/test-router", (req, res, next) => {
    res.status(200).json({
      test: "the api router is working properly"
    });
  });
}
