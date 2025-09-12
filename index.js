let currentIndex = 0;
let currentData = [...vocabData]; // dữ liệu hiển thị hiện tại
let value = true;
function renderCards(data) {
   const container = document.getElementById('cards');
   container.innerHTML = data.map((item, i) => `
        <article class="vocab-card ${i === 0 ? "active" : ""}">
          <h2 class="kanji" lang="ja">${item.kanji}</h2>
          <div class="hiragana" lang="ja">${item.hiragana}</div>
          <div>${item.on ? item.on : ""} ${item.kun ? item.kun : ""}</div>
          <span class="pos">${item.pos}</span>
          <p class="meaning">Tiếng Việt: <strong>${item.meaning}</strong></p>
          <div class="footer">
            <span lang="ja">${item.exampleJa}</span>
            ${item.exampleVi}
          </div>
          <div>${i}</div>
        </article>
      `).join("");
   currentIndex = 0;
}

function showCard(index) {
   const cards = document.querySelectorAll('.vocab-card');
   if (index < 0) index = 0;
   if (index >= cards.length) index = cards.length - 1;
   cards.forEach((c, i) => c.classList.toggle('active', i === index));
   currentIndex = index;
}

document.querySelector('.prev-btn').addEventListener('click', () => {
   showCard(currentIndex - 1);
});

document.querySelector('.next-btn').addEventListener('click', () => {
   showCard(currentIndex + 1);
});

// Vuốt trên điện thoại
let startX = 0;
document.addEventListener('touchstart', e => {
   startX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
   let endX = e.changedTouches[0].clientX;
   if (endX - startX > 50) {
      showCard(currentIndex - 1);
   } else if (startX - endX > 50) {
      showCard(currentIndex + 1);
   }
});

//  Xử lý lọc dữ liệu
document.getElementById('filterBtn').addEventListener('click', () => {
   const start = parseInt(document.getElementById('start').value, 10) - 1;
   const end = parseInt(document.getElementById('end').value, 10);
   currentData = currentData.slice(start, end);
   renderCards(currentData);
   showCard(0);
});

// Render mặc định
renderCards(currentData);
showCard(0);
// 🔎 Tìm kiếm bằng hiragana
document.getElementById('search').addEventListener('input', e => {
   const keyword = e.target.value.trim();
   const filtered = currentData.filter(item => item.hiragana.includes(keyword));
   renderCards(filtered.length ? filtered : []);
   showCard(0);
});

//đổi dữ liệu
document.getElementById('change').addEventListener('click', () => {
   if (value) {
      currentData = [...kanjiData];
      value = false;
   } else {
      currentData = [...vocabData];
      value = true;
   }
   renderCards(currentData);
   showCard(0);
});
