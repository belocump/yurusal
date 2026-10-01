// フッターが画面内に入ったらフローティングボタンを非表示
const floatCta = document.getElementById('floatCta');
const footer = document.querySelector('.footer');
const observer = new IntersectionObserver(([entry]) => {
  floatCta.classList.toggle('is-hidden', entry.isIntersecting);
}, { threshold: 0.1 });
observer.observe(footer);
