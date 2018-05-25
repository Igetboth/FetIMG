function fixIMG() {
	var link = document.getElementsByClassName("fl-picture__link")[0];
	var img = link.childNodes[1];
	var parent = link.parentElement;
	img.classList.remove("fl-disable-interaction");
	var clone = img.cloneNode(true);
	parent.insertBefore(clone, parent.childNodes[0]);
	while (link.firstChild) {
		link.removeChild(link.firstChild);
	}
	link.classList.remove("fl-picture__link");
	link.classList.remove("fl-transparent-facade");
	link.classList.add("FetIMG-Next");
	link.textContent = "Next IMG >>";
	var style = document.createElement('style');
	var css = '.FetIMG-Next {position: absolute; width: 9%; padding: 1% 0; top: 14vh; right: 36%; background: #171717 !important; color: #FFF; text-align: center; text-decoration: none !important; cursor: pointer;}';
	style.type = 'text/css';
	style.appendChild(document.createTextNode(css));
	document.head.appendChild(style);
};
fixIMG();

