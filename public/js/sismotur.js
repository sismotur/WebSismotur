/**
 * @author Sismotur
 */

 function isMobile(){
 	var device = navigator.userAgent;

 	return device.match(/Iphone/i) || 
 			device.match(/Ipod/i)|| 
 			device.match(/Android/i)|| 
 			device.match(/J2ME/i)|| 
 			device.match(/BlackBerry/i)|| 
 			device.match(/iPhone|iPad|iPod/i)|| 
 			device.match(/Opera Mini/i)|| 
 			device.match(/IEMobile/i)|| 
 			device.match(/Mobile/i)|| 
 			device.match(/Windows Phone/i)|| 
 			device.match(/windows mobile/i)|| 
 			device.match(/windows ce/i)|| 
 			device.match(/webOS/i)|| 
 			device.match(/palm/i)|| 
 			device.match(/bada/i)||
 			device.match(/series60/i)|| 
 			device.match(/nokia/i)|| 
 			device.match(/symbian/i)|| 
 			device.match(/HTC/i);
 }
    		
function loadScenes(){	
	scene = new ScrollScene({triggerElement: "#trigger1"})
					.setTween(TweenMax.to('#contactBanner',0.5,{css:{visibility: "hidden"}}))
					.addTo(controller);	
	
	//scene.addIndicators();
}

function parallaxBanner(){
	var controller = new ScrollMagic({globalSceneOptions: {triggerHook: "onLeave", duration: $('#smt-banner-par').height()}});
	
	var scene1 = new ScrollScene({triggerElement: "#parallaxTrigger"})
			.setTween(TweenMax.fromTo("#smt-banner-par", 1, {backgrounPosition: "0 50px"}, {backgrounPosition: "0 -50px"}))
			.addTo(controller);
			
	var scene2 = new ScrollScene({triggerElement: "#parallaxTrigger"})
			.setTween(TweenMax.fromTo("#smt-banner-trans-par", 1, {autoAlpha: 0.2}, {autoAlpha: 1}))
			.addTo(controller);
			
	var scene3 = new ScrollScene({triggerElement: "#parallaxTrigger"})
			.setTween(TweenMax.fromTo("#smt-slogan-par", 1, {paddingTop: "25vh"}, {paddingTop: "0vh"}))
			.addTo(controller);
			
	var scene4 = new ScrollScene({triggerElement: "#parallaxTrigger"})
			.setTween(TweenMax.fromTo("#product", 1, {paddingTop: "50%"}, {paddingTop: "0%"}))
			.addTo(controller);			
	//scene1.addIndicators();
	
}

function parallaxObjectives(){
	var controller = new ScrollMagic({globalSceneOptions: {triggerHook: "onEnter", duration: $('#objectives').height()}});
	
	var scene1 = new ScrollScene({triggerElement: "#obtectivesTrigger"})
			.setTween(TweenMax.fromTo("#objectiveTitle", 1, {paddingTop: "10%"}, {paddingTop: "0%"}))
			.addTo(controller);
			
	var scene2 = new ScrollScene({triggerElement: "#obtectivesTrigger"})
			.setTween(TweenMax.fromTo("#objectiveContent", 1, {paddingTop: "25%"}, {paddingTop: "0%"}))
			.addTo(controller);
			
	//scene1.addIndicators();
}

function parallaxTecnologic(){
	var controller = new ScrollMagic({globalSceneOptions: {triggerHook: "onEnter", duration: $('#tecnologic').height()}});
	
	var scene1 = new ScrollScene({triggerElement: "#tecnologicTrigger"})
			.setTween(TweenMax.fromTo("#tecnologicTitle", 1, {paddingTop: "10%"}, {paddingTop: "0%"}))
			.addTo(controller);
			
	var scene2 = new ScrollScene({triggerElement: "#tecnologicTrigger"})
			.setTween(TweenMax.fromTo("#tecnologicContent", 1, {paddingTop: "25%"}, {paddingTop: "0%"}))
			.addTo(controller);
			
	//scene1.addIndicators();
}

function parallaxSection(){
	var controller = new ScrollMagic({globalSceneOptions: {triggerHook: "onEnter", duration: $('#resume-one-trigger').height()}});
	
	var scene = new ScrollScene({triggerElement: "#resume-one-trigger"})
			.setTween(TweenMax.fromTo("#resume-one", 10, {css:{'background-position':"0px 0px"}},{css:{'background-position':"0px -250px"}}))
			.addTo(controller);
			
	scene.addIndicators();
}


function opaqueMenu(){
	var controller = new ScrollMagic({globalSceneOptions: {triggerHook: 0.1, duration: 0}});
	
	var scene = new ScrollScene({triggerElement: "#menuTrigger"})
			.setTween(TweenMax.fromTo("#smt-menu", 0, {visibility: 'hidden'},{visibility: 'visible'}))
			.addTo(controller);
			
	var scene2 = new ScrollScene({triggerElement: "#menuTrigger"})
			.setTween(TweenMax.fromTo(".menuRef", 0, {visibility: 'hidden'},{visibility: 'visible'}))
			.addTo(controller);
			
	//scene.addIndicators();
}

function stopProducts(){
	var controller = new ScrollMagic({globalSceneOptions: {triggerHook: 0.1, duration: 1000}});
	
	var scene = new ScrollScene({triggerElement: "#product"})
				.setPin("#product")
				.addTo(controller);
				
	//scene.addIndicators();
}

function showProductContents(){
	var controller = new ScrollMagic({globalSceneOptions: {triggerHook: 50/$(window).height(), duration: 0}});
		
	var scene = new ScrollScene({triggerElement: "#product"})
			.setTween(TweenMax.fromTo("#productsContent", 1.5, {autoAlpha: 0, x: -window.innerWidth}, {autoAlpha: 1, x: 0}))
			.addTo(controller);
			
	//scene.addIndicators();
}

function stopTeam(){
	var controller = new ScrollMagic({globalSceneOptions: {triggerHook: 50/$(window).height(), duration: 1000}});
	
	var scene = new ScrollScene({triggerElement: "#team"})
				.setPin("#team")
				.addTo(controller);
				
	//scene.addIndicators();
}

function parallaxTeam(){
	var controller = new ScrollMagic({globalSceneOptions: {triggerHook: "onEnter", duration: $('#team').height()}});
	
	var scene1 = new ScrollScene({triggerElement: "#team"})
			.setTween(TweenMax.fromTo("#team-tittle", 1, {paddingTop: "10%"}, {paddingTop: "0%"}))
			.addTo(controller);
			
	var scene2 = new ScrollScene({triggerElement: "#team"})
			.setTween(TweenMax.fromTo("#row1", 1, {paddingTop: "25%"}, {paddingTop: "0%"}))
			.addTo(controller);
			
	var scene3 = new ScrollScene({triggerElement: "#team"})
			.setTween(TweenMax.fromTo("#row2", 1, {paddingTop: "25%"}, {paddingTop: "0%"}))
			.addTo(controller);
			
	var scene4 = new ScrollScene({triggerElement: "#team"})
			.setTween(TweenMax.fromTo("#row3", 1, {paddingTop: "25%"}, {paddingTop: "0%"}))
			.addTo(controller);
			
	//scene1.addIndicators();
}

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}