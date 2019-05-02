---
title: Etymologee
description: Explore English words through a visualisation of their historical and geographical etymology.
year: 2016
tags: [code]
image: /assets/img/etymologee/etymologee.png
layout: article
---

<header class="intro">
    <h1 class="details">{{ page.title }}
        <span class="subtitle">{{ page.description }}</span>
    </h1>
    <div class="platforms">
        <a href="https://github.com/whykatherine/etymology" title="GitHub">GitHub</a>
    </div>
    <figure>
        <img src="{{ page.image }}" alt="Etymologee" title="Example query in Etymologee">
    </figure>
</header>

## Background

Etymology is often thought of as a topic for scholars of "dead languages". In some cases, it can certainly be very dry and difficult to understand without having extensively studied the many languages of which the modern English language is an amalgamation. In other cases, however, the story behind, say, how a word travels from East Asia to North America and comes to mean something quite different, can be fascinating, for both language enthusiasts and casual speakers of a language.

The aim of this project was to bring the field of etymology out of the traditional and inherent text-based presentation format on to an interactive format. Through demonstrating meaningful insights into words, discovering interesting relationships between words, and displaying all information visually and graphically, the hope was to create an accessible and innovative way to explore the English language.

## Investigation

### Research

My client was a 16-year-old student currently studying for standardised tests such as the SAT and ACT. In particular, the SAT includes a reading section and a language section that both require the student to decipher vocabulary words in context. Though the recent redesign of the SAT had shifted the focus from guessing obscure and esoteric words to figuring out words with multiple meanings in context, my client still occasionally had trouble with these questions and was looking for ways to improve her vocabulary skills.

I conducted a survey among 13 other Year 11 students to find out if my client’s problem is applicable to a wider target audience or group. There was quite a wide range of experiences within the respondents, with the general trend being that slightly more people find it difficult than easy to understand and learn new or unfamiliar words. Personally, I also faced this problem, as the problems presented words that were not necessarily ones we use in everyday conversation or writing and often resulted in me guessing rather than using a more confident and methodical approach. These factors suggested that my client’s situation was one that many other students experienced.

### Questions

* Who is in need or can benefit from this solution?
* Why can learning English vocabulary be difficult?
* What methods are used to learn vocabulary?
* How can English words be decomposed or broken down?
* What makes vocabulary learning methods effective and interesting?
* When would these tools be used?
* How can this information or data be presented in a way that is engaging?
* How can Python be used to extract or compile data from other sources?
* How can Python be used to present information visually?

### Existing products
<div>
    <a href="http://wordnet.princeton.edu/" title="WordNet">WordNet</a>: a “large lexical database of English”, linking words “by means of conceptual-semantic and lexical relations”.
    <dl class="swot">
        <div>
            <dt>Strengths</dt>
                <dd>Unique information about relationships between words</dd>
                <dd>Some interactivity</dd>
        </div>
        <div>
            <dt>Weaknesses</dt>
                <dd>Lack of visual components</dd>
                <dd>Lack of text layout: definition, example usage, related words, etymology combined in a single block of text</dd>
        </div>
        <div>
            <dt>Opportunities</dt>
                <dd>Suggestions in input</dd>
                <dd>Display etymologies</dd>
        </div>
        <div>
            <dt>Threats</dt>
                <dd>Simplified interface may make experience more difficult or unappealing for users</dd>
        </div>
    </dl>
</div>
<div>
    <a href="http://www.etymonline.com/" title="Etymonline">Etymonline</a>: A free and open “map of the wheel-ruts of modern English” that compiles etymologies from a wide range of print sources (Harper).
    <dl class="swot">
        <div>
            <dt>Strengths</dt>
                <dd>Clean, simple design</dd>
                <dd>Compilation of a wide range of sources</dd>
        </div>
        <div>
            <dt>Weaknesses</dt>
                <dd>Lack of visual components</dd>
                <dd>Lack of text layout: definition, example usage, related words, etymology combined in a single block of text</dd>
        </div>
        <div>
            <dt>Opportunities</dt>
                <dd>Suggestions in input</dd>
        </div>
        <div>
            <dt>Threats</dt>
                <dd>Simplified interface may make experience more difficult or unappealing for users</dd>
        </div>
    </dl>
