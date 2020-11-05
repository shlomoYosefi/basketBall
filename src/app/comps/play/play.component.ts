import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostDataService } from 'src/app/servies/post-data.service';
import { GetDataService } from 'src/app/servies/get-data.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  modal = 'display: none;'
  nameGrup = ''
  arrAllPlayers = []

  pointsPlayersGrup1 = [
    { player: { id: 0, name: "", height: '', PlayerPosition: '', img: '' }, shootTo2: 0, ok2: 0, percentTo2: 0, shootTo3: 0, ok3: 0, percentTo3: 0 ,points:0},
    { player: { id: 0, name: "", height: '', PlayerPosition: '', img: '' }, shootTo2: 0, ok2: 0, percentTo2: 0, shootTo3: 0, ok3: 0, percentTo3: 0 ,points:0},
    { player: { id: 0, name: "", height: '', PlayerPosition: '', img: '' }, shootTo2: 0, ok2: 0, percentTo2: 0, shootTo3: 0, ok3: 0, percentTo3: 0 ,points:0}
  ]
  pointsPlayersGrup2 = [
    { player: { id: 0, name: "", height: '', PlayerPosition: '', img: '' }, shootTo2: 0, ok2: 0, percentTo2: 0, shootTo3: 0, ok3: 0, percentTo3: 0 ,points:0},
    { player: { id: 0, name: "", height: '', PlayerPosition: '', img: '' }, shootTo2: 0, ok2: 0, percentTo2: 0, shootTo3: 0, ok3: 0, percentTo3: 0 ,points:0},
    { player: { id: 0, name: "", height: '', PlayerPosition: '', img: '' }, shootTo2: 0, ok2: 0, percentTo2: 0, shootTo3: 0, ok3: 0, percentTo3: 0 ,points:0}
  ]

  pointsGrup1 = { shootTo2: 0, ok2: 0, percentTo2: 0, shootTo3: 0, ok3: 0, percentTo3: 0 }
  pointsGrup2 = { shootTo2: 0, ok2: 0, percentTo2: 0, shootTo3: 0, ok3: 0, percentTo3: 0 }


  playing = false
  resultGrup1 = 0
  resultGrup2 = 0
  minut = "00"
  second = "00"
  startTime

  constructor(private router: Router, private srvPost: PostDataService, private srv: GetDataService) { }

  ngOnInit(): void {
    this.srv.nameAGrup.subscribe(val => this.nameGrup = val)
    this.srv.plaersAGrup.subscribe(val => {
      for (let i of val) {
        this.arrAllPlayers.push([i, 'opacity:1'])
      }
    })
  }

  addPlayerGrup1(player, number) {

    for (let i = 0; i < this.arrAllPlayers.length; i++) {
      if (this.arrAllPlayers[i][0] === player) {
        if (this.arrAllPlayers[i][1] === 'opacity:0.2') {
          return
        }
        else {
          this.arrAllPlayers[i][1] = 'opacity:0.2'
          this.pointsPlayersGrup1[number].player = player
          document.getElementById(`imgGrup1Player${number}`).style.display = 'block'
          document.getElementById(`spanImgGrup1Player${number}`).style.display = 'none'
          this.modalDisplay('none', number)
          return
        }
      }
    }
  }
  addPlayerGrup2(player, number) {
    for (let i = 0; i < this.arrAllPlayers.length; i++) {
      if (this.arrAllPlayers[i][0] === player) {
        if (this.arrAllPlayers[i][1] === 'opacity:0.2') {
          return
        }
        else {
          this.arrAllPlayers[i][1] = 'opacity:0.2'
          this.pointsPlayersGrup2[number].player = player
          document.getElementById(`imgGrup2Player${number}`).style.display = 'block'
          document.getElementById(`spanImgGrup2Player${number}`).style.display = 'none'
          this.modalDisplay('none', number + 3)
          return
        }
      }
    }
  }

  start() {
    for (let i of this.pointsPlayersGrup1) {
      if (i.player.id == 0) {
        alert("אין 6 שחקנים להתחלת משחק")
        return
      }
      for (let i of this.pointsPlayersGrup2) {
        if (i.player.id == 0) {
          alert("אין 6 שחקנים להתחלת משחק")
          return
        }
      }
    }

    this.playing = true
    let min = 0
    let sec = 0
    this.startTime = setInterval(() => {

      sec++
      if (sec < 10) {
        this.second = `0${sec}`
      }
      else {
        this.second = `${sec}`
      }
      if (sec == 59) {
        min++
        sec = 0
      }
      if (min < 10) {
        this.minut = `0${min}`
      }
      else {
        this.minut = `${min}`
      }
    }, 1000)
  }





  plus2(grup, player) {

    if (this.playing) {
      if (grup == 1) {
        this.resultGrup1++
        this.pointsPlayersGrup1[player].points++
        this.pointsPlayersGrup1[player].shootTo2++
        this.pointsPlayersGrup1[player].ok2++
        this.pointsGrup1.shootTo2++
        this.pointsGrup1.ok2++
        this.pointsPlayersGrup1[player].percentTo2 = Math.round((this.pointsPlayersGrup1[player].ok2 / this.pointsPlayersGrup1[player].shootTo2) * 100)
        this.pointsGrup1.percentTo2 = Math.round((this.pointsGrup1.ok2 / this.pointsGrup1.shootTo2) * 100)

      }
      else {
        this.resultGrup2++
        this.pointsPlayersGrup2[player].points++
        this.pointsPlayersGrup2[player].shootTo2++
        this.pointsPlayersGrup2[player].ok2++
        this.pointsGrup2.shootTo2++
        this.pointsGrup2.ok2++
        this.pointsPlayersGrup2[player].percentTo2 = Math.round((this.pointsPlayersGrup2[player].ok2 / this.pointsPlayersGrup2[player].shootTo2) * 100)
        this.pointsGrup2.percentTo2 = Math.round((this.pointsGrup2.ok2 / this.pointsGrup2.shootTo2) * 100)
      }
    }
  }

  plus3(grup, player) {


    if (this.playing) {
      if (grup == 1) {
        this.resultGrup1 += 2
        this.pointsPlayersGrup1[player].points+=2
        this.pointsPlayersGrup1[player].shootTo3++
        this.pointsPlayersGrup1[player].ok3++
        this.pointsGrup1.shootTo3++
        this.pointsGrup1.ok3++
        this.pointsPlayersGrup1[player].percentTo3 = Math.round((this.pointsPlayersGrup1[player].ok3 / this.pointsPlayersGrup1[player].shootTo3) * 100)
        this.pointsGrup1.percentTo3 = Math.round((this.pointsGrup1.ok3 / this.pointsGrup1.shootTo3) * 100)
      }
      else {
        this.resultGrup2 += 2
        this.pointsPlayersGrup2[player].points+=2
        this.pointsPlayersGrup2[player].shootTo3++
        this.pointsPlayersGrup2[player].ok3++
        this.pointsGrup2.shootTo3++
        this.pointsGrup2.ok3++
        this.pointsPlayersGrup2[player].percentTo3 = Math.round((this.pointsPlayersGrup2[player].ok3 / this.pointsPlayersGrup2[player].shootTo3) * 100)
        this.pointsGrup2.percentTo3 = Math.round((this.pointsGrup2.ok3 / this.pointsGrup2.shootTo3) * 100)
      }
    }

  }
  minus2(grup, player) {

    if (this.playing) {
      if (grup == 1) {
        this.pointsPlayersGrup1[player].shootTo2++
        this.pointsGrup1.shootTo2++
        this.pointsPlayersGrup1[player].percentTo2 = Math.round((this.pointsPlayersGrup1[player].ok2 / this.pointsPlayersGrup1[player].shootTo2) * 100)
        this.pointsGrup1.percentTo2 = Math.round((this.pointsGrup1.ok2 / this.pointsGrup1.shootTo2) * 100)

      }
      else {
        this.pointsPlayersGrup2[player].shootTo2++
        this.pointsGrup2.shootTo2++
        this.pointsPlayersGrup2[player].percentTo2 = Math.round((this.pointsPlayersGrup2[player].ok2 / this.pointsPlayersGrup2[player].shootTo2) * 100)
        this.pointsGrup2.percentTo2 = Math.round((this.pointsGrup2.ok2 / this.pointsGrup2.shootTo2) * 100)
      }
    }

  }
  minus3(grup, player) {

    if (this.playing) {
      if (grup == 1) {
        this.pointsPlayersGrup1[player].shootTo3++
        this.pointsGrup1.shootTo3++
        this.pointsPlayersGrup1[player].percentTo3 = Math.round((this.pointsPlayersGrup1[player].ok3 / this.pointsPlayersGrup1[player].shootTo3) * 100)
        this.pointsGrup1.percentTo3 = Math.round((this.pointsGrup1.ok3 / this.pointsGrup1.shootTo3) * 100)
      }
      else {
        this.pointsPlayersGrup2[player].shootTo3++
        this.pointsGrup2.shootTo3++
        this.pointsPlayersGrup2[player].percentTo3 = Math.round((this.pointsPlayersGrup2[player].ok3 / this.pointsPlayersGrup2[player].shootTo3) * 100)
        this.pointsGrup2.percentTo3 = Math.round((this.pointsGrup2.ok3 / this.pointsGrup2.shootTo3) * 100)
      }
    }
  }

  finish() {
    clearInterval(this.startTime);
    this.playing = false
  }

  save() {
    this.srv.arrResults.push([
      [{nameGrup: this.nameGrup, date: new Date().toLocaleDateString(), timeAPlay: `${this.minut}:${this.second}` }],
      [{ resultGrup1: this.resultGrup1 }, { resultGrup2: this.resultGrup2 }],
      [{ statisticGrup1: this.pointsPlayersGrup1 }, { statisticGrup2: this.pointsPlayersGrup2 }],
      [{ statisticAllGrup2: this.pointsGrup1 }, { statisticAllGrup2: this.pointsGrup2 }]
    ])
    this.router.navigate(['/start'])
  }

  




  modalDisplay(type, number) {
    let modal = document.getElementById(`myModal${number}`).style.display = type
  }
}


