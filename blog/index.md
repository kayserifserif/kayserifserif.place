---
layout: default
title: Blog
description: Blog.
---

<div class="intro">
  <h1>{{ page.title }}</h1>
  <div>
    <p>{{ page.description }}</p>
  </div>
</div>
<main>
  <div class="section">
    <div class="blog-list">
      {% for post in site.posts %}
        <div>
          <p class="blog-list--date">{{ post.date | date: "%F" }}</p>
          <h2 class="blog-list--title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
          <!-- <p class="blog-list--excerpt">{{ post.excerpt }}</p> -->
        </div>
      {% endfor %}
    </div>
  </div>
</main>