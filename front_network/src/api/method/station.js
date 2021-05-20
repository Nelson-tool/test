import sendRequest from '../config';
import routes from '../uri/route';

export const getAllStation = async (country) => {
    try {
        const resp = await sendRequest(
            routes.stations.route+`/?country=${country}`,
            routes.stations.method
            );
        return resp.data;
    } catch (err) {
        return [];
    }
};

export const getAllNetwork = async (city, name) => {
    try {
        const resp = await sendRequest(
            routes.network.route+``,
            routes.network.method
            );
        return resp.data;
    } catch (err) {
        return [];
    }
};

export const createNetwork = async (name, company, city, country) => {
    try {
        const resp = await sendRequest(
            routes.create.route,
            routes.create.method,
            {name, company, city, country}
            );
        return resp.data;
    } catch (err) {
        return [];
    }
};