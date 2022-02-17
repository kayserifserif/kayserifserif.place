import requests
import csv
from graphviz import Digraph

shapes = {
  'professional': 'doublecircle',
  'personal': 'box3d',
  'experimental': 'egg',
  'work in progress': 'underline'
}

link = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRg5FVCk83wl4ScdDo3IM_M698aBuvtz9jgN40ceD_Ey8-jqOxsuNp9swUjnovb03TrzzD6OFdlUF5Y/pub?gid=0&single=true&output=csv'
r = requests.get(link)
r.encoding = 'UTF-8'

reader = csv.DictReader(r.text.splitlines())
data = []
for row in reader:
  row['Language'] = row['Language'].split(', ') if row['Language'] else []
  row['Tools'] = row['Tools'].split(', ') if row['Tools'] else []
  row['Collaborators'] = row['Collaborators'].split(', ') if row['Collaborators'] else []
  row['Themes'] = row['Themes'].split(', ') if row['Themes'] else []
  data.append(row)

portfolio = [row for row in data if row['Portfolio']]
themes = set([item for items in [project['Themes'] for project in portfolio] for item in items])

dot = Digraph(engine='fdp')
dot.attr(nodesep='1', ranksep='2')
# dot.format = 'svg'

for theme in themes:
  dot.node(theme.replace(' ', ''), theme, shape='plaintext')

for project in portfolio:
  nodetitle = project['Title'].split(': ')[0].replace(' ', '')
  dot.node(nodetitle, project['Title'], shape=shapes[project['Portfolio']])
  pthemes = project['Themes']
  for theme in pthemes:
    dot.edge(nodetitle, theme.replace(' ', ''), constraint='false')

# dot.render('output/archive.gv', view=True)
u = dot.unflatten(stagger=3)
u.render('output/archive2.gv', view=True)