


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});
  let incomeObj={};
  let expenseObj={};
  let details = [];
  let id =0;
  let button = document.querySelector('.btn-large');
  
  let description = document.querySelector('#description'); 
  let valuenr = document.querySelector('#value');
  let income = document.getElementById('income-table');
  let expense = document.getElementById('expenses-table');
  let budget = document.querySelector('.budget');
  let incomeAmmount = document.querySelector('.incomeamount');
  let expenseAmmount = document.querySelector('.expenseamount');



  document.querySelector('.btn-large').addEventListener('click',function() {
    let incomeExpense = document.querySelector('#income-expense').value; 
    let userInc = {
      id: id,
      name: description.value,
      number: parseInt(valuenr.value),
      type:parseInt(incomeExpense),
    };
    /* let userExp = {
      id: id,
      name: description.value,
      number: parseInt(valuenr.value),
      
    }; */
    
    /* if(incomeExpense==2){ */
    
      details.push(userInc);
    
    /* } */
    
    console.log(details);
    id++;
    description.value="";
    valuenr.value="";
    displayInc(details);
  });

  


  function displayInc(details) {
    
    income.innerHTML=null;
    expense.innerHTML=null;
    for(i=0;i<details.length;i++) {
      if(details[i].type===2){
      income.innerHTML+=`
  <tr id="${details[i].id}">
    <td> ${details[i].name} </td>
    <td>$${details[i].number}.00 </td>
    <td> <a class="btn-floating orange waves-effect"  onclick="editIncome(${details[i].id})" id="${details[i].id}"><i class="material-icons">edit</i></a>  </td> 
    <td> <a class="btn-floating red waves-effect"  onclick="delIncome(${details[i].id})" id="${details[i].id}"><i class="material-icons">delete</i></a>  </td> 
    
  
  </tr>
      
      
      `;} else if (details[i].type===1) {
        expense.innerHTML+=`
        <tr id="${details[i].id}">
          <td> ${details[i].name} </td>
          <td>$${details[i].number}.00  </td>
          <td> <a class="btn-floating orange waves-effect"  onclick="editIncome(${details[i].id})" id="${details[i].id}"><i class="material-icons">edit</i></a>  </td> 
          <td> <a class="btn-floating red waves-effect"  onclick="delIncome(${details[i].id})" id="${details[i].id}"><i class="material-icons">delete</i></a>  </td> 
          
        
        </tr>
            
            
            `;
      }
  }
  calcIncome();
  
  }
/*  function displayExp(details) {
    if(details[i].type==="expense") {
    expense.innerHTML=null;
    for(i=0;i<details.length;i++) {
      
      expense.innerHTML+=`
  <tr id="${details[i].id}">
    <td> ${details[i].name} </td>
    <td>${details[i].number} </td>
    <td> <a class="btn-floating red"  onclick="delIncome(${details[i].id})" id="${details[i].id}"><i class="material-icons">delete</i></a>  </td> 
  
  </tr>
      
      
      `;
    }
    }calcExpense();
  }
 */

  function calcIncome() {
    let totalInc = 0;
    let totalInc2= 0;
    for(let i=0;i<details.length;i++) {
      if(details[i].type===2) 
      totalInc = details[i].number+totalInc;
      if(details[i].type===1)
      totalInc2=details[i].number+totalInc2;
  
  }
    
    incomeAmmount.innerText= "INCOME: $" + totalInc +".00" ;
    expenseAmmount.innerText= "EXPENSE: $" + totalInc2 +".00" ;
    budget.innerText=`$${totalInc-totalInc2}.00`

  }
  


  function delIncome(id) {
    let index = details.findIndex((item) => item.id === id);
    details.splice(index, 1);
    displayInc(details);
  }
  const editName= document.getElementById("editName");
  const editNumber = document.getElementById("editNumber");
  const editing = document.querySelector(".editing");
  function editIncome(id) {
    editing.innerHTML =`
    <div class="row center-align ">
      <div class="col s1 m4 l4"><p class="right-align ">Edit: </p></div>
      <div class="col s12 m2 l2 input field ">
        <textarea id="editName" class="materialize-textarea center-align  validate"></textarea>
          <label for="editName">Description</label>
        

      </div>
      <div class="col s12 m2 l2 input field ">
        <textarea  id="editValue" class="materialize-textarea center  validate"></textarea>
          <label for="editValue">Value</label>
          <div class="col s1 m1 l1"></div>
          <div class="col s12 m1 l1 right"><a class="btn-floating btn-large waves-effect waves-light green save" id="save" style="margin-left: 3rem; margin-top: -3rem; " ><i class="material-icons">save</i></a></div>

      </div>
    `;
    
    
    let save = document.querySelector(".save");
    
    save.addEventListener('click', function() {
      let editExpName = document.querySelector('#editName').value;
      let editExpNumber = parseInt(document.querySelector('#editValue').value);
      
      let edited = details.findIndex((item) => item.id === id);
      details[edited].name = editExpName;
      details[edited].number= editExpNumber;


      console.log(editExpNumber, editExpName)
      calcIncome();
      displayInc(details);
      editing.innerHTML=null;
    })
    
    
    
  }





  

  document.addEventListener("DOMContentLoaded", function(){
    var today = new Date();
    var currentMonth; 
    var currentDay;
    /* var date = currentMonth+' '+today.getFullYear(); */
    
      if((today.getMonth()+1)===1)
        currentMonth='January';
        
      if((today.getMonth()+1)===2)
        currentMonth='February';
        
      if((today.getMonth()+1)===3)
        currentMonth='March';
      
      if((today.getMonth()+1)===4)
        currentMonth='April';
      
      if((today.getMonth()+1)===5)
        currentMonth='May';
      
      if((today.getMonth()+1)===6)
        currentMonth='June';
      
      if((today.getMonth()+1)===7)
        currentMonth='July';
      
      if((today.getMonth()+1)===8)
        currentMonth='August';
      
      if((today.getMonth()+1)===9)
        currentMonth='September';
      
      if((today.getMonth()+1)===10)
        currentMonth='October';
      
      if((today.getMonth()+1)===11)
        currentMonth='November';
      
      if((today.getMonth()+1)===12)
        currentMonth='December';
      
        
    
    console.log(today.getMonth()+1)
    var date = currentMonth+' '+today.getFullYear();
    
    document.querySelector(".realtimedate").innerHTML ="Available Budget in " +date;  //....
  });

