from bs4 import BeautifulSoup as soup
from urllib.request import urlopen as u_req
import csv
from datetime import datetime


filename = "daily_gainer_and_losers_%s.csv" % datetime.date(datetime.now())
print(filename)
client = u_req("https://www.moneycontrol.com/")
page = client.read()
client.close()
page_soup = soup(page, 'html.parser')

id = ['tgNifty', 'tgSensex', 'tlNifty', 'tlSensex']
'''
id for each div such that

tgNifty: Top Gainers Nifty
tgSensex: Top Gainers Sensex
tlNifty: Top Losers Nifty
tlSensex: Top Losers Sensex
'''


for i in id:

    div = page_soup.findAll('div', {'id': i})
    tbody = div[0].findAll('tbody')
    tr = tbody[0].findAll('tr')
    for row in tr:
        td = row.findAll('td')
        t = [d.text for d in td]
        with open(filename, 'a+') as csvFile:
            writer = csv.writer(csvFile)
            writer.writerow(t)
        csvFile.close()
