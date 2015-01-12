/**
 * @author Sismotur SL
 */

var myApp = angular.module('smtApp',[]);

myApp.controller('languagesController', ['$scope', function($scope){
	var lang = navigator.language.substr(0,2);
	//alert(lang);
	
	// Put common attributes
	$scope.mnInven = 'Inventrip';
	$scope.mnSigni = 'Signing';
	$scope.senalizacionTittle = 'Señalización';
	$scope.nfcTittle = 'NFC';
	$scope.beaconTittle = 'Beacon';
	$scope.qrTittle = 'QR';
	$scope.dronTittle = 'DronTrip';
	$scope.invTittle = 'Inventrip';
	$scope.sigTittle = 'Signing';
	$scope.moreInfoShort = 'MÁS INFO';
	
	switch(lang){
		case "es":
			$scope.tittle1 = 'Consultoría en señalización e información turística';
			
			$scope.mnObjet = 'Objetivos';
			$scope.mnTecno = 'Tecnologías';
			$scope.mnTeam = 'Equipo';
			$scope.mnCont = 'Contacto';
			
			$scope.resume1 = 'Servicios avanzados en la nube';
			
			$scope.obj1Tittle = 'Objetivo 1';
			$scope.obj1Text = 'Aquí iria un texto descriptivo del producto Note: As with images and other media, check the license of the font you wish to use before implementing it. Many fonts are not yet licensed for this kind of use on the web.';
			$scope.obj1Resume = 'Sistemas';
			$scope.obj2Tittle = 'Objetivo 2';
			$scope.obj2Text = 'Aquí iria un texto descriptivo del producto Note: As with images and other media, check the license of the font you wish to use before implementing it. Many fonts are not yet licensed for this kind of use on the web.';
			$scope.obj2Resume = 'Movilidad';
			$scope.obj3Tittle = 'Objetivo 3';
			$scope.obj3Text = 'Aquí iria un texto descriptivo del producto Note: As with images and other media, check the license of the font you wish to use before implementing it. Many fonts are not yet licensed for this kind of use on the web.';
			$scope.obj3Resume = 'Turismo';
			
			$scope.btnMoreInfo = 'Más Información';
			
			$scope.tecTittle = 'Con las últimas tecnologías';
			$scope.senalizacionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id condimentum velit. Nullam quis euismod velit, vel scelerisque erat. Morbi at tincidunt elit. Aenean ut posuere diam, quis lobortis sem. Fusce malesuada ligula risus, eu porta justo venenatis convallis.';
			$scope.nfcText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id condimentum velit. Nullam quis euismod velit, vel scelerisque erat. Morbi at tincidunt elit. Aenean ut posuere diam, quis lobortis sem. Fusce malesuada ligula risus, eu porta justo venenatis convallis.';
			$scope.beaconText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id condimentum velit. Nullam quis euismod velit, vel scelerisque erat. Morbi at tincidunt elit. Aenean ut posuere diam, quis lobortis sem. Fusce malesuada ligula risus, eu porta justo venenatis convallis.';
			$scope.qrText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id condimentum velit. Nullam quis euismod velit, vel scelerisque erat. Morbi at tincidunt elit. Aenean ut posuere diam, quis lobortis sem. Fusce malesuada ligula risus, eu porta justo venenatis convallis.';
			$scope.dronText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id condimentum velit. Nullam quis euismod velit, vel scelerisque erat. Morbi at tincidunt elit. Aenean ut posuere diam, quis lobortis sem. Fusce malesuada ligula risus, eu porta justo venenatis convallis.';
			
			$scope.invText = 'También es texto una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras, un texto es un entramado de signos con una intención comunicativa que adquiere sentido en determinado contexto.';
			$scope.btnInventrip = 'Ir a Invetrip';
			
			$scope.sigText = 'Texto explicativo de Signing';
			$scope.btnSigning = 'Ir a Signig';
			
			$scope.cntSpain = 'España';
			$scope.cntSpain2 = 'Madrid & Barcelona';
			$scope.cntSpainPhone = '+34 913238208';
			
			$scope.cntFrance = 'Francia';
			$scope.cntFrance2 = 'Annecy';
			$scope.cntFrancePhone = '+33(0)619203061';
			
			$scope.cntCroatia = 'Croacia';
			$scope.cntCroatia2 = 'Zagreb';
			$scope.cntCroatiaPhone = '+385.16187750';
			
			$scope.btnContact = 'Contactar';
			
			$scope.copyright = 'Copyright © 2012 SISMOTUR SL.';
			break;
		case "ca":
			$scope.tittle1 = 'Consultoria en senyalització i informació turística';
			break;
		case "fr":
			$scope.tittle1 = 'Consultant en signalisation et information touristique';
			break;
		case "hr":
			$scope.tittle1 = 'Lo mismo pero en croata';
			break;
		default:
			$scope.tittle1 = 'Consulting signage and tourist information';
			$scope.mnObjet = 'Objectives';
			$scope.mnTecno = 'Tecnologies';
			$scope.mnTeam = 'Team';
			$scope.mnCont = 'Contact';
			break;
	}
	
}]);
