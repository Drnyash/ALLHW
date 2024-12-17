const data = [
    {
        title: '"Абай жолы" Мұхтар Әуезов',
        description: 'Абайдың өмірі мен қазақ қоғамының тарихи шежіресі.'
    },
    {
        title: '"Қан мен тер" - Әбдіжәміл Нұрпейісов',
        description: 'Қазақ халқының қиын кезеңдерінің эпикалық баяны.'
    },
    {
        title: '"Көшпенділер" - Ілияс Есенберлин',
        description: 'Қазақ хандығының қалыптасу тарихы.'
    },
    {
        title: '"За нами Москва" - Александр Бек',
        description: 'Панфиловшылардың ержүректігі туралы тарихи деректі роман.'
    }
];

function createCard(title, description) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;
    card.appendChild(cardTitle);

    const cardDescription = document.createElement('p');
    cardDescription.textContent = description;
    card.appendChild(cardDescription);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Жою';
    deleteButton.onclick = function () {
        card.remove(); 
    };
    card.appendChild(deleteButton);

    return card;
}

const cardContainer = document.getElementById('card-container');

data.forEach(item => {
    const card = createCard(item.title, item.description);
    cardContainer.appendChild(card);
});
