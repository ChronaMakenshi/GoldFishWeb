const crypto = require('crypto');
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000; // Utilisation d'une variable d'environnement pour le port

app.use(cors());
app.use(express.json());

const allowedOrigins = ['http://localhost:5173'];

app.use((req, res, next) => {
    const origin = req.get('origin');
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header(
        'Content-Security-Policy',
        "default-src 'self';" +
        "script-src 'self' https://ajax.googleapis.com https://maps.googleapis.com https://maps.gstatic.com;" +
        "style-src 'self' https://fonts.googleapis.com https://maps.googleapis.com https://maps.gstatic.com;" +
        "img-src 'self' data: https://www.example.com https://maps.gstatic.com https://maps.googleapis.com;" +
        "font-src 'self' https://fonts.gstatic.com;" +
        "frame-src 'self' https://www.youtube.com https://www.google.com https://maps.google.com;"
    );
    next();
});

const transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER, // Utilisation d'une variable d'environnement
        pass: process.env.EMAIL_PASSWORD, // Utilisation d'une variable d'environnement
    }
});

const transporter2 = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USERS, // Utilisation d'une variable d'environnement
        pass: process.env.EMAIL_PASSWORDS, // Utilisation d'une variable d'environnement
    }
});

// Fonction pour générer un jeton CSRF
function generateCSRFToken() {
    const csrfToken = crypto.randomBytes(32).toString('hex');
    return csrfToken;
}

app.get('/csrf', (req, res) => {
    try {
        const csrfToken = generateCSRFToken();
        res.json({ csrfToken });
    } catch (error) {
        console.error('Erreur lors de la génération du jeton CSRF :', error);
        res.status(500).json({ message: 'Erreur lors de la génération du jeton CSRF' });
    }
});

// Utilisation de middleware pour la validation des champs obligatoires
function validateRequiredFields(req, res, next, requiredFields) {
    for (const field of requiredFields) {
        if (!req.body[field]) {
            return res.status(400).json({ message: 'Tous les champs sont obligatoires.' });
        }
    }
    next();
}

app.post('/api', async (req, res) => {
    const requiredFields = ['firstname', 'lastname', 'email', 'message'];
    app.use((req, res, next) => validateRequiredFields(req, res, next, requiredFields));
    const formData = req.body;
    const mailOptions = {
        from: formData.email,
        to: 'christophe.mestdagh@goldfishweb.fr',
        subject: 'Sujet de l\'e-mail',
        text: `Nom: ${formData.lastname}\nPrénom: ${formData.firstname}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('E-mail envoyé :', info.response);
        res.json({ message: 'Données du formulaire reçues et e-mail envoyé avec succès' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'e-mail' });
    }
});

app.post('/devis', async (req, res) => {
    const requiredFields = ['nom', 'tel', 'email', 'adresse_site', 'projet'];
    app.use((req, res, next) => validateRequiredFields(req, res, next, requiredFields));
    const formData = req.body;
    // Utilisation d'un objet pour mapper les valeurs de type_entite
    const typeEntiteMapping = {
        particulier: 'Particulier',
        association: 'Association',
        societe: 'Société',
    };
    const typeEntiteText = typeEntiteMapping[formData.type_entite] || 'Type d\'entité inconnu';
    const mailOptions = {
        from: formData.email,
        to: 'devisdegoldfishweb@goldfishweb.fr',
        subject: 'Sujet de l\'e-mail',
        text: `Nom: ${formData.nom}\nType d'entité: ${typeEntiteText}\nEmail: ${formData.email}\nTelephone: ${formData.tel}\nAdresseSite: ${formData.adresse_site}\nProjet: ${formData.projet}`
    };
    try {
        const info = await transporter2.sendMail(mailOptions);
        console.log('E-mail envoyé :', info.response);
        res.json({ message: 'Données du formulaire reçues et e-mail envoyé avec succès' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'e-mail' });
    }
});

app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});








