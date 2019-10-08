const gameData = {
  'dinosaures': [
    {
      'name': 'Brachiosaure',
      'decription': 'Le brachiosaure était un gigantesque dinosaure appartenant au groupe des saurischiens sauropodes, probablement des plus grands et des plus lourds qui ait jamais existé.',
      'prix': 100,
      'danger': 2,
      'visiteur': 10,
      'logo': 'brachiosaure.png'
    }, {
      'name': 'Pterosaure',
      'decription': '',
      'prix': 1000,
      'danger': 3,
      'visiteur': 20,
      'logo': 'pterosaure.png'
    }, {
      'name': 'Velociraptor',
      'decription': '',
      'prix': 10000,
      'danger': 4,
      'visiteur': 50,
      'logo': 'velociraptor.png'
    }, {
      'name': 'Tyranosaure',
      'decription': '',
      'prix': 100000,
      'danger': 5,
      'visiteur': 100,
      'logo': 'tyranosaure.png'
    }
  ],
  'magasins': [{
    'name': 'Boutique de souvenirs',
    'decription': '',
    'prix': 10,
    'benefice': 1,
    'logo': 'giftshop.png'
  }, {
    'name': 'Restaurant',
    'decription': '',
    'prix': 100,
    'benefice': 2,
    'logo': 'restaurant.png'
  }, {
    'name': 'Photographe',
    'decription': '',
    'prix': 200,
    'benefice': 3,
    'logo': 'photographer.png'
  }, {
    'name': 'Nurserie',
    'decription': '',
    'prix': 500,
    'benefice': 4,
    'logo': 'eggs.png'
  }],
  'personnels': [{
    'name': 'Gardien',
    'decription': 'petit gardien pas très efficace',
    'prix': 10,
    'danger': -1,
    'logo': 'policeman.png'
  }, {
    'name': 'Veterinaire',
    'decription': '',
    'prix': 100,
    'danger': -2,
    'logo': 'veterinarian.png'
  }, {
    'name': 'Soldat',
    'decription': '',
    'prix': 1000,
    'danger': -3,
    'logo': 'army.png'
  }, {
    'name': 'Hélicoptère',
    'decription': '',
    'prix': 10000,
    'danger': -4,
    'logo': 'helicopter.png'
  }]
}
export default gameData
