# Sample Changes for Practice

This file contains examples of different types of changes you can practice with Git.

## Exercise 1: Simple Text Changes

Try making these changes to practice the Git workflow:

### Step 1: Edit this file
- Add your name here: **[Your Name]**
- Add today's date: **[Today's Date]**

### Step 2: Commit your changes
```bash
git add examples/sample-changes.md
git commit -m "Add personal information to sample changes"
git push
```

## Exercise 2: Create New Files

Create these files and practice adding them:

1. **Create `examples/my-first-script.js`**
```javascript
// My first JavaScript file for Git practice
console.log("Hello, Git world!");

function greetUser(name) {
    return `Hello, ${name}! Welcome to Git learning.`;
}

// Try calling the function
console.log(greetUser("Your Name"));
```

2. **Create `examples/my-styles.css`**
```css
/* My first CSS file for Git practice */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f8ff;
    margin: 20px;
}

.practice-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.highlight {
    background-color: yellow;
    padding: 2px 4px;
}
```

3. **Commit each file separately**
```bash
# For JavaScript file
git add examples/my-first-script.js
git commit -m "Add sample JavaScript file for learning"

# For CSS file  
git add examples/my-styles.css
git commit -m "Add sample CSS file for learning"

# Push all commits
git push
```

## Exercise 3: Multiple File Changes

Make changes to several files at once:

1. **Modify the main README.md** - Add a new section
2. **Modify this file** - Add your own exercise idea
3. **Create a new HTML file** - Link your CSS and JS files

Then practice different ways to commit:

```bash
# Option 1: Add and commit all at once
git add .
git commit -m "Update multiple files with new content"

# Option 2: Add files selectively
git add README.md
git add examples/sample-changes.md
git commit -m "Update documentation files"

git add examples/new-file.html
git commit -m "Add new HTML example file"

# Push your commits
git push
```

## Exercise 4: Practice Good Commit Messages

Try these scenarios and write good commit messages:

1. **You fixed a bug** in the expense calculator
   - Good: "Fix calculation error in expense total"
   - Bad: "fix bug"

2. **You added a new feature** to the expense tracker
   - Good: "Add expense category dropdown to form"
   - Bad: "added stuff"

3. **You updated the styling**
   - Good: "Improve responsive design for mobile devices"
   - Bad: "css changes"

4. **You updated documentation**
   - Good: "Update installation instructions in README"
   - Bad: "docs"

## Your Practice Log

Use this section to track your practice:

- [ ] Made my first commit
- [ ] Created a new file and committed it
- [ ] Modified an existing file
- [ ] Pushed changes to remote repository
- [ ] Practiced writing good commit messages
- [ ] Made multiple commits in one session
- [ ] Used `git status` to check changes
- [ ] Used `git diff` to see what changed

## Notes and Observations

Write down any questions or observations as you practice:

1. **What I learned:**
   - [Add your notes here]

2. **Questions I have:**
   - [Add your questions here]

3. **Commands I found useful:**
   - [Add useful commands here]

4. **Mistakes I made and how I fixed them:**
   - [Track your learning from mistakes]

Remember: Making mistakes is part of learning! Git has safety features and ways to undo changes, so don't be afraid to experiment.