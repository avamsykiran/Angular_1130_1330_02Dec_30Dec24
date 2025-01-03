import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  contactForm: FormGroup;
  isEditing: boolean;

  constructor(private fb: FormBuilder, private contactService: ContactsService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.contactForm = fb.group({
      id: [0],
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      mobile: ['', [Validators.required, Validators.pattern("[1-9][0-9]{9}")]],
      mailId: ['', [Validators.required, Validators.email]]
    });

    this.isEditing = false;
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params["id"];

    if (id) {
      this.isEditing = true;
      this.contactService.getById(Number(id)).subscribe({
        next: data => this.contactForm.reset(data),
        error: err => console.log(err)
      })
    }
  }

  get fullName() {
    return this.contactForm.get('fullName');
  }

  get mobile() {
    return this.contactForm.get('mobile');
  }

  get mailId() {
    return this.contactForm.get('mailId');
  }

  formSubmitted() {
    (this.isEditing ?
      this.contactService.update(this.contactForm.value) :
      this.contactService.add(this.contactForm.value)
    ).subscribe({
      next: data => this.router.navigateByUrl("/contacts"),
      error: err => console.log(err)
    });
  }
}
