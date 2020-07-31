
function roluriIndex(functie_name){
    for (let i = 0; i < functii.length; i++)
    {
        if (functii[i].functie === functie_name) {
            return i;
        }
    }

    return false;
}