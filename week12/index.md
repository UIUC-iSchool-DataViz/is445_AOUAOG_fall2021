---
layout: week
visible: true
icon: undraw_good_doggy_4wfq.svg
notitle: true
examples:
  - filename: In Class Idyll
    type: iodide
    title: In class Idyll resources, Week 12
    description: Updating storage of Idyll files in class
    link: https://github.com/UIUC-iSchool-DataViz/is445_AOUAOG_fall2021/tree/master/week12/inClass
  - filename: index.idyll
    type: iodide
    title: Prep index.idyll file, Week 12
    description: We'll be building toward a webpage like <a href="https://jnaiman.github.io/misc/">this</a> today using <a href="https://idyll-lang.org/">Idyll's</a> built-in components. 
    link: https://github.com/UIUC-iSchool-DataViz/is445_AOUAOG_fall2021/blob/master/week12/corg/prepIdyll/index.idyll
  - filename: histogram-custom-d3-component.js
    type: iodide
    title: d3.js component 1
    description: Starting histogram component 
    link: https://github.com/UIUC-iSchool-DataViz/is445_AOUAOG_fall2021/blob/master/week12/corg/prepIdyll/histogram-custom-d3-component.js
  - filename: histogram-button-custom-d3-component.js
    type: iodide
    title: d3.js component 2
    description: Histogram component + button 
    link: https://github.com/UIUC-iSchool-DataViz/is445_AOUAOG_fall2021/blob/master/week12/corg/prepIdyll/histogram-custom-d3-component.js
  - filename: histogram-button-slider-custom-d3-component.js
    type: iodide
    title: d3.js component 3
    description: Histogram component + button + slider
    link: https://github.com/UIUC-iSchool-DataViz/is445_AOUAOG_fall2021/blob/master/week12/corg/prepIdyll/histogram-button-slider-custom-d3-component.js
data:
  - filename: corgs_per_country_over_time_columns_2020.csv
    type: dataLink
    title: Corgis per country over time 
    description: This dataset is from the <a href="http://cardiped.net/">Cardigan Archives</a> and <a href="https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/grabCorgData_subpages.py">scraped using Beautiful Soup in Python</a> and <a href="https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/calc_corgData.ipynb">further processed in Python</a> into this form.
    link: https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445AOG_fall2020/master/week11/corg/corgs_per_country_over_time_columns_2020.csv
  - filename: corgiData_countries_subset_2020.json
    type: dataLink
    title: Subset of full Corgi database 
    description: This dataset is from the <a href="http://cardiped.net/">Cardigan Archives</a> and <a href="https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/grabCorgData_subpages.py">scraped using Beautiful Soup in Python</a> and <a href="https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/calc_corgData.ipynb">further processed in Python</a> into this form.
    link: https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445AOG_fall2020/master/week11/corg/corgiData_countries_subset_2020.json
---

# More with Idyll, Publishing Viz

We talk a little bit about publishing and carry on with Idyll.

## Extra files

Further example of Idyll pages: website from [Spring 2020](https://jnaiman.github.io/items_dataviz_spring2020/) which focuses on using [d3.js](https://d3js.org/) to do many plots since vega-lite was not working well at that time.  The index.idyll file, along with example d3 components and a styles.css file for the final map are in [this subdirectory from that course page here](https://github.com/UIUC-iSchool-DataViz/spring2020/tree/master/week15/corg).

Full corgi dataset available [here](corg/corgiData_countries_full_2020.json).

<!--
## Downloads & Links

### Idyll Files & Example pages

 1. We'll be building toward a webpage like [this](https://jnaiman.github.io/) today using [Idyll](https://idyll-lang.org/)'s built-in components.
 1. Last week, we got to [this index.idyll file right here](https://github.com/UIUC-iSchool-DataViz/is445AOG_fall2020/blob/master/week11/corg/prepIdyll/index.idyll) and we'll start from there this week.
 1. Full Markdown code for this week [available right here](https://github.com/UIUC-iSchool-DataViz/is445AOG_fall2020/blob/master/week12/corg/prepIdyll/index.idyll).
 1. We'll also build a few histogram components like:
    * starting with [this one](https://github.com/UIUC-iSchool-DataViz/is445AOG_fall2020/blob/master/week12/corg/prepIdyll/histogram-custom-d3-component.js)
    * then [this one](https://github.com/UIUC-iSchool-DataViz/is445AOG_fall2020/blob/master/week12/corg/prepIdyll/histogram-button-custom-d3-component.js)
    * and finally [this one](https://github.com/UIUC-iSchool-DataViz/is445AOG_fall2020/blob/master/week12/corg/prepIdyll/histogram-button-slider-custom-d3-component.js)
-->
	
<!-- Where we got to in class this week: -->
<!--   * [This index.idyll](index.idyll) file -->
<!--   * [This histogram component](histogram-custom-d3-component.js) -->
	



<!--
Further examples include:
 * Website from [Spring 2020](https://jnaiman.github.io/items_dataviz_spring2020/) which focuses on using [d3.js](https://d3js.org/) to do many plots since vega-lite was not working well at that time.  The index.idyll file, along with example d3 components and a styles.css file for the final map are in [this subdirectory from that course page here](https://github.com/UIUC-iSchool-DataViz/spring2020/tree/master/week15/corg).
 -->

<!--
### Data

 1. <a href="corg/corgs_per_country_over_time_columns_2020.csv" download>Corgis per country over time (corgs_per_country_over_time_columns_2020.csv)</a>
 1. <a href="corg/corgiData_countries_subset_2020.json" download>Subset of full Corgi database (corgiData_countries_subset_2020.json)</a>
     * Full dataset available [here](corg/corgiData_countries_full_2020.json)
	 
This dataset is from the [Cardigan Archives](http://cardiped.net/) and [scraped using Beautiful Soup in Python](https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/grabCorgData_subpages.py) and [further processed in Python](https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/calc_corgData.ipynb) into this form.
-->


## Optional reading list

 1. <a href="https://idyll-lang.org/docs"> Idyll Docs</a>
 1. <a href="https://books.google.com/books?hl=en&lr=&id=jUw7DwAAQBAJ&oi=fnd&pg=PA91&dq=scientific+visualization+misinformation&ots=Cv0QmoCdM2&sig=7xycURu8Um_C9VtHqf-aWg4qaEo#v=onepage&q=scientific%20visualization%20misinformation&f=false">Chapter 5: Dimensions of Visual Misinformation in the Emerging Media Landscape in the book "Misinformation and Mass Audiences"</a>

 
