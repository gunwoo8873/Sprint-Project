const fs = require(`node : fs`);
const path = require(`node : path`);

const head_Menu = [
    { id: sprint, name: "SPRINT PROJECT", link: "/" },
    { id: profile, name: "USER PROFILE", link: "/" },
    { id: github, name: "GITHUB", link: "/" },
    { id: docker, name: "DOCKER HUB", link: "/" },
    { id: null_name, name: "NULL", link: "/" }
]

const head_Login = [
    { id: signin, name: "SIGN IN", link: "/" },
    { id: signup, name: "SIGN UP FOR FREE", link: "/" }
]

class head_menu {
    constructor(div_id, menu_events, ) {
        this.contents_id = document.getElementById(div_id);
    }
}