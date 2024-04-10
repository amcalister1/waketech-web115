//Display Banner
document.getElementById('name').textContent = "Name: Ashley McAlister";
document.getElementById('course').textContent = "Course: WEB115";
document.getElementById('section').textContent = "Section: 0001";

//Arrays for meals and days of week
let meals = ['Breakfast', 'Morning Snack', 'Lunch', 'Afternoon Snack', 'Dinner'];
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//Hides the meal form and buttons until the email address is validated
$(document).ready(function(){
    $('#mealForm').hide();
  });
$(document).ready(function(){
  $('#mealButtons').hide();
  });

//Validates the email address and unhides the meal form
let valBtn = document.getElementById("validButton");
        valBtn.addEventListener("click", function() {
            let email1 = document.getElementById('email').value;
            //Got this regex pattern from Google. Looked at so many that I do not know which one right now.  It was a stright Google search though...NOT ChatGPT!
            let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!emailRegex.test(email1)) {
                window.alert("Please enter a valid email address!");
            }
            else {
                $(document).ready(function(){
                    $('#mealForm').show();
                  ;
                });
                $(document).ready(function(){
                    $('#mealButtons').show();
                  ;
                });
            // Wanted to hide the inputButtons once email validation is complete.  I feel like this would help prevent confusion for a user.
            $(document).ready(function(){
                $('#inputButtons').hide();
                });
            mealChoice();
            }
		});

//Clear/Reset option for the goals, name and email form
let clrBtn1 = document.getElementById("clearButton1");
clrBtn1.addEventListener("click", function() {
    document.getElementById("inputForm").reset();
});

//Create a variable to access the meal div
let mealDiv = document.getElementById('mealDiv');
let mealForm = document.getElementById('mealForm');

//Function to create meal choice inputs
function mealChoice(){
    let goal = document.getElementById('goal').value;
    let headStatement = document.createElement('h2');
        headStatement.textContent = 'Thank you for sharing you goal of "' + goal + '" with us.  Please filled out your meal planner below.\n';
        mealForm.appendChild(headStatement);
    for (let i = 0; i < days.length; i++) {
        let day = days[i];
        let dayHeading = document.createElement('h4');
        dayHeading.textContent = day + " Meal Choices\n";
        mealForm.appendChild(dayHeading);
        //Nested loops do not come easily to me.  I looked at ALOT of examples online.  I do not have one single link to share as a reference.
        // I can, however, explain exactly what this group of code is doing.
        for (let j = 0; j < meals.length; j++) {
            let meal = meals[j]
            let mealInput = document.createElement('input');
            mealInput.setAttribute('type', 'text');
            mealInput.setAttribute('placeholder', day + " " + meal);
            mealForm.appendChild(mealInput);
            //This was weird.  I had to move the setAttributes(id) code under the appendChild code.  Otherwise it stopped the loop.  Not a big deal, just weird.
            mealInput.setAttribute('id', day + '_' + meal.replace(' ','_'))
            let newLine = document.createElement('p');
            newLine.textContent = "\n";
            mealForm.appendChild(newLine);
        }
    }
}

// Clear/Reset option for the meal form
let clrBtn2 = document.getElementById("clearButton2");
clrBtn2.addEventListener("click", function() {
    document.getElementById("mealForm").reset();
});

//Used 'inputs' variable to be able to iterate over all of the inputs and dynamically create variables.  More info below on that.
//This was the first time I used getElementsByTagName.  I didn't really understand it before but it worked well.
let inputs = mealForm.getElementsByTagName('input')

//Creates html on the fly window for results of input and meal forms.
// Used the MealPlanPop you shared with us to get this started.  I am glad I had it.  It was a big help.
document.getElementById("submitButton").addEventListener('click',flyWindow)
function flyWindow() {
    let memberName = document.getElementById('mname').value;
    let goal = document.getElementById('goal').value;
    // Googled to figure out how to name a variable dynamically, there were a few methods, in the end the below link felt like the best choice
    // https://www.tutorialspoint.com/How-do-I-create-dynamic-variable-names-inside-a-JavaScript-loop#:~:text=%3E-,Use%20the%20eval()%20Method,to%20create%20the%20dynamic%20variable.
    for (let i = 0; i < inputs.length; i++) {
        window["meal" + (i + 1)] = inputs[i].value;
      };
    myText = ("<html>\n<head>\n<title>Welcome to your Meal Plan!</title>\n</head>\n<body>\n");
    myText += ("<h2>Hello " + memberName + "!  This meal plan was created exactly for you!  Perfectly Portioned Fitness hopes it helps you meet your " + goal + " goal</h2>\n");
    myText += ("<h4>Monday</h4>Breakfast: " + meal1 + "<br>Morning Snack: " + meal2 + "<br>Lunch: " + meal3 + "<br>Afternoon Snack: " + meal4 + "<br>Dinner: " + meal5);
    myText += ("<h4>Tuesday</h4>Breakfast: " + meal6 + "<br>Morning Snack: " + meal7 + "<br>Lunch: " + meal8 + "<br>Afternoon Snack: " + meal9 + "<br>Dinner: " + meal10);
    myText += ("<h4>Wednesday</h4>Breakfast: " + meal11 + "<br>Morning Snack: " + meal12 + "<br>Lunch: " + meal13 + "<br>Afternoon Snack: " + meal14 + "<br>Dinner: " + meal15);
    myText += ("<h4>Thursday</h4>Breakfast: " + meal16 + "<br>Morning Snack: " + meal17 + "<br>Lunch: " + meal18 + "<br>Afternoon Snack: " + meal19 + "<br>Dinner: " + meal20);
    myText += ("<h4>Friday</h4>Breakfast: " + meal21 + "<br>Morning Snack: " + meal22 + "<br>Lunch: " + meal23 + "<br>Afternoon Snack: " + meal24 + "<br>Dinner: " + meal25);
    myText += ("<h4>Saturday</h4>Breakfast: " + meal26 + "<br>Morning Snack: " + meal27 + "<br>Lunch: " + meal28 + "<br>Afternoon Snack: " + meal29 + "<br>Dinner: " + meal30);
    myText += ("<h4>Sunday</h4>Breakfast: " + meal31 + "<br>Morning Snack: " + meal32 + "<br>Lunch: " + meal33 + "<br>Afternoon Snack: " + meal34 + "<br>Dinner: " + meal35 + "<br>");
    // Used this page to create a "Print this page" button   https://wcmshelp.ucsc.edu/advanced/print-button.html 
    myText += ("<div><br><button onClick='window.print()'>Print this page</button></div>")
    myText += ("</body>\n</html>");
    flyWindow = window.open('about:blank','myPop','width=800,height=800,left=200,top=200');
    flyWindow.document.write(myText);
};