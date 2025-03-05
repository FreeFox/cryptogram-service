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

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import * as functions from "firebase-functions";

// exports.getSecretMessage = functions.https.onRequest((request, response) => {
//   response.send({message: "test message"});
// });

const randomTexts = [
  "Hello there!",
  "How's it going?",
  "Nice to meet you!",
  "Have a great day!",
  "This is a random message.",
  "Another random response.",
  "Testing, 1, 2, 3...",
];

export const getRandomText = functions.https.onCall(async (data, context) => {
  // No input data needed for this function

  const randomIndex = Math.floor(Math.random() * randomTexts.length);
  const randomMessage = randomTexts[randomIndex];

  return {text: randomMessage};
});
