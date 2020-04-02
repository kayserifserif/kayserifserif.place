---
title: Work
description: Work by Katherine Yang.
layout: directory
---

<h1 class="title">Works</h1>
<div class="work">
  {% assign years = site.pages | group_by: "year" | sort_natural | reverse %}
  {% for year in years %}
    {% if year.name != "" %}
      {% assign yearInt = year.name | round %}
      <h2 class="year">{{ yearInt }}</h2>
      {% for project in year.items %}
        <a href="{{ project.url }}" title="{{ project.title }}" class="project">
          <figure>
            <figcaption>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="tags">
                {% for tag in project.tags %}
                  <span class="tag">{{ tag }}</span>
                {% endfor %}
              </div>
            </figcaption>
            <img src="{{ project.image }}" alt="{{ project.image-alt }}">
          </figure>
        </a>
      {% endfor %}
    {% endif %}
  {% endfor %}
</div>