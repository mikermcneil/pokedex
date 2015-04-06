module.exports = {
  "inputs": {
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
    env.sails.models.pokemon.destroy(inputs.criteria, env.sails.util.omit(env.sails.util.objCompact(inputs), 'criteria')).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "destroy_pokemon"
};