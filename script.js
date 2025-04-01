async function loadImages() {
  const response = await fetch('images/index.json');
  const images = await response.json();

  const now = new Date();
  const newGallery = document.getElementById('new-gallery');
  const fullGallery = document.getElementById('full-gallery');

  images.forEach(image => {
    const wrapper = document.createElement('div');
    wrapper.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = `images/${image.filename}`;
    img.alt = image.title;

    const meta = document.createElement('div');
    meta.className = 'metadata';
    meta.textContent = `${image.title} • ${image.date} • ${image.telescope}`;

    wrapper.appendChild(img);
    wrapper.appendChild(meta);
    fullGallery.appendChild(wrapper);

    const imageDate = new Date(image.date);
    const daysOld = (now - imageDate) / (1000 * 60 * 60 * 24);

    if (daysOld <= 14) {
      newGallery.appendChild(wrapper.cloneNode(true));
    }
  });
}
loadImages();
