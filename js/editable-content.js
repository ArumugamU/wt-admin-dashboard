 
    window.onload = function() {
 

let editBtn = document.querySelector('#edit_content');
let content = document.querySelector('.content');

editBtn.addEventListener('click', () => {
	content.contentEditable = !content.isContentEditable;
  if(content.contentEditable === 'false') {
  	localStorage.setItem('content', content.innerHTML);
  }
});
}
 
