## code Experment
  
  * this codes it for experment to solve lab i want to keep it here becouse i need to now where is my falut
  
  ```
  for (let i = 0; i < time.length; i++) {
    const element = array[i];
    
  
 // tr& td add to table
  let trTa=document.createElement('tr');
  tabCo.appendChild(trTa);
///name
  let thEl=document.createElement('th');
  thEl.textContent='lcaztion/time';
  trTa.appendChild(thEl);

  let thEl1=document.createElement('th');
  thEl.textContent='lcaztion/time';
  trTa.appendChild(thEl);
  



   for (let i = 0; i < time.length; i++) {
    let liCo=document.createElement('li');
    // liCo.textContent=time[i]+''+this.cookiesAvr[i]+'cookies';
    liCo.textContent=`${time[i]}:${this.cookiesNum[i]}  cookies`;
    ulCo.appendChild(liCo);
  }
  let totalEl=document.createElement('li');
  totalEl.textContent=this.total+'cookies';
  ulCo.appendChild(totalEl);




  ////last work 


  'use.strict';
let time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// function random(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

let shop=[];

function NewCons(locaation,minCus,maxCus,avargCo){
  this.locaation=locaation;
  this.minCus=minCus;
  this.maxCus=maxCus;
  this.avargCo=avargCo;
  this.cookiesNum=[];
  this.customeEachHour=[];
  this.totalCoun=0;
  shop.push(this);

}

/////calculation number of customer on hour
NewCons.prototype.customerPerHour=function(){
  for (let i = 0; i < time.length; i++) {
    this.customeEachHour.push(Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus));

  }
  // this.customeEachHour.push(random(this.minCus, this.maxCus));
  //  console.log(this.customeEachHour);


};
////claculation CookiesAvarage+total
NewCons.prototype.cookiesAvr= function () {
  for (let i = 0; i < time.length; i++) {
    let cookPur =Math.floor (this.avargCo * this.customeEachHour[i]);
    this.cookiesNum.push(cookPur);
    this.totalCoun = this.totalCoun + this.cookiesNum[i];
  }
};
///declare
let seattle= new NewCons('seattle',23,65,6.3);
seattle.customerPerHour();
seattle.cookiesAvr();

let tokyo= new NewCons('tokyo',3,24,1.2);
tokyo.customerPerHour();
tokyo.cookiesAvr();

let dubi= new NewCons('dubi',11,38,3.7);
dubi.customerPerHour();
dubi.cookiesAvr();

let paris= new NewCons('paris',20,38,2.3);
paris.customerPerHour();
paris.cookiesAvr();

let lima= new NewCons('lima',2,16,4.6);
lima.customerPerHour();
lima.cookiesAvr();

///////////////////table
// table/add to div

let coDiv=document.getElementById('cookLis');
let tabCo=document.createElement('table');
coDiv.appendChild( tabCo);

/////////function
NewCons.prototype.headRender=function(){
  let trEl = document.createElement('tr');
  tabCo.appendChild(trEl);
  let empitySil=document.createElement('th');
  trEl.appendChild(empitySil);
  empitySil.textContent='Location/time';
  for(let a=0;a<time.length;a++){
    let thElement=document.createElement('th');
    trEl.appendChild(thElement);
    thElement.textContent=time[a];
  }let thfinal=document.createElement('th');
  trEl.appendChild(thfinal);
  thfinal.textContent='Daily Location Total';

  ////////renderFun
  let dataRow=document.createElement('tr');
  tabCo.appendChild(dataRow);
  let datcol=document.createElement('td');
  dataRow.appendChild(datcol);

  datcol.textContent=this.locaation;

  for (let i = 0; i < time.length; i++) {
    let tdCont=document.createElement('td');
    dataRow.appendChild(tdCont) ;
    tdCont.textContent=this.cookiesNum[i];


  }
  let tdtotal=document.createElement('td');
  dataRow.appendChild(tdtotal) ;
  tdtotal.textContent=this.totalCoun;


};//
//////////////////table
NewCons.prototype.render=function(){
  let dataRow=document.createElement('tr');
  tabCo.appendChild(dataRow);
  let datcol=document.createElement('td');
  dataRow.appendChild(datcol);

  datcol.textContent=this.locaation;

  for (let i = 0; i < time.length; i++) {
    let tdCont=document.createElement('td');
    dataRow.appendChild(tdCont) ;
    tdCont.textContent=this.cookiesNum[i];


  }
  let tdtotal=document.createElement('td');
  dataRow.appendChild(tdtotal) ;
  tdtotal.textContent=this.totalCoun;

};

seattle.headRender();
seattle.render();

// tokyo.headRender();
tokyo.render();

// dubi.headRender();
dubi.render();

// paris.headRender();
paris.render();

// lima.headRender();
lima.render();
```