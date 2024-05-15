const express = require("express");
const { db } = require("../../utils/firebase");
const {
    collection,
    doc,
    addDoc,
    updateDoc,
    getDoc,
    setDoc,
} = require("firebase/firestore");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        console.log("Hola bien venido a la ruta de users");
        res.send("Hola bien venido a la ruta de users");
    } catch (error) {
        console.error("Error en la ruta de users: ", error);
        res.status(500).send("Error en la ruta de users");
    }
});

router.post("/newUser", async (req, res) => {
    try {
        const newUser = {
            uid: req.body.uid,
            photoURL: req.body.photoURL,
            phoneNumber: req.body.phoneNumber,
            displayName: req.body.displayName,
            email: req.body.email,
        };

        const userCollectionRef = collection(db, "users");
        const docRef = doc(userCollectionRef, String(newUser.uid));


        // Verificar si el documento ya existe
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            // Si el documento ya existe, enviar un mensaje de error
            const docRefUpdate = doc(userCollectionRef, newUser.uid);

            const updatedData = {
                displayName: newUser.displayName,
            };

            await updateDoc(docRefUpdate, updatedData);

            res
                .status(400)
                .send(
                    "Un documento con este uid ya existe y se actualizo correctamente"
                );
        } else {
            // Si el documento no existe, insertarlo
            await setDoc(docRef, newUser);
            console.log("Documento insertado con ID:", docRef.id);
            res.send(`Puntuacion agregada: ${docRef.id}`);
        }
    } catch (error) {
        console.log("Error en la ruta de Users: ", error);
    }
});

module.exports = router;