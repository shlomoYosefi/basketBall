import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/servies/get-data.service';
import { Player } from '../start/start.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  display = 'display:block;'
  counterOfResultsGrup =0
  arrAllPlayers:Player[] = []
  arrAllPlayersOfSelectGrup = []
  arrSelectPlayersOfSelectGrup = []
  arrResultsByGrup =[]

  arrAllResults = []
  arrResults = []
  statisticPlayer = { name: '', height: '', PlayerPosition: '', percentTo2: 0, percentTo3: 0, points: 0, image: '' }
  constructor(private srv: GetDataService) { }

  ngOnInit(): void {

    this.srv.plaersAGrup.subscribe(val => {
      this.arrAllPlayers = val
      for(let i of val){
        this.arrAllPlayersOfSelectGrup.push([{player:i},{opacity:'opacity:1'}])
      }
    })
    this.srv.arrAllResult.subscribe(val => {
      this.arrAllResults = val
      this.arrResults = this.arrAllResults
      
      
    })
  }

  selectPlayer(player) {
    let countPercentTo2 = 0
    let countPercentTo3 = 0
    let points = 0
    let counter = 0
    document.getElementById('myModa').style.display = 'none'
    document.getElementById('showTable').style.display = 'none'
    this.display = 'display:none;'

    for (let i of this.arrAllResults) {

      for (let j of i[2][0].statisticGrup1) {
        if (j.player.id == player.id) {
          counter++
          countPercentTo2 += j.percentTo2
          countPercentTo3 += j.countPercentTo3
          points += j.points
        }

      }
      for (let x of i[2][1].statisticGrup2) {
        if (x.player.id == player.id) {
          counter++
          countPercentTo2 += x.percentTo2
          countPercentTo3 += x.countPercentTo3
          points += x.points
        }
      }
    }
    this.statisticPlayer.name = player.name
    this.statisticPlayer.height = player.height
    this.statisticPlayer.PlayerPosition = player.PlayerPosition
    this.statisticPlayer.image = player.img
    this.statisticPlayer.percentTo2 = countPercentTo2 > 0 ? (Math.floor(countPercentTo2 / counter)) : 0
    this.statisticPlayer.percentTo3 = countPercentTo3 > 0 ? (Math.floor(countPercentTo3 / counter)) : 0
    this.statisticPlayer.points = points > 0 ? (Math.floor(points / counter)) : 0

    document.getElementById('cardFull').style.display = 'block'
    document.getElementById('resultsGrup').style.display = 'none'
    this.display = 'display:none;'
  }

  resultByGrup(player){
    if(this.counterOfResultsGrup == 3){
      return
    }
    this.counterOfResultsGrup++
    this.arrSelectPlayersOfSelectGrup.push(player)
    for(let i of this.arrAllPlayersOfSelectGrup){
      if (i[0].player == player){
        i[0].opacity = 'opacity:0.3'
      }
    } 
  }

  nextResultGrup(){
    console.log("popopopo");
    this.arrResultsByGrup =[]

    let countGrup1 =0
    let countGrup2 =0

    let thisPlayPlayersgrup1 =[]
    let thisPlayPlayersgrup2 =[]

    this.counterOfResultsGrup =0
    if(this.arrSelectPlayersOfSelectGrup.length < 3){
      alert('No 3 players selected')
    }
    else{
      for (let i of this.arrAllResults ){
        thisPlayPlayersgrup1.push(i[2][0].statisticGrup1[0].player)
        thisPlayPlayersgrup1.push(i[2][0].statisticGrup1[1].player)
        thisPlayPlayersgrup1.push(i[2][0].statisticGrup1[2].player)
        thisPlayPlayersgrup2.push(i[2][1].statisticGrup2[0].player)
        thisPlayPlayersgrup2.push(i[2][1].statisticGrup2[1].player)
        thisPlayPlayersgrup2.push(i[2][1].statisticGrup2[2].player)

        for(let j of this.arrSelectPlayersOfSelectGrup){       
        if(j.id == thisPlayPlayersgrup1[0].id || j.id==thisPlayPlayersgrup1[1].id || j.id==thisPlayPlayersgrup1[2].id){          
          countGrup1++
        }
        else if(j.id == thisPlayPlayersgrup2[0].id ||j== thisPlayPlayersgrup2[1].id ||j== thisPlayPlayersgrup2[2].id){
          countGrup2++
        }
      }
      if(countGrup1 ==3 || countGrup2 ==3){
        this.arrResultsByGrup.push(i)
      }
      }
    }
    if(this.arrResultsByGrup.length == 0){
      alert('No game results')
      for(let q of this.arrAllPlayersOfSelectGrup){      
        q[0].opacity = 'opacity:1'
      }
      return
    }
    else{  
    for(let q of this.arrAllPlayersOfSelectGrup){      
      q[0].opacity = 'opacity:1'
    }
    console.log(document.getElementById('resultsGrup'));
    document.getElementById('showTable').style.display = 'none'
    document.getElementById('resultByGrup').style.display = 'none'
    document.getElementById('cardFull').style.display = 'none'
    document.getElementById('resultsGrup').style.display = 'block'
    this.arrSelectPlayersOfSelectGrup=[]

  }

  }




  modalDisplay(html, display) {    
    document.getElementById(html).style.display = display
    if((html == 'cardFull' && display =='none')||(html == 'resultByGrup' && display =='none')){
      console.log(html);
      this.arrResults = this.arrAllResults
      document.getElementById('showTable').style.display = 'block'    
    }
  }


  date(date) {
    this.arrResults = []
    document.getElementById('cardFull').style.display = 'none'
    document.getElementById('resultsGrup').style.display = 'none'
    let counter = 0
    let arr = this.arrAllResults
    for (let i of arr) {

      let myDate = i[0][0].date.split('.')
      let yaers = `${myDate[2]}`
      let month = myDate[1].length > 1 ? myDate[1] : `0${myDate[1]}`
      let day = myDate[0].length > 1 ? myDate[0] : `0${myDate[0]}`
      let myDateFix = `${yaers}-${month}-${day}`

      if (myDateFix == date) {
        counter++
        this.arrResults.push(i)
      }
    }
    if (counter == 0) {
      alert('No games found on this date')
      this.display = 'display:block;'

      this.arrResults = this.arrAllResults
    }
  }

  getAllResult() {
    document.getElementById('cardFull').style.display = 'none'
    document.getElementById('resultsGrup').style.display = 'none'
    document.getElementById('showTable').style.display = 'block'
    this.arrResults = this.arrAllResults
  }

}
