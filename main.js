const menu = document.querySelector('.menu');
const allUlLis = document.querySelectorAll('.menu li');

for (let i = 0; i < allUlLis.length; i++) {
	const li = allUlLis[i];
	
	if (li.children.length) {
		const span = document.createElement('span');
		
		li.insertBefore(span, li.firstChild);
		span.appendChild(span.nextSibling);
	}
}

menu.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

	const dropdownUl = e.target.closest('li').children[1];

	dropdownUl.classList.toggle('d-none');
}); 