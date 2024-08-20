import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      message: ['', Validators.required]
    });
  }

  // Este getter devuelve un control específico como FormControl
  get formControls() {
    return this.contactForm.controls;
  }

 

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }
  
  }
}
