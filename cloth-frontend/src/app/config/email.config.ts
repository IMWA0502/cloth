// 🔧 CONFIGURAZIONE EMAILJS
// 
// ISTRUZIONI SETUP:
// 1. Vai su https://www.emailjs.com/
// 2. Crea un account gratuito
// 3. Crea un nuovo servizio (Gmail, Outlook, ecc.)
// 4. Crea un template email
// 5. Copia i tuoi ID qui sotto:

export const emailConfig = {
  SERVICE_ID: 'YOUR_SERVICE_ID',    // Es: 'service_abc123'
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',  // Es: 'template_xyz789'
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY'     // Es: 'user_abcd1234567890'
};

// TEMPLATE EMAIL SUGGERITO:
//
// Oggetto: Nuovo messaggio da {{from_name}} - {{subject}}
//
// Corpo:
// Hai ricevuto un nuovo messaggio dal sito Cotton House:
// 
// Nome: {{from_name}}
// Email: {{from_email}}
// Telefono: {{phone}}
// Azienda: {{company}}
// Oggetto: {{subject}}
//
// Messaggio:
// {{message}}
//
// ---
// Inviato tramite il form di contatto di Cotton House