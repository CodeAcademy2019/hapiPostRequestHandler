const Hapi=require('hapi');
const route = require('./Routes/index');

const server=Hapi.server({
    host:'localhost',
    port:8000
});

server.route(route);

const start =  async function() {
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Server running at:', server.info.uri);
};
module.exports = { start, server};
