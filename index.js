

const input = document.getElementById("inputText");



document.addEventListener("keydown",event =>{

   if(event.keyCode == 13){

      event.preventDefault();
   }

})



function setCookie(value,timeToLive){

   const date = new Date();

    date.setTime(date.getTime()+ timeToLive * 24 * 60 * 60 * 1000);

    let expire = date.toUTCString();

    document.cookie = `text=${value};expires =${expire}`;

}



function submitData(){

   let value = input.value;

   setCookie(value);

   

}

function returnData(){

   const text = 'text';

   console.log(document.cookie);

   const cDecode = decodeURIComponent(document.cookie);

   const cArray = cDecode.split('; ');

   let result = null;


   cArray.forEach(element =>{
      if(element.indexOf(text) == 0){

       result =  element.substring(text.length +1);

      }
   })


   input.value = result;






}

function deleteData(){

  
setCookie(null,null);

}












