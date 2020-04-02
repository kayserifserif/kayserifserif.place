---
layout: article
title: Bluebirds
description: A Twitter interface/visualisation based on Daniel Shiffman's flocking algorithm.
year: 2019
tags: [code, data]
image: /assets/img/bluebirds/bluebirds.jpg
image-alt: Twitter birds flocking across the screen, with one Tweet highlighted and showing text
platforms: [["https://github.com/whykatherine/Bluebirds", "GitHub"]]
---

## Background

Bluebirds was a project that I began as a final assignment for a course (USC IML-288: Critical Thinking and Procedural Media with John B. Carpenter) and am continuing to develop on my own. I had been intrigued with concepts we explored briefly in the last few lessons of the course—namely the flocking algorithm—and wanted to combine this with data/information visualisation, which is a particular interest of mine.

This began as a project to highlight the issue of climate change denial. The tool works in real-time, using the given search query to retrieve the 100 most recent Tweets from the last 30 days. I configured the query to find Tweets that seemed to express the sentiment that climate change or global warming was a hoax, conspiracy, scam.

Climate action is becoming increasingly crucial across the world and is highly dependent on the influence of governments and corporations. Alarmingly, climate change denial continues to make up a significant portion of political rhetoric in some of the highest positions in society, suggesting an institutional attitude of, perhaps, wilful ignorance and damaging negligence. Through this project, I hoped to gain some insight into the rhetoric of climate change deniers and the discussion around the issue. 

Throughout the process of building this project, I found Tweets with content that was expected but, nevertheless, always somewhat shocking. One point of interest was that in some Tweets, the content and user information seemed to suggest that the user was either a bot or a troll—for example, the same user replying to multiple accounts with the same Tweet was highly suspicious. Though I have not done any analysis on the proportion of bots or trolls in particular topics compared to all topics, it seems reasonable to assume that in such a controversial and provocative issue that effectively stokes intense emotion and discussion, the rate must be higher.

## Improvements

I have expanded the tool into a general-purpose interface/visualiser, allowing the user to type in any search query through a graphical user interface (GUI), and retrieving Tweets in real-time based on the user's searches.

Continuing, I aim to refine the interaction with the Twitter birds, allowing more organic exploration and precise selection and examination.

The linguistic and text component of the project was complex in the way the text was displayed in the Tweet and how the top ten words were found across all Tweets. I am to refine this by improving pattern matching for text display and analysis and making special cases for @mentions and #hashtags—core categorisation features of Twitter.

## Showcase

<figure>
    <img src="/assets/img/bluebirds/IMG_4744.jpg" alt="Student standing in front of exhibit of process video, currently showing flocking bluebirds">
    <figcaption>Exhibit of work at Processing Community Day at USC SCA, currently showing flocking bluebirds</figcaption>
</figure>

<figure>
    <img src="/assets/img/bluebirds/IMG_4747.jpg" alt="Student standing in front of exhibit of process video, currently showing a cloud of text Tweets">
    <figcaption>Exhibit of work at Processing Community Day at USC SCA, currently showing a cloud of text Tweets</figcaption>
</figure>

<figure>
    <img src="/assets/img/bluebirds/IMG_4748.jpg" alt="Close-up of flyer listing student works exhibited">
    <figcaption>A flyer from Processing Community Day at USC SCA, listing student works exhibited</figcaption>
</figure>

<figure>
    <div><iframe src="https://player.vimeo.com/video/333697074?byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
    <figcaption>Exploring the flock of Tweets</figcaption>
</figure>

<figure>
    <div><iframe src="https://player.vimeo.com/video/333697357?byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
    <figcaption>Analysing the top words and highlighting relevant Tweets</figcaption>
</figure>

<figure>
    <div><iframe src="https://player.vimeo.com/video/333697397?byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
    <figcaption>Pressing enter to examine the Tweet in a browser</figcaption>
</figure>