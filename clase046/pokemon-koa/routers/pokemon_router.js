const Router= require("koa-router");
const { findAll } = require("../controllers/pokemon_controller");

const router = new Router({
  prefix: "/pokemon"
});

router.get("/", findAll);
// router.get("/:id", );
// router.post("/", );
// Delete
// Update

module.exports = router;