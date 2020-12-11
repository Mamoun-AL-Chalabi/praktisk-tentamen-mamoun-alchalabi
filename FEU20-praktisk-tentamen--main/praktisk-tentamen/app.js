/* Skriv din kod här */

// varible for api 
const URL ='https://restcountries.eu/rest/v2/all';

// getting the informations from the url 
fetch(URL).then(
    function(response){
        return response.json();
    }
).then(
    function(data){

    
        
        console.log(data);
        // arrey for the obgict we get 
        let Count=[];
        
        // for loop through the arrey
        for(let i=0; i<3; i++){

            let rand = Math.floor(Math.random()* data.length);
            Count.push( new Country(data[rand].name, data[rand].timezones[0], data[rand].flag))
        }
        

        //for loop for methode

        for (h of Count){
            h.display();
        }


        console.log(Count)
    }
)

//constrctuer

function Country(_name, _timeZone, _urlFlag){
    this.name =_name;
    this.timeZone =_timeZone;
    this.urlFlag =_urlFlag;

}


// methode
Country.prototype.display=function(){
   let body = document.querySelector('body');
   let name1 = document.createElement('h1');
   let timeZone1= document.createElement('h2');
   let urlFlag1 = document.createElement ('img');
   let section = document.createElement ('section');
   let main = document.createElement('main');
   let time = new Date();
   let time1 = time.getUTCHours(); 
   let time11 =time.getMinutes();
   let time3 = this.timeZone.substr(5,1);
   let time4 = parseInt(time3);
    console.log(time4)
    console.log(time3)
    let time5=time1+time4
    console.log(time5)
    let time6 =`${time5} , ${time11}`;
    this.timeZone=time6;
   name1.innerHTML =this.name;
   timeZone1.innerHTML =this.timeZone;
   urlFlag1.src=this.urlFlag;
   body.appendChild(main);
   main.appendChild(section);
   section.appendChild(name1);
   section.appendChild(timeZone1);
   section.appendChild(urlFlag1);
    
}



