db.produtos.find({
  valoresNutricionais: { $elemMatch: { tipo: "proteínas", percentual: { $gt: 29, $lt: 41 } } },
}, { _id: false, nome: true });