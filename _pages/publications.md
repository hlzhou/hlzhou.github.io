---
layout: page
permalink: /publications/
title: publications
description: "* denotes equal contribution."
years: [2023,2022,2021,2020,2019,2018,2016,2015]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

An up-to-date list is available on <a href="https://scholar.google.com/citations?hl=en&user=BKkK2DoAAAAJ&view_op=list_works&sortby=pubdate">Google Scholar.</a>

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[year={{y}}]* %}
{% endfor %}

</div>
