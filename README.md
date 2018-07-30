# README

## Initial Instructions

Continuous integration is a valuable way to ensure that all changes to a project’s code are tested, but keeping track of CI builds (especially those that fail) can be challenging in many cases. For example, a contributor to an open source project might open a pull request whose tests fail, but complicated build logs appear out of the context of a pull request, and may turn away new developers.

Your mission, should you choose to accept it, is to use GitHub’s API and webhooks to build a Node.js application that retrieves logs from the continuous integration service and creates a new comment in the relevant pull request, describing (with the error logs) what failed.

You can use Probot, a framework for building GitHub Apps, but you do not have to. You may also use any NPM modules that you find useful.

### Some details:

[ ] The app only needs to work with a single CI provider (ex: CircleCI, TravisCI, etc).
[ ] It only needs to work with public repositories.
[ ] The app can choose to only work with a specific test runner (ex: Jest, Mocha, etc).
[ ] Your application should have integration/unit tests where applicable.

## Submission Instructions

A repository with well-documented code and a descriptive README, explaining your approach and the challenges you encountered (and how you solved them).

A second repository in which you've demoed your app, showing an open pull request where your app has created a comment.
We are also interested in hearing about friction and pain points building this application, using the GitHub API, Probot and interacting with your CI provider of choice. Keep a list of issues you encounter that could be opportunities to improve the implementation or documentation to share with the teams later.

