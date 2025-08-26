
# Playwright Automation

This repository contains automation scripts for web testing using **Playwright** and **JavaScript**.

---

## Features

- Browser automation using Playwright
- Page Object Model (POM) structure
- Example test flows for practice websites
- Easy to extend for new test scenarios

---

## Installation

Make sure you have **Node.js** installed (v14 or above).

1. Clone the repository:

```bash
git clone https://github.com/sabbir4hmed/PlaywriteAutomation.git
cd PlaywriteAutomation
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

---

## Usage

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/example.spec.js
```

Open Playwright test runner UI:

```bash
npx playwright test --ui
```

---

## Project Structure

```
PlaywriteAutomation/
│
├── tests/               # Test scripts
├── pages/               # Page Object Model files
├── package.json
├── README.md
└── playwright.config.js
```

- `tests/` – Contains automation test files
- `pages/` – Contains page objects representing web pages
- `playwright.config.js` – Playwright configuration file

---

## Contributing

1. Fork this repository
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin feature-name`
5. Create a Pull Request

---

## License

This project is licensed under the MIT License.
