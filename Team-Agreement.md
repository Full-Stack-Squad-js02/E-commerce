# Team-Agreement

This repo is to establishing a Team Agreement. This will be used as the guideline for how your team will collaborate during project week.

<br>

# TEAM CONTRACT

Course Name: JavaScript-401d15

Student Names:

1. Esraa Banat (Team Leader)
2. Shams Alsaraireh
3. Banan Zahran
4. Sohiab Al Momani
5. Ahmad Amaireh

Lead Instructor: Shihab Aldeen Eshtaiwi

<br>

# Cooperation Plan

## What are the key strengths of each person on the team?

<br>

| **Member Name**       | **Skill Strength**           | **Specific Activity**              |
|-----------------------|------------------------------|-------------------------------------|
| **Esraa Banat**      | Problem solving              | backend develpment and libraries    |
| **Shams Alsaraireh** | Reseach and problem solving  | working with libraries              |
| **Banan Zahran**     | Planning and documentation   | Communication Plan ,data structures |
| **Sohiab Al Momani** | Presentation adressing ideas | Presenting ideas and planning       |
| **Ahmad Amaireh**     | Debugging Skills             | Debug the code and solve the errors |

<br>

## How can you best utilize these strengths in the execution of your project?

By discovering strengths for each person on our team and give him tasks that fit these strengths.

## In which professional competencies do you each want to develop greater strength?

We all agreed that we want to make our best to develop in the web development.So we decide to help teach each other to escape weakness points and convert it to strengths.

## Knowing that every person in your team needs to understand all aspects of the project, how do you plan to approach the day-to-day work?

We planned and broke down our project into small tasks and assigned them equally to our team members. Then we scheduled a daily meeting to get in touch with team members to exchange the latest updates and solve any problems or conflicts that we may face. We also used GitHub projects to monitor project progress.

<br>

# Conflict Plan

## What will be your group's process to resolve conflict, when it arises?

By identifying the points of agreement and disagreement, and working on each conflict one by one, dividing the tasks into the team, no one will be working more than the others. Also, we decided to solve the conflicts immediately and not leave them for another time.

## What will your team do if one person is taking over the project and not letting the other members contribute?

In this case, we decided to discuss this issue during our daily meeting, and we will explain to him that every member of our team is a basic contributor in our project, and no one has the right to take on the entire role or force the team to follow his opinion; instead, we should all work together to achieve the goal of our project.

## How will you approach each other and the challenges of the project knowing that it is impossible for all members to be at the exact same place in understanding and skill level?

We agreed to customize part of our daily meeting to give a chance for each member to briefly explain his work and answer questions from others. Then if any one has to understand how part of the code works, he/she should ask members or go back to the team leader.

## How will you raise concerns to members who are not adequately contributing?

We agreed that the team leader has the authority to solve this issue by pulling him aside and seeing what’s going on. We may not fully understand why the member isn’t adequately contributing to the team. Reassess the situation.

## How and when will you escalate the conflict if your resolution attempts are unsuccessful?

By followig our team agreements and work guides it is rare to have such case. but if this happened then the best practice would be to reach out our Instructor or one of the TA\s each member will adress it in his own words and we will find the best solution that serves our project goals and vision.

<br>

# Communication Plan

## What hours will you be available to communicate?

- Five days weekly [Sun-Thursday] from 10:00 Am - 4:00 Am include 1 hour break.

## What platforms will you use to communicate (ie. Slack, phone …)?

- Discord and Zoom.

## How often will you take breaks?

- Everyday 1 hour break divided as needed.

## What is your plan if you start to fall behind?

- Increase the working hours and duplicate the efforts.
- If we struggle a lot, we will ask your instructor or TA for help.

## How will you communicate after hours and on the weekend?

- We will be communicating on slack, and we can arrange a meeting during the weekend if needed.

## What is your strategy for ensuring everyone’s voice is heard?

- We agreed to customize part of our daily meeting to hear reviews or any suggestions from each others.

## How will you ensure that you are creating a safe environment where everyone feels comfortable speaking up?

- Encouraging all team members to ask questions when needed and genuinely answering each others questions. Understanding that we're all here to learn and succeed.

<br>

# Work Plan

## How you will identify tasks, assign tasks, know when they are complete, and manage work in general?

We already broke down our project into small tasks depending on our strengths, so the team leader will schedule tasks to the GitHub project. When someone finishes his/her task he/she should anounce that he/she is finished so the team leader will check his/her work, then discuss it with all team members at the daily meeting, then do the merge party together.

## What project management tool will be used?

GitHub Projects

<br>

# Presentation Deck

### [Presentation Deck Template](https://docs.google.com/presentation/d/19p0ReXZNhyuHb5WRLZBVe_IP7FZsoT3XRNLbyMDhpnY/edit?usp=sharing)

<br>

# Schedule practice session

## Practice run of the presentation

- Date: 3 Aug 2022
- Time: during the lecture
- The place/Tool: Zoom Meeting

## Actual presentation

- Date: 4 Aug 2022
- Time: during the lecture
- The place/Tool: Zoom Meeting

<br>

# Git Process

## Components of the project that lives on GitHub

- Documentations
- UML diagram
- Wireframe
- Database
- Testing

## How will you share the repository with your teammates?

- Ask for the username of the team memeber that you're inviting as a collaborator.
- On GitHub.com, navigate to the main page of the repository.
- Under your repository name, click Settings.
In the "Access" section of the sidebar, click Collaborators & teams.
- Click Invite a collaborator.
- In the search field, start typing the name of the team member you want to invite, then click a name in the list of matches.
- Click Add NAME to REPOSITORY.
- The user will receive an email inviting them to the repository. Once they accept your invitation, they will have collaborator access to your repository.

## What is your Git flow?

- Every main part of the project should have a separate branch.
- Make A new main branch for testing purposes called Staging branch

## PR review workflow

### How many people must review a PR?

All members must review a PR

### Who merges PRs?

Team Leader

### How often will you merge?

At the End of the day

### **Merging Party :**

- commit changes to your feature branch - not to lose my local changes

  - `git add <file>`

  - `git commit -m <useful message>`

- update your local main branch
  - `git checkout main` or `git checkout staging`
  - `git pull origin main` or `git pull origin staging`

- update your feature branch with changes in main
  - `git checkout <feature_branch_name>`
  - `git merge main or git merge staging`

- handle merge conflicts if there are any
- Check all of your project files for the markers that indicate merge conflicts (in other words, the >>>>>>>>> and HEAD stuff that has mysteriously appeared in your code)
- Edit the code to remove the redundancies causing the merge conflict, and eliminate the markers
  - `git add <affected-files>`
  - `git commit -m "merged main"` or `git commit -m "merged staging"`

### How will you communicate that it’s time to merge?

If we aren't working together use slack to communicate before merge
