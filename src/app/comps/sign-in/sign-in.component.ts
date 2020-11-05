import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/servies/get-data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PostDataService } from 'src/app/servies/post-data.service';
import { SarveOfGurdService } from 'src/app/sarve-of-gurd.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  constructor(private fb: FormBuilder ,private router:Router,private srv:GetDataService,private srvPost:PostDataService,private srvGurd:SarveOfGurdService) { }


  signInFromG = this.fb.group({
    nameGrup: ['', [Validators.required]],
    myPassword: ['', [Validators.required, Validators.min(9)]],
    remmberMe: ['']
  })

  ngOnInit(): void {
  }



  guard(grup, password, rememberMe) {
     
      for (let i of this.srv.arrGrup) {
        if (i.Name == grup && i.password == password) {
          this.srv.nameAGrup.next(grup) 
          this.router.navigate(['/start'])
          this.srvGurd.logIn = true
          return   
        }
      }
      if (this.signInFromG.valid) {
        alert("Incorrect details")
      }
      else {
        alert("Incomplete details")
      }
  }
}
