# run_spider.py
from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings
from dice_jobs.dice_jobs.spiders.dice_spider import DiceSpider

def run_spider():
    process = CrawlerProcess(get_project_settings())
    process.crawl(DiceSpider)
    process.start()

if __name__ == '__main__':
    run_spider()