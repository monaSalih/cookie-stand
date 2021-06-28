
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
    //////for loop
    for (let i = 0; i < time.length; i++) {
      let liCo=document.createElement('li');
      liCo.textContent=`${time[i]}:${this.cookiesNum[i]}  cookies`;
      ulCo.appendChild(liCo);
    }
    let totalEl=document.createElement('li');
    totalEl.textContent='The total Number of cookies:'+this.totalCoun;
    ulCo.appendChild(totalEl);

  }


};

Seattle.customerPerHour();
Seattle.cookiesAvr();
Seattle.totalCoun;
Seattle.render();



let Tokyo = {
  locaName: 'Tokyo',
  minCus: 3,
  maxCus: 24,
  avargCo: 1.2,
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
    //////for loop
    for (let i = 0; i < time.length; i++) {
      let liCo=document.createElement('li');
      liCo.textContent=`${time[i]}:${this.cookiesNum[i]}  cookies`;
      ulCo.appendChild(liCo);
    }
    let totalEl=document.createElement('li');
    totalEl.textContent='The total Number of cookies:'+this.totalCoun;
    ulCo.appendChild(totalEl);

  }
};
Tokyo.customerPerHour();
Tokyo.cookiesAvr();
Tokyo.render();
Tokyo.totalCoun;


let Dubai = {
  locaName: 'Dubai',
  minCus: 11,
  maxCus: 38,
  avargCo: 2.3,
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
      //console.log(cookPur);
      this.cookiesNum.push(cookPur);
      this.totalCoun = this.totalCoun + this.cookiesNum[i];
    }
    console.log(this.cookiesNum);
    console.log(this.totalCoun);

  }
  ,
  render:function(){
    let coDiv=document.getElementById('cookLis');
    let h2El=document.createElement('h2');
    coDiv.appendChild(h2El);
    h2El.textContent=this.locaName;
    let ulCo=document.createElement('ul');
    coDiv.appendChild( ulCo);

    let ulEl=document.createElement('ul');
    coDiv.appendChild(ulEl);
    //////for loop
    for (let i = 0; i < time.length; i++) {
      let liCo=document.createElement('li');
      liCo.textContent=`${time[i]}:${this.cookiesNum[i]}  cookies`;
      ulCo.appendChild(liCo);
    }
    let totalEl=document.createElement('li');
    totalEl.textContent='The total Number of cookies:'+this.totalCoun;
    ulCo.appendChild(totalEl);

  }

};
Dubai.customerPerHour();
Dubai.cookiesAvr();
Dubai.totalCoun;
Dubai.render();

let Paris = {
  locaName: 'Paris',
  minCus: 20,
  maxCus: 38,
  avargCo: 2.3,
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
      //console.log(cookPur);
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
    //////for loop
    for (let i = 0; i < time.length; i++) {
      let liCo=document.createElement('li');
      liCo.textContent=`${time[i]}:${this.cookiesNum[i]}  cookies`;
      ulCo.appendChild(liCo);
    }
    let totalEl=document.createElement('li');
    totalEl.textContent='The total Number of cookies:'+this.totalCoun;
    ulCo.appendChild(totalEl);

  }


};
Paris.customerPerHour();
Paris.cookiesAvr();
Paris.render();
Paris.totalCoun;


let lima = {
  locaName: 'Lima',
  minCus: 2,
  maxCus: 16,
  avargCo: 4.6,
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
      //console.log(cookPur);
      this.cookiesNum.push(cookPur);
      this.totalCoun = this.totalCoun + this.cookiesNum[i];
    }
    console.log(this.cookiesNum);
    console.log(this.totalCoun);

  }
  ,
  render:function(){
    let coDiv=document.getElementById('cookLis');
    let h2El=document.createElement('h2');
    coDiv.appendChild(h2El);
    h2El.textContent=this.locaName;
    let ulCo=document.createElement('ul');
    coDiv.appendChild( ulCo);

    let ulEl=document.createElement('ul');
    coDiv.appendChild(ulEl);
    //////for loop
    for (let i = 0; i < time.length; i++) {
      let liCo=document.createElement('li');
      liCo.textContent=`${time[i]}:${this.cookiesNum[i]}  cookies`;
      ulCo.appendChild(liCo);
    }
    let totalEl=document.createElement('li');
    totalEl.textContent='The total Number of cookies:'+this.totalCoun;
    ulCo.appendChild(totalEl);

  }

};
lima.customerPerHour();
lima.cookiesAvr();
lima.render();
lima.totalCoun;





