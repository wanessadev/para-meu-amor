// Configure o texto e o caminho da imagem de cada folha:
const letterPages = [
  {
    text: "Obrigado por existir e fazer o meu mundo ser muito mais bonito e colorido todos os dias.",
    image: "dog-heart.png"
  },
  {
    text: "Cada momento simples ao seu lado se transforma em uma memória favorita guardada no peito.",
    image: "burger.png"
  },
  {
    text: "Você tem um jeitinho único que acalma meus dias e faz tudo parecer mais leve e especial.",
    image: "rato.png"
  },
  {
    text: "Que a gente continue construindo coisas lindas lado a lado. Amo muito você! ♡",
    image: "luta.png"
  }
];

let currentPage = 0;

function goToScreen(screenNumber) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  const targetScreen = document.getElementById(`screen-${screenNumber}`);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }

  if (screenNumber === 3) {
    currentPage = 0;
    updateLetter();
  }
}

function updateLetter() {
  const contentEl = document.getElementById('letter-content');
  const imageEl = document.getElementById('letter-image');
  const counterEl = document.getElementById('page-counter');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const signatureEl = document.getElementById('letter-signature');

  // Atualiza texto e imagem da página atual
  contentEl.textContent = letterPages[currentPage].text;
  imageEl.src = letterPages[currentPage].image;
  counterEl.textContent = `${currentPage + 1} de ${letterPages.length}`;

  // Controle dos botões
  prevBtn.disabled = (currentPage === 0);
  nextBtn.disabled = (currentPage === letterPages.length - 1);

  // Assinatura visível apenas na última página
  signatureEl.style.display = (currentPage === letterPages.length - 1) ? 'block' : 'none';
}

function nextPage() {
  if (currentPage < letterPages.length - 1) {
    currentPage++;
    updateLetter();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    updateLetter();
  }
}