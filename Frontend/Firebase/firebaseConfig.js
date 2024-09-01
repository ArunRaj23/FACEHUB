import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBR466BXcYOQJ3zF5F7d4XCobEFXLcX_AQ",
    authDomain: "facehub-ad7fb.firebaseapp.com",
    projectId: "facehub-ad7fb",
    storageBucket: "facehub-ad7fb.appspot.com",
    messagingSenderId: "1019478734574",
    appId: "1:1019478734574:web:2197ac9ab632ac4ec8a5ff",
    measurementId: "G-NKEK18XCXP"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;