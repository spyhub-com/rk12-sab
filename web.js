const form = document.getElementById("middlemanForm");
const statusMsg = document.getElementById("statusMsg");

const webhookURL = "https://discord.com/api/webhooks/1463264046320058479/YYruYYsvkbR0UBTwwB_1gXKsFvQXZzvWMPblcEOmWIhoWhKON8tSGvE48H5Js_eKjaRi";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        content: "**📨 Nouvelle candidature Middleman**",
        embeds: [{
            title: "Candidature",
            color: 5793266,
            fields: [
                { name: "Prénom", value: document.getElementById("prenom").value },
                { name: "Pseudo Discord", value: document.getElementById("pseudo").value },
                { name: "Âge", value: document.getElementById("age").value },
                { name: "Heures / semaine", value: document.getElementById("heures").value },
                { name: "Déjà middleman ?", value: document.getElementById("deja").value },
                { name: "Pourquoi ?", value: document.getElementById("pourquoi").value },
                { name: "Confiance ?", value: document.getElementById("confiance").value },
                { name: "Caution", value: document.getElementById("caution").value + " €" }
            ]
        }]
    };

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(() => {
        statusMsg.textContent = "✅ Candidature envoyée avec succès !";
        form.reset();
    })
    .catch(() => {
        statusMsg.textContent = "❌ Erreur lors de l'envoi.";
    });
});