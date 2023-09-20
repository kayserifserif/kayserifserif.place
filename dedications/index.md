---
layout: default
title: Dedications
description: To some of the people and things that shape me and my work.
---

{% assign musical_artists = "Laufey, Andrew Bird, Vulfpeck, Brandi Carlile, Sleeping at Last, dodie, Bon Iver, The Oh Hellos, John Mayer" | split: "," %}
{% assign musicals = "Hadestown, Sunday in the Park with George, West Side Story, Waitress, Carousel, Legally Blonde, Bridges of Madison County, Amélie, The Guy Who Didn’t Like Musicals" | split: "," %}
{% assign shows = "Community, Doctor Who, Derry Girls, Crazy Ex-Girlfriend, Gilmore Girls" | split: "," %}
{% assign films = "Howl’s Moving Castle, The Truman Show, The Social Network, Billy Elliot" | split: "," %}
{% assign games = "Assemble with Care, Pikuniku, A Short Hike, Toem, The Legend of Zelda: Breath of the Wild, The Legend of Zelda: Tears of the Kingdom, Spiritfarer, Carto, Night in the Woods" | split: "," %}
{% assign sayings = "Move slow and fix things, Don’t tell the poets, The machines have learned enough, No TERFs; no turfs, (delivered quietly), I love visiting your website (from Chris Coyier)" | split: "," %}

<div class="intro">
  <h1>{{ page.title }}</h1>
  <div>
    <p>{{ page.description }}</p>
  </div>
</div>
<main>
  <div class="section">
    <div class="section--header">
      <h2>PEOPLE.</h2>
    </div>
    <div class="section--body columns">
      <div class="subsection">
        <p>(friends)</p>
        <p><a href="https://liuleslie.github.io/">Leslie Liu</a>.</p>
        <p><a href="https://hellodri.itch.io/">Dri</a>.</p>
        <p><a href="https://www.instagram.com/evelynbiart/">Evelyn Bi</a>.</p>
        <p><a href="https://salpalc.art/">Sally Chen</a>.</p>
        <p><a href="https://www.instagram.com/anotherbrowsertab/">Tiff</a>.</p>
        <p><a href="https://ashleykang.dev/">Ashley Kang</a>.</p>
        <p><a href="https://sarahciston.github.io/">Sarah Ciston</a>.</p>
        <p><a href="https://outofambit.format.com/">Evelyn Masso</a>.</p>
        <p><a href="https://anhvn.com/">Anh</a>.</p>
        <p><a href="https://www.spencerchang.me">Spencer Chang</a>.</p>
        <p><a href="https://omar.website/">Omar Rizwan</a>.</p>
        <p><a href="https://shen.land/">Shen</a>.</p>
        <p><a href="https://ifyouknewmewouldyoulove.me/">Chia Amisola</a>.</p>
        <p><a href="https://jzhao.xyz/">Jacky Zhao</a>.</p>
        <p><a href="https://ivanzhao.me/">Ivan Zhao</a>.</p>
        <p><a href="https://henry.codes/">Henry Desroches</a>.</p>
        <p><a href="https://computationalmama.xyz/">Ambika (Computational Mama)</a>.</p>
        <p><a href="https://opheliagame.github.io/">Anushka (opheliagame)</a>.</p>
      </div>
      <div class="subsection">
        <p>(mentors)</p>
        <p>Le Shan Kwan.</p>
        <p>Alison Wong.</p>
        <p>Evan Hughes.</p>
        <p>DJ Johnson.</p>
        <p>Reed Blaylock.</p>
        <p>Deniz Rudin.</p>
        <p>Qianqian Ye.</p>
        <p>Daniel Richter.</p>
        <p>Mark Marino.</p>
      </div>
      <div class="subsection">
        <p>(influences & models)</p>
        <p><a href="https://html.energy/">HTML Energy</a> and <a href="https://www.laurel.world/">Laurel Schwulst</a>.</p>
        <p><a href="https://processing.org/">Processing</a> and <a href="https://p5js.org/">p5.js</a>.</p>
        <p><a href="https://sfpc.study/">The School for Poetic Computation</a>.</p>
        <p><a href="https://everest-pipkin.com/">Everest Pipkin</a>.</p>
        <p><a href="http://taeyoonchoi.com/">Taeyoon Choi</a>.</p>
        <p><a href="https://safiyaunoble.com/">Safiya Umoja Noble</a>.</p>
        <p>Sol LeWitt.</p>
        <p>Emily Dickinson.</p>
        <p>E. E. Cummings.</p>
        <p>Sappho.</p>
        <p>Mary Oliver.</p>
        <p>Oulipo.</p>
        <p><a href="http://luckysoap.com/">J. R. Carpenter</a>.</p>
        <p><a href="https://www.instagram.com/katejbaer/">Kate Baer</a>.</p>
        <p><a href="https://www.decontextualize.com/">Allison Parrish</a>.</p>
        <p><a href="https://toddwords.com/">Todd Anderson</a>.</p>
        <p><a href="https://lizadaly.com/">Liza Daly</a>.</p>
        <p><a href="https://nickm.com/">Nick Montfort</a>.</p>
        <p><a href="https://danieltemkin.com/">Daniel Temkin</a>.</p>
        <p><a href="https://www.instagram.com/neckpress/">Neck Press</a>.</p>
        <p><a href="https://sailorhg.com/">Amy Wibowo (sailorhg)</a>.</p>
        <p><a href="https://mintlodi.ca/">Susan Lin (mintlodica)</a>.</p>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="section--header">
      <h2>INSPIRATION.</h2>
    </div>
    <div class="section--body columns">
      <div class="subsection">
        <p>(musical artists)</p>
        {% for artist in musical_artists %}
        <p>{{ artist }}.</p>
        {% endfor %}
      </div>
      <div class="subsection">
        <p>(visual or textile artists)</p>
        <p><a href="https://www.instagram.com/annalaura_art/">Anna Laura</a>.</p>
        <p><a href="https://www.instagram.com/abi.harold/">Abi Harold</a>.</p>
        <p><a href="https://madeleinejubileesaito.net/">Madeleine Jubilee Saito</a>.</p>
        <p><a href="https://www.instagram.com/pascalcampionart/">Pascal Campion</a>.</p>
        <p><a href="https://www.instagram.com/eunnieboo/">eunnieboo</a>.</p>
        <p><a href="https://www.instagram.com/bookhou/">Arounna Khounnoraj</a>.</p>
        <p><a href="https://www.instagram.com/id.knit.that/">Kendall Jade Ross</a>.</p>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="section--header">
      <h2>THINGS.</h2>
    </div>
    <div class="section--body columns">
      <div class="subsection">
        <p>(musicals)</p>
        {% for musical in musicals %}
        <p>{{ musical }}.</p>
        {% endfor %}
      </div>
      <div class="subsection">
        <p>(games)</p>
        {% for game in games %}
        <p>{{ game }}.</p>
        {% endfor %}
      </div>
    </div>
  </div>
  <div class="section">
    <div class="section--header">
      <h2>WORDS.</h2>
    </div>
    <div class="section--body columns">
      <div class="subsection">
        <p>(sayings)</p>
        {% for saying in sayings %}
        <p>{{ saying }}.</p>
        {% endfor %}
      </div>
    </div>
  </div>
</main>