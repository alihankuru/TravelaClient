import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
  
  ) { }

  errorHandler(err:HttpErrorResponse){
    console.log(err);

    if(err.status === 403){
      let errorMessage = "";
      for(const e of err.error.ErrorMessages){
        errorMessage += e + "\n";
      }

     
    }else if(err.status === 500){
     
    }
  }
}