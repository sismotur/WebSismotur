/**
 * @author Sismotur
 */

function isMobile() {
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

function parallaxBanner() {

	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onLeave", duration: $('#parallaxTrigger').height()}});

	var scene2 = new ScrollMagic.Scene({triggerElement: "#parallaxTrigger"})
			.setTween(TweenMax.fromTo("#fondo-azul", 1, {autoAlpha: 0.1}, {autoAlpha: 1}))
			.addTo(controller);
	//scene2.addIndicators();
}

function opaqueMenu() {
	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 0.1, duration: 0}});

	var scene = new ScrollMagic.Scene({triggerElement: "#menuTrigger"})
			.setTween(TweenMax.fromTo("#smt-menu", 0, {visibility: 'hidden'},{visibility: 'visible'}))
			.addTo(controller);

	var scene2 = new ScrollMagic.Scene({triggerElement: "#menuTrigger"})
			.setTween(TweenMax.fromTo("header", 0, {visibility: 'hidden'},{visibility: 'visible'}))
			.addTo(controller);

	//scene.addIndicators();
}

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}

// Vídeo Montánchez, only in Spanish, but this can be called to make link dependent on language
function videoYotube(){
  // get the cookie value or the navigator by default
	var lang = getCookie('lang');
	if (lang == "") { getDefaultNavigatorLanguage(); }

	var video = "";
	switch(lang){
		case "es":
			video = "https://www.youtube.com/watch?v=kOtfrKYdvNU";
			break;
		case "fr":
			video = "https://www.youtube.com/watch?v=kOtfrKYdvNU";
			break;
		case "hr":
			video = "https://www.youtube.com/watch?v=kOtfrKYdvNU";
			break;
		case "de":
			video = "https://www.youtube.com/watch?v=kOtfrKYdvNU";
			break;
		default:
			video = "https://www.youtube.com/watch?v=kOtfrKYdvNU";
			break;
	}

	window.open(video);
}

function casoExito(){
  // get the cookie value or the navigator by default
	var lang = getCookie('lang');
	if (lang == "") { getDefaultNavigatorLanguage(); }

	var video = "";
	switch(lang){
		case "es":
			video = "http://www.youtube.com/watch?v=A_DzRaJbtvM";
			break;
		case "fr":
			video = "http://www.youtube.com/watch?v=QLQwePHyc08";
			break;
		/*case "hr":
			video = "http://www.youtube.com/watch?v=-PzUrNnvaFw";
			break;*/
		case "de":
			video = "http://www.youtube.com/watch?v=Y7eKWSXKJcY";
			break;
		default:
			video = "http://www.youtube.com/watch?v=RZTPCdGVrgw";
			break;
	}

	window.open(video);
}

function inventrip(){
  // get the cookie value or the navigator by default
	var lang = getCookie('lang');
	if (lang == "") { getDefaultNavigatorLanguage(); }

	var url = "";
	switch(lang) {
		case "es":
			url = "http://www.inventrip.com?lang=es";
			break;
		case "fr":
			url = "http://www.inventrip.com?lang=fr";
			break;
		case "hr":
			url = "http://www.inventrip.com?lang=hr";
			break;
		case "ca":
			url = "http://www.inventrip.com?lang=ca";
			break;
		/*case "de":
			video = "http://www.inventrip.com?lang=de";
			break;*/
		default:
			url = "http://www.inventrip.com?lang=en";
			break;
	}

	window.open(url);
}

// Opens a window with Inventrip Palencia in the right language
function nfcPalencia(){
  // get the cookie value or the navigator by default
	var lang = getCookie('lang');
	if (lang == "") { getDefaultNavigatorLanguage(); }

	var url = "";
	switch(lang){
		case "es":
			url = "http://www.inventrip.com/diputaciondepalencia?lang=es";
			break;
		case "fr":
			url = "http://www.inventrip.com/diputaciondepalencia?lang=fr";
			break;
		case "hr":
			url = "http://www.inventrip.com/diputaciondepalencia?lang=hr";
			break;
		case "ca":
			url = "http://www.inventrip.com/diputaciondepalencia?lang=ca";
			break;
		/*case "de":
			video = "http://www.inventrip.com/diputaciondepalencia?lang=de";
			break;*/
		default:
			url = "http://www.inventrip.com/diputaciondepalencia?lang=en";
			break;
	}

	window.open(url);
}

/**
* Will open the inventrip passport in a new window based upon the user language
*/
function doOpenPassportInventrip() {
  // get the cookie value or the navigator by default
	var lang = getCookie('lang');
	if (lang == "") { getDefaultNavigatorLanguage(); }
  // console.log(lang);

	var url = "";
	switch(lang){
		case "es":
			url = "https://www.flipsnack.com/inventrip/pasaporte_inventrip_es.html";
			break;
		case "pt":
			url = "https://www.flipsnack.com/inventrip/passaporte_inventrip-fuil4pm3z.html";
			break;
    case "fr":
			url = "https://www.flipsnack.com/inventrip/passeport_inventrip_fr.html";
			break;
		default: // no other languages are available yet, so open email
			url = "mailto:contacto@sismotur.com";
			break;
	}

	window.open(url);
}

/**
* Returns the value of a cookie based on its input
* @param input the cookie key (e.g. lang)
* @return the value associated with the key
*/
function getCookie(input) {
  var cookies = document.cookie.split(';');
  // console.log('getCookie - cookies:' + cookies)
  for (var i = 0; i < cookies.length; i++) {
    var name = cookies[i].split('=')[0].toLowerCase().trim();
    var value = cookies[i].split('=')[1].toLowerCase().trim();
    // console.log('getCookie - name:' + name);
    // console.log('getCookie - value:' + value);
    if (name === input) {
      return value;
    } else if (value === input) {
      return name;
    }
  }
  return "";
};

/**
* Returns the default navigator language
*/
function getDefaultNavigatorLanguage() {
  return navigator.language.substr(0,2);
}
