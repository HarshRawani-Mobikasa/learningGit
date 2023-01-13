






function validateForm() {
  //var firstname=document.contactForm.address[first_name].value;  
//var lastname=document.contactForm.address[first_name].value;  
let firstname = document.forms["contactForm"]["address[first_name]"].value;
let lastname = document.forms["contactForm"]["address[last_name]"].value;
let company = document.forms["contactForm"]["address[company]"].value;
let address1 = document.forms["contactForm"]["address[address1]"].value;
let city = document.forms["contactForm"]["address[city]"].value;

//if(document.contactForm.address[country].selectedIndex==0)
//{ alert("Please select your member type");
//document.contactForm.address[country].focus();
//return false;
//}

if (firstname==null || firstname ==""){ 

    var x = document.getElementsByClassName('err');
    x[0].innerHTML = "First name can't be blank";
    var element = document.getElementById("AddressFirstNameNew");
   element.classList.add("borderRed");
 
  return false;
}else if(lastname == null || lastname == ""){  

  var x = document.getElementsByClassName('err');
    x[1].innerHTML = "Last name can't be blank";
    var element = document.getElementById("AddressLastNameNew");
   element.classList.add("borderRed");

  return false;  
  }else if(company == null || company == ""){
    var x = document.getElementsByClassName('err');
    x[2].innerHTML = "Company can't be blank";
    var element = document.getElementById("AddressCompanyNew");
   element.classList.add("borderRed");

   return false; 
  }else if(address1 == null || address1 == ""){
    var x = document.getElementsByClassName('err');
    x[3].innerHTML = "Address can't be blank";
    var element = document.getElementById("AddressAddress1New");
   element.classList.add("borderRed");
   
   return false;

}else if(city == null || city == ""){
  var x = document.getElementsByClassName('err');
  x[4].innerHTML = "City can't be blank";
  var element = document.getElementById("AddressCityNew");
 element.classList.add("borderRed");

return false;
}

}

function validateafterForm() {
  var element = document.querySelectorAll("#AddressFirstNameNew, #AddressLastNameNew, #AddressCompanyNew, #AddressAddress1New, #AddressCityNew ");
  element.forEach((item) => item.classList.remove('borderRed'))
 // element.classList.remove("borderRed");
  var x = document.getElementsByClassName('err');
  x[0].innerHTML = "";
  x[1].innerHTML = "";
  x[2].innerHTML = "";
  x[3].innerHTML = "";
  x[4].innerHTML = "";
}



if(document.getElementById('AddressCountryNew') != null){
    document.getElementById('AddressCountryNew').addEventListener('change', function(e){
    var provinces = this.options[this.selectedIndex].getAttribute('data-provinces');
    var provinceSelector = document.getElementById('AddressProvinceNew');
    var provinceArray = JSON.parse(provinces)
  
    if( provinceArray.length < 1){
      provinceSelector.setAttribute('disabled', 'disabled');
    } else {
      provinceSelector.removeAttribute('disabled');
    }
  
    provinceSelector.innerHTML = '';
    var options = '';
    for(var i= 0; i < provinceArray.length; i++){
      options += '<option value="' + provinceArray[i][0] + '">'+ provinceArray[i][0] +'</option>'
    }
  
  provinceSelector.innerHTML = options;
    });
  
  }
  