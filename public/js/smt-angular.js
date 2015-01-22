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
	$scope.nfcTittle = 'NFC';
	$scope.beaconTittle = 'Beacon';
	$scope.qrTittle = 'QR';
	$scope.dronTittle = 'DronTrip';
	$scope.invTittle = 'Inventrip';
	$scope.sigTittle = 'Signing';
	$scope.moreInfoShort = 'MÁS INFO';
	
	switch(lang){
		case "es":
			$scope.tittle1 = 'Trabajamos para promocionar y desarrollar destinos turisticos inteligentes';
			
			$scope.mnObjet = 'Objetivos';
			$scope.mnTecno = 'Sistemas/Tecnologías';
			$scope.mnTeam = 'Equipo';
			$scope.mnCont = 'Contacto';
			
			$scope.resume1 = 'Atendemos las necesidades de cada cliente';
			
			$scope.obj1Tittle = 'Promocionar Destinos Turísticos';
			$scope.obj1Text = 'Con la implantación de sistemas avanzados de señalización e información turistica.';
			//$scope.obj1Resume = 'Sistemas';
			$scope.obj2Tittle = 'Dotar de Tecnología a Servicios Turísticos';
			$scope.obj2Text = 'Para mejorar la promoción y comercialización de sus productos y servicios.';
			//$scope.obj2Resume = 'Movilidad';
			$scope.obj3Tittle = 'Mejorar la Experiencia Turística del Viajero';
			$scope.obj3Text = 'Facilitándoles la planificación y seguimiento de su viaje con el servicio Inventrip.';
			//$scope.obj3Resume = 'Turismo';
			
			$scope.btnMoreInfo = 'Más Información';

			$scope.senalizacionTittle = 'Señalización';
			
			$scope.tecTittle = 'Implantación de Destinos Turísticos Inteligentes';
			$scope.senalizacionText = 'Implanta un sistema de señalización para facilitar el guiado a los turistas y mejorar la calidad de imagen del entrono.';
			$scope.nfcText = 'Entrega tarjetas NFC para personalizar la experiencia turística de tu cliente en el destino.';
			$scope.beaconText = 'Despliega la nueva tecnología beacons para dar información contextualizada al turista u ofrecerle productos y servicios.';
			$scope.qrText = 'Comparte un viaje turístico a través de códigos QR.';
			$scope.dronText = 'Utiliza vuelos turísticos con Drones para viralizar la promoción de destinos y servicios turísticos.';
			
			$scope.servTittle = 'Implantación de servicios avanzados en la nube';
			$scope.invText = 'Inventar viajes: esa es la visión. Proporcionar al usuario una plataforma tecnología con la que pueda crear su plan de viaje (por días, ciudades, temas, etc.) y navegando por el mapa pueda ir añadiendo los recursos y servicios que quiera visitar.';
			$scope.btnInventrip = 'Ir a Inventrip';			
			$scope.sigText = 'Signing es un servicio web especializado para la planificación y gestión de la señalización territorial y urbana. Desarrollado en el marco de un Plan Avanza de I+D del Ministerio de Industria, Turismo y Comercio, es utilizado por más de 20 administraciones públicas.';
			
			$scope.cntSpain = 'España';
			$scope.cntSpain2 = 'Madrid & Barcelona';
			$scope.cntSpainPhone = '+34 913238208';
			
			$scope.cntFrance = 'Francia';
			$scope.cntFrance2 = 'Annecy';
			$scope.cntFrancePhone = '+33(0)619203061';
			
			$scope.cntCroatia = 'Croacia';
			$scope.cntCroatia2 = 'Zagreb';
			$scope.cntCroatiaPhone = '+385.16187750';

			$scope.cntAustria = 'Austria';
			$scope.cntAustria2 = 'Innsbruk';
			$scope.cntAustriaPhone = '+';

			$scope.cntSuiza = 'Suiza';
			$scope.cntSuiza2 = 'Lussanne';
			$scope.cntSuizaPhone = '+';

			$scope.cntPortugal = 'Portugal';
			$scope.cntPortugal2 = '';
			$scope.cntPortugalPhone = '+34 629415915';
			
			$scope.btnContact = 'Contactar';
			
			$scope.copyright = 'Copyright © 2015 SISMOTUR SL.';

			// Página DronTrip
			$scope.DronTripbutton1 = 'Ver Viaje';

			// Página NFC
			$scope.NFCtext1 = 'Tarjetas NFC entregadas durante la premiere de la obra de Teatro móvil en Croacia.';
			$scope.NFCbutton1 = 'Más Info';

			$scope.NFCtext2 = 'Presentación de las Tarjetas NFC por Palencia Turismo durante la pasada Feria de Turismo Interior, INTUR.';
			$scope.NFCbutton2 = 'Más Info';

			// Página Señalización
			$scope.Sentext1 = 'Diseño de la nueva señalización turística peatonal llevado a cabo por Sismotur para la ciudad de Barcelona.';
			$scope.Senbutton1 = 'Más Info';

			$scope.Sentext2 = 'Participación de Sismotur en la presentación de la Consejera y Director General de Turismo de Castilla y León del programa de mejora de la señalización turistica de Castilla y León.';
			$scope.Senbutton2 = 'Más Info';

			$scope.Sentext3 = 'Implantación integral de todos los equipamentos de señalización territorial y urbana para la Ruta Ribera del Duero.';
			$scope.Senbutton3 = 'Más Info';

			// Página QR
			$scope.QRtext1 = 'FS+MM: Dejar preparado un viaje con pocos recursos pero con contenidos.';
			$scope.QRbutton1 = 'Más Info';

			$scope.QRtext2 = 'Prensentación a la prensa del plan de señalización e información.';
			$scope.QRbutton2 = 'Más Info';
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
