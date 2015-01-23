/**
 * @author Sismotur SL
 */

var myApp = angular.module('smtApp',[]);

myApp.controller('languagesController', ['$scope', function($scope){
	var lang = navigator.language.substr(0,2);
	//alert(lang);
	
	// ******************
	// COMMON ATTRIBUTES
	// ******************
	// Menu
	$scope.mnInven = 'Inventrip';
	$scope.mnSigni = 'Signing';	
	// Tecnology
	$scope.nfcTittle = 'NFC';
	$scope.beaconTittle = 'Beacons';
	$scope.qrTittle = 'QR';
	$scope.dronTittle = 'DronTrip';
	// Inventrip
	$scope.invTittle = 'Inventrip';
	// Signing
	$scope.sigTittle = 'Signing';
	$scope.moreInfoShort = 'MÁS INFO';

	$scope.btnTitleTeam = 'Staff';
	
	// Browser language selector
	switch(lang){

		// SPANISH
		case "es":
			// ******************
			// TITULO WEB
			// ******************
			$scope.tittle1 = 'Trabajamos para promocionar y desarrollar destinos turisticos inteligentes';
			
			// ******************
			// MENU
			// ******************
			$scope.mnObjet = 'Objetivos';
			$scope.mnTecno = 'Tecnologías';
			$scope.mnTeam = 'Staff';
			$scope.mnCont = 'Contacto';
			
			// ******************
			// SEPARADOR GRIS 1
			// ******************
			$scope.resume1 = 'Atendemos las necesidades de cada cliente';
			
			// ******************
			// OBJETIVOS
			// ******************

			$scope.obj1Tittle = 'Destinos Turísticos';
			$scope.obj1Text = 'Aumenta el número de turistas que visitan tu territorio y mejora su acogida en el destino mediante la integración de sistemas avanzados offline/físicos (señalización) con sistemas on-line/digitales, utilizando las mejores tecnologías.';

			//$scope.obj1Resume = 'Sistemas';

			$scope.obj2Tittle = 'Servicios Turísticos';
			$scope.obj2Text = 'Potencia tu canal de ventas on-line ofreciendo información, productos y servicios personalizados a tus clientes a través de la plataforma inventrip. Promociona tu imagen de marca con la difusión por las redes sociales de vídeos turísticos realizados con drones.';
			
			//$scope.obj2Resume = 'Movilidad';
			
			$scope.obj3Tittle = 'Viajeros';
			$scope.obj3Text = 'Los turistas podrán conocer gratuitamente con la plataforma inventrip los encantos de los destinos y las propuestas de servicios y actividades turísticos. Podrán fácilmente planificar su viaje, consultarlo durante su estancia y compartirlo con amigos y familiares.';

			//$scope.obj3Resume = 'Turismo';
			
			// REVISAR
			$scope.btnMoreInfo = '¿Quieres descubrir un caso de éxito?';

			// ******************
			// SEPARADOR GRIS 2
			// ******************
			$scope.tecTittle = 'Ponemos a tu disposición las mejores tecnologías';

			// ******************
			// TECNOLOGIAS
			// ******************

			// DronTrip
			$scope.dronText = 'Utiliza vuelos turísticos con Drones para viralizar por las redes sociales la promoción de destinos y servicios turísticos.';
			
			// NFC
			$scope.nfcText = 'Entrega a tus clientes tarjetas NFC (contactless) para personalizar su experiencia turística en el destino.';
			
			// Signal
			$scope.senalizacionTittle = 'Señalización';
			$scope.senalizacionText = 'Implanta un sistema de señalización para facilitar el guiado a los turistas y mejorar la calidad de imagen del destino.';

			// QR
			$scope.qrText = 'Comparte un viaje turístico a través de códigos QR.';
			
			// Beacons
			$scope.beaconText = 'Despliega la nueva tecnología beacons para dar información contextualizada al turista y ofrecerle productos y servicios personalizados en su teléfono móvil.';
			
			
			// ******************
			// SEPARADOR GRIS 3
			// ******************
			$scope.servTittle = 'Implantamos servicios avanzados en la nube';

			// ******************
			// TECNOLOGIAS
			// ******************

			// Inventrip
			$scope.invText = 'Inventar viajes: esa es la visión. Te proporcionamos una plataforma tecnológica con la que tus viajeros podrán crear su plan de viaje (por días, ciudades, temas, etc.) y navegando por el mapa podrán ir añadiendo los recursos que quieran visitar y servicios que deseen contratar.';

			$scope.btnInventrip = 'Ir a Inventrip';			

			// Signing 
			$scope.sigText = 'Signing es un servicio web especializado para la planificación y gestión de la señalización territorial y urbana utilizado por más de 30 administraciones públicas. Fue desarrollado en 2009 en el marco de un Plan Avanza de I+D del Ministerio de Industria, Turismo y Comercio.';
			
			$scope.btnSigning = 'Más información';

			// ******************
			// CONTACTO
			// ******************
			$scope.cntSpain = 'España';
			$scope.cntSpain2 = 'Madrid & Barcelona';
			$scope.cntSpainPhone = '+34 913.238.208';
			
			$scope.cntFrance = 'Francia';
			$scope.cntFrance2 = 'Annecy';
			$scope.cntFrancePhone = '+33 (0)619.20.30.61';
			
			$scope.cntCroatia = 'Croacia';
			$scope.cntCroatia2 = 'Zagreb';
			$scope.cntCroatiaPhone = '+385.16187750';

			$scope.cntAustria = 'Austria';
			$scope.cntAustria2 = 'Innsbruk';
			$scope.cntAustriaPhone = '+43 699.111.43611';

			$scope.cntSuiza = 'Suiza';
			$scope.cntSuiza2 = 'Lussanne';
			$scope.cntSuizaPhone = '+41.76.393.72.52';

			$scope.cntPortugal = 'Portugal';
			$scope.cntPortugal2 = '';
			$scope.cntPortugalPhone = '+34 629.415.915';
			
			$scope.btnContact = 'Contactar';
			$scope.copyright = 'Copyright © 2015 SISMOTUR SL.';


			// *********************
			// SUBSECCION TECNOLOGIA
			// *********************

			// Página DronTrip
			$scope.DronTriptext1 = '¡Te invitamos a volar por la provincia de Palencia!';
			$scope.DronTripbutton1 = 'Ver Video';

			// Página NFC
			$scope.NFCtitle1 = 'Implant teatro Croacia';
			$scope.NFCtext1 = 'Tarjetas NFC entregadas durante la premiere de la obra de teatro "Mobitel" en Zagreb. Las tarjetas contienen el programa de la representación de la obra durante 2015 en Croacia';
			$scope.NFCbutton1 = 'Ver programa';

			$scope.NFCtitle2 = 'Tarjetas NFC Palencia Turismo'
			$scope.NFCtext2 = 'Palencia Turismo presentó inventrip a los medios durante la pasada Feria de Turismo Interior (INTUR) e hizo entrega de tarjetas NFC con un viaje por la Provincia de Palencia.';
			$scope.NFCbutton2 = 'Descubre el viaje';

			// Página Señalización
			$scope.SenyalizacionTitle = 'Sismotur SL - Señalización'

			$scope.Sentitle1 = 'Barcelona';
			$scope.Sentext1 = 'Diseño de la nueva señalización turística peatonal llevado a cabo por Sismotur para la ciudad de Barcelona.';

			$scope.Sentitle2 = 'Castilla y León';
			$scope.Sentext2 = 'La Consejera y el Director General de Turismo de Castilla y León, conjuntamente con Sismotur, presentaron en la pasada edición de INTUR el programa de mejora de la señalización turística de la región.';

			$scope.Sentitle3 = 'Ribera del Duero';
			$scope.Sentext3 = 'Implantación integral de todos los equipamentos de señalización territorial y urbana para la Ruta Ribera del Duero.';

			// Página QR
			$scope.QRtitle1 = 'Normandía y Bretaña'
			$scope.QRtext1 = '¡Descubre un viaje por Normandía y Bretaña escaneando este código QR!';
			$scope.QRbutton1 = 'Descubre el viaje';

			$scope.QRtitle2 = 'Barcelona';
			$scope.QRtext2 = 'Sismotur redactó en 2012 el primer plan de señalización e información turística de la ciudad de Barcelona para el distrito de Horta-Guinardó.';
			$scope.QRbutton2 = 'Más Info';

			// Página Beacon
			$scope.Beacontitle1 = 'Beacon'
			$scope.Beacontext1 = 'Propuesta de la tecnología beacons a la provincia de Palencia.';
			break;

		// CATALAN
		case "ca":
			$scope.tittle1 = 'Consultoria en senyalització i informació turística';
			break;

		// GERMAN
		case "de":
			$scope.tittle1 = 'Lo mismo pero en croata';
			break;

		// FRENCH
		case "fr":
			$scope.tittle1 = 'Consultant en signalisation et information touristique';
			break;

		// CROATIAN
		case "hr":
			$scope.tittle1 = 'Lo mismo pero en croata';
			break;

		// ENGLISH
		default:
			$scope.tittle1 = '(en) Consulting signage and tourist information';
			$scope.mnObjet = 'Objectives';
			$scope.mnTecno = 'Tecnologies';
			$scope.mnTeam = 'Team';
			$scope.mnCont = 'Contact';
			break;
	}
	
}]);
