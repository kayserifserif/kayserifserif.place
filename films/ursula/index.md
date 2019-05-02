---
title: Ursula
description: A love story. Cinematographer.
year: 2017
tags: [film]
image: /assets/img/films/ursula.jpg
video-link: https://vimeo.com/220745972
video-embed: https://player.vimeo.com/video/220745972
layout: article
---

<header class="intro">
    <h1 class="title">{{ page.title }}</h1>
    <p class="year">{{ page.year }}</p>
    <p class="subtitle">{{ page.description }}</p>
    <div class="platforms">
        <a href="{{ page.video-link }}" title="Vimeo">Vimeo</a>
    </div>
    <figure>
        <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="{{ page.video-embed }}?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
    </figure>
</header>