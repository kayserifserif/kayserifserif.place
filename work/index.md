---
title: Work
description: Work by Katherine Yang.
layout: directory
---

<h1 class="title">Work</h1>
<div class="work">
  {% assign dates = site.pages | group_by: "date" | sort_natural | reverse %}
  {% for date in dates %}
    {% if date.name != "" %}
      {% assign dateInt = date.name | round %}
      {% for project in date.items %}
        <a href="{{ project.url }}" title="{{ project.title }}" class="project">
          <figure>
            <figcaption>
              <h3 class="projectTitle">{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="tags">
                {% for tag in project.tags %}
                  <span class="tag">{{ tag }}</span>
                {% endfor %}
              </div>
            </figcaption>
            <img src="{{ project.image-square }}" alt="{{ project.image-alt }}" loading="lazy">
          </figure>
        </a>
      {% endfor %}
    {% endif %}
  {% endfor %}
</div>