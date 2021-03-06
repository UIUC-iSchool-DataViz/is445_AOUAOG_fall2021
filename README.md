# Course Template

This repository is a template for managing coursework using GitHub pages.  It
uses the theme [dinky](https://github.com/pages-themes/dinky),
[nbviewer.js](https://github.com/kokes/nbviewer.js), and
[reveal.js](https://revealjs.com/) for presenting material.

For each week of class, create a subdirectory `weekZZ` (where `ZZ` is the week
of the class) and place any `.ipynb` and `.md` files in that directory.
Lectures can utilize the layout `lecture`, which will present them in revealjs.

**NOTE for instructors:** If you are online (or even in person), one suggestion I got from students was to 
be able to have "real time" access to the in class notebooks.  This was accomplished by having a little 
auto-commit script going on in the background 

```
cd YOUR_PATH_GOES_HERE/is445_spring2021; while :; do clear; source auto_commit.sh; sleep 30; done
```

I couldn't get crontab to work (I think it has to do with the user-key/ssh permissions something something), but that is probably a much more elegant solution.

## Notes on Course Materials

This course was a 2 hour online version of this course, so there is much material that has been cut (lectures and prep notebooks) from previous iterations of this class.

As of Fall 2020, this section and the [section developed in parallel by Matthew Turk](https://github.com/UIUC-iSchool-DataViz/fall2020-BOG-BOU) have
diverged somewhat.  Occasionally, contributions will be passed back and forth
and the commit message history may not reflect the original authorship.

These two repositories have been developed in collaboration, and authorship is
shared between Jill Naiman and  Matthew Turk.
