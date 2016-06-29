var res=true;
function funcValidate(){
  var inputDate=document.getElementById("inputDate").value;
  var inputTime=document.getElementById("inputTime").value;
  if(!(/\d\d\/\d\d\/\d\d\d\d/.test(inputDate))){
    document.getElementById("inputDate").style.border="2px solid red";
  }
  else {
    var arr=inputDate.split("/");
    if(Number(arr[0])>31 || Number(arr[1]>12)){
        document.getElementById("inputDate").style.border="2px solid red";
        res = false;
    }
    else
      document.getElementById("inputDate").style.border="1px solid black";
  }
  if(!(/\d\d\:\d\d\:\d\d/.test(inputTime))){
      document.getElementById("inputTime").style.border="2px solid red";
      res = false;
  }
  else{
    var arr=inputTime.split(":");
    if(Number(arr[0])>23 || Number(arr[1]>59) || Number(arr[2]>59)){
        document.getElementById("inputTime").style.border="2px solid red";
        res = false;
    }
    else
      document.getElementById("inputTime").style.border="1px solid black";
  }
  if(res)
  {
    window.scrollTo(0,768);
    var name = document.forms[0].elements[0].value;
    var spanName = document.getElementById('space2').innerHTML = name;
    var name = document.forms[0].elements[1].value;
    var spanName = document.getElementById('space3').innerHTML = name;
    var name = document.forms[0].elements[2].value;
    var spanName = document.getElementById('space4').innerHTML = name;
    var name = document.forms[0].elements[3].value;
    var spanName = document.getElementById('space5').innerHTML = name;
    var name = document.forms[0].elements[4].value;
    var spanName = document.getElementById('space6').innerHTML = name;
    var name = document.forms[0].elements[5].value;
    var spanName = document.getElementById('space7').innerHTML = name;
    
  }
  
}
function printDiv(divID) {
        //Get the HTML of div
        var divElements = document.getElementById(divID).innerHTML;
        //Get the HTML of whole page
        var oldPage = document.body.innerHTML;

        //Reset the page's HTML with div's HTML only
        document.body.innerHTML = 
          "<html><head><title></title></head><body>" + 
          divElements + "</body>";

        //Print Page
        window.print();

        //Restore orignal HTML
        document.body.innerHTML = oldPage;

      
    }

