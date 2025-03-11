import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, CollectionReference, updateDoc, doc, getDoc } from "firebase/firestore";
import type IBook from "./Book";

const firebaseConfig = {
  apiKey: "AIzaSyDveetVj4JbKJDam72kgwwfddoC-mYvapY",
  authDomain: "her-pretty-booklist.firebaseapp.com",
  projectId: "her-pretty-booklist",
  storageBucket: "her-pretty-booklist.firebasestorage.app",
  messagingSenderId: "503348876388",
  appId: "1:503348876388:web:fa53422d48686753437b71"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default class DBConnection {
  booksCollection: CollectionReference;

  constructor() {
    this.booksCollection = collection(db, "books"); // Books collection connection
}

async addBook(data: IBook) {
    try {
        const docRef = await addDoc(this.booksCollection, data);
        console.log("Documento escrito con ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error añadiendo registro: ", e)
    }
}

async readAll() {
    try {
        const querySnapshot = await getDocs(this.booksCollection);
        const dataList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Documentos:", dataList);
        return dataList;
    } catch (e) {
        console.error("Error obteniendo documentos: ", e)
    }
}

async update(id: string, data: any) {
    try {
      const docRef = doc(this.booksCollection, id);
      await updateDoc(docRef, data);
      console.log("Documento actualizado con ID: ", id);
    } catch (e) {
      console.error("Error actualizando documento: ", e);
    }
}

async delete(id: string) {
    try {
        const docRef = doc(this.booksCollection, id);
        await deleteDoc(docRef);
        console.log("Se borró esa vaina")
    } catch (e) {
        console.error("No se borró ninguna mondá")
    }   
}

async getFile(id: string) {
    try {
        const docRef = doc(this.booksCollection, id)
        const docSnap = await getDoc(docRef)
        return docSnap.data()
    } catch (e) {
        console.error("No se obtuvo la información: " + e)
    }
}
}