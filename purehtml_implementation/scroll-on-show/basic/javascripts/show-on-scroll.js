// const scroll = (callback) => window.requestAnimationFrame(callback);
// const elements = document.querySelectorAll('.show-on-scroll');
// const toggleClass = () => {
//   elements.forEach((el) => {
//     if (isElementInViewport(el)) {
//       el.classList.add('is-visible');
//     } else {
//       el.classList.remove('is-visible');
//     }
//   });
//   scroll(toggleClass);
// };
// const isElementInViewport = (el) => {
//   const rect = el.getBoundingClientRect();
//   return (
//     (rect.top <= 0 && rect.bottom >= 0) ||
//     (rect.bottom >=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.top <=
//         (window.innerHeight || document.documentElement.clientHeight)) ||
//     (rect.top >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight))
//   );
// };
// toggleClass();

const targets = document.querySelectorAll('.show-on-scroll');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>
    entry.target.classList.toggle('is-visible', entry.isIntersecting),
  );
}, {});

targets.forEach((target) => {
  observer.observe(target);
});
