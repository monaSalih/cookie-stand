
'use.strict';
let time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}




let Seattle = {
  locaName: 'seattle',
  minCus: 23,
  maxCus: 65,
  avargCo: 6.3,
  cookiesNum: [],
  customeEachHour: [],
  totalCoun: 0,
  customerPerHour: function () {

    for (let j = 0; j < time.length; j++) {
      this.customeEachHour.push(random(this.minCus, this.maxCus));
    }
    console.log(this.customeEachHour);
  },
  cookiesAvr: function () {
    for (let i = 0; i < time.length; i++) {
      let cookPur =Math.floor (this.avargCo * this.customeEachHour[i]);
      this.cookiesNum.push(cookPur);
      this.totalCoun = this.totalCoun + this.cookiesNum[i];
    }
    console.log(this.cookiesNum);
    console.log(this.totalCoun);

  },
  render:function(){
    let coDiv=document.getElementById('cookLis');
    let h2El=document.createElement('h2');
    coDiv.appendChild(h2El);
    h2El.textContent=this.locaName;
    let ulCo=document.createElement('ul');
    coDiv.appendChild( ulCo);

    let ulEl=document.createElement('ul');
    coDiv.appendChild(ulEl);


    for (let i = 0; i < time.length; i++) {
      let liCo=document.createElement('li');
      // liCo.textContent=time[i]+''+this.cookiesAvr[i]+'cookies';
      liCo.textContent=`${time[i]}:${this.cookiesNum[i]}  cookies`;
      ulCo.appendChild(liCo);
    }
    let totalEl=document.createElement('li');
    totalEl.textContent='The total Number of cookies:'+this.totalCoun;
    ulCo.appendChild(totalEl);
    //     liCo.textContent=`${time[i]}:${this.cookiesNum}cookies`;
    //     ulCo.appendChild(liCo);


  //   }
  //   liCo.textContent=this.totalCoun;
  //   ulCo.appendChild(liCo);
  //   coDiv.appendChild(ulCo);
  }


};

Seattle.customerPerHour();
Seattle.cookiesAvr();
Seattle.totalCoun;
Seattle.render();



// let Tokyo = {
//   locaName: 'seattle',
//   minCus: 23,
//   maxCus: 65,
//   avargCo: 6.3,
//   cookiesNum: [],
//   customeEachHour: [],
//   totalCoun: 0,
//   customerPerHour: function () {

//     for (let j = 0; j < time.length; j++) {
//       this.customeEachHour.push(random(this.minCus, this.maxCus));
//     }
//     console.log(this.customeEachHour);
//   },
//   cookiesAvr: function () {
//     for (let i = 0; i < time.length; i++) {
//       let cookPur =Math.floor (this.avargCo * this.customeEachHour[i]);
//       this.cookiesNum.push(cookPur);
//       this.totalCoun = this.totalCoun + this.cookiesNum[i];
//     }
//     console.log(this.cookiesNum);
//     console.log(this.totalCoun);

//   }
//   };
// Tokyo.customerPerHour();
// Tokyo.cookiesAvr();
// Tokyo.render();
// Tokyo.totalCoun;


// let Dubai = {
//   locaName: 'seattle',
//   minCus: 23,
//   maxCus: 65,
//   avargCo: 6.3,
//   cookiesNum: [],
//   customeEachHour: [],
//   totalCoun: 0,
//   customerPerHour: function () {

//     for (let j = 0; j < time.length; j++) {
//       this.customeEachHour.push(random(this.minCus, this.maxCus));
//     }
//     console.log(this.customeEachHour);
//   },
//   cookiesAvr: function () {
//     for (let i = 0; i < time.length; i++) {
//       let cookPur =Math.floor (this.avargCo * this.customeEachHour[i]);
//       //console.log(cookPur);
//       this.cookiesNum.push(cookPur);
//       this.totalCoun = this.totalCoun + this.cookiesNum[i];
//     }
//     console.log(this.cookiesNum);
//     console.log(this.totalCoun);

//   }


// };
// Dubai.customerPerHour();
// Dubai.cookiesAvr();
// Dubai.totalCoun;

// let Paris = {
//   locaName: 'seattle',
//   minCus: 23,
//   maxCus: 65,
//   avargCo: 6.3,
//   cookiesNum: [],
//   customeEachHour: [],
//   totalCoun: 0,
//   customerPerHour: function () {

//     for (let j = 0; j < time.length; j++) {
//       this.customeEachHour.push(random(this.minCus, this.maxCus));
//     }
//     console.log(this.customeEachHour);
//   },
//   cookiesAvr: function () {
//     for (let i = 0; i < time.length; i++) {
//       let cookPur =Math.floor (this.avargCo * this.customeEachHour[i]);
//       //console.log(cookPur);
//       this.cookiesNum.push(cookPur);
//       this.totalCoun = this.totalCoun + this.cookiesNum[i];
//     }
//     console.log(this.cookiesNum);
//     console.log(this.totalCoun);

//   }


// };
// Paris.customerPerHour();
// Paris.cookiesAvr();
// Paris.render();
// Paris.totalCoun;


// let lima = {
//   locaName: 'seattle',
//   minCus: 23,
//   maxCus: 65,
//   avargCo: 6.3,
//   cookiesNum: [],
//   customeEachHour: [],
//   totalCoun: 0,
//   customerPerHour: function () {

//     for (let j = 0; j < time.length; j++) {
//       this.customeEachHour.push(random(this.minCus, this.maxCus));
//     }
//     console.log(this.customeEachHour);
//   },
//   cookiesAvr: function () {
//     for (let i = 0; i < time.length; i++) {
//       let cookPur =Math.floor (this.avargCo * this.customeEachHour[i]);
//       //console.log(cookPur);
//       this.cookiesNum.push(cookPur);
//       this.totalCoun = this.totalCoun + this.cookiesNum[i];
//     }
//     console.log(this.cookiesNum);
//     console.log(this.totalCoun);

//   }
//   ,
//   Show : function(){
//     this.calDailyTotle();
//     let headLi = document.getElementById('list1');
//     headLi.textContent = this.storeLoc ;

//     let divEl = document.getElementById('Seattle');
//     let ulEl = document.createElement('ul');

//     for(let i= 0;i<this.hourlySales.length;i++){
//       let liEL = document.createElement('li');
//       liEL.textContent = this.hour[i] + ': ' + this.hourlySales[i] + ' cookies';
//       ulEl.appendChild(liEL);
//     }
//     let liEL = document.createElement('li');
//     liEL.textContent = 'Total: ' + this.dailyTotle +' cookies';
//     ulEl.appendChild(liEL);
//     divEl.appendChild(ulEl);

//   }

// };
// lima.customerPerHour();
// lima.cookiesAvr();
// lima.render();
// lima.totalCoun;




//   ,
//   render:function(){
//     let divCook=document.getElementById('cookLis');
//     let artic= document.createElement('article');
//     divCook.appendChild(artic);

//     let h2El=document.createElement('h2');
//     artic.appendChild(h2El);
//     h2El.textContent='seattle';

//     let ulEl=document.createElement('ul');
//     for(let e=0;e<=time.length;e++)
//     {let liEl=document.createElement('li');
//       ul.appendChild(li);
//       let newLi=time[e]+':'+this.cookiesNum[e];
//     }
//     let h3El=document.createElement('h3');
//     h3El.textContent=`total cookies${this.totalCoun} our shop sold `;
//   }
