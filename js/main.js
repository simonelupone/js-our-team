const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];

// dichiaro le variabili che conterranno gli elementi del dom
const cardImage = document.getElementById('card-img');
// console.log('ecco l\'immagine', cardImage);
const name = document.getElementById('card-img');
// console.log(name);
const role = document.getElementById('role');
// console.log(role);
const mail = document.getElementById('mail');
// console.log(mail);

// funzione per generare la card

/**
 * 
 * function to create a card
 *  
 * @param {object} member - the object we want to take data from
 * @return {string} - dom element
 * 
 */
const createMemberCard = (member) => {
    const card = `<div class="my-card d-flex gap-4 border bg-dark" style="max-width: 540px;">

                    <div class="img-fluid ">
                        <img id="card-img" src="./${member.img}" alt="">
                    </div>

                    <div class="d-flex flex-column gap-3 mt-2">
                        <div id="name" class="fw-bold fs-4 text-light">${member.name}</div>
                        <div id="role" class="fs-5 text-light">${member.role}</div>
                        <div id="mail" class="fs-5"><a
                                class="text-info link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"" href="">${member.email}</a></div>
                </div>`;

    console.log(card);
}

for (let i = 0; i < teamMembers.length; i++) {
    createMemberCard(teamMembers[i]);
}