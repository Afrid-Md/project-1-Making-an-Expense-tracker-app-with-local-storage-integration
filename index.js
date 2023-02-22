function addtolocalstorage(event){
    event.preventDefault();
    const amt = event.target.amount.value;
    const des = event.target.description.value;
    const cat = event.target.category.value;

    const obj={
        amt,
        des,
        cat
    }
    localStorage.setItem(obj.amt, JSON.stringify(obj));
    showExpensesOnScreen(obj);
}

function showExpensesOnScreen(obj){
    const parentElem = document.getElementById("listOfExpenses");
    const childElem = document.createElement("li");
    childElem.id="newli";

    childElem.textContent = obj.amt +"-"+obj.des+"-"+obj.cat;


    
    const deleteButton = document.createElement("input");
    deleteButton.type="button";
    deleteButton.value="Delete Expense";
    deleteButton.onclick=()=>{
        localStorage.removeItem(obj.amt);
        parentElem.removeChild(childElem);
    }


    const EditButton = document.createElement("input");
    EditButton.type="button";
    EditButton.value="Edit Expense";
    EditButton.onclick=()=>{
        localStorage.removeItem(obj.amt);
        parentElem.removeChild(childElem);

        document.getElementsByClassName("amount").value=obj.amt;
        document.getElementsByClassName("types1").value=obj.des;
        document.getElementsByClassName("types2").value=obj.cat;
    }

    childElem.appendChild(deleteButton);
    childElem.appendChild(EditButton);
    parentElem.appendChild(childElem);
}



    
    
    

    
    