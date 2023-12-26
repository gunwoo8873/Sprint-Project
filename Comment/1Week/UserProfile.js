class all_Elements {
    constructor(divId) {
        this.div_id = document.getElementById(divId)
    }

    addButton(buttonClass, text, link) {
        const Button = document.createElement("button")
        Button.textContent = text
        Button.classList.add(`button`, buttonClass)
        Button.addEventListener("click", function() {
            window.location.href = link
        })
        this.div_id.appendChild(Button)
    }

    addspan(spanClass, text) {
        const Span = document.createElement("span")
        Span.textContent = text
        Span.classList.add(`span`, spanClass)
        this.div_id.appendChild(Span)
    }

    addimg(imgClass, src) {
        const Img = document.createElement("img")
        Img.src = src
        Img.classList.add(`img`, imgClass)
        this.div_id.appendChild(Img)
    }
}

document.addEventListener("DOMContentLoaded", function() {

    const head_MenuElements = new all_Elements('head_menu');
    const head_Menu = [
        { id: "sprint", name: "SPRINT PROJECT", link: "#" },
        { id: "profile", name: "USER PROFILE", link: "#" },
        { id: "github", name: "GITHUB", link: "#" },
        { id: "docker", name: "DOCKER HUB", link: "#" },
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

    const nav_SpanElements = new all_Elements('nav_span');
    const nav_span = [
        {id : "maintitle", name : "Choigunwoo Userprofile"}
    ]
})
