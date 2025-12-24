const form = document.getElementById('registr');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    alert('Form submitted successfully!');
    form.reset();
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.view-more').forEach(btn => {
    btn.addEventListener('click', () => {
      const container = btn.closest('div');
      if (!container) return;
      const moreText = container.querySelector('.more-text');
      if (!moreText) return;
      moreText.classList.toggle('show');
      btn.textContent = moreText.classList.contains('show') ? 'View Less' : 'View More';
    });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress');
  progressBars.forEach(bar => {
    const width = bar.dataset.width;
    setTimeout(() => {
      bar.style.width = width;
    }, 200);
  });
});


document.addEventListener("DOMContentLoaded", () => {
    // Прокрутка к форме
    const freeBtn = document.getElementById('freeConsultBtn');
    const consultForm = document.getElementById('consultForm');
    if (freeBtn && consultForm) {
        freeBtn.addEventListener('click', () => {
            consultForm.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Модалка
    const modal = document.getElementById("modal");
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.getElementById("closeModal");

    if(openBtn && modal && closeBtn){
        openBtn.addEventListener("click", () => modal.style.display = "flex");
        closeBtn.addEventListener("click", () => modal.style.display = "none");
        window.addEventListener("click", (e) => {
            if (e.target === modal) modal.style.display = "none";
        });
    }
});
