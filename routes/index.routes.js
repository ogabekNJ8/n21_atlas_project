const router = require("express").Router();

const dictRouter = require("./dict.routes");
const categoryRouter = require("./category.routes");
const socialRouter = require("./social.route");
const descriptionRouter = require("./description.routes");
const synonymRouter = require("./synonym.routes");


router.use("/dict", dictRouter);
router.use("/category", categoryRouter);
router.use("/social", socialRouter);
router.use("/description", descriptionRouter);
router.use("/synonym", synonymRouter);

module.exports = router;
