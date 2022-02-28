
let cl;
// manually close offer 
function closeOffer(){
    clearInterval(cl);
}
//close offer 
let date = document.getElementById('date');
cl = setInterval(()=>{
    date.innerHTML=(new Date());
},1000);
setTimeout(()=>{
    clearInterval(cl);
    alert('the offer was gone!')
},60000)

//for print 
function printPage(){
    print();
}
