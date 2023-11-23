const { link } = require("fs")

class Button_Event {
    constructor(Button_id, Button_link) {
        this.Button_id = document.getElementById(Button_id)
        this.Button_link = link
        this.onClickEvent();
    }
    onClickEvent() {
        this.Button_id.addEventListener('click', () => {
            location.href = this.Button_link
        })
    }
}

// Debug 0.093 sec
const project_Button = new Button_Event('project', '../Sprint/index.html')
const info_Button = new Button_Event('info', '../Info/index.html')
const github_Button = new Button_Event('github', 'https://github.com/')
const dockerhub_Button = new Button_Event('dockerhub', 'https://hub.docker.com/')
const signin_Button = new Button_Event('login-signin', '../Login/Sign_in/signin.html')
const signup_Button = new Button_Event('login-signup', '../Login/Sign_up/signup.html')

