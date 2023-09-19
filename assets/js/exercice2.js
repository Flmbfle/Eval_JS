var nombre = prompt('Entre la table de multiplication souhaitez')

function TableMultiplication(nombre) {
    let tableHTML = '<h2>Table de multiplication de ' + nombre + '</h2>';
    
    for (let i = 1; i <= 10; i++) {
        const resultat = i * nombre;
        tableHTML += `${i} x ${nombre} = ${resultat}<br>`;
    }

    // Sélectionnez la div et affectez le contenu généré à l'intérieur
    document.getElementById('resultat').innerHTML = tableHTML;
}

// Exemple d'utilisation avec le nombre saisi par l'utilisateur
TableMultiplication(nombre);