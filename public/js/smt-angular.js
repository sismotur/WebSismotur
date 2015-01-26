/**
 * @author Sismotur SL
 */

var myApp = angular.module('smtApp',[]);

myApp.controller('languagesController', ['$scope', function($scope){
	var lang = navigator.language.substr(0,2);
	// alert(lang);
	
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

		// ***********************************************************************************************
		// **************************************** SPANISH **********************************************
		// ***********************************************************************************************

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
			$scope.obj2Text = 'Potencia tu canal de ventas on-line ofreciendo información, productos y servicios personalizados a tus clientes a través de la plataforma Inventrip. Promociona tu imagen de marca con la difusión por las redes sociales de vídeos turísticos realizados con drones.';
			
			//$scope.obj2Resume = 'Movilidad';
			
			$scope.obj3Tittle = 'Inventar Viajes';
			$scope.obj3Text = 'Los turistas podrán conocer gratuitamente con la plataforma Inventrip los encantos de los destinos y las propuestas de servicios y actividades turísticos. Podrán fácilmente planificar su viaje, consultarlo durante su estancia y compartirlo con amigos y familiares.';

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
			$scope.invTextA = 'Inventar viajes: esa es la visión';
			$scope.invTextB = 'Te proporcionamos una plataforma tecnológica con la que tus viajeros podrán crear su plan de viaje (por días, ciudades, temas, etc.) y navegando por el mapa podrán ir añadiendo los recursos que quieran visitar y servicios que deseen contratar.';

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
			$scope.cntSuiza2 = 'Lausanne';
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
			$scope.NFCtext2 = 'Palencia Turismo presentó Inventrip a los medios durante la pasada Feria de Turismo Interior (INTUR) e hizo entrega de tarjetas NFC con un viaje por la Provincia de Palencia.';
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

			// *********************
			// STAFF
			// *********************

			$scope.StaffCEO = 'Cofundador - CEO';
			$scope.StaffCOO = 'Cofundador - COO';
			$scope.StaffCMO = 'Socio - CMO';
			$scope.StaffCTO = 'Socio - CTO';
			$scope.StaffCLO = 'Socio - CLO';
			$scope.StaffHeadDev = 'Jefe Dpto. Desarrollo';
			$scope.StaffArtificialInt = 'Inteligencia Artificial';
			$scope.StaffDesign = 'Diseño & Comunicación';
			$scope.AssociateBcn = 'Técnico Barcelona';
			$scope.AssociateProjects = 'Jefe Proyectos';
			$scope.StaffCoordinatorCroatia = 'Coordinador Croacia';
			$scope.StaffCoordinatorAustria = 'Coordinador Austria';
			$scope.StaffCoordinatorSwitzerland = 'Coordinador Suiza';
			$scope.StaffCoordinatorPortugal = 'Coordinador Portugal';

			break;

/*		
		// ***********************************************************************************************
		// **************************************** CATALAN **********************************************
		// ***********************************************************************************************

		case "ca":
			$scope.tittle1 = 'Consultoria en senyalització i informació turística';
			break;


		// ***********************************************************************************************
		// **************************************** GERMAN ***********************************************
		// ***********************************************************************************************
		case "de":
			$scope.tittle1 = 'Lo mismo pero en croata';
			break;

		
		// ***********************************************************************************************
		// **************************************** FRENCH ***********************************************
		// ***********************************************************************************************
		case "fr":
			$scope.tittle1 = 'Consultant en signalisation et information touristique';
			break;


		// ***********************************************************************************************
		// **************************************** CROATIAN *********************************************
		// ***********************************************************************************************
		case "hr":
			$scope.tittle1 = 'Lo mismo pero en croata';
			break;
*/
		// ***********************************************************************************************
		// **************************************** ENGLISH **********************************************
		// ***********************************************************************************************
		default:

			$scope.moreInfoShort = 'MORE INFO';
			// ******************
			// WEB TITLE
			// ******************
			$scope.tittle1 = 'We work to promote and develop smart tourism destinations';

			
			// ******************
			// MENU
			// ******************
			$scope.mnObjet = 'Objectives';
			$scope.mnTecno = 'Technologies';
			$scope.mnTeam = 'Staff';
			$scope.mnCont = 'Contact';
			
			// ****************
			// GREY SEPARATOR 1
			// ****************
			$scope.resume1 = 'We meet the needs of each client';
			
			// ******************
			// OBJETIVOS
			// ******************

			$scope.obj1Tittle = 'Tourism Destinations'; // revisar touristic
			$scope.obj1Text = 'Increase the amount of tourists who visit your destination and improve their welcome by integrating advanced offline systems (tourist signs) with digital online systems, using the best technologies.';


			//$scope.obj1Resume = 'Sistemas';

			$scope.obj2Tittle = 'Tourism Services';
			$scope.obj2Text = 'Enhance your online sales channel offering information, products and tailored services to your clients through the Inventrip platform. Promote your brand by sharing tourism videos shot with drones in the social networks.';
			
			//$scope.obj2Resume = 'Movilidad';
			
			$scope.obj3Tittle = 'Travellers';
			$scope.obj3Text = 'Travellers will discover the charm of tourism destinations and the proposals of touristic services and activities therein. They will plan their trip easily, consult it during their stay and share it with family members and friends.';


			//$scope.obj3Resume = 'Turismo';
			
			// REVISAR
			$scope.btnMoreInfo = 'Discover a practical example of success';

			// ******************
			// GREY SEPARATOR 2
			// ******************
			$scope.tecTittle = 'We put at your disposal the best technologies';

			// ******************
			// TECNOLOGIAS
			// ******************

			// DronTrip
			$scope.dronText = 'Use tourism videos shot with drones to promote and viralize your destination and touristic services across social networks.';
			
			// NFC
			$scope.nfcText = 'Provide to your clients with NFC cards (contactless) to personalize their experience in your touristic destination.';
			
			// Signal
			$scope.senalizacionTittle = 'Traffic Signs'; // revisar
			$scope.senalizacionText = 'Implement a traffic sign system to facilitate tourist guiding and improve the perceived quality of your destination.';

			// QR
			$scope.qrText = 'Share a touristic trip through QR codes.';
			
			// Beacons
			$scope.beaconText = 'Deploy the new beacon technology to give tourists contextualized information and offer them tailored products and services in their smartphone.';
			
			
			// ******************
			// GREY SEPARATOR 3
			// ******************
			$scope.servTittle = 'We implement advanced cloud computing services';

			// ******************
			// TECNOLOGIAS
			// ******************

			// Inventrip
			$scope.invTextA = 'To invent trips: this is the vision';
			$scope.invTextB = 'We provide you with a technological platform that enable your travellers to create their own trip plans (organized by days, cities, topics, etc.), and by navigating on the map add the places they want to visit and the services they want to hire.';

			$scope.btnInventrip = 'Go to Inventrip';			

			// Signing 
			$scope.sigText = 'Signing is a cloud computing web service specialized on the planification and management of territorial and urban signage systems which is used by more than 30 public administrations. It was developed in 2009 and benefited of the support of a R&D funding plan from the State of Spain';
	
			$scope.btnSigning = 'More information';

			// ******************
			// CONTACTO
			// ******************
			$scope.cntSpain = 'Spain';
			$scope.cntSpain2 = 'Madrid & Barcelona';
			$scope.cntSpainPhone = '+34 913.238.208';
			
			$scope.cntFrance = 'France';
			$scope.cntFrance2 = 'Annecy';
			$scope.cntFrancePhone = '+33 (0)619.20.30.61';
			
			$scope.cntCroatia = 'Croatia';
			$scope.cntCroatia2 = 'Zagreb';
			$scope.cntCroatiaPhone = '+385.16187750';

			$scope.cntAustria = 'Austria';
			$scope.cntAustria2 = 'Innsbruk';
			$scope.cntAustriaPhone = '+43 699.111.43611';

			$scope.cntSuiza = 'Switzerland';
			$scope.cntSuiza2 = 'Lausanne';
			$scope.cntSuizaPhone = '+41.76.393.72.52';

			$scope.cntPortugal = 'Portugal';
			$scope.cntPortugal2 = '';
			$scope.cntPortugalPhone = '+34 629.415.915';
			
			$scope.btnContact = 'Contact us';
			$scope.copyright = 'Copyright © 2015 SISMOTUR SL.';


			// *********************
			// SUBSECCION TECNOLOGIA
			// *********************

			// Página DronTrip
			$scope.DronTriptext1 = 'We invite you to flight over the province of Palencia, Spain!';
			$scope.DronTripbutton1 = 'Watch Video';

			// Página NFC
			$scope.NFCtitle1 = 'Inventrip promotes theatre in Croacia';
			$scope.NFCtext1 = 'NFC cards handed out during the premiere of the theatre piece "Mobitel" in Zagreb. The 2015 agenda of the representation of the piece in Croacia is contained in the card.';
			$scope.NFCbutton1 = 'See the program';

			$scope.NFCtitle2 = 'NFC cards for Palencia Turism'
			$scope.NFCtext2 = 'Palencia Turism presented Inventrip to the press during the last spanish fair of interior tourism (INTUR).';
			$scope.NFCbutton2 = 'Discover the trip';

			// Página Señalización
			$scope.SenyalizacionTitle = 'Sismotur SL - Signage'

			$scope.Sentitle1 = 'Barcelona';
			$scope.Sentext1 = 'Design of the new pedestrian touristic signage carried out by Sismotur for the city of Barcelona';

			$scope.Sentitle2 = 'Castilla y León';
			$scope.Sentext2 = 'The Counsellor and the General Director of Tourism of the spanish region of Castilla y León, together with Sismotur, presented during the last edition of INTUR (spanish fair of interior tourism) the program for the improvement of the regional signage.'; // revisar cargos

			$scope.Sentitle3 = 'Ribera del Duero';
			$scope.Sentext3 = 'Integral implementation of all the territorial and urban signage equipments for the Ruta Ribera del Duero.'; // revisar traducción ruta

			// Página QR
			$scope.QRtitle1 = 'Normandy and Brittany' // revisar lugares
			$scope.QRtext1 = 'Discover a trip to Normandy and Brittany scanning this QR code!';
			$scope.QRbutton1 = 'Discover the trip';

			$scope.QRtitle2 = 'Barcelona';
			$scope.QRtext2 = 'Sismotur drafted in 2012 the first signage and touristic informatino plan of the city of Barcelona for the district of Horta-Guinardó.';
			$scope.QRbutton2 = 'More info'; // revisar "more info"

			// Página Beacon
			$scope.Beacontitle1 = 'Beacon'
			$scope.Beacontext1 = 'Proposal of beacons technology implementation to the province of Palencia, Spain.';

			// *********************
			// STAFF
			// *********************

			$scope.StaffCEO = 'Co-founder - CEO';
			$scope.StaffCOO = 'Co-founder - COO';
			$scope.StaffCMO = 'Partner - CMO';
			$scope.StaffCTO = 'Partner - CTO';
			$scope.StaffCLO = 'Partner - CLO';
			$scope.StaffHeadDev = 'Head of Software Development';
			$scope.StaffArtificialInt = 'Artificial Intelligence';
			$scope.StaffDesign = 'Design & Communication';
			$scope.AssociateBcn = 'Technician Barcelona';
			$scope.AssociateProjects = 'Project Manager';
			$scope.StaffCoordinatorCroatia = 'Coordinator Croacia';
			$scope.StaffCoordinatorAustria = 'Coordinator Austria';
			$scope.StaffCoordinatorSwitzerland = 'Coordinator Suiza';
			$scope.StaffCoordinatorPortugal = 'Coordinator Portugal';

			break;
	}
	
}]);