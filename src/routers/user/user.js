const express = require("express");
const moment = require("moment");
const { db } = require("../../utils/firebase");
const {
    collection,
    doc,
    addDoc,
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
            nombre: req.body.nombre,
            correo: req.body.correo,
        };

        const userCollectionRef = collection(db, "users");
        const docRef = await addDoc(userCollectionRef, newUser);
        
        console.log("Documento insertado con ID:", docRef.id);
        res.send(`User agregada: ${docRef.id}`);

    } catch (error) {
        console.log("Error en la ruta de puntuacion: ", error);
    }
});

module.exports = router;