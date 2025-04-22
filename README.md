
[![Actions Status](https://github.com/gitlearn07/qa-auto-engineer-javascript-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/gitlearn07/qa-auto-engineer-javascript-project-44/actions) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=gitlearn07_hexlet-brain-games&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=gitlearn07_hexlet-brain-games)

# Brain Games
**Brain Games** is a collection of command-line mini-games, where the user is prompted to answer simple math and logic questions. 

## Requirements
- Node.js (latest stable version)
- npm (comes with Node.js)

## Installation
1. Clone the repository:
```bash
  git clone https://github.com/YOUR_USERNAME/hexlet-brain-games.git
  cd hexlet-brain-games
```
2. Install dependencies:
```bash
  make install
```
3. Link the package globally:
```bash
  npm link
```

# Available Games
- brain-games — Greets the user

- brain-even — Even number check

- brain-calc — Math calculator (basic expressions)

- brain-gcd — Greatest common divisor

- brain-progression — Find the missing number in an arithmetic progression

- brain-prime — Prime number check

# Usage
You can run each game using the following commands:
```bash
brain-games
brain-even
brain-calc
brain-gcd
brain-progression
brain-prime
```

# Example session:
### Correct Answers Example (`brain-even`)
```bash
$ brain-even
Welcome to the Brain Games!
May I have your name? John
Hello, John!
Answer "yes" if the number is even, otherwise answer "no".
Question: 8
Your answer: yes
Correct!
Question: 3
Your answer: no
Correct!
Question: 12
Your answer: yes
Correct!
Congratulations, John!
```
### Incorrect Answer Example (brain-calc)
```bash
$ brain-calc
Welcome to the Brain Games!
May I have your name? Anna
Hello, Anna!
What is the result of the expression?
Question: 5 + 3
Your answer: 9
'9' is wrong answer ;(. Correct answer was '8'.
Let's try again, Anna!
```


