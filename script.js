


function mysubmit() {

    //Checkbox validation
    var If_checked = document.getElementsByName("food");
    var okay = false;
    var count = 0;

    //iterate over all checkbox to check number of selected boxes
    for (var i = 0, l = If_checked.length; i < l; i++) {
        if (If_checked[i].checked) {

            count++;
        }
    }
    if (count > 1) {    //validate atleast 2 checks
        okay = true;
    }
    if (!okay) {
        //On sumbit if not match the condition throw this alert!!
        alert("Please Select at least two Foods!!");
        return false;
    }

    //Get hold of input elements
    let firstName = document.getElementById("first-name").value;
    let LastName = document.getElementById("last-name").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let Gender = document.querySelector('input[name="gender"]:checked').value;
    let Food = document.querySelectorAll('input[name="food"]:checked');

    //Get the values of cheked boxes only
    var chkValue = [];
    for (let i = 0; i < Food.length; i++) {
        chkValue.push(Food[i].value);
    }

    //get hold of elements
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    const tbody = document.querySelector("tbody");

    //Append the input values to table.
    tbody.innerHTML +=
        `
     <tr>
    <td><p>${firstName}</p> </td> 
    <td><p>${LastName}</p> </td> 
    <td><p>${address}</p> </td>  
    <td><p>${pincode}</p> </td>  
    <td><p>${Gender}</p> </td>
    <td><p>${chkValue}</p> </td> 
    <td><p>${state}</p> </td>
    <td><p>${country}</p> </td> 
     
     </tr>
    
    `
}


//Clear the form fields after clicking on reset button.


function myreset() {
    document.getElementById("form").reset();

}


