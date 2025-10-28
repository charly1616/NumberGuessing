https://roadmap.sh/projects/number-guessing-game

````{"variant":"standard","title":"README for Number Guessing Game","id":"95842"}
# 🎯 Number Guessing Game (Node.js)

Welcome to the **Number Guessing Game** — a simple command-line game built with **Node.js** and the **readline** module.  
Your goal is to guess the secret number between **1 and 100** before you run out of chances!

---

## 🕹️ How to Play

1. When you start the game, you’ll be asked to choose a **difficulty level**:
   - **1. Easy** → 10 chances  
   - **2. Medium** → 5 chances  
   - **3. Hard** → 3 chances  

2. The computer secretly picks a random number between **1 and 100**.

3. You must guess the number!  
   After each guess, the game will tell you whether the secret number is **higher** or **lower**.

4. You win if you guess correctly before running out of attempts.  
   Otherwise, the game reveals the secret number.

---

## ⚙️ How to Run

Make sure you have **Node.js** installed on your computer.  
Then, follow these steps:

```bash
# 1. Clone or download the project
git clone https://github.com/your-username/number-guessing-game.git
cd number-guessing-game

# 2. Run the game
node index.js
```

---

## 💡 Example Gameplay

```
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 5 chances to guess the correct number.

Please select the difficulty level:
    1. Easy (10 chances)
    2. Medium (5 chances)
    3. Hard (3 chances)
--------------------------------------
2

Great! You have selected the Medium difficulty level.
Let's start the game!

Enter your guess: 50
The number is more than 50, try again!

Enter your guess: 75
The number is less than 75, try again!

Enter your guess: 62
Congratulations, 62 was the number!
```

---

## 🧠 Concepts Used

- **JavaScript functions and recursion**
- **Conditionals and loops**
- **User input handling with Node.js `readline`**
- **Random number generation**
- **Basic CLI (Command Line Interface)** design

---

## 🏁 Goal

This project is designed to help beginners:
- Practice **JavaScript logic**
- Learn how to **interact with users** through the terminal
- Understand **basic control flow** and **error handling**

---

Enjoy guessing! 🔢✨
````

Would you like me to make it look more *playful and visual* (with emojis and short lines), or more *professional and minimalist* (like a portfolio README)?
