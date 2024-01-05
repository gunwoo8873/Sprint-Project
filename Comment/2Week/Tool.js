class all_Elements {
    constructor(divId) {
        this.div_id = document.getElementById(divId)
    }

    addHeadButton(Menuclass, text, link) {
        const Head_Button = document.createElement(`button`)
        Head_Button.textContent = text
        Head_Button.classList.add(Menuclass)
        Head_Button.addEventListener("click", function() {
            window.location.href = link
        })
        this.div_id.appendChild(Head_Button)
    }
}

const head_MenuElement = new all_Elements(`head_MenuBar`)
const head_Menu = [
    { id : `home`, name : `HOME`, link : `../0Week/Home.html` },
    { id : `sprint`, name : `SPRINT PROJECT`, link : `#` },
    { id : `profile`, name : `USER PROFILE`, link : `../1Week/UserProfile.html` },
    { id : `github`, name : `GITHUB`, link : `https://github.com/gunwoo8873/Sprint-Project.git` },
    { id : `docker`, name : `DOCKER HUB`, link : `https://hub.docker.com/repository/docker/choigunwoo/sprint-project/general` },
    { id : `cloneweb`, name : `CLONE WEB`, link : `../Clone Web/index.html` }
]
head_Menu.forEach(function (ButtonElement) {
    head_MenuElements.addButton(ButtonElement.id, ButtonElement.name, ButtonElement.link)
})

const head_LoginElement = new all_Elements(`head_LoginBar`)
const head_Login = [
    { id : `login`, name : `LOGIN`, link : `#` },
    { id : `register`, name : `REGISTER`, link : `#` }
]
head_Login.forEach(function (ButtonElement) {
    head_MenuElements.addButton(ButtonElement.id, ButtonElement.name, ButtonElement.link)
})

