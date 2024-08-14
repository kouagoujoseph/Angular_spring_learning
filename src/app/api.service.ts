import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:8080';
  constructor(private http: HttpClient) {}
  
  getDataClient(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/customer`);
  }
  getDataBankAccount(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/bankAccount/getAllBanks`);
  }
  postDataClient(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/customer`, data);
  }
  postDataBankAccounnt(Id:String, data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/bankAccount/createBankAccount/${Id}`, data);
  }
  getDataBankAccountByClient(id:String): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/customer/${id}/bankAccounts`);
  }
  getOperationByBankAccount(id:String): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/operation/getOperations/${id}`);
  }

  getAllOperations(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/operation`);
  }
  postDataOperation(bankid: String, data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/operation/createOperation/${bankid}`, data,{ responseType: 'text' as 'json' });
  }

  postLogin(username: String, password: String): Observable<any> {
     const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post<any>(`${this.apiUrl}/login/`,{ username, password },{headers,observe: 'response' });
  }


  getDownloadPdfOperationByBankAccount(bankAccountid:String): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/api/operation/operationsByBankAccount/pdf/${bankAccountid}`,{ responseType: 'blob' });
  }

  getDownloadPdBankAccountRIB(bankAccountid:String): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/api/bankAccount/pdf/${bankAccountid}`,{ responseType: 'blob' });
  }





  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/employees`);
  }

  getDataEmployee(id:number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/employees/${id}`);
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/employees`, data);
  }

 

  postDataTask(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/tasks`, data);
  }

  postDataTaskToEmployee(data:{employee_id: number,tasks_id:number}): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/employees/${data.employee_id}/tasks/${data.tasks_id}`,"");
  }


  deleteData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/employees/${id}`);
  }




  updateDataEmploye(employeeId: number, name: string, position: string, salary: number): Observable<any> {
    const url = `${this.apiUrl}/api/employees/${employeeId}`;
    const body = { name, position, salary };
    return this.http.put<any>(url, body);
  }

  getDataTask(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/tasks`);
  }

  deleteDataTask(id:number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/tasks/${id}`);
  }
}
