var Machine = require("machine");
module.exports = {
    find: function(req, res) {
        Machine.build({
            inputs: {},
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // List (Blueprint) Pokemon
                sails.machines['_project_2394_0.0.4'].blueprintFind_pokemon({}).setEnvironment({
                    req: req,
                    sails: sails
                }).exec({
                    "success": function(listBlueprintPokemon) {
                        return exits.respond({
                            data: listBlueprintPokemon,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(listBlueprintPokemon) {
                        return exits.error({
                            data: listBlueprintPokemon,
                            status: 500
                        });

                    }
                });
            }
        }).configure(req.params.all(), {
            respond: res.response,
            error: res.negotiate
        }).exec();
    },
    $pokedexId: function(req, res) {
        Machine.build({
            inputs: {
                "pokedexId": {
                    "example": "abc123",
                    "required": true
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Find One Pokemon
                sails.machines['_project_2394_0.0.4'].findOne_pokemon({
                    "criteria": {
                        pokedexId: inputs.pokedexId
                    }
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(findOnePokemon) {
                        return exits.respond({
                            data: findOnePokemon,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(findOnePokemon) {
                        return exits.error({
                            data: findOnePokemon,
                            status: 500
                        });

                    },
                    "notFound": function(findOnePokemon) {
                        return exits.respond({
                            data: "No known Pokemon has that id.  Did you discover a new species?",
                            action: "respond_with_value_and_status",
                            status: "404"
                        });

                    }
                });
            }
        }).configure(req.params.all(), {
            respond: res.response,
            error: res.negotiate
        }).exec();
    }
};