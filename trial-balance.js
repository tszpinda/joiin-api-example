import fetch from 'node-fetch';

const apiUrl = 'https://app-api.joiin.co/v1/report/trial-balance';
const apiKey = '';

async function fetchTrialBalance(companies, currency, startDate, endDate) {
  try {
		const requestData = {
			startDate,
			endDate,
			currency,
			companies
		};
    console.log(requestData);
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      },
      body: JSON.stringify(requestData)
    });
    if (response.status !== 200) {
      console.log(response);
      throw new Error(`Error fetching trial balance: ${response.status} - ${response.statusText}`);
    }
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error(error);
  }
}

const companies = [
   'Company name or id',
   'Another company name or id',
];
const currency = 'USD'; // or any other currency symbol EUR, GBP, AUZ etc
const startDate = '2022-01';
const endDate = '2022-12';
fetchTrialBalance(companies, currency, startDate, endDate);
