const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');

	const navLinks  = document.querySelectorAll('.nav-links li');
	burger.addEventListener('click',()=>{
		burger.style.animation = `burgwidth 0.5s ease forwards`; 
		nav.classList.toggle('nav-active');
		navLinks.forEach((link,index) =>{
		
			if(link.style.animation){
				link.style.animation = '';
			}
			else{
				link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
			}

		});
		burger.classList.toggle('toggle');
	});
	//animate

}
navSlide();

// const card  = document.querySelectorAll(".cards");
// const title = document.querySelector('.cards h3');
// const para = document.querySelector('.cards p');
// const about = document.querySelector(".deck");
// const skills = document.querySelector(".skills");
// const skillp = document.querySelector(".skill-p");
// const image = document.querySelector(".cards img");
// about.addEventListener("mousemove",(e) =>{
// 	let xAxis = (window.innerWidth/2 - e.pageX)/25;
// 	let yAxis = (window.innerWidth/2 - e.pageY)/25;
// 	card.forEach((card,index) => {
// 		card.style.transform = ` rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
// 	});
	
// });
// about.addEventListener('mouseenter',e => {
// 	card.forEach((card,index) => {
// 		card.style.transition = 'none';

// 		title.style.transform = `translateZ(40px)`;
// 		para.style.transform = `translateZ(40px)`;
// 		skills.style.transform = `translateZ(40px)`;
// 		skillp.style.transform = `translateZ(40px)`;
// 		image.style.transform = `translateZ(45px) rotateZ(30deg)`;

// 	});
// });
// about.addEventListener('mouseleave',e => {
// 	card.forEach((card,index) => {
// 		card.style.transition = 'all 0.5s ease ';
// 		card.style.transform = `rotateY(0deg) rotateX(0deg)`;
// 		image.style.transform = `rotateZ(0deg)`;
// 		image.style.transition = 'all 0.5s ease ';
// 	});
// });