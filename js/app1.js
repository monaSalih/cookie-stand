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
let totalRow=1;
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
    totalRow+=totalRow+1;

  }
  let tdtotal=document.createElement('td');
  dataRow.appendChild(tdtotal) ;
  tdtotal.textContent=this.totalCoun;



};//////////creatFooter\\
let tableFoot;
function footerRow(){
  tableFoot=document.createElement('tfoot');
  let tdFo=document.createElement('td');
  tdFo.textContent='total';
  tableFoot.appendChild(tdFo);
  tabCo.appendChild(tableFoot);


  let lastTotal=0;

  console.log(shop);

  for(let i=0; i<time.length;i++){
    let tdCountTotal=document.createElement('td');
    let sum=0;
    for(let r=0;r<shop.length;r++){
      // console.log(shop[r]);
      sum=sum+shop[r].cookiesNum[i];
      console.log('iord',shop[r].cookiesNum[i]);
      lastTotal+=sum;
      //console.log(this.cookiesNum);
      // lastTotal=this.totalCoun+sum;
    }
    console.log(sum,'sumation');
    tdCountTotal.textContent=sum;
    tableFoot.appendChild(tdCountTotal);

  }
  // let newSum=0;
  // for (let j = 0; j < shop.length; j++) {

  //   newSum=newSum+shop[j].totalCoun;
  // }
  let totalCeil=document.createElement('td');
  totalCeil.textContent=lastTotal;
  tableFoot.appendChild(totalCeil);
  // tdCountTotal.textContent=newSum;
  // let tdCountTotalceil=document.createElement('td');
  // tableFoot.appendChild(tdCountTotalceil);
  // tdCountTotalceil.textContent=newSum;


}
let formBra=document.getElementById('branch');
console.log(formBra);
formBra.addEventListener('submit',addStore);

function addStore(event){

  event.preventDefault();
  // console.log('StorNam');
  let StorNam=event.target.sInfo.value;
  let minNum=event.target.minStore.value;
  let maxNum=event.target.maxStore.value;
  let cookNum=event.target.cocStore.value;


  let branchStore=new NewCons(StorNam,minNum,maxNum,cookNum);
  branchStore.customerPerHour();
  branchStore.cookiesAvr();
  branchStore.render();


  tableFoot.innerHTML='';
  footerRow();


  // let documentStories = formBra.activeDocument.stories.everyItem();

  // let allTables = documentStories.tables.everyItem().getElements();

  // for(let t=0; t<allTables.length; t++){

  //   let lastRow = allTables.rows[-1];

  // }

  // footerRow();



}

seattle.headRender();
// seattle.render();

// tokyo.headRender();
tokyo.render();

// dubi.headRender();
dubi.render();

// paris.headRender();
paris.render();

// lima.headRender();
lima.render();


////////////////////////footer
footerRow();
// FooterCalc();
// addStore()
// footerRow();


////////formSide
// let storForm=document.getElementById('branch');
// storForm.addEventListener('submit',addStore);













// function FooterCalc(){
//   let lastRo=document.createElement('tfoot');
//   let tdFoot=document.createElement('td');
//   tdFoot.textContent='Totals';
//   lastRo.appendChild(tdFoot);
//   tabCo.appendChild(tdFoot);
//   let dailyTotal=0;
//   for (let u = 0; u < time.length; u++) {
//     let tdFooter=document.createElement('td');
//     let sum=0;
//     for(let s=0; s<shop.length;s++)
//     {sum=sum+shop[s].customeEachHour[u];
//     }
//     dailyTotal=dailyTotal+sum;
//     tdFooter.textContent=sum;
//     lastRo.appendChild(tdFooter);
//   }
//   let ceilTotal=document.createElement('td');
//   ceilTotal.textContent=dailyTotal;




// }
