// resena-cliente.js — Aviso para pedir reseña en Google a los clientes de Foro 7.
// Se agrega a cualquier página de evento (selector de fotos, galería) con:
// <script src="https://foro7.invitados.org/js/resena-cliente.js" defer></script>
(function () {
  var URL = 'https://g.page/r/CbWtAd9Q9WqUEBM/review';
  var KEY = 'foro7_resena_cerrada';
  try { if (localStorage.getItem(KEY)) return; } catch (e) {}
  function mostrar() {
    if (document.getElementById('foro7-resena')) return;
    var box = document.createElement('div');
    box.id = 'foro7-resena';
    box.setAttribute('role', 'dialog');
    box.style.cssText = 'position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:99999;max-width:440px;width:calc(100% - 24px);background:#111;color:#fff;border:1px solid #d4af37;border-radius:14px;padding:14px 16px;font:15px/1.45 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.35);display:flex;gap:12px;align-items:center';
    box.innerHTML = '<div style="flex:1"><strong style="color:#d4af37">¿Te gustó tu experiencia con Foro 7?</strong><br>Somos un negocio familiar; tu reseña nos ayuda muchísimo.</div>' +
      '<a href="' + URL + '" target="_blank" rel="noopener" style="background:#d4af37;color:#111;padding:9px 14px;border-radius:9px;font-weight:700;text-decoration:none;white-space:nowrap">⭐ Dejar reseña</a>' +
      '<button type="button" aria-label="Cerrar" style="background:none;border:0;color:#aaa;font-size:20px;cursor:pointer;padding:0 4px">×</button>';
    box.querySelector('button').onclick = function () { box.remove(); try { localStorage.setItem(KEY, '1'); } catch (e) {} };
    box.querySelector('a').onclick = function () { try { localStorage.setItem(KEY, '1'); } catch (e) {} };
    document.body.appendChild(box);
  }
  // Aparece después de que la persona ya estuvo un rato viendo sus fotos
  setTimeout(mostrar, 45000);
})();
