// resenas.js — Botón "Déjanos tu reseña en Google".
// Pega aquí el enlace para pedir reseñas de tu Perfil de Empresa en Google
// (Google Business Profile → "Pedir reseñas" → copiar enlace). Mientras esté vacío, el botón no aparece.
window.FORO7_RESENAS_GOOGLE = '';
(function () {
  var url = window.FORO7_RESENAS_GOOGLE;
  if (!url) return;
  var box = document.getElementById('resenaGoogle'), btn = document.getElementById('resenaGoogleBtn');
  if (box && btn) { btn.href = url; box.style.display = 'block'; }
})();
