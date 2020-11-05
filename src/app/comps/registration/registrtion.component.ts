import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GetDataService } from 'src/app/servies/get-data.service';
import { Router } from '@angular/router';
import { PostDataService } from 'src/app/servies/post-data.service';
import { SarveOfGurdService } from 'src/app/sarve-of-gurd.service';
import { error } from 'protractor';

@Component({
  selector: 'app-registrtion',
  templateUrl: './registrtion.component.html',
  styleUrls: ['./registrtion.component.css']
})
export class RegistrtionComponent implements OnInit {

  log

  constructor(private fb: FormBuilder, private srv: GetDataService,private srvPost:PostDataService,private router:Router,private srvGurd:SarveOfGurdService) { }


  registrationFromG = this.fb.group({
    Name: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  })


  ngOnInit(): void {
  }

  submit(x){
    console.log("jjjjj",x);
  }

  guard(Name, password, ConfirmPassword) {
    // console.log(this.registrationFromG.controls.password);
    
    

    if (password !== ConfirmPassword) {
      alert("Incorrect password verification")
      return
    }
    for (let i of this.srv.arrGrup){
      if (Name == i.Name){
        alert('There is such a group, choose another name')
        return
      }
    }

    if (this.registrationFromG.valid) {
      let grup = {
        Name,
        password
      }
      this.srv.nameAGrup.next(Name) 
      this.srv.arrGrup.push(grup)
      this.router.navigate(['/sign-in'])
    }
    else {
      alert("Incomplete details")
    }


  }

}
