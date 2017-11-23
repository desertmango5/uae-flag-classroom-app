// rewrite jQuery code with plain JS

document.addEventListener('click', (element) => {
  document.getElementById(element.target.id)
    .style.opacity = 0;
  document.getElementById(element.target.id)
    .style.cursor = 'auto';
});
