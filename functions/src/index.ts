/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript


import * as functions from "firebase-functions";

const quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Life is what happens when you're busy making other plans.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It is during our darkest moments that we must focus to see the light.",
    "The purpose of our lives is to be happy and to spread happiness to others.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "Keep your face always toward the sunshine, and shadows will fall behind you.",
    "The only impossible journey is the one you never begin.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "Life is really simple, but we insist on making it complicated.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "The only way to do great work is to love what you do.",
    "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    "The only thing necessary for the triumph of evil is for good men to do nothing.",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    "The best way to predict the future is to invent it.",
    "Life is ten percent what happens to us and ninety percent how we respond to it.",
    "The only person you are destined to become is the person you decide to be.",
    "The only thing we have to fear is fear itself.",
    "The journey of a thousand miles begins with one step.",
    "The only true wisdom is in knowing you know nothing."
  ];

export const getRandomText = functions.https.onCall(async (data, context) => {
  // No input data needed for this function

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomMessage = quotes[randomIndex];

  return {text: randomMessage};
});
