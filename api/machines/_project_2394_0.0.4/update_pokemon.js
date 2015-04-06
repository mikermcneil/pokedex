module.exports = {
  "inputs": {
    "name": {
      "example": "scott",
      "friendlyName": "name"
    },
    "description": {
      "example": "scott",
      "friendlyName": "description"
    },
    "imageUrl": {
      "example": "scott",
      "friendlyName": "imageUrl"
    },
    "types": {
      "example": "scott",
      "friendlyName": "types"
    },
    "pokedexId": {
      "example": 123,
      "friendlyName": "pokedexId"
    },
    "criteria": {
      "friendlyName": "criteria",
      "typeclass": "dictionary",
      "description": "Waterline search criteria to use in retrieving Pokemon instances"
    }
  },
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
    env.sails.models.pokemon.update(inputs.criteria, env.sails.util.omit(env.sails.util.objCompact(inputs), 'criteria')).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "update_pokemon"
};