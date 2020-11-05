import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  arrGrup =[{Name:"Cleveland",password:1234},
            {Name:"israel",password:4321}]
  nameAGrup:BehaviorSubject<any> = new BehaviorSubject(null)
  plaersAGrup:BehaviorSubject<any> = new BehaviorSubject(null)
  arrAllResult:BehaviorSubject<any> = new BehaviorSubject(null) 

  arr = [{Cleveland:[ 
    {id:1,name:"shlomo",height:'1.84',PlayerPosition:'center',img:"assets/image/shlomo.jpg"},
    {id:2,name:"israel",height:'1.84',PlayerPosition:'Shooting Guard',img:"assets/image/israel.jpg"},
    {id:3,name:"nisim",height:'1.86',PlayerPosition:'Shooting Guard',img:"assets/image/nisim.jpg"},
    {id:4,name:"ahron",height:'1.68',PlayerPosition:'Small Forward',img:"assets/image/playerNew2.jpg"},
    {id:5,name:"moti",height:'1.76',PlayerPosition:'Power Forward',img:"assets/image/moti.jpg"},
    {id:6,name:"yacov",height:'1.81',PlayerPosition:'center',img:"assets/image/player6.jpg"},
    {id:7,name:"evya",height:'1.68',PlayerPosition:'Small Forward',img:"assets/image/evia.jpg"},
    {id:8,name:"evyatar",height:'1.80',PlayerPosition:'Shooting Guard',img:"assets/image/evyatar.jpg"}
    ]},
    {israel:[ 
    {id:1,name:"gad",height:2.05,PlayerPosition:'center',img:"https://besttv232-ynet-images1-prod.cdn.it.best-tv.com/PicServer5/2019/11/28/9623728/962371612841499980808no.jpg"},
    {id:2,name:"liron",height:1.78,PlayerPosition:'Shooting Guard',img:"https://besttv232-ynet-images1-prod.cdn.it.best-tv.com/PicServer5/2019/11/28/9623728/962371612841499980808no.jpg"},
    {id:3,name:"levi",height:1.86,PlayerPosition:'Shooting Guard',img:"https://besttv232-ynet-images1-prod.cdn.it.best-tv.com/PicServer5/2019/11/28/9623728/962371612841499980808no.jpg"},
    {id:4,name:"elhanan",height:1.66,PlayerPosition:'Small Forward',img:"https://besttv232-ynet-images1-prod.cdn.it.best-tv.com/PicServer5/2019/11/28/9623728/962371612841499980808no.jpg"},
    {id:5,name:"tomer",height:1.78,PlayerPosition:'Power Forward',img:"https://besttv232-ynet-images1-prod.cdn.it.best-tv.com/PicServer5/2019/11/28/9623728/962371612841499980808no.jpg"},
    {id:6,name:"rabi",height:2.13,PlayerPosition:'center',img:"https://besttv232-ynet-images1-prod.cdn.it.best-tv.com/PicServer5/2019/11/28/9623728/962371612841499980808no.jpg"},
    {id:7,name:"yochanan",height:1.75,PlayerPosition:'Small Forward',img:"https://besttv232-ynet-images1-prod.cdn.it.best-tv.com/PicServer5/2019/11/28/9623728/962371612841499980808no.jpg"},
    {id:8,name:"arye",height:1.87,PlayerPosition:'Shooting Guard',img:"https://besttv232-ynet-images1-prod.cdn.it.best-tv.com/PicServer5/2019/11/28/9623728/962371612841499980808no.jpg"}
    ]}
  ]

  arrResults=[
    [
      //[0]   nameGrup...time....date
      [{nameGrup:'shlomo',date:'10.9.2020',timeAPlay:'10:25'}],
      //[1]    result Games
      [{resultGrup1:9},{resultGrup2:8}],
      //[2]    statistic players from grup 1 and 2
      [{statisticGrup1:[
        { player: { id: 1, name: "shlomo", height: '1.84', PlayerPosition: 'center', img: "https://besttv232-ynet-images1-prod.cdn.it.best-tv.com/PicServer5/2019/11/28/9623728/962371612841499980808no.jpg" }, shootTo2: 4, ok2: 2, percentTo2: 50, shootTo3: 0, ok3: 0, percentTo3: 0 ,points:2},
        { player: { id: 2, name: "israel", height: '1.84', PlayerPosition: 'Shooting Guard', img: "https://sport1images.maariv.co.il/image/upload/f_auto,fl_lossy,c_thumb,g_north,w_728,h_410/668530"}, shootTo2: 6, ok2: 1, percentTo2: 20, shootTo3: 1, ok3: 1, percentTo3: 100 ,points:3},
        { player: { id: 3, name: "nisim", height: '1.86', PlayerPosition: 'Shooting Guard', img: "https://images.one.co.il/images/one/450_250/gg1433901.jpg" }, shootTo2: 0, ok2: 0, percentTo2: 0, shootTo3: 2, ok3: 2, percentTo3: 100 ,points:4}
      ]},
      {statisticGrup2:[
        {player: { id: 4, name: "ahron", height: '1.68', PlayerPosition: 'Small Forward', img: "https://images.outbrainimg.com/transform/v3/eyJpdSI6ImIxMmQwYzJhZGNhYWYwM2RhY2NmYzE4YWE0NmRlODQ5MDg1MjE3NTY2ZGZlYTA1OGI3YmE4MDhmZDgzYWJhMGMiLCJ3IjozMDAsImgiOjIwMCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp"}, shootTo2: 5, ok2: 2, percentTo2: 40, shootTo3: 0, ok3: 0, percentTo3: 0 ,points:2},
        { player: { id: 5, name: "moti", height: '1.76', PlayerPosition: 'Power Forward', img: "https://images.globes.co.il/Images/NewGlobes/big_image/2013/car575.jpg" }, shootTo2: 4, ok2: 1, percentTo2: 25, shootTo3: 2, ok3: 1, percentTo3: 50 ,points:3},
        { player: { id: 6, name: "yacov", height: '1.81', PlayerPosition: 'center', img: "https://www.sport5.co.il/Sip_Storage/FILES/6/size475x318/549046.jpg" }, shootTo2: 4, ok2: 3, percentTo2: 75, shootTo3: 0, ok3: 0, percentTo3: 0 ,points:3 }
      ]}
    ],
      //[3]      statistic all grups
      [{statisticAllGrup1:{shootTo2: 10, ok2: 3, percentTo2: 33, shootTo3: 3, ok3: 3, percentTo3: 100}},{statisticAllGrup2:{shootTo2: 13, ok2: 6, percentTo2: 46, shootTo3: 2, ok3: 1, percentTo3: 50}}],
    ],
    
  ]
   

  constructor() { 
    this.nameAGrup.subscribe(val=>{
      for(let i of this.arr){
        if (Object.keys(i) == val){          
          this.plaersAGrup.next(i[val])
        } 
      }   
    })
    this.arrAllResult.next(this.arrResults)  
}
}
