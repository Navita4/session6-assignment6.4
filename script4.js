var EmployeeArray=[];
var i;
for(i=1 ; i<=5 ;i++)
    {
        var name = prompt("Enter Your name" +i);
        var name = prompt("Enter Your age" +i);
        var name = prompt("Enter Your salary" +i);
        var name = prompt("Enter Your city" +i);
        var name = prompt("Enter Your state" +i);
        var name = prompt("Enter Your pincode" +i);
        
         }
var Employee = {};
Employee.name = "Navita";
Employee.age = 25;
Employee.salary = 40000;
Employee.city = "Banglore";
Employee.state = "Karnataka";
Employee.pincode = 560066;
EmployeeArray.push(Employee);
for(var worker in EmployeeArray)
    {
        var i = parseInt(worker)+1;
        console.log("Printing all employee Details");
         console.log("name =" +EmployeeArray[worker].name);
        console.log("age =" +EmployeeArray[worker].age);
        console.log("salary =" +EmployeeArray[worker].salary);
        console.log("city =" +EmployeeArray[worker].city);
        console.log("state =" +EmployeeArray[worker].state);
        console.log("pincode =" +EmployeeArray[worker].pincode);
        
        
        
    }