import { Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { MenuComponent } from './menu/menu.component';
import { AjoutEmployeeComponent } from './ajout-employee/ajout-employee.component';
import { GestionTacheComponent } from './gestion-tache/gestion-tache.component';
import { FormulaireTacheComponent } from './formulaire-tache/formulaire-tache.component';
import { ModifierEmployeeComponent } from './modifier-employee/modifier-employee.component';
import { GestionEmployeeTacheComponent } from './gestion-employee-tache/gestion-employee-tache.component';
import { GestionClientComponent } from './gestion-client/gestion-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { GestionBankAccountComponent } from './gestion-bank-account/gestion-bank-account.component';
import { AddBankAccountComponent } from './add-bank-account/add-bank-account.component';
import { GestionOperationsComponent } from './gestion-operations/gestion-operations.component';
import { CreateOperationComponent } from './create-operation/create-operation.component';
import { AddOpByBankComponent } from './add-op-by-bank/add-op-by-bank.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'link_gestion_employes', component: FormulaireComponent },
    { path: 'gestionClient', component:GestionClientComponent},
    { path: 'addEmployee', component: AjoutEmployeeComponent },
    { path: 'addTache', component: FormulaireTacheComponent },
    { path: 'gestionTache', component: GestionTacheComponent },
    { path: 'modifierEmployee/:id', component: ModifierEmployeeComponent},
    { path: 'addOpByBank/:id', component:AddOpByBankComponent},
    { path: 'EmployeTache', component: GestionEmployeeTacheComponent},
    { path: 'dashboard', component: MenuComponent },
    { path: '', component:LoginComponent},
    {path:'addClient', component:AddClientComponent},
    {path:'gestionBankAccount', component:GestionBankAccountComponent},
    {path:'addBank', component:AddBankAccountComponent},
    {path:'gestionOperations', component:GestionOperationsComponent},
    {path:'addOp', component:CreateOperationComponent}
];