</div>
<div>
    <a href="http://www.dictionary.com/" title="Dictionary.com">Dictionary.com</a>: The world’s “leading digital dictionary”, providing “definitions, spellings, audio pronunciations, example sentences, and word origins”.
    <dl class="swot">
        <div>
            <dt>Strengths</dt>
                <dd>Origin (geographical) of word displayed on a map</dd>
                <dd>Origin (historical) of word displayed on a timeline</dd>
        </div>
        <div>
            <dt>Weaknesses</dt>
                <dd>Busy interface</dd>
        </div>
        <div>
            <dt>Opportunities</dt>
                <dd>Interactivity in map or timeline</dd>
                <dd>Suggestions in input</dd>
        </div>
        <div>
            <dt>Threats</dt>
                <dd>Users may scroll only to the dictionary definition and miss the other sections</dd>
        </div>
    </dl>
</div>

## Design

### Specifications

* The program takes input from the user in the form of a word to look up.
* The program provides auto-complete suggestions for words in the input.
* The program provides suggestions for misspelled or invalid words after input.
* Given a word, the program displays the word origin, the affixes, the root words, and any other useful information relating to its etymology.
* The program uses dictionaries to store various elements of and information about words.
* The design includes a timeline displaying historical origin of the word.
* The design includes a map displaying geographical origins of the word.
* After the program runs, it allows the user to continue looking up more words.
* The design includes visual animations.
* The design uses two to five colours.

<figure>
    <img src="/assets/img/etymologee/flow.png" title="Flow chart">
    <figcaption>Flow chart</figcaption>
</figure>

### Features

<img src="/assets/img/etymologee/1.png" title="Etymologee">
<img src="/assets/img/etymologee/2.png" title="Etymologee">
<img src="/assets/img/etymologee/3.png" title="Etymologee">
<img src="/assets/img/etymologee/4.png" title="Etymologee">

## Evaluation

I used four different methods to evaluate my product.

1. **Acceptance testing**: I used my product as an end-user, trying different cases to see if the application gives the correct output and handles errors correctly. This test helped me ensure that the program itself was functional and stable before I moved on to how it solved the problem.
2. **Evaluation against specifications**: The product was compared against each specification of the original design and evaluated as to whether or not it met the spec or achieved it to a sufficient level. This gave me an objective overview of whether or not I have fulfilled the original goal.
3. **Client feedback**: I presented my completed product to my client and asked for her thoughts on both the product itself, as well as how the product served as a solution to her problem. As the product is built primarily for the client, this feedback was quite important and informed me as to its achievements, shortcomings, and potential extensions.
4. **Demographic survey**: A survey was sent out among the key demographic of CIS Year 11 students with a range of qualitative and quantitative questions on the product’s usability, interface, application, improvements, and extensions. The specific questions or fields were as follows:
    * How easy to use is the product? (on a scale of 1, ‘not very’, to 10, ‘extremely’)
    * How visually engaging is the product? (on a scale of 1, ‘not very’, to 10, ‘extremely’)
    * Would this tool be interesting and/or useful in language learning?
    * What other features could the app include?

With questions 1 and 2, the quantitative data of the product’s usability and interface gave me a reasonable idea of objectively how successful the product is in itself, and with the qualitative information received in response to questions 3, 4, and 5, the survey respondents were encouraged to offer their own creative input in how they perceived the solution, and how they might approach the issue going forward.

### Improvements

#### Functionality

* Click on words in definition or etymology to look them up.
        
When a user sees a word they would like to learn about, instead of manually typing it in the search bar as they would currently, it would be more intuitive to be able to click on the word to see its entry.

* View multiple definitions / most pertinent definition.
        
The Merriam-Webster API gives fully-featured entries of words, which is a double-edged sword, as it can be very useful in learning different applications of the word, but can also give obscure and unexpected definitions. Additionally, for words with many common meanings, it would be useful to see more than just one definition.

