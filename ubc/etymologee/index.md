---
title: Etymologee
description: A more visual way to explore the English language through historical and geographical etymology.
layout: ubc
css: prism.css
js: prism.js
---

<div class="project-title">
	<h1>Etymologee</h1>
	<p class="desc">A more visual way to explore the English language through historical and geographical etymology.</p>
</div>

<div class="writeup">
	<h2>Background</h2>
		<p>Etymology is often thought of as a topic for scholars of "dead languages". In some cases, it can certainly be very dry and difficult to understand without having extensively studied the many languages of which the modern English language is an amalgamation. In other cases, however, the story behind, say, how a word travels from East Asia to North America and comes to mean something quite different, can be fascinating, for both language enthusiasts and casual speakers of a language.</p>
		<p>The aim of this project was to bring the field of etymology out of the traditional and inherent text-based presentation format on to an interactive format. Through demonstrating meaningful insights into words, discovering interesting relationships between words, and displaying all information visually and graphically, the hope was to create an accessible and innovative way to explore the English language.</p>
	<h2>Research</h2>
		<p>My client was a 16-year-old student currently studying for standardised tests such as the SAT and ACT. In particular, the SAT includes a reading section and a language section that both require the student to decipher vocabulary words in context. Though the recent redesign of the SAT had shifted the focus from guessing obscure and esoteric words to figuring out words with multiple meanings in context, my client still occasionally had trouble with these questions and was looking for ways to improve her vocabulary skills.</p>
		<p>To conduct research around the topic, I surveyed other students to generate questions that would guide me through the investigation process. I then used the questions to analyse existing products, such as <a href="http://wordnet.princeton.edu/">WordNet</a> (a “large lexical database of English”, linking words “by means of conceptual-semantic and lexical relations”), <a href="http://www.etymonline.com/">Etymonline</a> (a free and open “map of the wheel-ruts of modern English”), and <a href="http://www.dictionary.com/">Dictionary.com</a> the world’s “leading digital dictionary”).</p>
	<h2>Design</h2>
		<p>From my research, I created flow diagrams and mockups for a tool that I thought could address the client's problem.</p>
	<h2>Evaluation</h2>
		<p>There were many interesting suggestions for other features that the app could include. On the usability and experience, one suggestion was for something I had difficulty with and agree should be improved: “more definitions” of words, or at least definitions that are most pertinent. One suggestion, “[clicking] on words in the description to find the etymology for those words”, was one I had not really considered before, but highly agree with. Respondents also talked about extending or expanding the exploration of etymologies. One person had the same idea as I had originally, which was to “[provide] a way to compare between words that originate from the same place” or from the same time period. This feature would have been fascinating to see, but because I estimated there would not be enough time, it was not included in the design. Users said that it would be interesting to see the “changes to [words] over time”; perhaps even “[etymologies] of other languages”! Other suggestions related to receiving more context for the words: “word uses in a sentence”, “audio pronunciation”, “synonyms/antonyms”, “pictures of the object”.</p>
	<h2>Impact</h2>
		<p>Throughout the development of this app, I have learned about Python, APIs, XML and lxml, and GUIs and Tkinter. Out of these technologies, one of the most important was APIs, because extracting data from the comprehensive and well-established Merriam-Webster dictionary instead of manually hard-coding all of the content allowed the app to be fully functional, giving results for any input as long as it exists in the dictionary. In further development, there were many tools and resources I could have used to improve the product: for GUI, possibly <a href="https://riverbankcomputing.com/software/pyqt/intro">PyQt</a> or <a href="http://www.wxpython.org/">wxPython</a>; for HTTP access, <a href="http://docs.python-requests.org/en/master/">Requests</a>. Most preferably, I would use HTML, CSS, JavaScript, and perhaps other technologies to create and access databases that may be required for the more advanced extensions.</p>
</div>

