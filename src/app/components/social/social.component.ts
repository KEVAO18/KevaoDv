import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MailSendService } from '@app/servicios/mail-send.service';

@Component({
  selector: 'app-social',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {

  emailForm: FormGroup;

  constructor(private fb: FormBuilder, private mailSendService: MailSendService) {
    this.emailForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.emailForm.valid) {
      const { name, email, phone, subject, message } = this.emailForm.value;
      let content: any = `<p><strong>Name: </strong> ${name}</p>
                          <p><strong>Email: </strong> ${email}</p>
                          <p><strong>Phone: </strong> ${phone}</p>
                          <p><strong>Message: </strong> ${message}</p>
                          `;
      this.mailSendService.enviarCorreo(subject, content).subscribe({
        next: () => {
          alert('Email sent successfully!');
          this.emailForm.reset();
        },
        error: (err) => {
          alert('An error occurred while sending the email.');
        },
      });
    }
  }
}
