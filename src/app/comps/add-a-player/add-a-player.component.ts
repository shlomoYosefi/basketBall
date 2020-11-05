import { Component, OnInit, ɵPlayer } from '@angular/core';
import { GetDataService } from 'src/app/servies/get-data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Player } from '../start/start.component';

@Component({
  selector: 'app-add-a-player',
  templateUrl: './add-a-player.component.html',
  styleUrls: ['./add-a-player.component.css']
})
export class AddAPlayerComponent implements OnInit {

  arrPlayers =[]
  constructor(private srv:GetDataService,private router:Router,private fb:FormBuilder) { }

  signInFromG = this.fb.group({
    name: ['', [Validators.required]],
    Height: ['', [Validators.required, Validators.min(9)]],
  })


  ngOnInit(): void {
    this.srv.plaersAGrup.subscribe(val=> {this.arrPlayers = val})
  }

  save(name,height,select,image){
          
console.log(image.type);

      
      let player:Player ={
        id:Math.floor(Math.random() * 1000000),
        name,
        height,
        PlayerPosition:select,
        img:"https://besttv232-ynet-images1-prod.cdn.it.best-tv.com/PicServer5/2019/11/28/9623728/962371612841499980808no.jpg"
      }
      console.log(player);
      
      this.arrPlayers.push(player)
      this.srv.plaersAGrup.next(this.arrPlayers)
      this.router.navigate(['/start'])
  } 
  

  

}
