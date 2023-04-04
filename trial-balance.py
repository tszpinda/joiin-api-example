import requests
import json

api_url = 'https://app-api.joiin.co/v1/report/trial-balance'
api_key = ''

def fetch_trial_balance(companies, currency, start_date, end_date):
    try:
        request_data = {
            "startDate": start_date,
            "endDate": end_date,
            "currency": currency,
            "companies": companies
        }
        print(request_data)
        response = requests.post(api_url, headers={
            'Content-Type': 'application/json',
            'x-api-key': api_key
        }, data=json.dumps(request_data))
        if response.status_code != 200:
            print(response)
            raise Exception(f"Error fetching trial balance: {response.status_code} - {response.reason}")
        response_data = response.json()
        print(response_data)
    except Exception as error:
        print(f"Error: {error}")

companies = [
  'Company name or id',
  'Another company name or id',,
]
currency = 'USD'  # or any other currency symbol EUR, GBP, AUZ, etc.
start_date = '2022-01'
end_date = '2022-12'

fetch_trial_balance(companies, currency, start_date, end_date)
