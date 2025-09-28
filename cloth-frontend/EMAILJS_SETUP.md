# 📧 Setup EmailJS per Cotton House

## 🚀 Come configurare EmailJS (5 minuti)

### 1. **Crea account EmailJS**
- Vai su: https://www.emailjs.com/
- Clicca su "Sign Up" e crea account gratuito
- Verifica la tua email

### 2. **Aggiungi un servizio email**
- Nel dashboard, vai su "Email Services"
- Clicca "Add New Service"
- Scegli il tuo provider (Gmail, Outlook, Yahoo, ecc.)
- Segui le istruzioni per collegare la tua email
- **Annota il SERVICE_ID** (es: service_abc123)

### 3. **Crea un template**
- Vai su "Email Templates"
- Clicca "Create New Template"
- **Nome template**: Cotton House Contact Form
- **Template ID**: Annota questo ID (es: template_xyz789)

**Template suggerito:**
```
Oggetto: Nuovo messaggio da {{from_name}} - {{subject}}

Corpo:
Hai ricevuto un nuovo messaggio dal sito Cotton House:

Nome: {{from_name}}
Email: {{from_email}}
Telefono: {{phone}}
Azienda: {{company}}
Oggetto: {{subject}}

Messaggio:
{{message}}

---
Rispondere a: {{from_email}}
Inviato tramite il form di contatto di Cotton House
```

### 4. **Ottieni la Public Key**
- Vai su "Account" > "General"
- Trova "Public Key" 
- **Annota la PUBLIC_KEY** (es: user_abcd1234567890)

### 5. **Aggiorna la configurazione**
Modifica il file: `src/app/config/email.config.ts`

```typescript
export const emailConfig = {
  SERVICE_ID: 'service_abc123',    // Il tuo Service ID
  TEMPLATE_ID: 'template_xyz789',  // Il tuo Template ID
  PUBLIC_KEY: 'user_abcd1234567890' // La tua Public Key
};
```

### 6. **Test**
- Riavvia l'applicazione: `ng serve`
- Vai su Contact Us
- Compila e invia il form
- Controlla la tua email!

## ✅ **Risultato**
Quando qualcuno compila il form riceverai un'email con:
- Nome del contatto
- Email di risposta
- Telefono e azienda
- Oggetto selezionato
- Messaggio completo

## 🎯 **Vantaggi**
- ✅ **Gratuito** fino a 200 email/mese
- ✅ **No backend necessario**
- ✅ **Ricevi email direttamente**
- ✅ **Puoi rispondere normalmente**

## 🔧 **Troubleshooting**
- **Errore 401**: Controlla Public Key
- **Errore 404**: Controlla Service ID e Template ID
- **Non arrivano email**: Controlla spam/promozioni

---
💡 **Supporto**: Se hai problemi, controlla la documentazione EmailJS: https://www.emailjs.com/docs/