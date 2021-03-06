const router = require("express").Router()
const LenderService = require("../services/lender.controller")
const { authMiddleware, photosMiddleware } = require("../utils/middlewares")

router.route("/").post(LenderService.createNewLender)
router.route("/login").post(LenderService.loginLender)
router.route("/photos").post(photosMiddleware, LenderService.savePhotos)
router.route("/").get( authMiddleware, LenderService.getLender)
router.route("/").put( authMiddleware, LenderService.updateLender)
router.route("/").delete(authMiddleware, LenderService.deleteLender)

module.exports = router

