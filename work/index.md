---
title: Work
description: Work by Katherine Yang.
layout: directory
---

<h1 class="details">Works</h1>
<div class="work">
    <!-- {% assign projects = site.pages | where: "tags", nil %} -->
    {% for project in site.pages %}
        {% if project.tags %}
            <a href="{{ project.url }}" title="{{ project.title }}" class="project">
                <figure>
                    <figcaption>
                        <h2>{{ project.title }}</h2>
                        <p>{{ project.description }}</p>
                        <tr class="tags">
                            <th>Tags</th>
                            {% for tag in project.tags %}
                            <td>{{ tag }}</td>
                            {% endfor %}
                        </tr>
                    </figcaption>
                    <img src="{{ project.image }}" alt="{{ project.title }}">
                </figure>
            </a>
        {% endif %}
    {% endfor %}
</div>