import db from "./database";
import { doc, getDoc, getDocs, collection, query, where, orderBy } from "firebase/firestore";



// Function to get all the data from a user
export const getUserData = async (userID) => {
    console.log("getUserData called");
    const userDocRef = doc(db, "users", userID); // Construct a reference to the document with the user ID
    const userDocSnapshot = await getDoc(userDocRef); // Retrieve the document snapshot

    if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data(); // Access the data of the document
        return userData;
    } else {
        return null;
    }

}


// Function to get all the live challenges from the challenges collection
export const getUpcomingLiveChallenges = async () => {
    console.log("getUpcomingLiveChallenges called");

    const challengesRef = collection(db, "challenges");

    const now = new Date();
    const startTime = now.getTime();

    // Create a query against the collection where the start time is greater than the current time AND "live" is true
    const q = query(challengesRef, where("startTime", ">", startTime), where("live", "==", true), orderBy('startTime', 'asc'));

    const challengesSnapshot = await getDocs(q);

    return challengesSnapshot.docs.map(doc => doc.data());
};

// Function to get all the live challenges from the challenges collection by a given tag
export const getUpcomingLiveChallengesByCategory = async (tag) => {
    console.log("getUpcomingLiveChallengesByCategory called");

    const challengesRef = collection(db, "challenges");

    const now = new Date();
    const startTime = now.getTime();

    // Create a query against the collection where the start time is greater than the current time AND "live" is true and the tags contain the given tag
    const q = query(challengesRef, where("startTime", ">", startTime), where("live", "==", true), where("tags", "array-contains", tag), orderBy('startTime', 'asc'));

    const challengesSnapshot = await getDocs(q);

    return challengesSnapshot.docs.map(doc => doc.data());
};



// Function to get all the non-live challenges from the challenges collection
export const getUpcomingNonLiveChallenges = async () => {
    console.log("getUpcomingNonLiveChallenges called");

    const challengesRef = collection(db, "challenges");

    const now = new Date();
    const startTime = now.getTime();

    // Create a query against the collection where the start time is greater than the current time AND "live" is false
    const q = query(challengesRef, where("startTime", ">", startTime), where("live", "==", false), orderBy('startTime', 'asc'));

    const challengesSnapshot = await getDocs(q);

    return challengesSnapshot.docs.map(doc => doc.data());
};

// Function to get all the non-live challenges from the challenges collection by a given tag
export const getUpcomingNonLiveChallengesByCategory = async (tag) => {
    console.log("getUpcomingNonLiveChallengesByCategory called");

    const challengesRef = collection(db, "challenges");

    const now = new Date();
    const startTime = now.getTime();

    // Create a query against the collection where the start time is greater than the current time AND "live" is false and the tags contain the given tag
    const q = query(challengesRef, where("startTime", ">", startTime), where("live", "==", false), where("tags", "array-contains", tag), orderBy('startTime', 'asc'));

    const challengesSnapshot = await getDocs(q);

    return challengesSnapshot.docs.map(doc => doc.data());
};


// Function to get all the questions from the questions collection for a given challenge ID
export const getQuestionsByChallengeID = async (challengeID) => {
    console.log("getQuestionsByChallengeID called");

    const questionsRef = collection(db, "questions");

    // Create a query against the collection where the challenge ID is equal to the given challenge ID
    const q = query(questionsRef, where("challengeID", "==", challengeID));

    const questionsSnapshot = await getDoc(q);

    return questionsSnapshot.docs.map(doc => doc.data());
}

// Function to get all the answers from the answers collection for a given challenge ID
export const getAnswersByChallengeID = async (challengeID) => {
    console.log("getAnswersByChallengeID called");

    const answersRef = collection(db, "answers");

    // Create a query against the collection where the challenge ID is equal to the given challenge ID
    const q = query(answersRef, where("challengeID", "==", challengeID));

    const answersSnapshot = await getDoc(q);

    return answersSnapshot.docs.map(doc => doc.data());
}


