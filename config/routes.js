module.exports.routes = {
  "get /pokemon": "PokemonController.find",
  "get /": "Home$Controller.find",
  "get /pokemon/:pokedexId": "PokemonController.$pokedexId"
};