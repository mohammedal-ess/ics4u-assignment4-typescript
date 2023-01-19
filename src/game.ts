/*
 * This is Rock Paper Scissors Program
 *
 * @author  Mohammed-Al-Ewssai
 * @version 1.0
 * @since   2022-09-20
 */

import promptSync from "prompt-sync";
const prompt = promptSync();

const choices = ["rock", "paper", "scissors"];
const randomChoice = choices[Math.floor(Math.random() * 3)];
const choice = prompt("Enter rock, paper or scissors: ");

if (choice === randomChoice) {
  console.log("Tie? Mabey try again next time");
} else if (
  (choice === "rock" && randomChoice === "paper") ||
  (choice === "paper" && randomChoice === "scissors") ||
  (choice === "scissors" && randomChoice === "rock")
) {
  console.log("You lost, Better luck next time");
} else {
  console.log("You won, Hip Hip Horray");
}
console.log("\nDone.");
