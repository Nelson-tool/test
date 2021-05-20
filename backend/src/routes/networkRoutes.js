const express = require('express')

const networkcontroller = require('../controllers/networkControllers')

exports.router = (function () {
  const apiRoutes = express.Router()

  apiRoutes.route('/networks').get(networkcontroller.networkacess)
  apiRoutes.route('/networks').post(networkcontroller.addNewnetwork)
  apiRoutes.route('/stations').get(networkcontroller.countCountry)

  return apiRoutes
})()
