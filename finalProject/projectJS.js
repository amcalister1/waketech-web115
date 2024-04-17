//Display Banner
document.getElementById('name').textContent = "Name: Ashley McAlister";
document.getElementById('course').textContent = "Course: WEB115";
document.getElementById('section').textContent = "Section: 0001";

//Arrays for meals and days of week
let meals = ['Breakfast', 'Morning Snack', 'Lunch', 'Afternoon Snack', 'Dinner'];
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//Create a variable to access the meal div
let mealDiv = document.getElementById('mealDiv');
let mealForm = document.getElementById('mealForm');
let mealButtons = document.getElementById('mealButtons');
let inputForm = document.getElementById('inputForm');

//Hides the meal form and buttons until the email address is validated
if (mealForm) {
    mealForm.style.display = "none";
}
if (mealButtons) {
    mealButtons.style.display = "none";
}

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
                mealForm.style.display = "block";
                mealButtons.style.display = "block";
            // Wanted to hide the inputButtons once email validation is complete.  I feel like this would help prevent confusion for a user.
            inputForm.style.display = "none";
            mealChoice();
            }
		});

//Clear/Reset option for the goals, name and email form
let clrBtn1 = document.getElementById("clearButton1");
clrBtn1.addEventListener("click", function() {
    document.getElementById("inputForm").reset();
});

//Function to create meal choice inputs
function mealChoice(){
    let goal = document.getElementById('goal').value;
    let headStatement = document.createElement('h2');
        headStatement.textContent = 'Thank you for sharing you goal of "' + goal + '" with us.  Please fill out your meal planner below.\n';
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
    myText += ("<h4>" + days[0] + "</h4>" + meals[0] + ": " + meal1 + "<br>" + meals[1] + ": " + meal2 + "<br>" + meals[2] + ": " + meal3 + "<br>" + meals[3] + ": " + meal4 + "<br>" + meals[4] + ": " + meal5);
    myText += ("<h4>" + days[1] + "</h4>" + meals[0] + ": " + meal6 + "<br>" + meals[1] + ": " + meal7 + "<br>" + meals[2] + ": " + meal8 + "<br>" + meals[3] + ": " + meal9 + "<br>" + meals[4] + ": " + meal10);
    myText += ("<h4>" + days[2] + "</h4>" + meals[0] + ": " + meal11 + "<br>" + meals[1] + ": " + meal12 + "<br>" + meals[2] + ": " + meal13 + "<br>" + meals[3] + ": " + meal14 + "<br>" + meals[4] + ": " + meal15);
    myText += ("<h4>" + days[3] + "</h4>" + meals[0] + ": " + meal16 + "<br>" + meals[1] + ": " + meal17 + "<br>" + meals[2] + ": " + meal18 + "<br>" + meals[3] + ": " + meal19 + "<br>" + meals[4] + ": " + meal20);
    myText += ("<h4>" + days[4] + "</h4>" + meals[0] + ": " + meal21 + "<br>" + meals[1] + ": " + meal22 + "<br>" + meals[2] + ": " + meal23 + "<br>" + meals[3] + ": " + meal24 + "<br>" + meals[4] + ": " + meal25);
    myText += ("<h4>" + days[5] + "</h4>" + meals[0] + ": " + meal26 + "<br>" + meals[1] + ": " + meal27 + "<br>" + meals[2] + ": " + meal28 + "<br>" + meals[3] + ": " + meal29 + "<br>" + meals[4] + ": " + meal30);
    myText += ("<h4>" + days[6] + "</h4>" + meals[0] + ": " + meal31 + "<br>" + meals[1] + ": " + meal32 + "<br>" + meals[2] + ": " + meal33 + "<br>" + meals[3] + ": " + meal34 + "<br>" + meals[4] + ": " + meal35 + "<br>");
    // Used this page to create a "Print this page" button   https://wcmshelp.ucsc.edu/advanced/print-button.html 
    myText += ("<div><br><button onClick='window.print()'>Print this page</button></div><br>");
    // Below links showed me how to create a link to download the page
    //https://www.w3schools.com/howto/howto_js_get_url.asp
    //https://blog.logrocket.com/programmatically-downloading-files-browser/
    myText += ("<a href=" + window.location.href + " title='Download Meal Plan' download='mealplan.pdf'>Download Meal Plan</a>");
    myText += ("</body>\n</html>");
    flyWindow = window.open('about:blank','myPop','width=800,height=800,left=200,top=200');
    flyWindow.document.write(myText);
};