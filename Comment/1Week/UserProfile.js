class all_Elements {
    constructor(divId) {
        this.div_id = document.getElementById(divId)
    }

    addButton(buttonclass, text, link) {
        const Button = document.createElement(`button`)
        Button.textContent = text
        Button.classList.add(buttonclass)
        Button.addEventListener("click", function() {
            window.location.href = link
        })
        this.div_id.appendChild(Button)
    }

    addspan(spanClass, htmlContnet) {
        const Span = document.createElement(`span`)
        Span.innerHTML = htmlContnet
        Span.classList.add(`span`, spanClass)
        this.div_id.appendChild(Span)
    }

    addimg(imgClass, src) {
        const Img = document.createElement(`img`)
        Img.src = src
        Img.classList.add(`img`, imgClass)
        this.div_id.appendChild(Img)
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Head Menu Buttons
    const head_MenuElements = new all_Elements('head_menu');
    const head_Menu = [
        { id: "sprint", name: "SPRINT PROJECT", link: "#" },
        { id: "profile", name: "USER PROFILE", link: "#" },
        { id: "github", name: "GITHUB", link: "https://github.com/gunwoo8873/Sprint-Project.git" },
        { id: "docker", name: "DOCKER HUB", link: "https://hub.docker.com/repository/docker/choigunwoo/sprint-project/general" },
        { id: "null_name", name: "NULL", link: "#" }
    ]

    head_Menu.forEach(function (ButtonElement) {
        head_MenuElements.addButton(ButtonElement.id, ButtonElement.name, ButtonElement.link)
    })

    const head_LoginElements = new all_Elements('head_login')
    const head_Login = [
        { id: "signin", name: "SIGN IN", link: "#" },
        { id: "signup", name: "SIGN UP FOR FREE", link: "#" }
    ]

    head_Login.forEach(function (ButtonElement) {
        head_LoginElements.addButton(ButtonElement.id, ButtonElement.name, ButtonElement.link)
    })

    // nav MainTitle and UserProfileImage
    const nav_SpanElements = new all_Elements('nav_maintitle');
    const nav_span = [
        {id : "maintitle", name : "Choigunwoo<br>Userprofile"}
    ]
    nav_span.forEach(function (SpanElement) {
        nav_SpanElements.addspan(SpanElement.id, SpanElement.name)
    })

    const nav_imgElements = new all_Elements('nav_userimage');
    const nav_img = [
        {id : "userimage", src : "./Images/Github_UserProfile.png"}
    ]
    nav_img.forEach(function (ImgElement) {
        nav_imgElements.addimg(ImgElement.id, ImgElement.src)
    })
})