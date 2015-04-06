module.exports = {
  "inputs": {
    "name": {
      "example": "scott",
      "friendlyName": "name",
      "required": true
    },
    "description": {
      "example": "scott",
      "friendlyName": "description",
      "required": true
    },
    "imageUrl": {
      "example": "scott",
      "friendlyName": "imageUrl",
      "required": true
    },
    "types": {
      "example": "scott",
      "friendlyName": "types",
      "required": true
    },
    "pokedexId": {
      "example": 123,
      "friendlyName": "pokedexId",
      "required": true
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": {
        "name": "scott",
        "description": "scott",
        "imageUrl": "scott",
        "types": "scott",
        "pokedexId": 123,
        "id": 123,
        "createdAt": "2015-04-05T23:51:28.158Z",
        "updatedAt": "2015-04-05T23:51:28.158Z"
      }
    },
    "error": {
      "example": undefined
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    env.sails.models.pokemon.create(env.sails.util.objCompact(inputs)).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "create_pokemon"
};