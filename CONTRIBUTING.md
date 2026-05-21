# Contributing to Momo Janta Party (MJP) 🥟🔥

Welcome, Comrade! We are thrilled that you want to contribute to the official open-source repository of the Momo Janta Party. Whether you are fixing a typo, adding a new department, or exposing a new political scandal, your contributions are highly valued.

---

## 🛠️ How to Start Working on the Project

### 1. Fork and Clone the Repository
First, you need to fork the repository to your own GitHub account and then clone it to your local machine.

```bash
# Clone your fork (replace YOUR_USERNAME with your GitHub username)
git clone https://github.com/YOUR_USERNAME/momo-janta-party.git

# Navigate into the project directory
cd momo-janta-party
```

### 2. Run the Project Locally
Because the MJP website is a highly optimized, lightning-fast static site (HTML/CSS/JS), you don't need any complex build tools to run it! 

You can simply open `index.html` directly in your browser, or use a local development server for a better experience:

**Option A: Using VS Code**
- Install the **Live Server** extension.
- Right-click `index.html` and select **"Open with Live Server"**.

**Option B: Using Node.js (npx)**
If you have Node installed, run:
```bash
npx serve .
```

**Option C: Using Python**
If you have Python installed, run:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### 3. Making Changes
- Ensure you create a new branch for your feature or bug fix:
  ```bash
  git checkout -b feature/your-new-feature
  ```
- Write clean HTML/CSS/JS. 
- If you edit any TypeScript files in `assets/ts/`, compile them using `npx tsc assets/ts/filename.ts --outDir assets/js`.

### 4. Committing Your Changes
We use conventional commits. Please use the following prefixes for your commit messages:
- `feat:` for new features (e.g., `feat: add Dept of Chutney`)
- `fix:` for bug fixes (e.g., `fix: resolve mobile layout issue`)
- `docs:` for documentation changes
- `chore:` for maintenance tasks

```bash
git add .
git commit -m "feat: add new awesome feature"
```

### 5. Opening a Pull Request (PR)
- Push your branch to your forked repository:
  ```bash
  git push origin feature/your-new-feature
  ```
- Go to the original `momo-janta-party` repository on GitHub and click **"New Pull Request"**.
- Provide a clear description of what you changed and tag any relevant issues (e.g., `Fixes #12`).

---

## 🛑 Code of Conduct
- **Zero Tolerance for Mayonnaise:** Any PR attempting to add mayonnaise to momos will be immediately rejected and the user will be banned.
- **Respect All Spice Levels:** Whether a comrade prefers Level 1 or Level 10 spice, all are welcome in the MJP.

Thank you for contributing to the movement! Steaming ahead to a better tomorrow! 🥟🚀
