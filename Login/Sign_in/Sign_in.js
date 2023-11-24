/*
const Sprint_Button = document.getElementById('sprint') // getElementById (Button id = "Value")
Sprint_Button.innerText = "SPRINT PROJECT"
*/

// Menu MainClass
class Menu_Button {
    constructor(Div_ID, Button_Name, Button_Link, Button_image) {

        // Div ID
        this.Container_ID = document.getElementById(Div_ID)

        // Button Name
        this.Button = document.createElement('button')
        this.Button.type = 'button'
        this.Button.textContent = Button_Name
        this.Container_ID.appendChild(this.Button);
        
        // Button Link
        this.Button_Link = Button_Link

        // PlatForm Button Image
        this.Button_image = document.createElement('img')
        this.Button_image.src = Button_image
        this.Container_ID.appendChild(this.Button_image);

        this.Button_Event()
    }

    Button_Event() {
        this.Button.addEventListener('click', () => {
            window.open(this.Button_Link, '_blank')
        })
    }
}

const Head_Menu_Button = document.getElementById('Head_Menu_Button')
const Head_Menu_Link = [
    { name : 'SPRINT PROJECT', link : '../Sprint_Project/index.html'},
    { name : 'DASHBOARD', link : '../DashBoard/index.html'},
    { name : 'NOTION', link : 'https://www.notion.so/invite/de954280c9ba22d8568c2b3910bbd63a06f194be'},
    { name : 'GITHUB', link : 'https://github.com/gunwoo8873/Sprint-Project.git'},
    { name : 'DOCKER HUB', link : 'https://hub.docker.com/repositories/choigunwoo'}
]
Head_Menu_Link.forEach(({name, link}) => {
    new Menu_Button('Head_Menu_Button', name, link)
})

const Head_Login_Button = document.getElementById('Head_Login_Button')
const Head_Login_Link = [
    { name : 'SIGN IN', link : '../Sign_in/Sign_in.html'},
    { name : 'SIGN UP FOR FREE', link : '../Sign_up/Sign_up.html'},
]
Head_Login_Link.forEach(({name, link}) => {
    new Menu_Button('Head_Login_Button', name, link)
})


// https://github.com/