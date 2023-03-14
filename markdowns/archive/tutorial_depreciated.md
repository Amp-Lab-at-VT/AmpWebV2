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

<hr>

## Step 2: Get Connected to Our GitHub Website

### Part A:
Follow the steps below to get your repo all set up. This will make a folder in your home directory. Open a bash terminal to get started:
``` bash
cd
mkdir AmpLab
cd AmpLab
git clone https://github.com/Amp-Lab-at-VT/web.git
cd web
```
Now that you're in your folder, let's open it in Visual Code and give you the quick overview. Type the following to open Visual Studio Code:
``` bash
code .   - This command does not function all the time
```
From here, you can open a terminal in Visual Studio Code (Also just called VS code). See image below:

![amp-map]({{ site.baseurl }}/img/TutorialPhotos/Terminal.png){:class="img-responsive"}

Now we're going to create a branch. It's just like a tree: all core, working code happens on the **main/master** branch. All development happens on **branches**, which can be merged in. See this video for reference: 
<a href="https://www.youtube.com/watch?v=S2TUommS3O0" >Learn More About Branching and Merging</a>

**Note that "Name" can be whatever you want**

``` bash
git checkout -b “Name” 
```

As a sanity check, try running the following command

``` bash
git branch
```

You should see "main" and the name of your branch. The fact that your name is green and has a star next to it means you did this step properly!

Alright, we're done with the CLI for now! Let's start using Visual Code.

<hr>

### Part B:

There are two folders you need to keep track of:  **WARNING: DO NOT EDIT ANY OTHER FOLDERS. THESE ARE AUTO-GENERATED, AND SHOULD NOT BE TOUCHED**


``` text
img
_posts
```

See below:

![amp-map]({{ site.baseurl }}/img/TutorialPhotos/usefulFolders.png){:class="img-responsive"}

You will be putting all your files into these two locations. Make a copy of the project template found in **_posts** using the instructions below:

![amp-map]({{ site.baseurl }}/img/TutorialPhotos/copyTemplate2.png){:class="img-responsive"}

Now, rename the template. The dating scheme is **year, month, day**. This is critical! Also use a dash ```-``` as your word divider, **instead of spaces**. See below:

![amp-map]({{ site.baseurl }}/img/TutorialPhotos/renameTemplate.png){:class="img-responsive"}

Now, edit the top of your project file. Go ahead and update the fields with your info. **Make sure the date in this section matches the name of your file**

**Do not change the layout type**

![amp-map]({{ site.baseurl }}/img/TutorialPhotos/makeProjectTheSame.png){:class="img-responsive"}

Now, fill in your project specs. If you have images to add, that will be covered soon! For tips on markdown, go here: <a href="https://www.markdownguide.org/cheat-sheet/" >Learn More About Markdown</a>


![amp-map]({{ site.baseurl }}/img/TutorialPhotos/filledInExpectations.png){:class="img-responsive"}

<hr>

### Part C:

Next Up, create a folder to store your images in! For this, we will be using the ```img``` folder. See below. Please make a folder that with the same name as your project. Again, **no spaces**!

![amp-map]({{ site.baseurl }}/img/TutorialPhotos/newFolderInImages2.png){:class="img-responsive"}

Note, ```MyFirstProject``` is a fake name. Rename it to what you want!

![amp-map]({{ site.baseurl }}/img/TutorialPhotos/myfirstprojectFolder.png){:class="img-responsive"}

Great, your're all set up! Now let's go over submiting this to Github. 

## Step 4: Github Submission

In your terminal, type the following:

``` bash
pwd
```

This will tell you which directory you are in. Type the following to back up to the ```web``` folder:

```bash
cd ..
```

Once there, type the following:

```bash
git add .
git commit -m "Say whatever you want here! This is a comment for you"
git push
```

Wonderful! Now go in and make a pull request. Go here: <a href="https://github.com/Amp-Lab-at-VT/web" >Amp Lab Website Github Origin</a>

![amp-map]({{ site.baseurl }}/img/TutorialPhotos/pullRequest1.png){:class="img-responsive"}

Make sure you are merging from your branch to main before creating the pull request!

![amp-map]({{ site.baseurl }}/img/TutorialPhotos/pullRequest2.png){:class="img-responsive"}

Click on the "Pull Request" tab, and ask to merge **your branch** with **master**. This is shown below:

![amp-map]({{ site.baseurl }}/img/TutorialPhotos/pullRequest3.png){:class="img-responsive"}

Leave a comment for the mentors, and you're good to go! 

![amp-map]({{ site.baseurl }}/img/TutorialPhotos/pullRequest4.png){:class="img-responsive"}

<hr>

## Step 5: Create A Repo Under the Amp Lab
Finally, to store all your project files, you'll need to create a repo under the AmpLabVT GitHub organization. Do so by doing the following:

**This section is currently under development**


## Step 6: Final Notes

And that's it, you're officially set up! From now on, you'll be responsible for these three things:
>
1. _posts/<date_yourProjectName>
   - This is the file that will be publicly available, and is the one you'll send to your mentor
2. img/<projectName>
   - Store all your images here
3. Project Repo
   - All other data for your project gets stored here
>

For more info on pushing code using **git**, go here: <a href="https://dev.to/mrfrontend/git-101--step-2-add-stage-commit--push-3p3p" >Submitting a Commit to Git</a>

***TLDR*** all you really need are these three commands for pushing your local data:

``` bash
git add -u
git commit -m "new message"
git push
```

<hr>

## FAQ

- What is bash?
    - "Bash" is a program interface. When you run a termincal, "bash" is the program connecting and interpretting your commands to make them "machine readible". 
- Why are we not using Google Sites?
    - Google Sites is a great platform. However, the best sites are still made with a little elbow grease. Besides that, this creates a great opportunity for you to use git, and learn it well. This is greatly looked for by recruiters **cough** put it on your resume that you know git **cough**
- What on earth is a 'CLI'?
    - A CLI is a "Command Line Interface". It's the quick way of saying terminal. They mean the same thing
