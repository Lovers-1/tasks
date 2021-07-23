//function 

function enterValues(){
//variable declaretion 
var age;
var yourName;
var gender;
age=prompt("Enter your age ");
yourName =prompt("Enter your name ");
gender = prompt("Enter gender (Famale or Male)");
//if-statements to determine above or less 18 

if(age > 18 )
{
    console.log("Hi " + yourName +" " + gender[0]+ " "+  ", your above 18");
}
else 
{
    console.log("Hi " + yourName +" " + gender[0]+ " "+  ", your above 18");
}
}



//program 2 

var storeValues=[];

//using for loop to enter/ prompt user to enter values 

for(let i = 0 ;i< 4;i++)
{
   //using switch satement 
    switch(i){
    case 0:
        {
            storeValues.push(prompt("Enter  name"));
         break;
        }
    
    case 1:{
    
        storeValues.push(prompt("Enter  surname"));
        break;
    }
         
    case 2:{
        storeValues.push(prompt("Enter  gender"));
            break;
    }
     case 3:{
        storeValues.push(prompt("Enter  age"));
                break;
         }  
  }

}


console.log("Name | Surname  | Gender | Age ")

//out put array 
for(let j = 0;j < 4 ; j++)
{
    console.log(storeValues[j]);
}
//
storeValues.forEach((items) => {
    console.log(items);
});

//pragram 3 

//narrow function 
let total = function(num1 , num2 , num3)
{
    return  num1 + num2 + num3;
}
//out put 
console.log(total(5,8,10));
