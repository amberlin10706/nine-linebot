import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "../../config/firebaseConfig.js";
import { getFirestore, getDoc, doc, setDoc } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function saveData(dto) {
    const docRef = doc(db, dto.collection, dto.doc);
    try {
        await setDoc(docRef, dto.data)
        console.log("Save Success: ", dto.doc);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

export async function getData(dto) {
    const docRef = doc(db, dto.collection, dto.doc);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()
    }
}
