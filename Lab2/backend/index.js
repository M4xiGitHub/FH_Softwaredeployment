const { app } = require("@azure/functions");

const endpoint = async (request, context) => {
    return {body: "Hello from the API!"};
}

app.http("endpoint", {
    methods: ["GET", "POST"],
    handler: endpoint
});

module.exports = endpoint;