<div class="media">
	<figure>
		<figcaption>Flow chart</figcaption>
		<img src="/assets/img/etymologee/flow.png" alt="Flow chart">
	</figure>
	<figure class="grid">
		<figcaption>Mockups of different app states</figcaption>
		<img src="/assets/img/etymologee/1.png" alt="Mockup: word entry">
		<img src="/assets/img/etymologee/2.png" alt="Mockup: results">
		<img src="/assets/img/etymologee/3.png" alt="Mockup: historical range">
		<img src="/assets/img/etymologee/4.png" alt="Mockup: origin before 12th century">
	</figure>
	<figure>
		<figcaption>Extracts from source code (full code on <a href="https://github.com/whykatherine/etymology">Github</a>)</figcaption>
		<pre class="line-numbers"><code class="language-python">class App():

	def __init__(self, root):

		root.title('Etymology')
		root.config(bg=c_main)

		# INSTRUCTION
		self.instruct = Label(text='Enter a word to look up.')
		self.instruct.config(fg=c_white, bg=c_main, font='Merriweather 16 normal')
		self.instruct.grid(row=0, columnspan=2, pady=(10, 0))

		# ENTRY
		self.entry_text = StringVar()
		entry = Entry(textvariable=self.entry_text)
		entry.config(justify=CENTER, highlightthickness=0, relief='flat', fg=c_white, bg=c_darker, insertbackground=c_white, font=f_body)
		entry.grid(row=1, column=0, sticky=N+S+E+W, ipadx=100, ipady=5, padx=(100, 0), pady=10)
		entry.focus_set()

		# SEARCH BUTTON
		self.search_btn = Label(text='LOOK UP')
		root.bind('&lt;Return&gt;', self.look_up)
		self.search_btn.bind('&lt;Button-1&gt;', self.look_up)
		self.search_btn.config(relief=FLAT, fg=c_white, bg=c_lightgrey, activebackground=c_grey, font='Montserrat 16 bold', cursor='pointinghand')
		self.search_btn.grid(row=1, column=1, sticky=W, ipadx=20, ipady=5, padx=(0, 100), pady=10)

		# RESULTS
		self.message = Label(text='')
		self.message.config(wraplength=380, fg=c_white, bg=c_main, font='Merriweather 14 normal italic')
		self.word = Label(text='')
		self.word.config(fg=c_white, bg=c_main, font=f_heading)
		self.definition = Label(text='')
		self.definition.config(wraplength=550, fg=c_grey, bg=c_main, font=f_body)
		self.etymology = Label(text='')
		self.etymology.config(wraplength=550, fg=c_grey, bg=c_main, font=f_body)
		self.date = Label(text='')
		self.date.config(fg=c_grey, bg=c_main, font=f_body)

		# get updated metrics
		root.update()
		# set canvas width to window width
		self.timeline = Canvas(width=root.winfo_width(), height=100)
		self.timeline.config(bg=c_main, highlightthickness=0)

		# self.map = Canvas(width=root.winfo_width(), height=300, bg=c_main, bd=0, relief=FLAT)
		self.map = Canvas(width=600, height=350, bg=c_main, bd=0, relief=FLAT)

		# set elements to adjust when window resizes
		Grid.rowconfigure(root, 0, weight=1)
		Grid.columnconfigure(root, 0, weight=1)</code></pre>

	<pre class="line-numbers"><code class="language-python">def look_up(self, *args):
self.instruct.grid_forget()
self.search_btn.config(state='active')
# allow for spaces and other special characters
inp = self.entry_text.get().encode('utf-8')
url = 'http://www.dictionaryapi.com/api/v1/references/collegiate/xml/' \
	  + urllib.parse.quote(inp, safe='') \
	  + '?key=387115b8-0a9e-464f-8f56-1e4a6f46f7f1'
# create element tree from XML file
tree = etree.parse(urllib.request.urlopen(url))

# find word entry
entries = tree.findall('entry')
if len(entries) == 0:
	word = 'N/A'
	definition = 'N/A'
	etymology = 'N/A'
	date = 'N/A'
	message = 'No results are available for ' + str(inp)[1:] + '. Make sure the spelling is correct and that you\'re looking for the root word!'
else:
	# WORD
	word = tree.findtext('.//ew')
	# DEFINITION
	definitions = tree.findall('.//dt')
	definition = None
	for d in definitions:
		definition = d
		etree.strip_tags(definition)
		definition = html.unescape(str(etree.tostring(definition)))
		definition = self.clean(definition)
		if definition != '':
			break
	# DATE
	date = tree.findtext('.//date')
	if date is None:
		date = 'N/A'
	# ETYMOLOGY
	etymology = tree.find('.//et')
	if etymology is None:
		etymology = 'N/A'
	else:
		etree.strip_tags(etymology)
		etymology = html.unescape(str(etree.tostring(etymology)))[2:-1]
		etymology = self.clean(etymology)
	message = ''

