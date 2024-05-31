function handleFormSubmit(event){
    event.preventDefault();
  
    let userDetails = {
    username : event.target.username.value,
    email : event.target.email.value,
    phone : event.target.phone.value,
    }
    let userDetailsSerialised = JSON.stringify(userDetails);
    localStorage.setItem(userDetails.email, userDetailsSerialised);
   
      showDetails(userDetails);
  }
  
  function showDetails(userDetails){
    const userItem = document.createElement("li"); 
    userItem.appendChild(document.createTextNode(`${userDetails.username} - ${userDetails.email} - 
  ${userDetails.phone}`) 
    ); 
    const deleteBtn = document.createElement("button"); 
    deleteBtn.appendChild(document.createTextNode("Delete")); 
    userItem.appendChild(deleteBtn); 
    const userList = document.querySelector("ul"); 
    userList.appendChild(userItem); 
   
    deleteBtn.addEventListener("click", function (event) { 
      userList.removeChild(event.target.parentElement); 
      localStorage.removeItem(userDetails.email); 
    });
  
  
    const editButton = document.createElement("button");
    editButton.appendChild(document.createTextNode("Edit")); 
    userItem.appendChild(editButton); 
     
    userList.appendChild(userItem); 
  
    editButton.addEventListener("click", function(event){
      localStorage.removeItem(userDetails.email);
      userList.removeChild(event.target.parentElement);
      document.getElementById('username').value = userDetails.username
      document.getElementById('email').value = userDetails.email
      document.getElementById('phone').value = userDetails.phone
    })
   
  }
