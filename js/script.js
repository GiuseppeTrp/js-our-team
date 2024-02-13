// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.



// Wayne Barnett	 Founder & CEO	         wayne-barnett-founder-ceo.jpg
// Angela Caroll	 Chief Editor	         angela-caroll-chief-editor.jpg
// Walter Gordon	 Office Manager	         walter-gordon-office-manager.jpg
// Angela Lopez	 Social Media Manager 	 angela-lopez-social-media-manager.jpg
// Scott Estrada	 Developer	             scott-estrada-developer.jpg
// Barbara Ramos	 Graphic Designer	     barbara-ramos-graphic-designer.jpg




let team= [
    {
        name: "Wayne",
        lastName: "Barnett",
        role: "Founder & CEO",
        img: "./img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela",
        lastName: "Caroll",
        role: "Chief Editor",
        img: "./img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Walter",
        lastName: "Gordon",
        role: "Office Manager",
        img: "./img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela",
        lastName: "Lopez",
        role: "Social Media Manager",
        img: "./img/wayne-barnett-founder-ceo.jpg"

    },
    {
        name: "Scott",
        lastName: "Estrada",
        role: "Developer",
        img: "./img/wayne-barnett-founder-ceo.jpg"

    },
    {
        name: "Barbara",
        lastName: "Ramos",
        role: "Graphic Designer",
        img: "./img/wayne-barnett-founder-ceo.jpg"

    }
];



// Ciclo attraverso l'array dei membri del team
for (let i = 0; i < team.length; i++) {
    // Ciclo attraverso le proprietà di ciascun oggetto 
    for (let key in team[i]) {
        // Aggiunta delle informazioni di ogni oggetto come riga  nell' ID "result"
        document.getElementById("result").innerHTML += key + ": " + team[i][key] + "<br>";
    }
}

