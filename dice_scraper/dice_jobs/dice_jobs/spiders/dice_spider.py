import scrapy
import json
import urllib.parse
from datetime import datetime

class DiceSpider(scrapy.Spider):
    name = 'dice_spider'
    allowed_domains = ['dice.com', 'dhigroupinc.com']
    api_url = 'https://job-search-api.svc.dhigroupinc.com/v1/dice/jobs/search'
    
    custom_headers = {
        'x-api-key': '1YAt0R9wBg4WfsF9VB2778F5CHLAPMVW3WAZcKd8',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }

    def start_requests(self):
        params = {
            'q': 'Software',
            'countryCode2': 'US',
            'radius': '30',
            'radiusUnit': 'mi',
            'page': '1',
            'pageSize': '20',
            'filters.workplaceTypes': 'Remote',
            'filters.employmentType': 'CONTRACTS',
            'filters.postedDate': 'ONE',
            'currencyCode': 'USD',
            'culture': 'en'
        }
        
        full_url = f"{self.api_url}?{urllib.parse.urlencode(params)}"
        
        yield scrapy.Request(
            url=full_url,
            headers=self.custom_headers,
            callback=self.parse,
            meta={'page': 1, 'params': params}
        )

    def parse(self, response):
        data = json.loads(response.text)
        jobs = data.get('data', [])
        
        for job in jobs:
            
            job_data = {
                'job_id': job.get('id'),
                'title': job.get('title'),
                'company': job.get('companyName'),
                'location': job.get('workplaceTypes', []),
                'description': job.get('summary'),
                'salary': job.get('salary', {}),
                'employment_type': job.get('employmentType'),
                'location_type': job.get('workplaceTypes', [''])[0],
                'posted_at': job.get('postedDate'),
                'updated_at': job.get('modifiedDate'),
                'details_url': job.get('detailsPageUrl'),
                'company_url': job.get('companyPageUrl'),
                'company_logo': job.get('companyLogoUrl'),
                'is_easy_apply': job.get('easyApply', False),
                'willing_to_sponsor': job.get('willingToSponsor', False),
                'employer_type': job.get('employerType'),
                'guid': job.get('guid')
            }
            
            self.post_to_backend(job_data)
            yield job_data

        # Handle pagination
        current_page = response.meta['page']
        total_count = data.get('count', 0)
        if current_page * 20 < total_count:
            params = response.meta['params']
            params['page'] = str(current_page + 1)
            next_url = f"{self.api_url}?{urllib.parse.urlencode(params)}"
            
            yield scrapy.Request(
                url=next_url,
                headers=self.custom_headers,
                callback=self.parse,
                meta={'page': current_page + 1, 'params': params}
            )


    def post_to_backend(self, job_data):
        print(job_data)
        try:
            import requests
            response = requests.post(
                'http://localhost:8000/api/jobs/',
                json=job_data,
                headers={'Content-Type': 'application/json'}
            )
            self.logger.info(f"Posted job {job_data['job_id']} to backend. Status: {response.status_code}")
        except Exception as e:
            self.logger.error(f"Error posting job {job_data['job_id']} to backend: {e}")