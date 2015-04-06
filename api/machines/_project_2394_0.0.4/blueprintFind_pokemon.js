module.exports = {
  "inputs": {},
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": [{
        "name": "scott",
        "description": "scott",
        "imageUrl": "scott",
        "types": "scott",
        "pokedexId": 123,
        "id": 123,
        "createdAt": "2015-04-05T23:51:28.158Z",
        "updatedAt": "2015-04-05T23:51:28.158Z"
      }]
    },
    "error": {
      "example": undefined
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    var where = env.req.params.all();
    where = env.sails.util.omit(where, ['limit', 'skip', 'sort']);
    env.sails.models.pokemon.find(where).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "blueprintFind_pokemon"
};