### Step 1: Making them a project repo

Go to [our Github repository](https://github.com/Amp-Lab-at-VT).

Select 'New" (If this is not visible, ask one of the admins for privalges to create new repos)

Assign it a name
Make it Public
Give it a blank readme
License MIT
Create Repo


### Step 2: Give them access to the repo

Share access to it with your mentee


### Step 3: Adding the submodule of their project to the website


Open git and follow the following steps:

```bash
cd ~
mkdir AmpLab
cd AmpLab
git clone https://github.com/Amp-Lab-at-VT/web.git
cd web
```

In git, make a branch of the repo with the following steps

```bash
git checkout -b name_of_branch
```

No go ahead and update the submodules for the project

go to web/img and web/_posts and run the following command, putting your mentee's repo in place of the linked repo below. The etps for this process are as follows (assuming your working directory is web):

``` bash
cd img
git submodule add https://github.com/Amp-Lab-at-VT/SampleProject.git
cd ..
cd _posts
git submodule add https://github.com/Amp-Lab-at-VT/SampleProject.git
cd ..
```

### Step 4: Submit a PR to Master

Commit the branch to master, from the originial working directory (web)

```bash
git add .
git commit -m "Submmitting a PR to add a student project: Student Project Name"
git push
```

You will be promptd with a line to run to push your branch to master. It should look something like this:

```bash
git push --set-upstream origin Sample_Project
```

Wonderful! Now go in and make a pull request. Go here: <a href="https://github.com/Amp-Lab-at-VT/web" >Amp Lab Website Github Origin</a>


Make sure you are merging from your branch to main before creating the pull request!

Click on the "Pull Request" tab, and ask to merge **your branch** with **master**. This is shown below:


Leave a comment for the mentors, and you're good to go! 


When you are done with these steps, remember that you are on a branch that has been submitted to master through a PR. Once the PR is accepted, it is wise to just start fresh. Follow these steps to make sure you are always working on the latest code.

Another mentor will see your PR, and approve it. These is done as a sanity check for the student team

What follows are clean up steps to get you back on the latest version of master

**Note that if 'git checkout main' doesn't work, you may need to run 'git checkout master'**
```bash
git checkout main
git branch 
```

**git branch** will show you a list of your local branches. Delete the one that is not master

```bash
git branch -d name_of_branch
```

Finally, run a git pull to update master 

```bash
git reset --hard origin/master
git pull
```

It should say "already up to date". 

## Step 5: Maintaining and Keeping the Submodule updated

Submodules are always tied to a particular commmit within the history of the project. That means that you will have to update it from time to time to keep the website current. Use the following command from time to time in web/img and web/_posts to keep the submodules current. This is not needed immedaitely after submitting the PR, as it has already been set to a commit. Just run it every week or so and submit a PR for the update!

``` bash
git pull
git submodule update --remote
git add .
git commit -m "Update Submodules"
git push
```