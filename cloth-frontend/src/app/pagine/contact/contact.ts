import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../../config/email.config';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  async onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      
      try {
        // Prepara i dati per l'invio
        const templateParams = {
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email,
          phone: this.contactForm.value.phone || 'Non fornito',
          company: this.contactForm.value.company || 'Non fornito',
          subject: this.contactForm.value.subject,
          message: this.contactForm.value.message,
          to_name: 'Cotton House Team',
        };

        // Verifica se la configurazione è impostata
        if (emailConfig.SERVICE_ID === 'YOUR_SERVICE_ID') {
          alert('⚠️ EmailJS non è ancora configurato. Controlla il file email.config.ts');
          this.isSubmitting = false;
          return;
        }

        // Invia l'email tramite EmailJS
        await emailjs.send(
          emailConfig.SERVICE_ID,
          emailConfig.TEMPLATE_ID,
          templateParams,
          emailConfig.PUBLIC_KEY
        );
        
        // Successo
        alert('✅ Message sent successfully! We will get back to you soon.');
        this.contactForm.reset();
        
      } catch (error) {
        console.error('❌ Error sending email:', error);
        alert('❌ Sorry, there was an error sending your message. Please try again or contact us directly at info@cot-house.com');
      }
      
      this.isSubmitting = false;
    } else {
      alert('❌ Please fill in all required fields correctly.');
    }
  }
}
