# ✏️ Cómo editar la página de ORA

Guía para cambiar textos y colores de la landing **sin saber programar**.
No hace falta instalar nada: se hace todo desde el navegador (Chrome, Edge, etc.).

---

## 🌐 Cómo funciona (en 30 segundos)

- Toda la página es **un solo archivo** llamado `index.html`.
- Ese archivo vive en **GitHub** (una especie de Google Drive para páginas web).
- Cuando lo editás y **guardás**, la página real (**ora-learn.com**) se actualiza sola en **1 o 2 minutos**. No hay que "subir" nada más.

> 💡 Pensalo como Google Docs: escribís, guardás, y listo. La diferencia es que guardar acá se llama **"Commit"**.

---

## 🔑 Antes de empezar (una sola vez)

1. Necesitás una cuenta de **GitHub**. Si no tenés, creá una gratis en https://github.com
2. Pedile a Franco que te dé **acceso al proyecto** (te agrega como colaboradora). Te va a llegar un mail de invitación → aceptala.
3. Guardá este link en favoritos, es el archivo que vas a editar siempre:

   👉 **https://github.com/FrancoAgustinSantillan/ora-learn-landing/blob/main/index.html**

---

## 📝 Editar un texto — paso a paso

1. Entrá al link de arriba 👆 (el `index.html`).
2. Arriba a la derecha del recuadro con el código, hacé clic en el **lápiz ✏️** ("Edit this file").
   - Si es tu primera vez te puede pedir confirmar; aceptá.
3. Se abre el archivo como un bloc de notas gigante. **Buscá el texto** que querés cambiar:
   - Apretá `Ctrl + F` (Windows) o `Cmd + F` (Mac).
   - Escribí un pedacito del texto actual, por ejemplo `florece`, y te lleva ahí.
4. Cambiá **solo el texto**, respetando la regla de oro (ver abajo ⬇️).
5. Cuando terminaste, botón verde arriba a la derecha: **"Commit changes..."**.
6. Se abre una ventanita:
   - En el título escribí qué cambiaste, ej: `Cambié el título del hero`.
   - Dejá seleccionado **"Commit directly to the main branch"**.
   - Clic en **"Commit changes"** (verde).
7. ¡Listo! Esperá 1–2 minutos y recargá **ora-learn.com** para ver el cambio. ✅

---

## 🟢 LA REGLA DE ORO

El archivo tiene partes de **texto** (lo que se lee) y partes de **código** (símbolos raros como `<h3>`, `class="..."`).

> **Cambiá SOLO lo que está entre los símbolos `>` y `<`.**

Ejemplo real de la página:

```html
<h3>Crecimiento medible</h3>
```

- ✅ Podés cambiar `Crecimiento medible` por lo que quieras.
- ⛔ NO toques `<h3>` ni `</h3>` (los símbolos de los costados).

Otro ejemplo:

```html
<p>Cada clase genera un reporte con métricas reales.</p>
     └──────────── esto SÍ lo podés cambiar ────────────┘
```

Dentro del archivo vas a encontrar **carteles** que te ayudan:
- `✏️` = acá podés cambiar texto.
- `⛔` = no toques esto.
- `▼▼▼ SECCIÓN ▼▼▼` = te dice en qué parte de la página estás.

---

## 📖 Recetas rápidas (lo más común)

### Cambiar el título grande de arriba
Buscá `El inglés` → cambiá el texto.
`<br>` es un salto de línea (podés dejarlo o moverlo). La palabra dentro de `<span class="italic">` sale en **verde e itálica**.

### Cambiar una de las 4 tarjetas
Buscá el título de la tarjeta (ej: `Diagnóstico profundo`). Ahí cerca tenés:
- el **emoji** (ej. `🔬`) → cambialo por otro emoji si querés,
- el **título** (`<h3>...`),
- la **descripción** (`<p>...`).

### Cambiar un color de toda la página
Buscá `🎨 COLORES` (está arriba de todo). Vas a ver una lista tipo:
```
--sage: #4a7c59;   /* verde principal */
```
Cambiá **solo el código** que empieza con `#`. Podés elegir colores nuevos en
https://htmlcolorcodes.com (copiás el código que empieza con `#`).
⚠️ No borres el nombre de la izquierda (`--sage`).

### Cambiar el año del pie de página
Buscá `© 2026` y cambiá el número.

---

## 👀 Truco: ver cómo queda ANTES de guardar

Mientras editás, arriba del recuadro hay dos pestañas: **"Edit"** y **"Preview"**.
- **Preview** te muestra los cambios resaltados (verde = agregado, rojo = borrado).
- Ojo: Preview NO muestra la página con diseño, solo el texto. Para ver la página de verdad, guardá y mirá ora-learn.com.

---

## 🆘 "Creo que rompí algo"

Tranqui, **no se puede romper para siempre**. GitHub guarda todas las versiones anteriores.

**Para volver a como estaba antes:**
1. Entrá acá: https://github.com/FrancoAgustinSantillan/ora-learn-landing/commits/main
2. Vas a ver la lista de todos los cambios (los tuyos y los de Franco).
3. Si el último cambio la rompió, avisale a Franco: con un clic puede **revertir** al estado anterior.

> 💡 Consejo: hacé **un cambio por vez** y revisá la página. Así, si algo se ve raro, sabés exactamente qué fue.

---

## ❓ Dudas frecuentes

**¿Cuánto tarda en verse el cambio?**
1 a 2 minutos. Si no lo ves, recargá con `Ctrl + Shift + R` (fuerza recarga sin caché).

**¿Puedo editar desde el celular?**
Sí, entrando a github.com desde el navegador del cel, pero es más cómodo en compu.

**¿Necesito avisarle a Franco cada vez?**
No para textos y colores. Sí conviene avisarle si querés tocar el diseño, agregar secciones nuevas o algo con `<` `>` que no entendés.

---

*Cualquier cosa rara, sacá captura y mandásela a Franco. 💚*
