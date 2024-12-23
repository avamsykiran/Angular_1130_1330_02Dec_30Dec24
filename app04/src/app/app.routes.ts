import { Routes } from '@angular/router';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactFormComponent } from './contacts/contact-form/contact-form.component';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'/contacts'},
    {path:'contacts',component:ContactsListComponent},
    {path:'addContact',component:ContactFormComponent},
    {path:'editContact/:id',component:ContactFormComponent}
];
