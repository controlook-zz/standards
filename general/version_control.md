# Version Control

- We use Git version control for all of our projects. It's fast, safe and great for working in branches.
- Seems like common sense, but don't keep around line of code that are commented out. We use git for a reason, right?

## General Rules

- As much as possible, each commit should be focused on one specific purpose. Read about [atomic commits](https://en.wikipedia.org/wiki/Atomic_commit).
- As much as possible, make sure a commit does not contain unnecessary whitespace changes. This can be checked as follows:

`$ git diff --check`

## Commit messages

- **The first line of your commit message must be maximum 50 characters long. No more!** If you feel the need for more detailed explanations, create a blank line, followed by a more detailed explanation.
- **Use a descriptive commit message.** This is useful when someone is examining the change, because it indicates the purpose of the change. This is useful when someone is looking for changes related to a given concept, because they can search through the commit messages.
- For consistency, start the line with "Fix", "Add", "Change" instead of "Fixed", "Added", "Changed".
- Don't end the summary line with a period - it's a title and titles don't end with a period.
- If it seems difficult to summarize what your commit does, it may be because it includes several logical changes or bug fixes, and are better split up into several commits using git add -p.

Structure your commit message like this:

From: http://git-scm.com/book/ch5-2.html

```
Short (50 chars or less) summary of changes

More detailed explanatory text, if necessary.  Wrap it to about 72
characters or so.  In some contexts, the first line is treated as the
subject of an email and the rest of the text as the body.  The blank
line separating the summary from the body is critical (unless you omit
the body entirely); tools like rebase can get confused if you run the
two together.

Further paragraphs come after blank lines.

  - Bullet points are okay, too

  - Typically a hyphen or asterisk is used for the bullet, preceded by a
    single space, with blank lines in between, but conventions vary here
```
