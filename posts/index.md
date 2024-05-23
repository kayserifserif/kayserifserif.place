---
layout: default
title: Posts
description: An endeavour to write.

previous_title: Work
previous_url: /work

next_title: Intentions
next_url: /intentions
---

<div class="intro">
  <h1>{{ page.title }}</h1>
  <div>
    <p>{{ page.description }}</p>
  </div>
</div>
<div class="posts-list">
  <ul role="list">
  {% for post in site.posts %}
    <li>
      <p class="posts-list--date">{{ post.date | date: "%F" }}</p>
      <p class="posts-list--title"><a href="{{ post.url }}">{{ post.title }}</a></p>
      <!-- <p class="posts-list--excerpt">{{ post.excerpt }}</p> -->
    </li>
  {% endfor %}
  </ul>
</div>