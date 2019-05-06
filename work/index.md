---
title: Work
description: Work by Katherine Yang.
layout: directory
---

<h1 class="title">Works</h1>
<div class="work">
    {% assign years = "2019, 2018, 2017, 2016, 2015" | split: ", " %}
    {% for year in years %}
        <h2 class="year">{{ year }}</h2>
        {% assign projects = site.pages | where: "year", year %}
        {% for project in projects %}
        <a href="{{ project.url }}" title="{{ project.title }}" class="project">
            <figure>
                <figcaption>
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.description }}</p>
                    <table class="tags">
                        {% for tag in project.tags %}
                        <td class="tag">{{ tag }}</td>
                        {% endfor %}
                    </table>
                </figcaption>
                <img src="{{ project.image }}" alt="{{ project.image-alt }}">
            </figure>
        </a>
        {% endfor %}
    {% endfor %}
</div>