const gameData = {
  'dinosaures': [
    {
      'name': 'Brachiosaure',
      'description': 'Le brachiosaure était un des plus grands dinosaures et des plus lourds qui ait jamais existé. ',
      'prix': 100,
      'danger': 2,
      'visiteur': 10,
      'logo': 'brachiosaure.png'
    }, {
      'name': 'Pterosaure',
      'description': 'Les ptérosaures sont un ordre éteint de reptiles volants apparus au Trias supérieur. ',
      'prix': 1000,
      'danger': 3,
      'visiteur': 20,
      'logo': 'pterosaure.png'
    }, {
      'name': 'Velociraptor',
      'description': 'Le vélociraptor est un genre de petits dinosaures théropodes carnivores bipèdes. ',
      'prix': 10000,
      'danger': 4,
      'visiteur': 50,
      'logo': 'velociraptor.png'
    }, {
      'name': 'Tyranosaure',
      'description': 'Le tyrannosaure, est un genre de dinosaures théropodes très dangeureux. ',
      'prix': 100000,
      'danger': 5,
      'visiteur': 100,
      'logo': 'tyranosaure.png'
    }
  ],
  'magasins': [{
    'name': 'Boutique de souvenirs',
    'description': 'Achetez vos goodies !!',
    'prix': 10,
    'benefice': 1,
    'logo': 'giftshop.png'
  }, {
    'name': 'Restaurant',
    'description': 'Petit creux?',
    'prix': 100,
    'benefice': 2,
    'logo': 'restaurant.png'
  }, {
    'name': 'Photographe',
    'description': 'Photo souvenir ici',
    'prix': 200,
    'benefice': 3,
    'logo': 'photographer.png'
  }, {
    'name': 'Nurserie',
    'description': 'Ramenez un oeuf à la maison',
    'prix': 500,
    'benefice': 4,
    'logo': 'eggs.png'
  }],
  'personnels': [{
    'name': 'Gardien',
    'description': 'Petit gardien pas très efficace',
    'prix': 10,
    'danger': -1,
    'logo': 'policeman.png'
  }, {
    'name': 'Veterinaire',
    'description': 'Pour les bobos des dinos',
    'prix': 100,
    'danger': -2,
    'logo': 'veterinarian.png'
  }, {
    'name': 'Soldat',
    'description': 'Soldat très performant',
    'prix': 1000,
    'danger': -3,
    'logo': 'army.png'
  }, {
    'name': 'Hélicoptère',
    'description': 'Pour un max de sécu',
    'prix': 10000,
    'danger': -4,
    'logo': 'helicopter.png'
  }]
}
export default gameData
