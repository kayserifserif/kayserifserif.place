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
    <ul>
      {% for post in site.posts %}
        <li>
          <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
          {{ post.excerpt }}
        </li>
      {% endfor %}
    </ul>
  </div>
</main>