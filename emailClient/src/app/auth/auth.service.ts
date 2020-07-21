import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

//Interfaces Needed
interface UsernameAvailableResponse {
  available: boolean;
}

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation:string;
}

interface SignupResponse {
  username: string;
}

interface SignedinResponse {
  authenticated: boolean;
  username : string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl ='https://api.angular-email.com';
  signedin$ = new BehaviorSubject(false); //Observable

  constructor(private http: HttpClient) { }

  usernameAvailable( username: string) {
    return this.http.post<UsernameAvailableResponse>(
     //string templating
      `${this.rootUrl}/auth/username`,
      {
        username
      }
    );
  }

  signUp(credentials: SignupCredentials){
    return this.http
    .post<SignupResponse>( 
      this.rootUrl + '/auth/signup',
      credentials,
     // {withCredentials : true}
      )
    .pipe(
       tap( () => {
         this.signedin$.next(true);
       })
     ) 
  }

  checkAuth() {
    return this.http.get<SignedinResponse>(`${this.rootUrl}/auth/signedin`,
   // {withCredentials : true}
    ).pipe(
        tap(({authenticated}) => {
          this.signedin$.next(authenticated);
        })
      );
  }
}
