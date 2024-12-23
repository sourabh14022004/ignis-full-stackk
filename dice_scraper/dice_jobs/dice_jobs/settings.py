# dice_jobs/settings.py
BOT_NAME = 'dice_jobs'

SPIDER_MODULES = ['dice_jobs.spiders']
NEWSPIDER_MODULE = 'dice_jobs.spiders'

# Obey robots.txt rules
ROBOTSTXT_OBEY = False

# Configure item pipelines
ITEM_PIPELINES = {
   'dice_jobs.pipelines.DiceJobsPipeline': 300,
}

CONCURRENT_REQUESTS = 1
DOWNLOAD_DELAY = 2 