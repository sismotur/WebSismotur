/**
 * @author Sismotur SL
 */

var myApp = angular.module('smtApp',[]);

myApp.controller('languagesController', ['$scope', function($scope){

	if(document.cookie=="")
		$scope.lang = navigator.language.substr(0,2);
	else{
		$scope.lang = document.cookie.substr(5,6);
	}

	loadLanguage($scope);

	$scope.changeLang = function(lang){
		document.cookie = "lang="+lang;
		loadLanguage($scope);
	}	
}]);

function loadLanguage($scope){

	if(document.cookie=="")
		$scope.lang = navigator.language.substr(0,2);
	else{
		$scope.lang = document.cookie.substr(5,6);
	}

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

	$scope.btnTitleTeam = 'Staff';
	
	// Browser language selector
	// Browser language selector
		switch($scope.lang){

		// ***********************************************************************************************
		// **************************************** SPANISH **********************************************
		// ***********************************************************************************************

		case "es":
			// ******************
			// TITULO WEB
			// ******************
			$scope.tittle1 = 'Trabajamos para promocionar y desarrollar destinos turísticos inteligentes';
			
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
			$scope.cntAustria2 = 'Innsbruck';
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

			$scope.idiomas = 'Idiomas';
			$scope.moreInfoShort = 'MÁS INFO';

			break;

		
		// ***********************************************************************************************
		// **************************************** CATALAN **********************************************
		// ***********************************************************************************************

		case "ca":
			// ******************
			// TITULO WEB
			// ******************
			$scope.tittle1 = 'Treballem per promocionar i desenvolupar destinacions turístiques intel·ligents';
			
			// ******************
			// MENU
			// ******************
			$scope.mnObjet = 'Objectius';
			$scope.mnTecno = 'Tecnologies';
			$scope.mnTeam = 'Staff';
			$scope.mnCont = 'Contacte';
			
			// ******************
			// SEPARADOR GRIS 1
			// ******************
			$scope.resume1 = 'Atenem les necessitats de cada client';
			
			// ******************
			// OBJETIVOS
			// ******************

			$scope.obj1Tittle = 'Destinacions Turístiques';
			$scope.obj1Text = 'Augmenta el nombre de turistes que visiten el teu territori i millora la seva acollida a la destinació mitjançant la integració de sistemes avançats offline/físics (senyalització) amb sistemes on-line/digitals, utilitzant les millors tecnologies.';

			//$scope.obj1Resume = 'Sistemes';

			$scope.obj2Tittle = 'Serveis Turístics';
			$scope.obj2Text = 'Potencia el teu canal de ventes on-line oferint informació, productes i serveis personalitzats als teus clients mitjançant  la plataforma Inventrip. Promociona la teva imatge de marca amb la difusió a les xarxes socials de vídeos turístics realitzats amb drons.';
			
			//$scope.obj2Resume = 'Mobilitat';
			
			$scope.obj3Tittle = 'Inventar Viatges';
			$scope.obj3Text = 'Els turistes podran coneixer gratuitament amb la plataforma Inventrip els encants de les destinacions i les propostes de serveis i activitats turístiques. Podran fàcilment planificar el seu viatge, consultar-lo durant la seva estada i compartir-lo amb amics i familiars.';

			//$scope.obj3Resume = 'Turisme';
			
			// REVISAR
			$scope.btnMoreInfo = 'Vol descubrir un cas d\'èxit?';

			// ******************
			// SEPARADOR GRIS 2
			// ******************
			$scope.tecTittle = 'Posem a la teva disposició les millors tecnologies';

			// ******************
			// TECNOLOGIAS
			// ******************

			// DronTrip
			$scope.dronText = 'Utilitza vols turístics amb Drons per viralitzar per les xarxes socials la promoció de destinacions i serveis turístics.';
			
			// NFC
			$scope.nfcText = 'Entrega als teus clients targetes NFC (contactless) per personalitzar la seva experiència turística a la destinació.';
			
			// Signal
			$scope.senalizacionTittle = 'Senyalització';
			$scope.senalizacionText = 'Implanta un sistema de senyalització per facilitar la guia  dels turistes i millorar la qualitat d\'imatge de la destinació.';

			// QR
			$scope.qrText = 'Comparteix un viatge turístic mitjançant codis QR.';
			
			// Beacons
			$scope.beaconText = 'Desplega la nova tecnologia beacons per donar informació contextualitzada al turista i oferir-li productes i serveis personalitzats al seu telèfon mòbil.';
			
			
			// ******************
			// SEPARADOR GRIS 3
			// ******************
			$scope.servTittle = 'Implantem serveis avançats  al nuvol';

			// ******************
			// TECNOLOGIAS
			// ******************

			// Inventrip
			$scope.invTextA = 'Inventar viatges: aquests és la visió';
			$scope.invTextB = 'Et proporcionem una plataforma tecnològica amb la qual els teus viatgers podran crear el seu pla de viatge (per dies, ciutats, temes, etc.) i navegant pel mapa podran anar afegint els recursos que vulguen visitar i serveis que desitgin contractar.';

			$scope.btnInventrip = 'Anar a Inventrip';			

			// Signing
			$scope.sigText = 'Signing és un servei web especialitzat per a la planificació i gestió de la senyalització territorial i urbana utilitzat per més de 30 administracions públiques. Fou desenvolupat el 2009 dintre del marc d\'un Plan Avanza de I+D del Ministeri d\'Industria, Turisme i Comerç.';
			
			$scope.btnSigning = 'Més informació';

			// ******************
			// CONTACTO
			// ******************
			$scope.cntSpain = 'Espanya';
			$scope.cntSpain2 = 'Madrid & Barcelona';
			$scope.cntSpainPhone = '+34 913.238.208';
			
			$scope.cntFrance = 'França';
			$scope.cntFrance2 = 'Annecy';
			$scope.cntFrancePhone = '+33 (0)619.20.30.61';
			
			$scope.cntCroatia = 'Croàcia';
			$scope.cntCroatia2 = 'Zagreb';
			$scope.cntCroatiaPhone = '+385.16187750';

			$scope.cntAustria = 'Àustria';
			$scope.cntAustria2 = 'Innsbruck';
			$scope.cntAustriaPhone = '+43 699.111.43611';

			$scope.cntSuiza = 'Suïssa';
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
			$scope.DronTriptext1 = 'Et convidem a volar per la província de Palència!';
			$scope.DronTripbutton1 = 'Veure Video';

			// Página NFC
			$scope.NFCtitle1 = 'Implant teatre Croàcia';
			$scope.NFCtext1 = 'Targetes NFC entregades durant la premiere de l\'obra de teatre "Mobitel" a Zagreb. Les targetes contenen el programa de la representació de l\'obra el 2015 a Croàcia';
			$scope.NFCbutton1 = 'Veure programa';

			$scope.NFCtitle2 = 'Targetes NFC Palència Turisme'
			$scope.NFCtext2 = 'Palència Turisme va presentar Inventrip als mitjans durant la passada Fira de Turisme Interior (INTUR) i entregà  targetes NFC amb un viatge per la Província de Palència.';
			$scope.NFCbutton2 = 'Descobreix el viatge';

			// Página Señalización
			$scope.SenyalizacionTitle = 'Sismotur SL - Senyalització'

			$scope.Sentitle1 = 'Barcelona';
			$scope.Sentext1 = 'Disseny de la nova senyalització turística de vianants portada a terme per Sismotur per a la ciutat de Barcelona.';

			$scope.Sentitle2 = 'Castella i Lleó';
			$scope.Sentext2 = 'La Consellera i el Director General de Turisme de Castella i Lleó, conjuntament amb Sismotur, van presentar a la pasada edició d\'INTUR el programa de millora de la senyalització turística de la regió.';

			$scope.Sentitle3 = 'Ribera del Duero';
			$scope.Sentext3 = 'Implantació integral de tots els equipaments de senyalització territorial i urbana per a la Ruta Ribera del Duero.';

			// Página QR
			$scope.QRtitle1 = 'Normandia i Bretanya'
			$scope.QRtext1 = 'Descobreix un viatge per Normandia i Bretanya escanejant aquest codi QR!';
			$scope.QRbutton1 = 'Descobreix el viatge';

			$scope.QRtitle2 = 'Barcelona';
			$scope.QRtext2 = 'Sismotur va redactar el 2012 el primer pla de senyalització i informació turística de la ciutat de Barcelona per al districte d\'Horta-Guinardó.';
			$scope.QRbutton2 = 'Més Info';

			// Página Beacon
			$scope.Beacontitle1 = 'Beacon'
			$scope.Beacontext1 = 'Proposta de la tecnologia beacons a la província de Palència.';

			// *********************
			// STAFF
			// *********************

			$scope.StaffCEO = 'Cofundador - CEO';
			$scope.StaffCOO = 'Cofundador - COO';
			$scope.StaffCMO = 'Soci - CMO';
			$scope.StaffCTO = 'Soci - CTO';
			$scope.StaffCLO = 'Soci - CLO';
			$scope.StaffHeadDev = 'Cap Dpt. Desenvolupament';
			$scope.StaffArtificialInt = 'Inteligència Artificial';
			$scope.StaffDesign = 'Disseny & Comunicació';
			$scope.AssociateBcn = 'Tècnic Barcelona';
			$scope.AssociateProjects = 'Cap Projectes';
			$scope.StaffCoordinatorCroatia = 'Coordinador Croàcia';
			$scope.StaffCoordinatorAustria = 'Coordinador Àustria';
			$scope.StaffCoordinatorSwitzerland = 'Coordinador Suïssa';
			$scope.StaffCoordinatorPortugal = 'Coordinador Portugal';

			$scope.idiomas = 'Idiomes';

			$scope.moreInfoShort = 'MÉS INFO';
			break;


		// ***********************************************************************************************
		// **************************************** GERMAN ***********************************************
		// ***********************************************************************************************
		case "de":
			// ******************
			// TITULO WEB
			// ******************
			$scope.tittle1 = 'Wir arbeiten um intelligente touristische Destinationen zu entwickeln und zu fördern.';
			
			// ******************
			// MENU
			// ******************
			$scope.mnObjet = 'Ziele';
			$scope.mnTecno = 'Technologien';
			$scope.mnTeam = 'Team';
			$scope.btnTitleTeam = 'Das Team';
			$scope.mnCont = 'Kontakt';
			
			// ******************
			// SEPARADOR GRIS 1
			// ******************
			$scope.resume1 = 'Wir treffen die Bedürfnisse von jeden einzelnen Kunden';
			
			// ******************
			// OBJETIVOS
			// ******************

			$scope.obj1Tittle = 'Tourismus Destinationen';
			$scope.obj1Text = 'Erhöhen Sie die Anzahl von Gästen, die Ihre Tourismusregion besuchen und verbessern Sie deren Orientierung durch die Integration moderner offline Systeme (touristische Beschilderung) mit digitalen online Systemen, unter der Verwendung der besten Technologien.';

			//$scope.obj1Resume = 'Sistemas';

			$scope.obj2Tittle = 'Touristische Leistungen';
			$scope.obj2Text = 'Verbessern Sie Ihren online Vertriebsskanal, indem Sie effektive Information und nach den Kundenbedürfnissen, maßgeschneiderte Produkte und Dienstleistungen über die Inventrip Plattform anbieten. Fördern Sie Ihre Marke durch das Teilen touristischer Drohnen-Videos in den sozialen Netzwerken.';
			
			//$scope.obj2Resume = 'Movilidad';
			
			$scope.obj3Tittle = 'Reisen erfinden';
			$scope.obj3Text = 'Dank der kostenlosen Plattform Inventrip, können die Touristen den Charme Ihrer Tourismusregion kennenlernen und diverse Vorschläge über touristische Dienstleistungen und Aktivitäten  erhalten. Diese können dann mühelos ihre Reise planen, auch während ihres Aufenthalts nachschlagen und mit Familie und Freunden teilen.';

			//$scope.obj3Resume = 'Turismo';
			
			// REVISAR
			$scope.btnMoreInfo = 'Wollen Sie einen Erfolgsfall kennenlernen?';

			// ******************
			// SEPARADOR GRIS 2
			// ******************
			$scope.tecTittle = 'Wir stellen Ihnen die beste Technologie zur Verfügung';

			// ******************
			// TECNOLOGIAS
			// ******************

			// DronTrip
			$scope.dronText = 'Benutzen Sie mit Drohnen gefilmte Tourismusvideos um Ihre Tourismusregion und Ihre touristischen Leistungen in den sozialen Netzwerken gezielt und effektiv zu verbreiten und zu fördern.';
			
			// NFC
			$scope.nfcText = 'Versorgen Sie Ihre Kunden mit kontaktlosen NFC Chipkarten. Dadurch können Sie deren Reiseerfahrung in Ihrer Tourismusregion individualisieren und personalisieren.';
			
			// Signal
			$scope.senalizacionTittle = 'Beschilderung';
			$scope.senalizacionText = 'Errichten Sie ein dynamisches Beschilderungssystem um die Führung der Touristen zu erleichtern und die Qualitätswahrnehmung Ihrer Tourismusregion zu verbessern.';

			// QR
			$scope.qrText = 'Teilen Sie thematisierte touristische Reisen mittels QR-Codes. Diese können sowohl in Ihrer Tourismusinformation als auch in Ihrer touristischen Beschilderung eingesetzt werden.';
			
			// Beacons
			$scope.beaconText = 'Setzen Sie die neue Beacons Technologie ein. So können Sie dem Touristen kontextbezogene Information weitergeben und ihm individualisierte Produkte und Dienstleistungen anbieten.';
			
			
			// ******************
			// SEPARADOR GRIS 3
			// ******************
			$scope.servTittle = 'Wir implementieren fortschrittliche Cloud Computing Dienstleistung';

			// ******************
			// TECNOLOGIAS
			// ******************

			// Inventrip
			$scope.invTextA = 'Reisen erfinden: das ist die Vision';
			$scope.invTextB = 'Wir versorgen Sie mit einer technologischen Plattform, die Ihrem Reisenden ermöglicht seine eigene Reise zu planen (nach Tagen, Städte, Themen, etc. geordnet), und durch das Navigieren durch der Karte die Besichtigungsorte und die gebuchten Dienstleistungen hinzufügt.';

			$scope.btnInventrip = 'Weiter zu Inventrip';			

			// Signing 
			$scope.sigText = 'Signing ist eine Cloud Computing Web-Dienstleistung, die sich in der Planung und Verwaltung von ländlichen und urbanen Beschilderungssystemen spezialisiert und von mehr als 30 öffentlichen Verwaltungen benutzt wird. Diese wurde 2009 entwickelt und profitierte von der Unterstützung eines F&E-Förderungsprogramms des spanischen Staates.';
			
			$scope.btnSigning = 'Zur Plattform';

			// ******************
			// CONTACTO
			// ******************
			$scope.cntSpain = 'Spanien';
			$scope.cntSpain2 = 'Madrid & Barcelona';
			$scope.cntSpainPhone = '+34.913.238.208';
			
			$scope.cntFrance = 'Frankreich';
			$scope.cntFrance2 = 'Annecy';
			$scope.cntFrancePhone = '+33.619.20.30.61';
			
			$scope.cntCroatia = 'Kroatien';
			$scope.cntCroatia2 = 'Zagreb';
			$scope.cntCroatiaPhone = '+385.161.87750';

			$scope.cntAustria = 'Österreich';
			$scope.cntAustria2 = 'Innsbruck';
			$scope.cntAustriaPhone = '+43.699.111.43611';

			$scope.cntSuiza = 'Schweiz';
			$scope.cntSuiza2 = 'Lausanne';
			$scope.cntSuizaPhone = '+41.76.393.72.52';

			$scope.cntPortugal = 'Portugal';
			$scope.cntPortugal2 = '';
			$scope.cntPortugalPhone = '+34.629.415.915';
			
			$scope.btnContact = 'Kontaktieren Sie uns';
			$scope.copyright = 'Copyright © 2015 SISMOTUR SL.';


			// *********************
			// SUBSECCION TECNOLOGIA
			// *********************

			// Página DronTrip
			$scope.DronTriptext1 = 'Wir laden Sie zu einem Flug über die spanische Tourismusregion von Palencia ein!';
			$scope.DronTripbutton1 = 'Video ansehen';

			// Página NFC
			$scope.NFCtitle1 = 'Inventrip fördert die Kultur in Kroatien';
			$scope.NFCtext1 = 'Verteilung von NFC Chipkarten während der Premiere der Theaterstücks "Mobitel" in Zagreb. Die Chipkarten beinhalten das Programm der Theateraufführungen in allen kroatischen Städten während dem Jahr 2015.';
			$scope.NFCbutton1 = 'Zum Programm';

			$scope.NFCtitle2 = 'NFC Chipkarten für die Tourismusregion von Palencia'
			$scope.NFCtext2 = 'Während der nationalen Tourismusmesse INTUR 2014, stellte die Tourismusregion von Palencia die Plattform Inventrip der Presse vor. Anschließend wurden NFC Chipkarten mit einer Reise durch deren Region ausgehändigt.';
			$scope.NFCbutton2 = 'Entdecke diese Reise!';

			// Página Señalización
			$scope.SenyalizacionTitle = 'Sismotur SL - Beschilderung'

			$scope.Sentitle1 = 'Barcelona';
			$scope.Sentext1 = 'Durch Sismotur ausgeführter Entwurf der neuen touristischen Fußgängerbeschilderung für die Stadt von Barcelona.';

			$scope.Sentitle2 = 'Kastilien und León';
			$scope.Sentext2 = 'Die Handelsreferentin und der Generaldirektor für Tourismus des Bundeslands Kastilien und León präsentierten in der vergangenen Auflage von INTUR (die Messe für den internen spanischen Tourismus), gemeinsam mit Sismotur, das Verbesserungsprogramm der touristischen Beschilderung der Region.';

			$scope.Sentitle3 = 'Ribera del Duero';
			$scope.Sentext3 = 'Ganzheitliche Durchführung aller ländlichen und urbanen Beschilderungseinrichtungen für die Weinroute von Ribera del Duero.';

			// Página QR
			$scope.QRtitle1 = 'Normandie und Bretagne'
			$scope.QRtext1 = 'Entdecken Sie diese Reise durch die Normandie und die Bretagne indem Sie diesen QR-Code scannen.';
			$scope.QRbutton1 = 'Zur Reise!';

			$scope.QRtitle2 = 'Barcelona';
			$scope.QRtext2 = 'Sismotur verfasste 2012 den ersten Beschilderungs- und Tourismusinformationsplan für Barcelona für den Stadtteil Horta-Guinardó.';
			$scope.QRbutton2 = 'Mehr Info';

			// Página Beacon
			$scope.Beacontitle1 = 'Beacon'
			$scope.Beacontext1 = 'Vorschlag für die Implementierung der Beacons Technologie in der Region von Palencia, Spanien.';

			// *********************
			// STAFF
			// *********************

			$scope.StaffCEO = 'Mitgründer - CEO';
			$scope.StaffCOO = 'Mitgründer - CEO';
			$scope.StaffCMO = 'Partner - CMO';
			$scope.StaffCTO = 'Partner - CTO';
			$scope.StaffCLO = 'Partner - CLO';
			$scope.StaffHeadDev = 'Leiter der Softwareentwicklung';
			$scope.StaffArtificialInt = 'Künstliche Intelligenz';
			$scope.StaffDesign = 'Design & Kommunikation';
			$scope.AssociateBcn = 'Techniker Barcelona';
			$scope.AssociateProjects = 'Projektmanager';
			$scope.StaffCoordinatorCroatia = 'Koordinator Kroatien';
			$scope.StaffCoordinatorAustria = 'Koordinator Österreich';
			$scope.StaffCoordinatorSwitzerland = 'Koordinator Schweiz';
			$scope.StaffCoordinatorPortugal = 'Koordinator Portugal';

			$scope.idiomas = 'Sprachen';
			$scope.moreInfoShort = 'MEHR INFO';
			break;

		// ***********************************************************************************************
		// **************************************** FRENCH ***********************************************
		// ***********************************************************************************************
			case "fr":

			$scope.moreInfoShort = 'PLUS D\'INFO';

			// ******************
			// TITRE SITE WEB
			// ******************
			$scope.tittle1 = 'Nous travaillons pour promouvoir et développer des destinations touristiques intelligentes';
			
			// ******************
			// MENU
			// ******************
			$scope.mnObjet = 'Objectifs';
			$scope.mnTecno = 'Technologies';
			$scope.mnTeam = 'Staff';
			$scope.mnCont = 'Contact';
			
			// ******************
			// BARRE GRISE 1
			// ******************
			$scope.resume1 = 'Nous répondons aux besoins de chaque client';
			
			// ******************
			// OBJECTIVES
			// ******************

			$scope.obj1Tittle = 'Destinations Touristiques';
			$scope.obj1Text = 'Augmentez le nombre de touristes qui visitent votre territoire et améliorez leur accueil en intégrant des systèmes avancés offline/physiques (signalisation) avec des systèmes online/numériques, en utilisant les meilleures technologies.';

			//$scope.obj1Resume = 'Sistemas';

			$scope.obj2Tittle = 'Services Touristiques';
			$scope.obj2Text = "Développez votre canal de ventes online en offrant de l'information, des produits et des services personnalisés à vos clients à travers de la plateforme Inventrip. Améliorez la visibilité de votre image de marque avec la diffusion dans les réseaux sociaux de vidéos touristiques faites avec des drones.";
			
			//$scope.obj2Resume = 'Movilidad';
			
			$scope.obj3Tittle = 'Inventer des voyages';
			$scope.obj3Text = 'Les touristes pourront connaître gratuitement avec la plateforme Inventrip les charmes des destinations et les propositions de services et activités touristiques. Ils pourront facilement planifier leurs voyages, les consulter pendant leur séjour, et les partager avec leurs amis et familiers.';


			//$scope.obj3Resume = 'Turismo';
			
			// REVISAR
			$scope.btnMoreInfo = 'Voulez-vous découvrir un cas de réussite ?';

			// ******************
			// BARRE GRISE 2
			// ******************
			$scope.tecTittle = 'Nous mettons à votre disposition les meilleures technologies';

			// ******************
			// TECHNOLOGIES
			// ******************

			// DronTrip
			$scope.dronText = 'Utilisez des vols touristiques enregistrés avec des drones pour viraliser dans les réseaux sociaux la promotion des destinations et services touristiques.';
			
			// NFC
			$scope.nfcText = 'Donnez à vos clients des cartes NFC (contactless) pour personnaliser leur expérience touristique dans la destination.';
			
			// Signalisation
			$scope.senalizacionTittle = 'Signalisation';
			$scope.senalizacionText = "Implantez un système de signalisation pour faciliter le guidage des touristes et améliorer la qualité de l'image de la destination.";
			
			// QR
			$scope.qrText = 'Partagez un voyage touristique avec des codes QR.';
			
			// Beacons - revisar
			$scope.beaconText = "Déployez la nouvelle technologie beacons pour donner de l'information contextualisée au touriste et lui offrir des produits et services personnalisés dans son téléphone portable."; 
			
			// ******************
			// BARRE GRISE 3
			// ******************
			$scope.servTittle = 'Nous implantons des services avancés dans le nuage';

			// ******************
			// PLATEFORMES
			// ******************

			// Inventrip
			$scope.invTextA = 'Inventer des voyages : ceci est notre vision';
			$scope.invTextB = "Nous vous fournissons une plateforme technologique avec laquelle vos voyageurs pourront créer leur plan de voyage (par journées, villes, thématiques...) et, en navigant sur une carte, pourront ajouter les endroits qu'ils voudront visiter et les services qu'ils voudront contracter.";


			$scope.btnInventrip = 'Allez à Inventrip';			

			// Signing 
			$scope.sigText = "Signing est un service web spécialisé dans la planification et gestion de la signalisation territoriale et urbaine qui est utilisé par plus de 30 administrations publiques. Il a été développé en 2009 dans le cadre d'un plan national de recherche et développement de l'état espagnol";
			
			$scope.btnSigning = "Plus d'information";

			// ******************
			// NOUS CONTACTER
			// ******************
			$scope.cntSpain = 'Espagne';
			$scope.cntSpain2 = 'Madrid & Barcelona';
			$scope.cntSpainPhone = '+34 913.238.208';
			
			$scope.cntFrance = 'France';
			$scope.cntFrance2 = 'Annecy';
			$scope.cntFrancePhone = '+33 (0)619.20.30.61';
			
			$scope.cntCroatia = 'Croatie';
			$scope.cntCroatia2 = 'Zagreb';
			$scope.cntCroatiaPhone = '+385.16187750';

			$scope.cntAustria = 'Autriche';
			$scope.cntAustria2 = 'Innsbruck';
			$scope.cntAustriaPhone = '+43 699.111.43611';

			$scope.cntSuiza = 'Suisse';
			$scope.cntSuiza2 = 'Lausanne';
			$scope.cntSuizaPhone = '+41.76.393.72.52';

			$scope.cntPortugal = 'Portugal';
			$scope.cntPortugal2 = '';
			$scope.cntPortugalPhone = '+34 629.415.915';
			
			$scope.btnContact = 'Contacter';
			$scope.copyright = 'Copyright © 2015 SISMOTUR SL.';

			// *********************
			// SUBSECTION TECHNOLOGIE
			// *********************

			// Página DronTrip
			$scope.DronTriptext1 = 'Nous vous invitons à voler dans la province de Palencia !';
			$scope.DronTripbutton1 = 'Regarder la vidéo';

			// Página NFC
			$scope.NFCtitle1 = 'Inventrip soutient le théâtre en Croatie';
			$scope.NFCtext1 = 'Cartes NFC offertes après la première de la pièce de théâtre "Mobitel" à Zagreb. Les cartes contiennent le programme de la représentation de la pièce durant 2015 en Croatie.';
			$scope.NFCbutton1 = 'Voir programme';

			$scope.NFCtitle2 = 'Cartes NFC Palencia Tourisme';
			$scope.NFCtext2 = "L'Office de Tourisme de Palencia (Espagne) a présenté Inventrip à la presse au cours du dernier salon de tourisme d'intérieur espagnol (INTUR) et a distribué des cartes NFC avec un voyage dans la province de Palencia.";
			
			$scope.NFCbutton2 = 'Découvrez le voyage';

			// Página Señalización
			$scope.SenyalizacionTitle = 'Sismotur SL - Signalisation'

			$scope.Sentitle1 = 'Barcelone';
			$scope.Sentext1 = 'Design de la nouvelle signalisation touristique piétonne mené par Sismotur pour la ville de Barcelone.';

			$scope.Sentitle2 = 'Castille et Leon';
			$scope.Sentext2 = "La Conseillère et le Directeur Général de Tourisme de Castille et Leon, avec Sismotur, ont présenté pendant la dernière édition du salon de tourisme intérieur INTUR le programme d'amélioration de la signalisation touristique de la région.";

			$scope.Sentitle3 = 'AOC Ribera del Duero';
			$scope.Sentext3 = "Implémentation intégrale de l'ensemble des équipements de signalisation territoriale et urbaine pour la Route Ribera del Duero.";

			// Página QR
			$scope.QRtitle1 = 'Normandie et Bretagne'
			$scope.QRtext1 = 'Découvrez un voyage en Normandie et Bretagne avec ce code QR !';
			$scope.QRbutton1 = 'Découvrez le voyage';

			$scope.QRtitle2 = 'Barcelone';
			$scope.QRtext2 = "Sismotur a rédigé en 2012 le premier plan de signalisation et information touristique de la ville de Barcelone pour l'arrondissement d'Horta-Guinardó.";
			$scope.QRbutton2 = "Plus d'Info";

			// Página Beacon
			$scope.Beacontitle1 = 'Beacon'
			$scope.Beacontext1 = 'Proposition de la technologie beacons au département de Palencia.';

			// *********************
			// STAFF
			// *********************

			$scope.StaffCEO = 'Cofondateur - CEO';
			$scope.StaffCOO = 'Cofondateur - COO';
			$scope.StaffCMO = 'Partenaire - CMO';
			$scope.StaffCTO = 'Partenaire - CTO';
			$scope.StaffCLO = 'Partenaire - CLO';
			$scope.StaffHeadDev = 'Resp. Développement Informatique';
			$scope.StaffArtificialInt = 'Intelligence Artificielle';
			$scope.StaffDesign = 'Design & Communication';
			$scope.AssociateBcn = 'Chef de projets';
			$scope.AssociateProjects = 'Chef de projets';
			$scope.StaffCoordinatorCroatia = 'Coordinateur Croatie';
			$scope.StaffCoordinatorAustria = 'Coordinateur Autriche';
			$scope.StaffCoordinatorSwitzerland = 'Coordinateur Suisse';
			$scope.StaffCoordinatorPortugal = 'Coordinateur Portugal';

			break;

/*
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
			$scope.cntAustria2 = 'Innsbruck';
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
			$scope.StaffCoordinatorSwitzerland = 'Coordinator Switzerland';
			$scope.StaffCoordinatorPortugal = 'Coordinator Portugal';

			$scope.idiomas = 'Languages';

			break;
	}
}