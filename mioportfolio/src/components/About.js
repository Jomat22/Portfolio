import React from 'react';
import MB from '../MB.png'; 

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">Chi Sono</h2> 
  
      {<img src={MB} alt="La mia foto" className="profile-img" /> }
      <p>
        Ciao! Sono Matteo Borello, uno sviluppatore web junior con una profonda passione per la creazione di soluzioni digitali intuitive ed efficienti. Il mio percorso nel mondo della programmazione è guidato dalla curiosità di trasformare idee complesse in applicazioni funzionali e facili da usare.
      </p>
      <p>
        Ho una solida base in **React, JavaScript, HTML e CSS**, e ho esperienza nello sviluppo di backend con **Python (Django)** e **Java**, interfacciandomi con database relazionali come **MySQL** e non relazionali come **MongoDB**. Sono particolarmente interessato a costruire esperienze utente coinvolgenti e a risolvere problemi con un approccio logico e creativo.
      </p>
      <p>
        Sono una persona dinamica, proattiva e sempre desiderosa di imparare nuove tecnologie e metodologie. Attualmente, sono alla ricerca di un'opportunità stimolante per mettere in pratica le mie competenze e crescere professionalmente all'interno di un team innovativo.
      </p>
    </section>
  );
}
export default About;