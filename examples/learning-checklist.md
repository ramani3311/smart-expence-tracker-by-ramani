# Git Learning Checklist

Use this checklist to track your progress learning Git commands and workflows.

## Basic Git Setup (One-time setup)
- [ ] Install Git on your computer
- [ ] Configure username: `git config --global user.name "Your Name"`
- [ ] Configure email: `git config --global user.email "your.email@example.com"`
- [ ] Verify configuration: `git config --list`

## Essential Commands
- [ ] Check repository status: `git status`
- [ ] See what changed: `git diff`
- [ ] Add files to staging: `git add filename` or `git add .`
- [ ] Commit changes: `git commit -m "message"`  
- [ ] Push to remote: `git push`
- [ ] Pull from remote: `git pull`
- [ ] View commit history: `git log`
- [ ] View commit history (one line): `git log --oneline`

## File Operations
- [ ] Add new files and commit them
- [ ] Modify existing files and commit changes
- [ ] Delete files: `git rm filename`
- [ ] Rename files: `git mv oldname newname`
- [ ] Ignore files with `.gitignore`

## Staging and Committing
- [ ] Add specific files: `git add file1.txt file2.css`
- [ ] Add all files: `git add .`
- [ ] Add all files of a type: `git add *.js`
- [ ] See staged changes: `git diff --staged`
- [ ] Unstage files: `git reset filename`
- [ ] Commit staged changes: `git commit -m "descriptive message"`
- [ ] Commit with detailed message: `git commit` (opens editor)

## Working with Remote Repository
- [ ] Clone a repository: `git clone <url>`
- [ ] Add remote repository: `git remote add origin <url>`
- [ ] View remotes: `git remote -v`
- [ ] Push to remote: `git push origin main`
- [ ] Pull from remote: `git pull origin main`
- [ ] Fetch without merging: `git fetch`

## Branching (Advanced)
- [ ] List branches: `git branch`
- [ ] Create new branch: `git branch new-feature`
- [ ] Switch branches: `git checkout branch-name`
- [ ] Create and switch: `git checkout -b new-feature`
- [ ] Merge branches: `git merge branch-name`
- [ ] Delete branch: `git branch -d branch-name`

## Viewing History and Changes
- [ ] View detailed log: `git log`
- [ ] View short log: `git log --oneline`
- [ ] View log with graph: `git log --graph --oneline`
- [ ] Show specific commit: `git show <commit-hash>`
- [ ] Compare commits: `git diff commit1 commit2`
- [ ] View file history: `git log -- filename`

## Undoing Changes
- [ ] Discard unstaged changes: `git checkout -- filename`
- [ ] Discard all unstaged changes: `git checkout .`
- [ ] Unstage files: `git reset filename`
- [ ] Undo last commit (keep changes): `git reset --soft HEAD~1`
- [ ] Undo last commit (discard changes): `git reset --hard HEAD~1`
- [ ] Revert a commit: `git revert <commit-hash>`

## Best Practices Learned
- [ ] Write clear, descriptive commit messages
- [ ] Commit small, logical changes
- [ ] Use present tense in commit messages
- [ ] Pull before pushing to avoid conflicts
- [ ] Use .gitignore for files that shouldn't be tracked
- [ ] Review changes before committing: `git diff`
- [ ] Check status frequently: `git status`

## Common Workflows Practiced
- [ ] **Daily workflow**: edit → add → commit → push
- [ ] **Feature workflow**: branch → edit → commit → merge
- [ ] **Collaboration workflow**: pull → edit → commit → push
- [ ] **Bug fix workflow**: identify → branch → fix → test → commit → merge

## Troubleshooting Experience
- [ ] Resolved merge conflicts
- [ ] Fixed "nothing to commit" issues
- [ ] Handled "branch is ahead" situations
- [ ] Recovered from accidental commits
- [ ] Dealt with push rejections

## Project-Specific Practice
- [ ] Modified README.md file
- [ ] Added new HTML/CSS/JS files
- [ ] Updated project documentation
- [ ] Created example files
- [ ] Organized files into directories
- [ ] Used .gitignore effectively

## Real-World Scenarios
- [ ] Made a mistake and fixed it with Git
- [ ] Collaborated with others on the same repository
- [ ] Worked on multiple features using branches
- [ ] Reviewed changes before committing
- [ ] Used Git to track down when a bug was introduced

## Advanced Topics (Optional)
- [ ] Used git stash to temporarily save changes
- [ ] Cherry-picked commits: `git cherry-pick <commit-hash>`
- [ ] Rebased commits: `git rebase`
- [ ] Used git blame to see who changed what: `git blame filename`
- [ ] Created and applied patches
- [ ] Used git hooks for automation

## Confidence Level
Rate your confidence (1-5) with each area:

- Basic commands (status, add, commit, push): ___/5
- Understanding Git workflow: ___/5  
- Writing good commit messages: ___/5
- Handling conflicts and errors: ___/5
- Using branches effectively: ___/5
- Collaborating with others: ___/5

## Next Learning Goals

Write down what you want to learn next:

1. ________________________________
2. ________________________________
3. ________________________________

## Notes and Reminders

Add any important notes or commands you want to remember:

- ________________________________
- ________________________________
- ________________________________

---

**Remember**: Git mastery comes with practice. Don't worry about memorizing every command - focus on understanding the workflow and the most common operations. You can always look up specific commands when needed!