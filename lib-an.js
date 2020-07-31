
function analizeazaRoluri() {
                
    //Take all checked boxes from .funcClass aka rl prezent
    rl_p = []
    rl_v = []
    document.querySelector("#date_tab").innerHTML = "";
    document.querySelectorAll(".rol_class").forEach(radio => {
        if (radio.checked === true) {
            rl_p.push(radio.id)
        }
    })
    // Take all checked boxes from .funcClass2 aka rl viitor
    document.querySelectorAll(".rol2_class").forEach(radio => {
        if (radio.checked === true) {
            rl_v.push(radio.id)
        }
    })
    // console.log(rl_p);
    // console.log(rl_v);
    // ac = rl viitor - rl prez
    let ac = rl_v.filter(x => !rl_p.includes(x));
    let ret = rl_p.filter(x => !rl_v.includes(x));
    // console.log("ac");
    // console.log(ac);
    // console.log("ret");
    // console.log(ret);

    // ret = rl prez - rl viit

    // Take the data of users
    id_ang = document.querySelector("#id_ang").value;
    nume_i = document.querySelector("#nume_i").value;
    prenume_i = document.querySelector("#prenume_i").value;
    dirs = document.querySelector("#dirs").value;
    funct = document.querySelector("#funct").value;
    ia = document.querySelector("#ia").value;
    dataac = document.querySelector("#dataac").value;
    tem = document.querySelector("#tem").value;

    ac.forEach(rl => {
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

    ret.forEach(rl => {
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
