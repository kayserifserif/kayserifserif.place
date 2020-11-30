---
layout: article
title: It All Started with the Simpsons
description: A computationally generated compilation of references through animated shows.
date: 202005
tags: [code, film/tv]
image: /assets/img/simpsons/thumbnail.jpg
image-square: /assets/img/simpsons/thumbnail square.jpg
image-alt: The Simpsons on the iconic couch, overlaid by a network graph of yellow circles and white lines.
platforms: [["https://www.youtube.com/watch?v=tzhH_btkHa0", "Video"]]
---

<figure role="group">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/tzhH_btkHa0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

“It All Started with the Simpsons” is a remix video essay that journeys through references in animated shows to explore The Simpsons as a cornerstone of pop culture.

This project was inspired by a larger research project I’m pursuing, which aims to computationally identify references in transcripts and subtitles. I was intrigued by the YouTube channel [Tv References](https://www.youtube.com/channel/UCMjgmUbdGtIASP8zMa_kVqA/), where a dedicated fan compiles pop culture references in media. I used [youtube-dl](https://github.com/ytdl-org/youtube-dl) to download every video from Tv References (up to date as of around May 7, 2020) and wrote a Python script that uses [NetworkX](https://networkx.github.io/) to create a visual chart of animated TV shows that acknowledge, shun, or pay homage to each other through references. Borrowing Mike Calabro’s spoken essay on [NowThis Nerd](https://www.youtube.com/watch?v=9gsx_r4FTfw) about The Simpsons’ “reference revolution” as a thematic guide, I used [ffmpeg](https://ffmpeg.org/) to sequence referentially consecutive clips, then overlaid an Illustrator-edited and After Effects–animated graph atop to guide the viewer through the journey. 

I am fascinated with how creators care about media and pop culture, consciously and unconsciously incorporating their influences into their work and thus constantly contributing to a rich web of interwoven cultural production. Additionally, I hadn’t watched many of these shows before, but I have now had the chance to watch many video compilations and episode highlights of these celebrated cultural artifacts and my interest has been piqued—I feel inspired to devote more time to learning about and watching some of these shows.

<figure role="group">
    <img src="/assets/img/simpsons/progress-1.jpeg" alt="Memo note with scribbled diagram" loading="lazy">
    <figcaption>First diagram sketch: linear with lines looping back in the timeline</figcaption>
</figure>

<figure role="group">
    <img src="/assets/img/simpsons/progress-2.jpeg" alt="Memo note with scribbled diagram" loading="lazy">
    <figcaption>Second diagram sketch: radial shape with lines looping back to the centre</figcaption>
</figure>

<figure role="group">
    <img src="/assets/img/simpsons/progress-3.png" alt="Network graph" loading="lazy">
    <figcaption>Initial network graph</figcaption>
</figure>

<figure role="group">
    <img src="/assets/img/simpsons/progress-4.png" alt="Network graph" loading="lazy">
    <figcaption>Network graph with variable circle sizes and line widths</figcaption>
</figure>

<figure role="group">
    <img src="/assets/img/simpsons/progress-5.png" alt="Network graph" loading="lazy">
    <figcaption>Network graph with lines annotated with their weight numbers</figcaption>
</figure>

<figure role="group">
    <img src="/assets/img/simpsons/progress-7.png" alt="Network graph" loading="lazy">
    <figcaption>Network graph with some more data</figcaption>
</figure>

<figure role="group">
    <img src="/assets/img/simpsons/progress-8.png" alt="Network graph" loading="lazy">
    <figcaption>Network graph, styled with type and colour</figcaption>
</figure>

<figure role="group">
    <img src="/assets/img/simpsons/progress-9.png" alt="Network graph" loading="lazy">
    <figcaption>Styled network graph with no overlapping lines</figcaption>
</figure>