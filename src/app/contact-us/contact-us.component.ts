import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators,} from '@angular/forms'


class User {
  constructor(
    public fullName = '',
    public companyName = '',
    public phoneNumber = '',
    public eMail = '',
    public message = '',
    ) {}
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  sendMessageForm!: FormGroup;
  submitted=false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.sendMessageForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      companyName: ['', null],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      textArea: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.sendMessageForm.invalid) {
      return;
    }

    this.submitted = false;
    this.sendMessageForm.reset()
  }

  toTop() {
    window.scrollTo({ top: 0})
  }
}