# set variables to found data
self.word.config(text=word)
self.definition.config(text=definition)
self.etymology.config(text=etymology)
self.date.config(text=date)
self.message.config(text=message)

if word == 'N/A' and etymology == 'N/A' and date == 'N/A':
	# show only error message
	self.message.grid(row=2, columnspan=2, pady=(10, 20))
	self.word.grid_forget()
	self.definition.grid_forget()
	self.etymology.grid_forget()
	self.date.grid_forget()
	self.timeline.grid_forget()
	self.map.grid_forget()
else:
	# show only results
	self.message.grid_forget()
	self.word.grid(row=3, columnspan=2)
	self.definition.grid(row=4, columnspan=2)
	self.etymology.grid(row=5, columnspan=2)
	self.date.grid(row=6, columnspan=2, pady=(0, 40))
	# remove map if etymology not available
	if etymology == 'N/A':
		self.map.grid_forget()
	else:
		self.create_map(etymology)
	# remove timeline if date not available
	if date == 'N/A':
		self.timeline.grid_forget()
	else:
		self.date.grid(row=6, columnspan=2, pady=0)
		self.create_timeline(date)
self.search_btn.config(state='normal')</code></pre>

	<pre class="line-numbers"><code class="language-python">def create_timeline(self, date):
time_start = 1100
time_end = 2000
timespan = time_end - time_start

self.timeline.delete(ALL)
twidth = int(self.timeline['width'])
theight = int(self.timeline['height'])
line_start = twidth*.2
line_end = twidth*.8
line_length = line_end - line_start
line_y = theight/2
self.timeline.grid(row=7, columnspan=2, pady=(0, 20))
# timeline
self.timeline.create_line(line_start, line_y, line_end, line_y, width=5, fill=c_white)
# starting mark
self.timeline.create_line(line_start+1, line_y+2, line_start+1, line_y-20, width=5, fill=c_white)
# 9 intermediate marks spaced equally
for x in range(8):
	xpos = line_start + line_length*.11*(x+1)
	self.timeline.create_line(xpos, line_y+2, xpos, line_y-20, width=3, fill=c_white)
# ending mark
self.timeline.create_line(line_end-1, line_y+2, line_end-1, line_y-20, width=5, fill=c_white)
self.timeline.create_text(line_start-15, line_y+8, text='before\n1100', anchor=SE, justify=RIGHT, fill=c_white, font=f_body)
self.timeline.create_text(line_end+15, line_y+8, text='after\n2000', anchor=SW, justify=LEFT, fill=c_white, font=f_body)
# exact dates show a dot
try:
	date = int(date)
	xpos = line_start + line_length*(date-time_start)/timespan
	radius = 5
	self.timeline.create_oval(xpos-radius, line_y+15, xpos+radius, line_y+15+radius*2, fill=c_grey, width=0)
	self.timeline.create_text(xpos, line_y+30+radius*2, text=date, fill=c_grey, font=f_body)
except ValueError:
	# dates before 12th century show a leftward arrow
	if str(date).startswith('before'):
		height = 8
		width = 30
		self.timeline.create_line(line_start, line_y+20, line_start-width, line_y+20, width=height, arrow=LAST, fill=c_grey)
		self.timeline.create_text(line_start-width/2, line_y+30+height, text=date, fill=c_grey, font=f_small)
	# approximate dates show a dot
	elif str(date).startswith('circa'):
		date = int(date[-4:])
		xpos = line_start+line_length*(date-time_start)/timespan
		radius = 5
		self.timeline.create_oval(xpos-radius, line_y+15, xpos+radius, line_y+15+radius*2, fill=c_grey, width=0)
		self.timeline.create_text(xpos, line_y+30+radius*2, text=('circa',str(date)), fill=c_grey, font=f_small)
	# dates spanning a century show a bar
	elif str(date).endswith('century'):
		cent_start = int(str(int(date[:2])-1) + '00')
		cent_end = int(str(int(date[:2])-1) + '99')
		rng_start = line_start + line_length*(cent_start-time_start)/timespan
		rng_end = line_start + line_length*(cent_end-time_start)/timespan
		height = 8
		self.timeline.create_line(rng_start, line_y+20, rng_end, line_y+20, width=height, fill=c_grey)
		self.timeline.create_text(rng_start+(rng_end-rng_start)/2, line_y+30+height, text=date, fill=c_grey, font=f_small)</code></pre>
	</figure>
</div>