// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.



// Wayne Barnett	 Founder & CEO	         wayne-barnett-founder-ceo.jpg
// Angela Caroll	 Chief Editor	         angela-caroll-chief-editor.jpg
// Walter Gordon	 Office Manager	         walter-gordon-office-manager.jpg
// Angela Lopez	 Social Media Manager 	     angela-lopez-social-media-manager.jpg
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
        img: "./img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter",
        lastName: "Gordon",
        role: "Office Manager",
        img: "./img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela",
        lastName: "Lopez",
        role: "Social Media Manager",
        img: "./img/angela-lopez-social-media-manager.jpg"

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
    // Creazione di un nuovo elemento div per ogni membro del team
    let card = document.createElement("div");
    card.className = "card border rounded bg-dark text-white";
    
    // Creazione di un elemento img per l'immagine della card
    let img = document.createElement("img");
    img.className = "card-img-top";
     // Inserimento del percorso dell'immagine
    img.src = team[i].img;

 
    
    // Aggiunta dell'elemento img come figlio della card
    card.appendChild(img);

    // Creazione di un elemento div per il corpo della card
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    
    // Ciclo attraverso le proprietà di ciascun membro
    for (let key in team[i]) {
        // Creazione di un elemento div per ogni proprietà
        let info = document.createElement("div");
        info.className = "card-text";
        info.innerHTML = key + ": " + team[i][key];
        
        // Aggiunta dell'elemento div al corpo della card
        cardBody.appendChild(info);
    }
    
    // Aggiunta del corpo della card come figlio della card
    card.appendChild(cardBody);

    // Aggiunta della card al contenitore desiderato nel DOM
    document.getElementById("result").appendChild(card);
}
