---
title: playground
layout: layouts/base.njk
---

<h1 style="border-bottom: var(--fgcolor) 5px solid;">Projects I've Done</h1>
<div class="content">
  {% for project in playground %}
      {% include "components/playground.njk" %}
  {% endfor %}
</div>