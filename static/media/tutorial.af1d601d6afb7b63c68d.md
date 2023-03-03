<b>PSA: There is a "Frequenty Asked Questions" section at the bottom of this page if any of the concepts are unfamiliar<b>

## Overview

Here at the Amp Lab, you are expected to update the website with the latest info for your project. To update the website, you will be using git. This tutorial uses the command line, but if you are comfortable you may use the Github GUI. For now, click one of the buttons below to install git.


<a class="button is-link" href="https://git-scm.com/download/win" >Install Git for Windows</a>

<a class="button is-link" href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" >Install Git for Linux/Apple</a>

It is also recommended that you install Visual Code Studio, a common IDE used in industry:

<a class="button is-link" href="https://code.visualstudio.com/download" >Download Visual Code</a>

<hr>

## Step 1: Shoot us an Email
Before going through these steps, make sure to shoot us an email! That way we can get you started on your projects. Here is out email:
``` bash
amp-lab-leadership-team-g@vt.edu 
```
We will add you to our Github organization, which can be found below:

<a class="button is-link" href="https://github.com/Amp-Lab-at-VT" >Amp Lab at VT</a>

Once you are added, you will have access to your own project repo: where you can store all your files. This is directly linked to the website, so this removes the hastle of having to keep up with other docs! All your files, all your documentation, all in one place!

<hr>

## Step 2: Maintaining Your Repo:

Now that you have the link to your repo, let's go through a few things. First, let's clone that repo. 

``` bash
cd ~
mkdir AmpLab
cd AmpLab
git clone [your_repo_link_here]
cd your_repo_name
```

If you prefer to manage your files from a GUI, the commands above actually made a folder in your home directory! Don't believe me? Follow the steps below to check:

For Linux: Go to your home folder, and look for you AmpLab folder. Open it, and you will find your project!

For Windows: Go to your C: drive, then go to Users, and then select your user's name. You will see the AmpLab folder there, with your project inside!

Feel free to put whatever files you need for your project in the assigned project folder (this is the one inside the AmpLab folder). However, there is a key file you will need to add: your post file.

# Step 3: Updating your Post File

Your post file is written in markdown script, of which a tutorial is avalible here.

For now, though, make a file in your project folder with the following naming convention. This can be done in Visual Code very easily, and those instructions **will be avalible soon**

```
year-month-day-title.md
```
Note: there should be no spaces in this file. Here is an example of a good file name:

```
2022-9-1-Testing-Submodule-Workflow.md
```

Next, copy this text into the file:

```md
---
layout: project_template
title: Submodule Test
description: Submodule Test
date: 2020-8-30 09:00:00
hero_image: /web/img/SampleProject/open_house.png
image: /web/img/SampleProject/open_house.png
hero_height: is-small
hero_darken: true
tags: project
series: amp_lab_project
author: Forsyth Creations
show_sidebar: false
---

## Members

## Repo Link
<a class="button is-link" href="https://magicmirror.builders/" >https://magicmirror.builders/</a>

## Photo

## Mentor

## Current Status

## Project Overview

## Educational Value Added

## Tasks

## Design Decisions

## Design Misc

## Steps for Documenting Your Design Process

## BOM + Component Cost

## Timeline

## Useful Links

## Log
```

Next, update the file to reflect your project. But do not touch the following fields

```
layout
series
show_sidebar
```

Here is an example:

```md
---
layout: project_template
title: My Awesome New Project
description: The Amp Lab is great
date: 2022-6-2 09:00:00
hero_image: /web/img/SampleProject/open_house.png
image: /web/img/SampleProject/open_house.png
hero_height: is-small
hero_darken: true
tags: project
series: amp_lab_project
author: Forsyth Creations
show_sidebar: false
---

## Members
Henry Forsyth, Computer Engineering Student (2023)
email@vt.edu

## Repo Link
<a class="button is-link" href="https://magicmirror.builders/" >https://magicmirror.builders/</a>

## Photo

## Mentor
Josh Sutton, Electrical Engineering 2021

## Current Status
Complete

## Project Overview

Put whatever text you need here

## Educational Value Added

Put whatever text you need here

## Tasks

Put whatever text you need here

## Design Decisions

Put whatever text you need here

## Design Misc

Put whatever text you need here

## Steps for Documenting Your Design Process

Put whatever text you need here

## BOM + Component Cost

Put whatever text you need here

## Timeline

Put whatever text you need here

## Useful Links

Put whatever text you need here

## Log

Put whatever text you need here

```

**The button needs to be updated**
**Make which URL you need more clear**
**Change sample image for post**

In the repo link, provide the link to your repo as well as the name. Here is what is given in the template:

```html
<a class="button is-link" href="https://magicmirror.builders/" >https://magicmirror.builders/</a>
```

You can update it to look like the following, where you are only changing the href and the flavor text

```html
<a class="button is-link" href="https://github.com/Amp-Lab-at-VT/SampleProject" >Sample Project</a>
```

**Make the naming convention here more clear**

This code will produce the following on your website.
Just a simple button that will direct people to your work:


<a class="button is-link" href="https://github.com/Amp-Lab-at-VT/SampleProject" >Sample Project</a>


# Step 4: Posting Your Files

***TLDR*** all you really need are these three commands for pushing your local data to origin (GitHub). Open a terminal at the location of your project folder, and run these commands:

``` bash
git add .
git commit -m "Put a custom message here"
git push
```

That's it, your done! Notify your mentor that you have updated your webpage, and they will take care of making sure the website gets updated!

<hr>

## FAQ

- What is bash?
    - "Bash" is a program interface. When you run a termincal, "bash" is the program connecting and interpretting your commands to make them "machine readible". 
- Why are we not using Google Sites?
    - Google Sites is a great platform. However, the best sites are still made with a little elbow grease. Besides that, this creates a great opportunity for you to use git, and learn it well. This is greatly looked for by recruiters **cough** put it on your resume that you know git **cough**
- What on earth is a 'CLI'?
    - A CLI is a "Command Line Interface". It's the quick way of saying terminal. They mean the same thing
