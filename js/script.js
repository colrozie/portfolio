window.addEventListener('DOMContentLoaded', function()
{
	//cursor
	const cursor = document.querySelector('#customCursor');
	const cursorCircle = cursor.querySelector('.cursor__circle');

	const mouse = { x: -100, y: -100 };
	const pos = { x: 0, y: 0 };
	const speed = 0.1;

	const updateCoordinates = e => {
		mouse.x = e.clientX;
		mouse.y = e.clientY;
	};

	window.addEventListener('mousemove', updateCoordinates);

	function getAngle(diffX, diffY) {
	  return Math.atan2(diffY, diffX) * 180 / Math.PI;
	};

	function getSqueeze(diffX, diffY) {
		const distance = Math.sqrt(
		Math.pow(diffX, 2) + Math.pow(diffY, 2)
		);
		const maxSqueeze = 0.15;
		const accelerator = 1500;
		return Math.min(distance / accelerator, maxSqueeze);
	};


	const updateCursor = () => {
		const diffX = Math.round(mouse.x - pos.x);
		const diffY = Math.round(mouse.y - pos.y);
		
		pos.x += diffX * speed;
		pos.y += diffY * speed;
		
		const angle = getAngle(diffX, diffY);
		const squeeze = getSqueeze(diffX, diffY);
		
		const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
		const rotate = 'rotate(' + angle +'deg)';
		const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

		cursor.style.transform = translate;
		cursorCircle.style.transform = rotate + scale;
	};

	function loop() {
		updateCursor();
		requestAnimationFrame(loop);
	};

	requestAnimationFrame(loop);
	
	const cursorModifiers = document.querySelectorAll('[cursor-class]');

	cursorModifiers.forEach(curosrModifier => {
		curosrModifier.addEventListener('mouseenter', function() {
			const className = this.getAttribute('cursor-class');
			cursor.classList.add(className);
		});
		
		curosrModifier.addEventListener('mouseleave', function() {
			const className = this.getAttribute('cursor-class');
			cursor.classList.remove(className);
		});
	});
	
	// Progress Indicator 진행바
	let progressIndicator = document.createElement('div');
	progressIndicator.id = 'progress';
	progressIndicator.className = 'progress-bar';
	document.body.appendChild(progressIndicator);

	window.addEventListener('scroll', function() {
		let scrollTop = window.scrollY || document.documentElement.scrollTop;
		let documentHeight = document.documentElement.scrollHeight;
		let windowHeight = window.innerHeight;
		let currentPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
		document.getElementById('progress').style.width = currentPercentage + '%';
	});


	// tool tip
	let balloon = document.createElement('div');
	balloon.className = 'tool-tip';
	document.body.appendChild(balloon);

	function updateBalloonPosition(x, y) {
		balloon.style.left = (x - 35) + 'px';
		balloon.style.top = (y + 35) + 'px';
	}

	function showBalloon() {
		balloon.style.opacity = 0;
		balloon.style.display = 'block';
		setTimeout(() => {
			balloon.style.transition = 'opacity 0.3s';
			balloon.style.opacity = 1;
		}, 10);
	}

	function hideBalloon() {
		balloon.style.opacity = 1;
		setTimeout(() => {
			balloon.style.transition = 'opacity 0.1s';
			balloon.style.opacity = 0;
			setTimeout(() => {
				balloon.style.display = 'none';
			}, 100);
		}, 10);
	}

	let typeTitle = document.querySelectorAll('[title]');

	typeTitle.forEach(element => {
		let text = element.getAttribute('title');
		element.setAttribute('title', '');
		
		element.addEventListener('mouseenter', function(event) {
			balloon.textContent = text;
			updateBalloonPosition(event.pageX, event.pageY);
			showBalloon();
		});
		
		element.addEventListener('mouseleave', function() {
			hideBalloon();
		});
		
		element.addEventListener('mousemove', function(event) {
			updateBalloonPosition(event.pageX, event.pageY);
		});
	});

	//menu on off
	const sections = document.querySelectorAll('section');
	const menuItem = document.querySelectorAll('.header__menu__item');

	function changeActiveLink() {
		let currentIndex = sections.length;

		while (--currentIndex && window.scrollY + window.innerHeight / 2 < sections[currentIndex].getBoundingClientRect().top + window.scrollY) {}

		menuItem.forEach((link) => link.classList.remove('active'));
		menuItem[currentIndex].classList.add('active');
	};

	changeActiveLink();
	window.addEventListener('scroll', changeActiveLink);

    // visual parallax
	gsap.registerPlugin(ScrollTrigger);

    let visualParallax = gsap.timeline();
    ScrollTrigger.create({
        animation: visualParallax,
        trigger: "#main",
        start: "top top",
        end: "70% 20%",
        scrub: 1,
    });

    visualParallax.to("#parallaxLayer", { y: -300 }, 0)
    visualParallax.to("#parallaxLayerSecond", { y: -1000 }, 0)

	//gsap 가로 스크롤
	let horizontal = document.querySelector('#career'); 
	let horizonItem = gsap.utils.toArray('.sc-career__contents .card');
	
	gsap.to(horizonItem, {
	  	xPercent: -62 * (horizonItem.length - 1),
		ease: "none",
		scrollTrigger: {
			trigger: horizontal,
			pin: true,
			scrub: 1,
			snap: {
				snapTo: 1/(horizonItem.length -1),
				inertia: false,
				duration: {min: 0.1, max: 0.1},
			},
			invalidateOnRefresh: true,
			start: "top top",
            end: "2000px",
		}
	});

	//img hover scroll
	const thumbnails = document.querySelectorAll('.project-item > a');

	thumbnails.forEach(function(thumbImg) {
		thumbImg.addEventListener('mouseenter', function() {
			let img = thumbImg.querySelector('img');
			if (img) {
				let imgTop = img.clientHeight;
				let imgHeight = thumbImg.closest('.project-item').clientHeight;
				let scrollH = imgHeight - imgTop;

				img.style.marginTop = scrollH + 'px';
			}
		});

		thumbImg.addEventListener('mouseleave', function() {
			let img = thumbImg.querySelector('img');
			if (img) {
				// margin-top을 0으로 재설정
				img.style.marginTop = '0';
			}
		});
	});



	
});