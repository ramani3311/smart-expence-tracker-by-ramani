# Getting Started with Git Learning

Welcome to your Git learning repository! This guide will help you get started with practical Git exercises.

## 🚀 Quick Start

### 1. First, Open Your Terminal/Command Prompt

Navigate to this repository:
```bash
cd smart-expence-tracker-by-ramani
```

### 2. Check the Current Status
```bash
git status
```
This shows you what files have been changed.

### 3. Make Your First Change

Open the file `examples/my-first-change.md` and add your name and today's date where indicated.

### 4. See What Changed
```bash
git status
git diff examples/my-first-change.md
```

### 5. Add Your Changes
```bash
git add examples/my-first-change.md
```

### 6. Commit Your Changes
```bash
git commit -m "Add personal information to learning example"
```

### 7. Push to GitHub
```bash
git push
```

Congratulations! You've just completed your first Git workflow! 🎉

## 📚 What's in This Repository

- **`src/`** - A complete web application (Smart Expense Tracker) to practice with
- **`docs/`** - Comprehensive Git documentation and guides  
- **`examples/`** - Practice files and exercises
- **`README.md`** - Main project overview
- **`GETTING-STARTED.md`** - This file!

## 🎯 Suggested Learning Path

### Beginner (Start Here!)
1. Read this guide
2. Complete the exercise in `examples/my-first-change.md`
3. Read `docs/git-workflow.md`
4. Try the exercises in `examples/sample-changes.md`

### Intermediate
1. Make changes to the web application in `src/`
2. Practice with multiple commits
3. Work through `examples/learning-checklist.md`

### Advanced
1. Experiment with branches
2. Practice undoing changes
3. Learn about merge conflicts

## 🔧 Working with the Web Application

The `src/` folder contains a complete Smart Expense Tracker web app. You can:

1. **Open it in a browser:**
   ```bash
   # Start a local server (Python required)
   cd src
   python -m http.server 8080
   # Then open http://localhost:8080 in your browser
   ```

2. **Make changes to practice Git:**
   - Modify the colors in `src/style.css`
   - Add new features to `src/script.js`
   - Update the layout in `src/index.html`

3. **Commit each change:**
   ```bash
   git add src/style.css
   git commit -m "Change header color to blue"
   git push
   ```

## 🤔 Common Questions

**Q: What if I make a mistake?**
A: Don't worry! Git is designed to help you recover from mistakes. Check the troubleshooting section in `docs/git-workflow.md`.

**Q: How often should I commit?**
A: Commit small, logical changes frequently. Every time you complete a task or fix something, make a commit.

**Q: What makes a good commit message?**
A: Be descriptive and use present tense. Examples:
- ✅ "Add validation to expense form"
- ✅ "Fix responsive design on mobile"
- ❌ "changes" or "fix stuff"

## 📖 Additional Resources

- [Official Git Documentation](https://git-scm.com/doc)
- [GitHub Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)

## 💡 Pro Tips

- Use `git status` frequently to see what's happening
- Read your commit messages before confirming them
- Don't be afraid to experiment - Git makes it safe!
- Practice regularly - consistency beats intensity

---

**Ready to start learning?** Open `examples/my-first-change.md` and make your first commit! 🚀

**Need help?** All the answers are in the `docs/` folder - especially `docs/git-workflow.md`.