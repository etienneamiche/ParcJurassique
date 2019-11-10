
const alertGenerator = function (type, state) {
  if (type === 'money') {
    let ret = {
      'color': 'warning',
      'text': state._banque
    }
    return ret
  }

//   if (type === 'accident') {
//     let ret = {
//       'color': 'error',
//       'target': '',
//       'losses': ''
//     }
//   }
}

export default alertGenerator
