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
    // let a1=this.minCus;
    // let a2=this.maxCus;
    // this.customerNum=
    for (let j = 0; j < time.length; j++) {
      this.customeEachHour.push(random(this.minCus, this.maxCus));
    }
    console.log(this.customeEachHour);
  },
  cookiesAvr: function () {
    for (let i = 0; i < time.length; i++) {
      let cookPur =Math.floor (this.avargCo * this.customeEachHour[i]);
      //console.log(cookPur);
      this.cookiesNum.push(cookPur);
      this.totalCoun = this.totalCoun + this.cookiesNum[i];
    }
    console.log(this.cookiesNum);
    console.log(this.totalCoun);

  }
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

};
Seattle.customerPerHour();
Seattle.cookiesAvr();
// Seattle.render();
Seattle.totalCoun;
// console.log(seattle.cookiesAvr());
// console.log(seattle.cookiesAvr());


let Tokyo = {
  locaName: 'seattle',
  minCus: 23,
  maxCus: 65,
  avargCo: 6.3,
  cookiesNum: [],
  customeEachHour: [],
  totalCoun: 0,
  customerPerHour: function () {
    // let a1=this.minCus;
    // let a2=this.maxCus;
    // this.customerNum=
    for (let j = 0; j < time.length; j++) {
      this.customeEachHour.push(random(this.minCus, this.maxCus));
    }
    console.log(this.customeEachHour);
  },
  cookiesAvr: function () {
    for (let i = 0; i < time.length; i++) {
      let cookPur =Math.floor (this.avargCo * this.customeEachHour[i]);
      //console.log(cookPur);
      this.cookiesNum.push(cookPur);
      this.totalCoun = this.totalCoun + this.cookiesNum[i];
    }
    console.log(this.cookiesNum);
    console.log(this.totalCoun);

  }
//   ,
//   render:function(){
//     let divCook=document.getElementById('cookLis');
//     let artic= document.createElement('article');
//     divCook.appendChild(artic);

//     let h2El=document.createElement('h2');
//     artic.appendChild(h2El);
//     h2El.textContent='seattle';

//     let ulEl=document.createElement('ul');
//     for(let e=0;e<=this.time.length;e++)
//     {let liEl=document.createElement('li');
//       ul.appendChild(li);
//       let newLi=time[e]+':'+this.cookiesNum[e];
//     }
//     let h3El=document.createElement('h3');
//     h3El.textContent=`total cookies${this.totalCoun} our shop sold `;
//   }

};
Tokyo.customerPerHour();
Tokyo.cookiesAvr();
// Tokyo.render();
Tokyo.totalCoun;


let Dubai = {
  locaName: 'seattle',
  minCus: 23,
  maxCus: 65,
  avargCo: 6.3,
  cookiesNum: [],
  customeEachHour: [],
  totalCoun: 0,
  customerPerHour: function () {
    // let a1=this.minCus;
    // let a2=this.maxCus;
    // this.customerNum=
    for (let j = 0; j < time.length; j++) {
      this.customeEachHour.push(random(this.minCus, this.maxCus));
    }
    console.log(this.customeEachHour);
  },
  cookiesAvr: function () {
    for (let i = 0; i < time.length; i++) {
      let cookPur =Math.floor (this.avargCo * this.customeEachHour[i]);
      //console.log(cookPur);
      this.cookiesNum.push(cookPur);
      this.totalCoun = this.totalCoun + this.cookiesNum[i];
    }
    console.log(this.cookiesNum);
    console.log(this.totalCoun);

  }
//   ,
//   render:function(){
//     let divCook=document.getElementById('cookLis');
//     let artic= document.createElement('article');
//     divCook.appendChild(artic);

//     let h2El=document.createElement('h2');
//     artic.appendChild(h2El);
//     h2El.textContent='seattle';

//     let ulEl=document.createElement('ul');
//     for(let e=0;e<=this.time.length;e++)
//     {let liEl=document.createElement('li');
//       ul.appendChild(li);
//       let newLi=time[e]+':'+this.cookiesNum[e];
//     }
//     let h3El=document.createElement('h3');
//     h3El.textContent=`total cookies${this.totalCoun} our shop sold `;
//   }

};
Dubai.customerPerHour();
Dubai.cookiesAvr();
// Dubai.render();
Dubai.totalCoun;

let Paris = {
  locaName: 'seattle',
  minCus: 23,
  maxCus: 65,
  avargCo: 6.3,
  cookiesNum: [],
  customeEachHour: [],
  totalCoun: 0,
  customerPerHour: function () {
    // let a1=this.minCus;
    // let a2=this.maxCus;
    // this.customerNum=
    for (let j = 0; j < time.length; j++) {
      this.customeEachHour.push(random(this.minCus, this.maxCus));
    }
    console.log(this.customeEachHour);
  },
  cookiesAvr: function () {
    for (let i = 0; i < time.length; i++) {
      let cookPur =Math.floor (this.avargCo * this.customeEachHour[i]);
      //console.log(cookPur);
      this.cookiesNum.push(cookPur);
      this.totalCoun = this.totalCoun + this.cookiesNum[i];
    }
    console.log(this.cookiesNum);
    console.log(this.totalCoun);

  }
//   ,
//   render:function(){
//     let divCook=document.getElementById('cookLis');
//     let artic= document.createElement('article');
//     divCook.appendChild(artic);

//     let h2El=document.createElement('h2');
//     artic.appendChild(h2El);
//     h2El.textContent='seattle';

//     let ulEl=document.createElement('ul');
//     for(let e=0;e<=this.time.length;e++)
//     {let liEl=document.createElement('li');
//       ul.appendChild(li);
//       let newLi=time[e]+':'+this.cookiesNum[e];
//     }
//     let h3El=document.createElement('h3');
//     h3El.textContent=`total cookies${this.totalCoun} our shop sold `;
//   }

};
Paris.customerPerHour();
Paris.cookiesAvr();
// Paris.render();
Paris.totalCoun;


let lima = {
  locaName: 'seattle',
  minCus: 23,
  maxCus: 65,
  avargCo: 6.3,
  cookiesNum: [],
  customeEachHour: [],
  totalCoun: 0,
  customerPerHour: function () {
    // let a1=this.minCus;
    // let a2=this.maxCus;
    // this.customerNum=
    for (let j = 0; j < time.length; j++) {
      this.customeEachHour.push(random(this.minCus, this.maxCus));
    }
    console.log(this.customeEachHour);
  },
  cookiesAvr: function () {
    for (let i = 0; i < time.length; i++) {
      let cookPur =Math.floor (this.avargCo * this.customeEachHour[i]);
      //console.log(cookPur);
      this.cookiesNum.push(cookPur);
      this.totalCoun = this.totalCoun + this.cookiesNum[i];
    }
    console.log(this.cookiesNum);
    console.log(this.totalCoun);

  }
//   ,
//   render:function(){
//     let divCook=document.getElementById('cookLis');
//     let artic= document.createElement('article');
//     divCook.appendChild(artic);

//     let h2El=document.createElement('h2');
//     artic.appendChild(h2El);
//     h2El.textContent='seattle';

//     let ulEl=document.createElement('ul');
//     for(let e=0;e<=this.time.length;e++)
//     {let liEl=document.createElement('li');
//       ul.appendChild(li);
//       let newLi=time[e]+':'+this.cookiesNum[e];
//     }
//     let h3El=document.createElement('h3');
//     h3El.textContent=`total cookies${this.totalCoun} our shop sold `;
//   }

};
lima.customerPerHour();
lima.cookiesAvr();
// lima.render();
lima.totalCoun;
