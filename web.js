/* ========================= */
/* ========= JS ============ */
/* ========================= */

const webhookURL = "https://discord.com/api/webhooks/1463264046320058479/YYruYYsvkbR0UBTwwB_1gXKsFvQXZzvWMPblcEOmWIhoWhKON8tSGvE48H5Js_eKjaRi";

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const prenom = form.querySelector('input[name="prenom"]').value;
  const pseudo = form.querySelector('input[name="pseudo"]').value;
  const age = form.querySelector('input[name="age"]').value;
  const heures = form.querySelector('input[name="heures"]').value;
  const experience = form.querySelector('input[name="experience"]').value;
  const raison = form.querySelector('textarea[name="raison"]').value;
  const confiance = form.querySelector('textarea[name="confiance"]').value;
  const caution = form.querySelector('input[name="caution"]').value;

  if (!prenom || !pseudo || !age || !heures || !experience || !raison || !confiance || !caution) {
    alert("❌ Merci de remplir tous les champs !");
    return;
  }

  const data = {
    embeds: [
      {
        title: "📨 Nouvelle candidature Middleman",
        color: 8388736,
        fields: [
          { name: "👤 Prénom", value: prenom, inline: true },
          { name: "🎮 Pseudo Discord", value: pseudo, inline: true },
          { name: "📅 Âge", value: age, inline: true },
          { name: "⏱️ Heures / semaine", value: heures, inline: true },
          { name: "🛡️ Déjà middleman ?", value: experience, inline: false },
          { name: "❓ Pourquoi middleman ?", value: raison, inline: false },
          { name: "🔐 Confiance", value: confiance, inline: false },
          { name: "💰 Caution proposée", value: caution + " €", inline: true }
        ],
        footer: {
          text: "[ MM ] 🌴 • RK12"
        },
        timestamp: new Date()
      }
    ]
  };

  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert("✅ Candidature envoyée avec succès !");
      form.reset();
    } else {
      alert("❌ Erreur lors de l'envoi.");
    }
  })
  .catch(error => {
    alert("❌ Problème de connexion.");
    console.error(error);
  });
});