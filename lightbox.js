document.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG') {
    const modal = document.createElement('div');
    modal.className = 'lightbox';
    modal.innerHTML = `<img src="${e.target.src}" alt="${e.target.alt}" /><span class="close">×</span>`;
    document.body.appendChild(modal);

    modal.querySelector('.close').onclick = () => modal.remove();
  }
});
