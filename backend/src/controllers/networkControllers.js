const axios = require('axios')

module.exports = {
  networkacess: function (req, res) {
    const city = req.query.city

    const name = req.query.name

    if (city == null || name == null) {
      axios.get('http://api.citybik.es/v2/networks').then((resp) => {
        return res.status(201).json(resp.data)
      })
    } else {
      axios
        .get('http://api.citybik.es/v2/networks', {
          params: { location: { city: city }, name: name }
        })
        .then((resp) => {
          return res.status(201).json(resp.data)
        })
    }
  },
  addNewnetwork: function (req, res) {
    const name = req.body.name
    const company = req.body.company
    const city = req.body.city
    const country = req.body.country

    if (name == null || company == null || city == null || country == null) {
      return res.status(400).json({ error: 'Please enter the correct params' })
    } else {
      axios
        .post('http://api.citybik.es/v2/networks', {
          name: name,
          company: company,
          city: city,
          country: country
        })
        .then((resp) => {
          console.log(resp)
          return res.status(201).json('your data is sucefull add')
        })
    }
  },

  countCountry: function (req, res) {}
}
