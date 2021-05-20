const GET = 'get';
const POST = 'post';

const routes = {
    network: {
        route: 'api/networks',
        method: GET,
    },
    create: {
        route: 'api/networks',
        method: POST,
    },
    stations: {
        route: 'api/stations',
        method: GET,
    },

};

export default routes;
