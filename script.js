function getFormvalue() {
    //Write your code here
	// const f = document.querySelector('input');
	// const l = document.querySelectorAll('input')[1];

	
	

}
const f = document.querySelector('input[name="fname"]')
	const l = document.querySelector('input[name="lname"]')
	const sub = document.querySelector('input[type="submit"]');
	// sub.addEventListener('click',()=>{ alert(f+" "+l) });
	sub.addEventListener('click',()=>{ alert(f.value+" "+l.value) });

