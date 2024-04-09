//Display Banner
document.getElementById('name').textContent = "Name: Ashley McAlister";
document.getElementById('course').textContent = "Course: WEB115";
document.getElementById('section').textContent = "Section: 0001";

//Arrays for meals and days of week
let meals = ['Breakfast', 'Morning Snack', 'Lunch', 'Afternoon Snack', 'Dinner'];
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//Hides the meal form until the email address is validated
$(document).ready(function(){
      $('#mealForm').hide();
    });

//Create a variable to access the meal div
let mealDiv = document.getElementById('mealDiv');

//Function to create meal choice inputs
function mealChoice(){
    for (let i = 0; i < days.length; i++) {
        let day = days[i];
        let dayHeading = document.createElement('h4');
        dayHeading.textContent = day + " Meal Choices\n";
        mealDiv.appendChild(dayHeading);
        for (let j = 0; j < meals.length; j++) {
            let meal = meals[j]
            let mealInput = document.createElement('input');
            mealInput.setAttribute('type', 'text');
            mealInput.setAttribute('placeholder', day + " " + meal);
            mealDiv.appendChild(mealInput);
            mealInput.setAttribute('id', day + '_' + meal.replace(' ','_'))
            let newLine = document.createElement('p');
            newLine.textContent = "\n";
            mealDiv.appendChild(newLine);
        }
    }
}

//Validates the email address
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
            mealChoice();
            }
		});

//Clear/Reset option for the goals, name and email form
let clrBtn1 = document.getElementById("clearButton1");
clrBtn1.addEventListener("click", function() {
    document.getElementById("inputForm").reset();
});

// Clear/Reset option for the meal form
let clrBtn2 = document.getElementById("clearButton2");
clrBtn2.addEventListener("click", function() {
    document.getElementById("mealForm").reset();
});

//Creates html on the fly window for results of input and meal forms.
document.getElementById("submitButton").addEventListener('click',flyWindow)
function flyWindow() {
    let memberName = document.getElementById('mname').value;
    let email = document.getElementById('email').value;
    let goal = document.getElementById('goal').value;
    myText = ("<html>\n<head>\n<title>Welcome to your meal plan!</title>\n</head>\n<body>\n");
    myText += ("Hello " + memberName + "!  This meal plan was created exactly for you!");
    myText += (" "+ goal + " \n");
    // Print function works in Edge, but not Chrome.  Used this page to create a "Print this page" button   https://wcmshelp.ucsc.edu/advanced/print-button.html 
    myText += ("<div><button onClick='window.print()'>Print this page</button></div>")
    // used this page to create a download link.  https://stackoverflow.com/questions/2793751/how-can-i-create-download-link-in-html
    myText += ("</body>\n</html>");
    flyWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
    flyWindow.document.write(myText);
};