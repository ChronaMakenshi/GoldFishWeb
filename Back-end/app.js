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

app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});

