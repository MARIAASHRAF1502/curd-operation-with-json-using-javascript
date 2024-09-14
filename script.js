var userDetails = [
    {
        name : "mari",
        age : "22",
        number : "9080310775"
    },
    {
        name : "ashraf",
        age : "21",
        number : "7880310775"
    }

];



function handleSubmit(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var number = document.getElementById("number").value;

    if(name != "" && age != "" && number != ""){
        userDetails.push({
            name : name,
            age : age,
            number : number
        });
    }else{
        alert("User input required!");
    }

    handleDisplay();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("number").value = "";
}





function handleDisplay() {
    if(userDetails.length == 0){
        alert("User List is Empty!");
    }
    
    const tableBody = document.querySelector("#userList tbody");

            tableBody.innerHTML = "";

            userDetails.forEach((user,index) => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${index+1}</td>
                    <td>${user.name}</td>
                    <td>${user.age}</td>
                    <td>${user.number}</td>
                    <td><button onclick="handleUpdate(${index})" id="updateBtn">Update</button></td>
                    <td><button onclick="handleDelete(${index})" id="deleteBtn">Delete</button></td>
                `;
                tableBody.appendChild(row);
            });



}




function handleDelete(index){
    userDetails.splice(index,1);
    handleDisplay();
}

function handleUpdate(index){
    const updateChoice = prompt("Enter the choice number to update 1. Name 2. Age 3. Contact Number");

    if(updateChoice == 1){
        const updateName = prompt("Enter the Name", userDetails[index].name);
        userDetails[index].name = updateName;

    }else if(updateChoice == 2){
        const updateAge = prompt("Enter the Age", userDetails[index].age);
        userDetails[index].age = updateAge;

    }else if( updateChoice == 3){
        const updateNumber = prompt("Enter the Contact Number", userDetails[index].number);
        userDetails[index].number = updateNumber;

    }else{
        alert("Invalid choice number, Please enter the correct choice number!");
    }


    handleDisplay();
}

