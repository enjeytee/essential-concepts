

import getUser from "./utils/bak02.getUser.js";
class App {
    constructor() {
        this.render();
    }
    render() {
        const { name, company } = getUser();
        document.getElementById("root").innerHTML = `
            <div>${name} works for ${company}.</div>
        `
    }
}
new App();