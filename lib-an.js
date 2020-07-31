
function analizeazaRoluri() {
                
    //Take all checked boxes from .funcClass aka roluri prezente
    roluri_prezente = []
    roluri_viitoare = []
    document.querySelectorAll(".rol_class").forEach(radio => {
        if (radio.checked === true) {
            roluri_prezente.push(radio.id)
        }
    })
    // Take all checked boxes from .funcClass2 aka roluri viitoare
    document.querySelectorAll(".rol2_class").forEach(radio => {
        if (radio.checked === true) {
            roluri_viitoare.push(radio.id)
        }
    })
    // console.log(roluri_prezente);
    // console.log(roluri_viitoare);
    // acordare = roluri viitoare - roluri prezente
    let acordare = roluri_viitoare.filter(x => !roluri_prezente.includes(x));
    let retragere = roluri_prezente.filter(x => !roluri_viitoare.includes(x));
    console.log("acordare");
    console.log(acordare);
    console.log("retragere");
    console.log(retragere);

    // retragere = roluri prezente - roluri viitoare

    // Take the data of users
    id_ang = document.querySelector("#id_ang").value;
    nume_i = document.querySelector("#nume_i").value;
    prenume_i = document.querySelector("#prenume_i").value;
    dirs = document.querySelector("#dirs").value;
    funct = document.querySelector("#funct").value;
    ia = document.querySelector("#ia").value;
    dataac = document.querySelector("#dataac").value;
    tem = document.querySelector("#tem").value;

    acordare.forEach(rl => {
        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        td1.innerHTML = id_ang;
        const td2 = document.createElement("td");
        td2.innerHTML = nume_i;
        const td3 = document.createElement("td");
        td3.innerHTML = prenume_i;
        const td4 = document.createElement("td");
        td4.innerHTML = dirs;
        const td5 = document.createElement("td");
        td5.innerHTML = funct;
        const td6 = document.createElement("td");
        td6.innerHTML = rl;
        const td7 = document.createElement("td");
        td7.innerHTML = "acordare";
        const td8 = document.createElement("td");
        td8.innerHTML = ia;
        const td9 = document.createElement("td");
        td9.innerHTML = dataac;
        const td10 = document.createElement("td");
        td10.innerHTML = tem;

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tr.appendChild(td7)
        tr.appendChild(td8)
        tr.appendChild(td9)
        tr.appendChild(td10)

        document.querySelector("#date_tab").appendChild(tr);
    })

    retragere.forEach(rl => {
        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        td1.innerHTML = id_ang;
        const td2 = document.createElement("td");
        td2.innerHTML = nume_i;
        const td3 = document.createElement("td");
        td3.innerHTML = prenume_i;
        const td4 = document.createElement("td");
        td4.innerHTML = dirs;
        const td5 = document.createElement("td");
        td5.innerHTML = funct;
        const td6 = document.createElement("td");
        td6.innerHTML = rl;
        const td7 = document.createElement("td");
        td7.innerHTML = "retragere";
        const td8 = document.createElement("td");
        td8.innerHTML = ia;
        const td9 = document.createElement("td");
        td9.innerHTML = dataac;
        const td10 = document.createElement("td");
        td10.innerHTML = tem;

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tr.appendChild(td7)
        tr.appendChild(td8)
        tr.appendChild(td9)
        tr.appendChild(td10)

        document.querySelector("#date_tab").appendChild(tr);
    })

    //  Clean the fields
    // Take the data of users
    document.querySelector("#id_ang").value = "";
    document.querySelector("#nume_i").value = "";
    document.querySelector("#prenume_i").value = "";
    document.querySelector("#dirs").value = "";
    document.querySelector("#funct").value = "";
    document.querySelector("#ia").value = "";
    document.querySelector("#dataac").value = "";
    document.querySelector("#tem").value = "";

    return;


}