/**
 *
 * entrez la commande suivante:
 * npm install --save express express-session body-parser morgan cors
 * puis node server.js
 * exemple complet à l'adresse https://github.com/Musinux/first-vue-app
 */
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')
const uid = 1000

const app = express()

app.use(session({
  secret: process.env.SECRET, // changez cette valeur
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // ne changez que si vous avez activé le https
}))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

const path = require('path')
app.use(express.static(path.join(__dirname, 'dist/')))

const users = [{
  username: 'admin',
  password: 'pass',
  state: {
    _banque: 0,
    _visiteurs: 0,
    _danger: 0,
    _alertMoney: false,
    _alertDanger: false,

    _effectifPersonnels: {
      'Gardien': 0,
      'Veterinaire': 0,
      'Soldat': 0,
      'Hélicoptère': 0
    },
    _effectifMagasins: {
      'Boutique de souvenirs': 0,
      'Restaurant': 0,
      'Photographe': 0,
      'Nurserie': 0
    },
    _effectifDinosaures: {
      'total': 0,
      'Styracosaure': 0,
      'Brachiosaure': 0,
      'Pterosaure': 0,
      'Velociraptor': 0,
      'Tyranosaure': 0
    }
  }
}]

app.get('/api/state/:name', function (req, res) {
  const user = users.find(u => u.username === req.params.name)
  if (user) {
    res.status(200)
    res.json(user.state)
  } else {
    res.status(404)
  }
})

app.post('/api/save/:name', function (req, res) {
  const user = users.find(u => u.username === req.params.name)
  if (user) {
    res.status(200)
    user.state = req.body
  } else {
    res.status(404)
  }
})

app.post('/api/signup', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)

  let user = users.find(u => u.username === req.body.username && u.password === req.body.password)
  if (user) {
    res.status(404)
    res.json({
      message: 'id ou mdp erroné'
    })
  } else {
    users.push(
      {
        username: req.body.username,
        password: req.body.password,
        state: {
          _banque: 500,
          _visiteurs: 0,
          _danger: 0,
          _alertMoney: false,
          _alertDanger: false,

          _effectifPersonnels: {
            'Gardien': 0,
            'Veterinaire': 0,
            'Soldat': 0,
            'Hélicoptère': 0
          },
          _effectifMagasins: {
            'Boutique de souvenirs': 0,
            'Restaurant': 0,
            'Photographe': 0,
            'Nurserie': 0
          },
          _effectifDinosaures: {
            'total': 0,
            'Styracosaure': 0,
            'Brachiosaure': 0,
            'Pterosaure': 0,
            'Velociraptor': 0,
            'Tyranosaure': 0
          }
        }
      }

    )
    req.session.userId = uid() // connect the user, and change the id
    res.json({
      message: 'signed up'
    })
  }
})

app.post('/api/login', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)
  if (!req.session.userId) {
    let user = users.find(u => u.username === req.body.username && u.password === req.body.password)
    if (!user) {
      res.status(404)
      res.json({
        message: 'id ou mdp erroné'
      })
    } else {
      // connect the user
      req.session.userId = uid() // connect the user, and change the id
      res.json({
        message: 'connected'
      })
    }
  } else {
    res.status(401)
    res.json({
      message: 'you are already connected'
    })
  }
  console.log('the users = ' + JSON.stringify(users))
})

app.get('/api/logout', (req, res) => {
  if (!req.session.userId) {
    res.status(401)
    res.json({
      message: 'you are already disconnected'
    })
  } else {
    req.session.userId = 0
    res.json({
      message: 'you are now disconnected'
    })
  }
})

app.get('/api/admin', (req, res) => {
  if (!req.session.userId || req.session.isAdmin === false) {
    res.status(401)
    res.json({ message: 'Unauthorized' })
    return
  }

  res.json({
    message: 'congrats, you are connected'
  })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
