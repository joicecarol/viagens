import styles from './card.module.css';
import React from 'react';
const cards = [
  {
    id: 1,
    title: 'Bonito',
    description: 'A PARTIR DE R$1200,00',
    viagenURL: 'https://www.maladeaventuras.com/wp-content/uploads/2021/05/roteiro-5-dias-bonito-ms-1.jpg',
  },
  {
    id: 2,
    title: 'Gramado',
    description: 'A PARTIR DE R$1500,00',
    viagenURL: 'https://uploads.metropoles.com/wp-content/uploads/2021/07/15133517/Gramado_Rio_Grande_do_Sul_RS.jpg',
  },
  {
    id: 3,
    title: 'Ceará',
    description: ' A PARTIR DE R$900,00',
    viagenURL: 'https://www.escolhaviajar.com/wp-content/uploads/2021/08/roteiro-no-ceara-praia-de-peroba.jpg',
  },
  {
    id: 4,
    title: 'Guarapari',
    description: 'A PARTIR DE R$:550,00.',
    viagenURL: 'https://blog.123milhas.com/wp-content/uploads/2021/11/IMAGEM-02-20.jpg',
  },
];
export default function Card() {
	//const cards = await fetch('http://localhost:5190/APIFINAL/Viagens').then(res => res.json());
	//console.log(cards);

	return (
		//<div className={styles.container}>
      //{cards.map((card) => (
        //<div key={card.id} className={styles.Card}>
        
        <div className={styles.container}>
      {cards.map((card) => (
        <div key={card.id} className={styles.card}>
          <img src={card.viagenURL} alt={card.title} />
          <div className={`${styles.card_title} ${styles.title_white}`}>
            <h2>{card.title}</h2>
             <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}