* Expanded etymology (Vocabulary.com&ndash;inspired).
        
Currently, the etymology section will typically display originating languages, root words, affixes, and occasionally the background or context if it is especially relevant. However, it would be more interesting to explore more facets of the word origin. A possible solution to this particular extension would be to collate information from multiple dictionaries, as Etymonline does.

Furthermore: changes to word over time; meaning of root words.

* See words in context.
        
Currently, words are displayed in isolation, as is the case in most similar products. A feature that would set this app apart would be a more pronounced focus on the context of the origination of a word. The ability to understand the background of how the word came into the language or what kind of world gave rise to the word, as well as the ability to compare related or unrelated words, would be even more fascinating and contribute more to the culture of recreational language learning.

Furthermore: explore words with same geographical origin; explore words with same historical origin; further context with historical events of the time.

* "I'm feeling lucky" button / suggestions for interesting words.
        
Explore seemingly unrelated words that have similar origins, or seemingly related words that have unrelated origins.

* Intelligent suggestions and error handling.
        
Rather than the current catch-all of displaying an error message when the input is invalid, it would be a better experience to see a dynamic list of possible intended words shown when the user is typing. Additionally, rather than having to retype a misspelled word after searching, it would be easier for the user to be able to click on a word that the program thinks they meant.

Furthermore: auto-complete drop-down; Google-inspired 'Did you mean' suggestion list after invalid input.

#### Interface

* Interactivity
        
When testing, a few users tried to click on various elements, which indicates that it would be natural for an app so heavily based on graphics and visuals to include interactivity.

* Visual animations
        
Similarly, animations would make the visual interface even more engaging.

* Responsiveness and intelligent resizing
        
The layout and the elements in the window should respond to window resizing, and there should be limits on how the window can be resized.

#### Structure and efficiency

* Web platform
        
As my product may not necessarily require heavy handling of data, web tools may be more suitable, as they are generally better equipped to handle a GUI and to create dynamic graphics.

* More suitable and modern graphics tools
        
If the product remains in Python, it would be ideal to migrate to more appropriate tools, as Tkinter is not the best solution for my particular product.

* More accurate algorithms for mapping
        
A more appropriate algorithm should be used for converting latitude/longitude coordinates to x/y coordinates on the particular map I’m using, as there are often slight errors.

* Classes or modules
        
All my code is currently in one file, and the program would benefit from having a more modular structure, in which each component would exist in its own file.

* Cleaner and more efficient code
        
The code is quite messy and could be cleaned up and optimised to run more smoothly and efficiently.

### Impact

#### Learning outcomes

Throughout the development of this app, I have learned about Python, APIs, XML and lxml, and GUIs and Tkinter. Out of these technologies, one of the most important was APIs, because extracting data from the comprehensive and well-established Merriam-Webster dictionary instead of manually hard-coding all of the content allowed the app to be fully functional, giving results for any input as long as it exists in the dictionary. In further development, there were many tools and resources I could have used to improve the product: for GUI, possibly [PyQt](https://riverbankcomputing.com/software/pyqt/intro) or [wxPython](http://www.wxpython.org/); for HTTP access, [Requests](http://docs.python-requests.org/en/master/). Most preferably, I would use HTML, CSS, JavaScript, and perhaps other technologies to create and access databases that may be required for the more advanced extensions.

#### Solution of problem

The original design brief stated that the goal was to help high school students who are learning English vocabulary or are interested in gaining a better understanding of the English language, through an engaging and interesting visual interface that explores etymologies of words. From the various methods of evaluation, I have found that the product serves as a very effective solution to the problem. It presents a less-acknowledged component of vocabulary in a novel and engaging way, encouraging users to think more deeply about words and to use etymology to improve their mastery of the language. However, there are many shortcomings and much room for improvement in the product. One potential negative effect would be the app’s limitation in displaying only the first valid definition, which may misinform the user by giving the impression that it is the only definition or the most pertinent definition.