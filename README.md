# 🎮 Tic Tac Toe Game (JavaScript, HTML, CSS)

A fully interactive and visually styled **Tic Tac Toe** game built with vanilla **JavaScript**, **HTML**, and **CSS**. This game supports two players (X and O) and includes automatic draw detection with an animated UI and strike-through lines for victories.

---

## 🚀 Features

- ✅ Classic 3×3 Tic Tac Toe board
- 🎨 Animated UI with colorful strike lines for winners (X: Blue, O: Purple)
- 🤖 Auto-restart on draw
- 🔁 “New Game” button for manual reset
- 🧠 Current player indicator with animation
- 📱 Responsive and clean layout

---

## 🧩 Technologies Used

| Language | Purpose       |
|----------|---------------|
| HTML     | Structure     |
| CSS      | Styling & Animation |
| JavaScript | Game logic and interactions |

---

## 📂 Project Structure
- main
  - html files
    - index.html
  - css file
    - style.css
  - js file
    - script.js
  - readme.md

---

## ⚙️ How to Play

1. Clone or download this repository.
2. Open `index.html` in a browser.
3. Click on any cell to start the game. Player X goes first.
4. The current player is shown at the top.
5. The game automatically ends with:
   - A winning line if someone wins.
   - An automatic restart if it's a draw.
6. Click **New Game** to manually reset the board.

---

## 🧠 Logic Highlights

- **Game State:** Managed with a 3×3 matrix (`matrix[][]`)
- **Turn Logic:** Alternates between X and O
- **Win Detection:** Checks rows, columns, diagonals
- **Draw Handling:** Automatically restarts after detecting a full board with no winner
- **UI Updates:** Uses dynamic class names to draw animated strike lines for winning conditions

---

