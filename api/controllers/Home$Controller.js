var Machine = require("machine");
module.exports = {
    find: function(req, res) {
        Machine.build({
            inputs: {},
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // List Pokemon
                sails.machines['_project_2394_0.0.4'].find_pokemon({}).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(listPokemon) {
                        return exits.respond({
                            data: null,
                            action: "display_view",
                            status: 200,
                            view: "homepage"
                        });

                    },
                    "error": function(listPokemon) {
                        return exits.error({
                            data: listPokemon,
                            status: 500
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