const crypto = require('crypto');

// Fonction pour générer un jeton CSRF
function generateCSRFToken() {
    // Générez un jeton CSRF aléatoire en utilisant crypto.randomBytes
    const csrfToken = crypto.randomBytes(32).toString('hex');
    return csrfToken;
}

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

// Charger les variables d'environnement depuis le fichier .env
require('dotenv').config();

const app = express();
const port = 3000; // Port 3000

// Activer CORS
app.use(cors());

app.use(express.json());

// Définir les origines autorisées
const allowedOrigins = ['http://localhost:5173'];

app.use((req, res, next) => {
    const origin = req.get('origin');
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
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
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    }
});

const transporter2 = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USERS,
        pass: process.env.EMAIL_PASSWORDS,
    }
});

app.get('/csrf', (req, res) => {
    try {
        // Votre logique pour générer et renvoyer le jeton CSRF
        const csrfToken = generateCSRFToken();
        res.json({ csrfToken });
    } catch (error) {
        console.error('Erreur lors de la génération du jeton CSRF :', error);
        res.status(500).json({ message: 'Erreur lors de la génération du jeton CSRF' });
    }
});

// Le reste de votre code pour la gestion de l'envoi d'e-mails
app.post('/api', async (req, res) => {
    const formData = req.body;

    // Vérifiez que les champs obligatoires ne sont pas vides
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.message) {
        return res.status(400).json({ message: 'Tous les champs sont obligatoires.' });
    }

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
    const formData = req.body;
    if (!formData.nom || !formData.tel || !formData.email || !formData.adresse_site || !formData.projet) {
        return res.status(400).json({ message: 'Tous les champs sont obligatoires.' });
    }

    let typeEntiteText = "";
    switch (formData.type_entite) {
        case "particulier":
            typeEntiteText = "Particulier";
            break;
        case "association":
            typeEntiteText = "Association";
            break;
        case "societe":
            typeEntiteText = "Société";
            break;
        default:
            typeEntiteText = "Type d'entité inconnu";
    }

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







