import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  // Safe URLs for Google Maps iframes
  mapUrlMain!: SafeResourceUrl;
  mapUrl2!: SafeResourceUrl;
  mapUrl3!: SafeResourceUrl;

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });

    
    const mapsMain = 'https://www.google.com/maps?q=31.4249856,73.1257195&z=16&output=embed';
    const mapsUk = 'https://www.google.com/maps?q=Park+View+The+Yard,+Finchampstead+RG40+4JR&output=embed';
  
  const mapsUsaPlaceholder = 'https://www.google.com/maps?q=1419+Colchester+Rd,+Woodbridge,+VA+22191&z=16&output=embed';

    this.mapUrlMain = this.sanitizer.bypassSecurityTrustResourceUrl(mapsMain);
    this.mapUrl2 = this.sanitizer.bypassSecurityTrustResourceUrl(mapsUk);
    this.mapUrl3 = this.sanitizer.bypassSecurityTrustResourceUrl(mapsUsaPlaceholder);
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
