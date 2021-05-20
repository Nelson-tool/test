import React, { useState, useEffect } from 'react';
import { getAllNetwork } from '../api/method/station';
import NetworkTable from './NetworkTable';

const test = {
    "networks": [
        {
            "company": [
                "ЗАО «СитиБайк»"
            ],
            "href": "/v2/networks/velobike-moscow",
            "id": "velobike-moscow",
            "location": {
                "city": "Moscow",
                "country": "RU",
                "latitude": 55.75,
                "longitude": 37.616667
            },
            "name": "Velobike"
        },
        {
            "company": [
                "Gobike A/S"
            ],
            "href": "/v2/networks/bycyklen",
            "id": "bycyklen",
            "location": {
                "city": "Copenhagen",
                "country": "DK",
                "latitude": 55.673582,
                "longitude": 12.564984
            },
            "name": "Bycyklen"
        },
        {
            "company": [
                "Gobike A/S"
            ],
            "href": "/v2/networks/nu-connect",
            "id": "nu-connect",
            "location": {
                "city": "Utrecht",
                "country": "NL",
                "latitude": 52.117,
                "longitude": 5.067
            },
            "name": "Nu-Connect"
        },
        {
            "company": [
                "Urban Infrastructure Partner"
            ],
            "href": "/v2/networks/baerum-bysykkel",
            "id": "baerum-bysykkel",
            "location": {
                "city": "Bærum",
                "country": "NO",
                "latitude": 59.89455,
                "longitude": 10.546343
            },
            "name": "Bysykkel"
        },
        {
            "company": [
                "Gobike A/S"
            ],
            "href": "/v2/networks/bysykkelen",
            "id": "bysykkelen",
            "location": {
                "city": "Stavanger",
                "country": "NO",
                "latitude": 58.969975,
                "longitude": 5.733107
            },
            "name": "Bysykkelen"
        },
        {
            "company": [
                "Domoblue"
            ],
            "href": "/v2/networks/onroll-a-rua",
            "id": "onroll-a-rua",
            "location": {
                "city": "A Rúa",
                "country": "ES",
                "latitude": 42.392049,
                "longitude": -7.114634
            },
            "name": "Onroll"
        },
        {
            "company": [
                "Domoblue"
            ],
            "href": "/v2/networks/onroll-albacete",
            "id": "onroll-albacete",
            "location": {
                "city": "Albacete",
                "country": "ES",
                "latitude": 38.98913,
                "longitude": -1.858485
            },
            "name": "Onroll"
        },
        {
            "company": [
                "Domoblue"
            ],
            "href": "/v2/networks/onroll-alhama-de-murcia",
            "id": "onroll-alhama-de-murcia",
            "location": {
                "city": "Alhama de Murcia",
                "country": "ES",
                "latitude": 37.849831,
                "longitude": -1.424891
            },
            "name": "Onroll"
        },
    ]
    }

const GetData = () => {
    const [networks, setNetworks] = useState([]);
    const getAlUsers = async () => {
        const resp = await getAllNetwork();
        console.log(resp)
        setNetworks(resp.networks);

    };
    useEffect(() => {
        getAlUsers();
    }, []);

    return (
        <>  
            <NetworkTable data={networks}/>
        </>
    );
};

export default GetData