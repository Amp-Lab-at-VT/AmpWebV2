//https://react-icons.github.io/react-icons/icons?name=bs
import React, { useEffect } from "react";

export default function GettingStarted() {

  return (
    <div class = "App-pageHelper">
      <h>For New Members:</h>
      
      <div>
        This process is now simpler than ever! Follow the steps below to get started:
        1. Fork this repo. Remember to rename it and such!
      </div>

      <a class="btn" href="https://github.com/Amp-Lab-at-VT/SampleProject/fork" >Sample Project</a>

      <div>
        2. Clone the repo locally, edit the files, and push it to Github. If you are unsure about a section, skip it and your mentor will discuss it with you when it comes time! At the very least, please include a project description
        3. Include the link to the forked repo in this form:
      </div>

      <a class="btn" href="https://forms.gle/XZtVwm5prgZkJmnF6" >Sign up for the Amp Lab</a>

      <div>
        4. Wait for AMP lab staff to reach out to you about your project!
      </div>
      <hr></hr>
      <div>
        ## Advanced Members: Migrating an Existing Project onto the Amp Lab website (Mentees):

        Some people joining the Amp Lab already have GitHub repos with their project details. We want to support this, and allow you all to link them into our site! Just shoot the link to your mentor, and you're good to go! Alternatively, you could make a PR to add it to the repos.yaml file found here:
      </div>
      <a class="btn" href="https://github.com/Amp-Lab-at-VT/AmpWebV2/blob/master/repos.yaml" >Submit a Pull Request for your Project</a>
    </div>
  );
}

