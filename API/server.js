const express = require('express');
const app = express();
const cors = require('cors');

const axios = require('axios');
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(cors());
app.get('/api/countries', async (req, res) => {
    try {
        const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'it can not find countries' });
    }
});

app.get('/api/country-info/:countryCode', async (req, res) => {
    const countryCode = req.params.countryCode;
    
    try {
        const borderCountriesResponse = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
        const populationResponse = await axios.post(`https://countriesnow.space/api/v0.1/countries/population`,{
            country: borderCountriesResponse.data.officialName
        });
        const flagResponse = await axios.post(`https://countriesnow.space/api/v0.1/countries/flag/images`, {
            iso2: borderCountriesResponse.data.countryCode
        });
        
        const countryInfo = {
            borderCountries: borderCountriesResponse.data,
            populationData: populationResponse.data,
            flagURL: flagResponse.data
        };
        
        res.json(countryInfo);
    } catch (error) {
        res.status(500).json({ error: 'it can not find countries' });
    }
});

app.listen(port, () => {
    console.log(`the server is runing in http://localhost:${port}`);
});