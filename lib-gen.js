function genereaza_roluri() {
    roluri.forEach(rol => {

        // Create checkbox for each element
        let rol_prezent = document.querySelector("#rol-prezent")
        let rol_viitor = document.querySelector("#rol-viitor")


        // Create input
        const input = document.createElement("input")
        input.setAttribute("type", "checkbox")
        input.setAttribute("name", rol)
        input.setAttribute("id", rol)
        input.setAttribute("data-rol", rol)
        input.setAttribute("class", "rol_class")

        // Create label
        const label = document.createElement("label")
        label.setAttribute("for", rol)
        label.innerHTML = rol

        rol_prezent.appendChild(input)
        rol_prezent.appendChild(label)

        // Create input
        const inputt = document.createElement("input")
        inputt.setAttribute("type", "checkbox")
        inputt.setAttribute("name", rol)
        inputt.setAttribute("id", rol)
        inputt.setAttribute("class", "rol2_class")

        // Create label
        const labell = document.createElement("label")
        labell.setAttribute("for", rol)
        labell.innerHTML = rol

        rol_viitor.appendChild(inputt);
        rol_viitor.appendChild(labell);
    })
}