var stepArr = [
    {title : "Requirement Analysis", para : ["Conduct user research to identify target audience and their needs", "Define functional and non-functional requirements",
    "Create use cases and user stories to outline user journeys"]},
    {title : "Planning", para : ["Develop a project plan with detailed timelines and milestones",
    "Assign roles and responsibilities to team members",
    "Identify potential risks and develop mitigation strategies"]},
    {title : "Designing", para : ["Create wireframes and mockups to visualize the website layout and user interface",
    "Design the website's visual elements, such as color schemes and typography",
    "Ensure that the website is responsive and accessible on all devices"]},
    {title : "Coding", para : ["Develop the website using HTML, CSS, and JavaScript",
    "Implement functionality for features such as search, cart, and checkout",
    "Test the website to ensure that it is functional and bug-free"]},
]

var stepBtn = document.querySelectorAll(".step-btn")
console.log("hey")
console.log(stepBtn)
stepBtn.forEach((element)=> {
    element.addEventListener('click',stepsChange )})


function stepsChange(event){
    
    if (event.target.text == null){
        console.log("empty")
       console.log(event.target)
       
    }
    else {
    let id = event.target.text.trim()
    id = id.split(" ")[1]
    document.getElementById("step-img").src = `/images/${id}.png`
    document.getElementById("step-head").innerText = stepArr[id-1].title
    document.getElementById("step-para").innerText = stepArr[id-1].para
    }
}