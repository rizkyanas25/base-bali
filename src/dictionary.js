import db from './db.json';


let balinese = []
let indonesian = []
db.forEach(word => {
  if (word.bali && word.indonesia) {
    balinese.push(word.bali)
    indonesian.push(word.indonesia);
  }
})

export {
  balinese,
  indonesian
}