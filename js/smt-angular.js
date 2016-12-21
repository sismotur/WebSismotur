/**
 * @author Sismotur SL
 */

var myApp = angular.module('smtApp',[]);

myApp.controller('languagesController', ['$scope', function($scope){

	loadLanguage($scope);

	$scope.changeLang = function(lang) {
		// reset the cookie to track the requested language
		var d = new Date();
    	d.setTime(d.getTime() + (1*24*60*60*1000));
    	var expires = "expires="+d.toUTCString();
		document.cookie = "lang="+lang + ";" + expires;
		loadLanguage($scope);
	}
}]);

function loadLanguage($scope) {
	if(document.cookie.indexOf("lang")==-1)
		$scope.lang = navigator.language.substr(0,2);
	else{
		// this parses the cookie to find the requested language
		index = document.cookie.indexOf("lang");
		$scope.lang = document.cookie.substr(index+5,2);
	}

	// Browser language selector
		switch($scope.lang){

			// ***********************************
			// ************** SPANISH ************
			// ***********************************

		case "es":

			// ******************
			// CLAIM ES
			// ******************
			$scope.claim1 = 'Conecta tu destino con el turista digital';
			$scope.claim2 = 'Descubre la señalización turística inteligente';
			$scope.btnMuestra = 'Solicítanos una muestra gratuita';

			// ******************
			// MENU ES
			// ******************
			$scope.inventrip = 'Inventrip';
			$scope.mnTecno = 'Tecnologías';
			$scope.mnNoticias = 'Noticias';
			$scope.mnTeam = 'Socios';
			$scope.mnCont = 'Contacto';
			$scope.mnIdioma = 'ES';

			// ******************
			// INVENTRIP ES
			// ******************
			$scope.dividerInventrip = 'Implanta un Servicio de Información Personalizado';
			$scope.invTextA = 'Conecta tu Destino';
			$scope.invTextB = 'Sismotur te implanta un servicio de información y gestión de la  señalización turística inteligente para tu destino, que permita consultar la oferta turística, reservar, construir viajes a medida y compartirlos en redes sociales o mediante el uso de las últimas tecnologías: Beacons, NFC, códigos QR.';

			// **********************
			// SIGNING ES
			// **********************
			$scope.dividerSigning = "Implanta un Servicio de Señalización";
			$scope.signingTitle = 'Signing';
			$scope.signingTextA = 'Gestiona tu señalización';
			$scope.signingTextB = 'Sismotur es líder en la elaboración de planes de señalización y te implanta Signing, un servicio web especializado para la planificación y gestión de la señalización territorial y urbana utilizado por más de 30 administraciones públicas.';

			// ******************
			// TECNOLOGIAS ES
			// ******************
			$scope.dividerTechnologies = 'Inventrip y Signing utilizan las mejores tecnologías';

			$scope.btnReferences = 'REFERENCIAS';

			// smart signage
			$scope.senalizacionTitle = 'Señalización Inteligente';
			$scope.senalizacionText = 'Mejora la señalización turística de tu destino integrándola con sistemas avanzados de información turística. Te ofrecemos nuestro servicio cloud Signing para su planificación y gestión';

			$scope.senalizacionTitle1 = 'Ruta Ribera del Duero Smart';
			$scope.senalizacionText1 = 'Sismotur ha implantado el sistema Inventrip de señalización turística inteligente en la Ruta del Vino Ribera del Duero.';

			$scope.senalizacionTitle2 = 'Barcelona';
			$scope.senalizacionText2 = 'Diseño de la nueva señalización turística peatonal llevado a cabo por Sismotur para la ciudad de Barcelona.';

			$scope.senalizacionTitle3 = 'Castilla y León';
			$scope.senalizacionText3 = 'La Consejera y el Director General de Turismo de Castilla y León, conjuntamente con Sismotur, presentaron en INTUR el programa de mejora de la señalización turística de la región.';

			// beacons
			$scope.beacons = 'Beacons';
			$scope.beaconText = 'Incorpora esta nueva tecnología en señales o en oficinas de información para enviar al turista productos y servicios personalizados a su dispositivo móvil.';

			$scope.beaconTitle1 = 'Beacons en las Señales Inteligentes';
			$scope.beaconText1 = 'Inventrip conecta las señales inteligentes con el turista utilizando Beacons.';

			$scope.beaconTitle2 = 'Señalización Turística Inteligente en las Palmas de Gran Canaria';
			$scope.beaconText2 = 'Sismotur desarrolla el plan de señalización turística inteligente de las Palmas de Gran Canaria empleando la tecnología Beacons gestionada por Inventrip.';

			// e-commerce
			$scope.eCommerce = 'e-Commerce';
			$scope.comercializacionText = 'Facilita al turista el acceso a motores de reserva de alojamientos, restaurantes y actividades, antes o durante el viaje.';

			$scope.eCommerceTitle1 = 'e-Commerce';
			$scope.eCommerceText1 = 'Integración de centrales de reservas en Inventrip para que los turistas puedan reservar servicios antes y durante el viaje.';

			// nfc
			$scope.nfc = 'NFC';
			$scope.nfcText = 'Entrega al turista tarjetas contactless en oficinas, ferias u hoteles para personalizar su experiencia turística en el destino.';

			$scope.nfcTitle1 = 'Tarjetas NFC Ibiza';
			$scope.nfcText1 = 'El Ayuntamiento de Ibiza presentó a los medios el proyecto de Destino Turístico Inteligente con señalización inteligente, beacons y estas tarjetas NFC con un viaje predefinido por Dalt Vila.';
			$scope.nfcButton1 = 'Descubre el viaje';

			$scope.nfcTitle2 = 'Tarjetas NFC Palencia Turismo'
			$scope.nfcText2 = 'Palencia Turismo presentó Inventrip a los medios durante la Feria de Turismo Interior (INTUR-2015) y entregó tarjetas NFC con un viaje por la Provincia de Palencia.';
			$scope.nfcButton2 = 'Descubre el viaje';

			// qr
			$scope.qr = 'QR';
			$scope.qrText = 'Gestiona fácilmente la información turística online de recursos y mapas en múltiples idiomas.';

			$scope.qrTitle1 = 'Normandía y Bretaña';
			$scope.qrText1 = '¡Descubre un viaje por Normandía y Bretaña escaneando este código QR!';
			$scope.qrButton1 = 'Descubre el viaje';

			$scope.qrTitle2 = 'Barcelona';
			$scope.qrText2 = 'Sismotur redactó en 2012 el primer plan de señalización e información turística de la ciudad de Barcelona para el distrito de Horta-Guinardó.';

			// drontrip
			$scope.dronTrip = 'DronTrip';
			$scope.dronText = 'Utiliza vuelos turísticos con Drones para viralizar por las redes sociales la promoción de destinos y servicios turísticos.';

			$scope.drontripText1 = '¡Te invitamos a volar por la comarca Sierra de Montánchez y Tamuja!';
			$scope.drontripButton1 = 'Ver Video';

			// ******************
			// NOTICIAS ES
			// ******************
			$scope.dividerNews = 'Últimas noticias';
			$scope.moreNews = 'Más noticias';

			// *********************
			// PARTNERS ES
			// *********************
			$scope.titlePartners = 'Socios';

			// ******************
			// CONTACTO ES
			// ******************
			$scope.btnContact = 'CONTÁCTANOS';

			$scope.cntSpain = 'España';
			$scope.cntSpain2 = 'Madrid & Barcelona';
			$scope.cntSpainPhone = '+34 913.238.208';

			$scope.cntFrance = 'Francia';
			$scope.cntFrance2 = 'Annecy';
			$scope.cntFrancePhone = '+33 (0)619.20.30.61';

			$scope.copyright = 'Copyright © 2016 SISMOTUR SL.';

			// *********************
			// NEWS ES
			// *********************
			$scope.newsTitle19 = 'Sismotur presentará Blockchain y sus aplicaciones potenciales para el Turismo durante FITUR 2017 en SEGITTUR Lab';
			$scope.newsContent19 = 'Sismotur estará presente en FITUR 2017, en el área Know-How & Export (Stand 10B09, cerca del stand de SEGITTUR). El día 18 de enero a las 17:30, en el espacio SEGITTUR Lab, organizaremos una conferencia sobre la tecnología Blockchain y sus aplicaciones en el ámbito del Turismo.';
			$scope.newsDetail19 = 'Análisis de Blockchain y su potencial para el Turismo';

			$scope.newsTitle18 = 'Artículo sobre la Señalización Turística Inteligente en EFE Empresas';
			$scope.newsContent18 = 'Artículo de EFE Empresas comentando la innovación que supone conectar el Destino Turístico con el nuevo turista digital y su Smartphone a través de la señalización turística inteligente e Inventrip.';
			$scope.newsDetail18 = 'Enlace al Artículo';

			$scope.newsTitle17 = 'Artículo en el Blog de Kontakt.io';
			$scope.newsContent17 = 'Kontakt, referencia mundial en tecnologías conectadas (Internet of the Things) y colaborador de Sismotur, explica la innovación que supone Inventrip para el sector turístico.';
			$scope.newsDetail17 = 'Enlace al Blog de Kontakt';

			$scope.newsTitle16 = 'Presentación de Inventrip para la Ruta del Vino Ribera del Duero';
			$scope.newsContent16 = 'El Director General de Turismo de Castilla y León presenta Inventrip, el nuevo sistema de señalización turística inteligente de Sismotur.';
			$scope.newsDetail16 = 'Enlace al Artículo';

			$scope.newsTitle15 = 'Las Palmas de Gran Canaria implantará Inventrip';
			$scope.newsContent15 = 'El Ayuntamiento y el Cabildo han llegado a un acuerdo para implantar la señalización turística inteligente de Sismotur en las zonas comerciales abiertas de interés turístico y dar información con la plataforma Inventrip.';
			$scope.newsDetail15 = 'Enlace al Artículo';

			$scope.newsTitle14 = 'FITUR 2016';
			$scope.newsContent14 = 'Sismotur fue la elegida para presentar en la inauguración su concepto de Destino Turístico Inteligente a través de la integración de medios físicos y digitales OFF/ON conectando la señalización a la plataforma Inventrip. De esta forma, las señales y el territorio le hablan al móvil del turista.';

			$scope.newsTitle13 = 'Aportación de Sismotur al Libro Blanco de Destinos Turísticos Inteligentes';
			$scope.newsContent13 = 'El pasado mes de octubre se presentó en la sede del Ministerio de Industria, Energía y Turismo el libro blanco de Destinos Turísticos Inteligentes promovido por SEGITTUR dentro del marco del Plan Nacional de Ciudades Inteligentes. Sismotur ha participado en la redacción de este libro blanco con su modelo de integración OFF/ON de medios físicos y digitales en un destino para mejorar la acogida y la experiencia del turista.';
			$scope.newsDetail13 = 'Enlace al Libro Blanco';

			$scope.newsTitle12 = 'Sismotur redacta el Plan de Señalización Turística de Euskadi';
			$scope.newsContent12 = 'Sismotur ha redactado el plan de señalización turística para Euskadi, trabajando codo a codo con el Gobierno Vasco y su directora general de Turismo y con las tres diputaciones forales, unificando criterios, analizando necesidades y especificidades en pos de la concertación.';

			$scope.newsTitle11 = 'Sismotur en INTUR 2015';
			$scope.newsContent11 = 'En la pasada edición de INTUR en Valladolid, Sismotur presentó los avances de la plataforma Inventrip como herramienta de promoción de un destino, planificador de viajes para el turista y servicio de información digital en el territorio vinculado a la señalización física y a los recursos y servicios del destino.';

			$scope.newsTitle10 = 'Sismotur participa en la Jornada de Redes Sociales y Turismo de la Diputación de Barcelona';
			$scope.newsContent10 = 'Augusto Ramos, CEO de Sismotur, ha impartido una ponencia sobre la capacidad de las redes sociales y el turista como prescriptores de un destino, la necesidad de que los territorios se sumen a los nuevos medios de difusión y promoción y cómo Inventrip implementa y explota estos medios para la difusión del destino por parte de turistas y promotores del mismo.';

			$scope.newsTitle9 = 'Sismotur con el Principado de Asturias en la presentación de Inventrip para Piloña';
			$scope.newsContent9 = 'Sismotur ha acompañado al director general de Turismo del Principado de Asturias en la presentación de Inventrip como plataforma de promoción del destino y gestión de la información turística para Piloña, zona muy turística de Asturias y que apuesta por las nuevas tecnologías en su desarrollo turístico.';

			$scope.newsTitle8 = 'Sismotur con Turismo de Extremadura en la presentación de Inventrip para la Sierra de Montánchez';
			$scope.newsContent8 = 'Felipe Santi, CTO de Sismotur, acompaña a Turismo de Extremadura en la presentación del servicio Inventrip para la mejora de la promoción de la Sierra de Montánchez y Tamuja en su camino hacia un destino turístico inteligente. También se ha presentado un vídeo promocional con drones asociado a Inventrip para difundir el destino en las redes sociales.';

			$scope.newsTitle7 = 'Sismotur presentando el proyecto de Ibiza Destino Turístico Inteligente con beacons e Inventrip';
			$scope.newsContent7 = 'Sismotur ha acompañado al Ayuntamiento de Ibiza en la presentación del proyecto que convierte al municipio en un destino turístico inteligente con la implantación de la plataforma Inventrip como sistema de gestión de la información turística y de la promoción del destino, integrado con un plan de señalización inteligente peatonal e interpretativa y una red de beacons.';

			$scope.newsTitle6 = 'Presentación de Inventrip en la Sierra Norte de Madrid';
			$scope.newsContent6 = 'Julio José Julián, CMO de Sismotur, presenta la implantación de la plataforma Inventrip como sistema de gestión de la información turística, planificador de viajes y medio de promoción en las redes sociales del destino turístico. Se enmarca dentro de un ambicioso plan para promocionar la Sierra Norte y que se apoya decididamente en las nuevas tecnologías y las redes sociales como vehículo de difusión.';

			$scope.newsTitle5 = 'Sismotur en las Jornadas Técnicas de Turismo en Perú';
			$scope.newsContent5 = 'De la mano de SEGITTUR y del ICEX, Sismotur ha estado presente en las Jornadas Tecnicas de Turismo que se han celebrado en la capital de Perú. Se ha presentado la visión del destino turístico inteligente y la capacidad de Inventrip como gestor de la información y herramienta de promoción para un territorio turístico a nivel global.';

			$scope.newsTitle4 = 'Sismotur en las Jornadas Técnicas de Turismo España-Chile, en Santiago de Chile';
			$scope.newsContent4 = 'Sismotur acompaña a SEGITTUR y al ICEX en las Jornadas Técnicas de Turismo que se han celebrado en Santiago de Chile, y está presente como testigo de excepción de la firma del convenio bilateral entre Chile y España, presentando Inventrip y la potencia de la visión OFF/ON de integración de elementos físicos y digitales para desarrollar un destino turístico inteligente.';

			$scope.newsTitle3 = 'Sismotur presenta el Proyecto de Señalización Turística del Camino de Santiago por Castilla y León';
			$scope.newsContent3 = 'Sismotur ha presentado el plan de señalización turística del Camino de Santiago por las carreteras de Castilla y León, junto con la consejera y el director general de Turismo. Supone una mejora en la percepción de la calidad del destino y en el proceso de acogida al turista sobre el territorio.';

			$scope.newsTitle2 = 'Sismotur en el Cluster de Turismo de Extremadura';
			$scope.newsContent2 = 'Reportaje de TVE sobre el Cluster de Turismo de Extremadura, donde Augusto Ramos, CEO de Sismotur, expone la capacidad de Inventrip como plataforma de promoción de un destino turístico y su potencia como herramienta para planificar viajes para el turista y como gestor de la información turística de un territorio.';

			$scope.newsTitle1 = 'Inventrip recibe el premio a la mejor idea de marketing de destinos de Territorio & Marketing';
			$scope.newsContent1 = 'Sismotur ha recibido el premio finalista por la aportación de la plataforma Inventrip a la difusión y promoción de un destino turístico. El jurado reconoce cómo Inventrip es capaz de unir la parte emotiva de la experiencia de un turista a la hora de preparar un viaje con la realidad de desplazarse dentro del territorio durante el viaje y la prescripción en positivo que posteriormente hace de dicho destino.';

			break;

			// ***********************************
			// ************* CATALAN *************
			// ***********************************

		case "ca":

			// ******************
			// CLAIM CA
			// ******************
			$scope.claim1 = 'Conecta tu Destino con el turista digital';
			$scope.claim2 = 'Descubre la señalización turística inteligente';
			$scope.btnMuestra = 'Solicítanos una muestra';

			// ******************
			// MENU CA
			// ******************
			$scope.inventrip = 'Inventrip';
			$scope.mnTecno = 'Tecnologies';
			$scope.mnNoticias = 'Notícies';
			$scope.mnTeam = 'Socis';
			$scope.mnCont = 'Contacte';
			$scope.mnIdioma = 'CA';

			// ******************
			// INVENTRIP CA
			// ******************
			$scope.dividerInventrip = 'Implanta un Servicio de Información Personalizado';
			$scope.invTextA = 'Conecta tu Destino';
			$scope.invTextB = 'Sismotur te implanta un servicio de información y gestión de la  señalización turística inteligente para tu destino, que permita consultar la oferta turística, reservar, construir viajes a medida y compartirlos en redes sociales o mediante el uso de las últimas tecnologías: Beacons, NFC, códigos QR.';

			// **********************
			// SIGNING CA
			// **********************
			$scope.dividerSigning = "Implanta un Servicio de Señalización";
			$scope.signingTitle = 'Signing';
			$scope.signingTextA = 'Gestiona tu señalización';
			$scope.signingTextB = 'Sismotur es líder en la elaboración de planes de señalización y te implanta Signing, un servicio web especializado para la planificación y gestión de la señalización territorial y urbana utilizado por más de 30 administraciones públicas.';

			// ******************
			// TECNOLOGIAS CA
			// ******************
			$scope.dividerTechnologies = 'Inventrip y Signing utilizan las mejores tecnologías';

			$scope.btnReferences = 'REFERENCIAS';

			// smart signage
			$scope.senalizacionTitle = 'Senyalització Intel·ligent';
			$scope.senalizacionText = 'Implanta un sistema de senyalització per facilitar la guia  dels turistes i millorar la qualitat d\'imatge de la destinació.';

			$scope.senalizacionTitle1 = 'Ruta Ribera del Duero Smart';
			$scope.senalizacionText1 = 'Sismotur ha implantado el sistema Inventrip de señalización turística inteligente en la Ruta del Vino Ribera del Duero.';

			$scope.senalizacionTitle2 = 'Barcelona';
			$scope.senalizacionText2 = 'Disseny de la nova senyalització turística de vianants portada a terme per Sismotur per a la ciutat de Barcelona.';

			$scope.senalizacionTitle3 = 'Castilla y León';
			$scope.senalizacionText3 = 'La Consejera y el Director General de Turismo de Castilla y León, conjuntamente con Sismotur, presentaron en INTUR el programa de mejora de la señalización turística de la región.';

			// beacons
			$scope.beaconText = 'Desplega la nova tecnologia beacons per donar informació contextualitzada al turista i oferir-li productes i serveis personalitzats al seu telèfon mòbil.';

			$scope.beaconTitle1 = 'Beacons en las Señales Inteligentes';
			$scope.beaconText1 = 'Inventrip conecta las señales inteligentes con el turista utilizando Beacons.';

			$scope.beaconTitle2 = 'Señalización Turística Inteligente en las Palmas de Gran Canaria';
			$scope.beaconText2 = 'Sismotur desarrolla el plan de señalización turística inteligente de las Palmas de Gran Canaria empleando la tecnología Beacons gestionada por Inventrip.';

			// e-commerce
			$scope.comercializacionText = 'Dota a la teva Destinació de capacitat perquè els turistes puguin reservar on-line restaurants, allotjaments i activitats des de qualsevol dispositiu.';

			$scope.eCommerceTitle1 = 'e-Commerce';
			$scope.eCommerceText1 = 'Integración de centrales de reservas en Inventrip para que los turistas puedan reservar servicios antes y durante el viaje.';

			// nfc
			$scope.nfcText = 'Entrega als teus clients targetes NFC (contactless) per personalitzar la seva experiència turística a la destinació.';

			$scope.nfcTitle1 = 'Tarjetas NFC Ibiza';
			$scope.nfcText1 = "L'Ajuntament d'Eivissa va presentar als mitjans el projecte de Destinació Turística Intel·ligent amb Senyalització Intel·ligent, Beacons i aquestes targetes NFC amb un viatge predefinit per Dalt Vila";
			$scope.nfcButton1 = 'Descobreix el viaje';

			$scope.nfcTitle2 = 'Targetes NFC Palència Turisme'
			$scope.nfcText2 = 'Palència Turisme va presentar Inventrip als mitjans durant la passada Fira de Turisme Interior (INTUR) i entregà  targetes NFC amb un viatge per la Província de Palència.';
			$scope.nfcButton2 = 'Descobreix el viatge';

			// qr
			$scope.qrText = 'Comparteix un viatge turístic mitjançant codis QR.';

			$scope.QRtitle1 = 'Normandia i Bretanya'
			$scope.QRtext1 = 'Descobreix un viatge per Normandia i Bretanya escanejant aquest codi QR!';
			$scope.QRbutton1 = 'Descobreix el viatge';

			$scope.QRtitle2 = 'Barcelona';
			$scope.QRtext2 = 'Sismotur va redactar el 2012 el primer pla de senyalització i informació turística de la ciutat de Barcelona per al districte d\'Horta-Guinardó.';

			// drontrip
			$scope.dronText = 'Utilitza vols turístics amb Drons per viralitzar per les xarxes socials la promoció de destinacions i serveis turístics.';

			$scope.DronTriptext1 = 'Et convidem a volar per la comarca Sierra de Montánchez y Tamuja!';
			$scope.DronTripbutton1 = 'Veure Video';

			// ******************
			// NOTICIAS CA
			// ******************
			$scope.dividerNews = 'Últimes notícies';
			$scope.moreNews = 'Més notícies';

			// *********************
			// PARTNERS CA
			// *********************
			$scope.titlePartners = 'Socis';

			// ******************
			// CONTACTO CA
			// ******************
			$scope.btnContact = 'CONTACTA\'NS';

			$scope.cntSpain = 'Espanya';
			$scope.cntSpain2 = 'Madrid & Barcelona';
			$scope.cntSpainPhone = '+34 913.238.208';

			$scope.cntFrance = 'França';
			$scope.cntFrance2 = 'Annecy';
			$scope.cntFrancePhone = '+33 (0)619.20.30.61';

			// *********************
			// news.html CA
			// *********************
			$scope.newsTitle19 = 'Sismotur presentará Blockchain y sus aplicaciones potenciales para el Turismo durante FITUR 2017 en SEGITTUR Lab';
			$scope.newsContent19 = 'Sismotur estará presente en FITUR 2017, en el área Know How & Export (Stand 10B09, cerca del stand de SEGITTUR). El día 18 de enero a las 17:30, en el espacio SEGITTUR Lab, organizaremos una conferencia sobre la tecnología Blockchain y sus aplicaciones en el ámbito del Turismo.';
			$scope.newsDetail19 = 'Análisis de Blockchain y su potencial para el Turismo';

			$scope.newsTitle18 = 'Artículo sobre la Señalización Turística Inteligente en EFE Empresas';
			$scope.newsContent18 = 'Artículo de EFE Empresas comentando la innovación que supone conectar el Destino Turístico con el nuevo turista digital y su Smartphone a través de la señalización turística inteligente e Inventrip.';
			$scope.newsDetail18 = 'Enlace al Artículo';

			$scope.newsTitle17 = 'Artículo en el Blog de Kontakt.io';
			$scope.newsContent17 = 'Kontakt, referencia mundial en tecnologías conectadas (Internet of the Things) y colaborador de Sismotur, explica la innovación que supone Inventrip para el sector turístico.';
			$scope.newsDetail17 = 'Enlace al Blog de Kontakt';

			$scope.newsTitle16 = 'Presentación de Inventrip para la Ruta del Vino Ribera del Duero';
			$scope.newsContent16 = 'El Director General de Turismo de Castilla y León presenta Inventrip, el nuevo sistema de señalización turística inteligente de Sismotur.';
			$scope.newsDetail16 = 'Enlace al Artículo';

			$scope.newsTitle15 = 'Las Palmas de Gran Canaria implantará Inventrip';
			$scope.newsContent15 = 'El Ayuntamiento y el Cabildo han llegado a un acuerdo para implantar la señalización turística inteligente de Sismotur en las zonas comerciales abiertas de interés turístico y dar información con la plataforma Inventrip.';
			$scope.newsDetail15 = 'Enlace al Artículo';

			$scope.newsTitle14 = 'FITUR 2016';
			$scope.newsContent14 = "Sismotur va ser la triada per presentar el seu concepte de Destinació Turística Intel·ligent a través de la integració de mitjans físics i digitals OFF/ON connectant la senyalització a la plataforma Inventrip. D'aquesta forma, els senyals i el territori li parlen al mòbil del turista.";

			$scope.newsTitle13 = 'Aportació de Sismotur al Llibre Blanc de Destinacions Turístiques Intel·ligents';
			$scope.newsContent13 = "El passat mes d'octubre es va presentar a la seu del Ministeri d'Indústria, Energia i Turisme el Llibre Blanc de Destinacions Turístiques Intel·ligents promogut per SEGITTUR i dins del marc del Pla Nacional de Ciutats Intel·ligents. Sismotur ha participat en la redacció d'aquest llibre blanco amb el seu model d'integració OFF/ON de mitjans físics i digitals en una destinació per millorar l'acolliment i l'experiència del turista.";

			$scope.newsTitle12 = "Sismotur redacta el pla de senyalització turística d'Euskadi";
			$scope.newsContent12 = 'Sismotur ha redactat el pla de senyalització turística per a Euskadi, treballant braç a braç amb el Govern Basc i la seva directora general de Turisme i amb les tres diputacions forals, unificant criteris, analitzant necessitats i especificitats darrere de la concertació.';

			$scope.newsTitle11 = 'Sismotur en INTUR 2015';
			$scope.newsContent11 = "En la passada edició de INTUR a Valladolid, Sismotur va presentar els avanços de la plataforma Inventrip com a eina de promoció d'una destinació, planificador de viatges per al turista i servei d'informació digital al territori vinculat a la senyalització física i als recursos i serveis de la destinació.";

			$scope.newsTitle10 = 'Sismotur participa en la Jornada de Xarxes Socials i Turisme de la Diputació de Barcelona';
			$scope.newsContent10 = "Augusto Ramos, CEO de Sismotur, ha impartit una ponència sobre la capacitat de les xarxes socials i el turista com a prescriptors d'una destinació, la necessitat que els territoris se sumeixen als nous mitjans de difusió i promoció i com Inventrip implementa i explota aquests mitjans per a la difusió de la destinació per part de turistes i promotors del mateix.";

			$scope.newsTitle9 = "Sismotur amb el Principat d'Astúries en la presentació d’Inventrip per a Piloña";
			$scope.newsContent9 = "Sismotur ha acompanyat al director general de Turisme del Principat d'Astúries en la presentació d’Inventrip com a plataforma de promoció de la destinació i gestió de la informació turística per a Piloña, zona molt turística d'Astúries i que aposta per les noves tecnologies en el seu desenvolupament turístic.";

			$scope.newsTitle8 = "Sismotur amb Turisme d'Extremadura en la presentació de Inventrip per a la Serra de Montánchez";
			$scope.newsContent8 = "Felipe Santi, CTO de Sismotur, acompanya a Turisme d'Extremadura en la presentació del servei Inventrip per a la millora de la promoció de la Serra de Montánchez i Tamuja en el seu camí cap a una destinació turística intel·ligent. També s'ha presentat un vídeo promocional amb drones associat a Inventrip per difondre la destinació a les xarxes socials.";

			$scope.newsTitle7 = "Sismotur presentant el projecte d'Eivissa Destino Turístic Intel·ligent amb beacons i Inventrip";
			$scope.newsContent7 = "Sismotur ha acompanyat a l'Ajuntament d'Eivissa en la presentació del projecte que converteix al municipi en una destinació turística intel·ligent amb la implantació de la plataforma Inventrip com a sistema de gestió de la informació turística i de la promoció de la destinació, integrat amb un pla de senyalització intel·ligent per als vianants i interpretativa i una xarxa de Beacons.";

			$scope.newsTitle6 = 'Presentació de Inventrip en la Serra Nord de Madrid';
			$scope.newsContent6 = "Julio José Julián, CMO de Sismotur, presenta la implantació de la plataforma Inventrip com a sistema de gestió de la informació turística, planificador de viatges i mitjà de promoció a les xarxes socials de la destinació turística. S'emmarca dins d'un ambiciós pla per promocionar la Serra Nord i que es recolza decididament a les noves tecnologies i les xarxes socials com a vehicle de difusió.";;

			$scope.newsTitle5 = 'Sismotur en les Jornades Tècniques de Turisme a Perú';
			$scope.newsContent5 = "De la mà de SEGITTUR i del ICEX, Sismotur ha estat present en les Jornades Tècniques de Turisme que s'han celebrat a la capital de Perú. S'ha presentat la visió de la destinació turística intel·ligent i la capacitat de Inventrip com a gestor de la informació i eina de promoció per a un territori turístic a nivell global.";

			$scope.newsTitle4 = 'Sismotur en les Jornades Tècniques de Turisme Espanya-Xile, a Santiago de Xile';
			$scope.newsContent4 = "Sismotur acompanya a Segittur i al ICEX en les Jornades Tècniques de Turisme que s'han celebrat a Santiago de Xile, i està present com a testimoni d'excepció de la signatura del conveni bilateral entre Xile i Espanya, presentant Inventrip i la potència de la visió OFF/ON d'integració d'elements físics i digitals per desenvolupar una destinació turística intel·ligent.";

			$scope.newsTitle3 = 'Sismotur presenta el Projecte de senyalització turística del Camí de Santiago per Castella i Lleó';
			$scope.newsContent3 = "Sismotur ha presentat el pla de senyalització turística del Camí de Santiago per les carreteres de Castella i Lleó, juntament amb la consellera i el director general de Turisme. Suposa una millora en la percepció de la qualitat de la destinació i en el procés d'acolliment al turista sobre el territori.";

			$scope.newsTitle2 = "Sismotur en el Cluster de Turisme d'Extremadura";
			$scope.newsContent2 = "Reportatge de TVE sobre el Cluster de Turisme d'Extremadura, on Augusto Ramos, CEO de Sismotur, exposa la capacitat de Inventrip com a plataforma de promoció d'una Destinació Turística i la seva potència com a eina per planificar viatges per al turista i com a gestor de la informació turística d'un Territori.";

			$scope.newsTitle1 = 'Inventrip rep el premi a la millor idea de màrqueting de destinacions de Territorio & Màrqueting';
			$scope.newsContent1 = "Sismotur ha rebut el premi finalista per l'aportació de la plataforma Inventrip a la difusió i promoció d'una destinació turística. El jurat reconeix com Inventrip és capaç d'unir la part emotiva de l'experiència d'un turista a l'hora de preparar un viatge amb la realitat de desplaçar-se dins del territori durant el viatge i la prescripció en positiu que posteriorment fa d'aquesta destinació.";

			break;

    // ***********************************
		// ************** FRENCH *************
		// ***********************************
			case "fr":

			// ******************
			// CLAIM FR
			// ******************
			$scope.claim1 = 'Connectez votre destination avec le touriste numérique';
			$scope.claim2 = 'Découvrez la signalétique touristique intelligente';
			$scope.btnMuestra = 'Demandez un échantillon gratuit';

			// ******************
			// MENU FR
			// ******************
			$scope.inventrip = 'Inventrip';
			$scope.mnTecno = 'Technologies';
			$scope.mnNoticias = 'Actualités';
			$scope.mnTeam = 'Partenaires';
			$scope.mnCont = 'Contact';
			$scope.mnIdioma = 'FR';

			// ******************
			// INVENTRIP FR
			// ******************
			$scope.dividerInventrip = 'Implantez un Service d\'Information Personnalisé';
			$scope.invTextA = 'Connectez votre Destination';
			$scope.invTextB = "Sismotur implante dans votre destination un service d'information et gestion de la signalisation touristique intelligente, lequel permet la consultation de l'offre touristique, la réservation, ainsi que la construction de voyages sur mesure. Il permet également le partage d'expériences sur les réseaux sociaux ou par l'usage de dispositifs de connexion: Beacons, NFC, codes QR.";

			// **********************
			// SIGNING ES
			// **********************
			$scope.dividerSigning = "Implantez un Service de Signalisation";
			$scope.signingTitle = 'Signing';
			$scope.signingTextA = 'Gérez votre signalétique';
			$scope.signingTextB = "Sismotur est leader dans l'élaboration de schémas directeurs et vous implante Signing, un service web spécialisé pour la planification et la gestion de la signalisation territoriale et urbaine qui est utilisé par plus de 30 administrations publiques.";

			// ******************
			// TECNOLOGIAS FR
			// ******************
			$scope.dividerTechnologies = 'Inventrip et Signing utilisent les meilleures technologies';

			$scope.btnReferences = 'RÉFÉRENCES';

			// smart signage
			$scope.senalizacionTitle = 'Signalisation Intelligente';
			$scope.senalizacionText = "Améliorez la signalisation touristique de votre destination en l'intégrant avec des systèmes d'information touristique de pointe. Nous vous offrons notre service cloud Signing pour sa planification et gestion.";

			$scope.senalizacionTitle1 = 'Route Ribera del Duero Smart';
			$scope.senalizacionText1 = 'Sismotur a implanté le système Inventrip de signalisation touristique intelligente dans la Route Ribera del Duero.';

			$scope.senalizacionTitle2 = 'Barcelone';
			$scope.senalizacionText2 = 'Design de la nouvelle signalisation touristique piétonne menée par Sismotur pour la ville de Barcelone.';

			$scope.senalizacionTitle3 = 'Castille et Leon';
			$scope.senalizacionText3 = "La Conseillère et le Directeur Général de Tourisme de Castille et Leon, ont présenté avec Sismotur le programme d'amélioration de la signalisation touristique de la région lors du salon de tourisme intérieur INTUR.";

			// beacons
			$scope.beacons = 'Beacons';
			$scope.beaconText = "Adoptez cette nouvelle technologie pour envoyer aux touristes des produits et services personnalisés sur leurs smartphones.";

			$scope.beaconTitle1 = 'Beacons dans les Signaux Intelligents';
			$scope.beaconText1 = "Inventrip connecte les panneaux intelligents avec le touriste en utilisant des Beacons.";

			$scope.beaconTitle2 = 'Signalétique Touristique Intelligente à Las Palmas de Gran Canaria';
			$scope.beaconText2 = 'Sismotur développe le plan de signalisation touristique intelligente de Las Palmas de Gran Canaria en utilisant la technologie Beacons gérée par Inventrip.';

			// e-commerce
			$scope.eCommerce = 'e-Commerce';
			$scope.comercializacionText = "Facilitez au touriste l'accés à la réservation en ligne de logements, restaurants et activités, et ce avant ou durant le voyage.";

			$scope.eCommerceTitle1 = 'e-Commerce';
			$scope.eCommerceText1 = 'Intégration de systèmes de réservation dans Inventrip de manière à permettre aux touristes la réservation de services avant et durant leur voyage.';

			// nfc
			$scope.nfc = 'NFC';
			$scope.nfcText = 'Donnez à vos touristes de belles cartes équipées de puces sans contact pour personnaliser et enrichir leur expérience touristique dans votre territoire.';

			$scope.nfcTitle1 = 'Cartes NFC Ibiza';
			$scope.nfcText1 = "L'équipe municipale d'Ibiza a présenté à la presse le projet de Destination Touristique Intelligente: signalisation connectée, beacons, et ces cartes NFC qui contiennent un voyage à Dalt Vila";
			$scope.nfcButton1 = 'Découvrez le voyage';

			$scope.nfcTitle2 = 'Cartes NFC Palencia Tourisme';
			$scope.nfcText2 = "L'Office de Tourisme de Palencia (Espagne) a présenté Inventrip à la presse au cours salon de tourisme d'intérieur espagnol (INTUR) et a distribué des cartes NFC avec un voyage dans la province de Palencia.";
			$scope.nfcButton2 = 'Découvrez le voyage';

			// qr
			$scope.qr = 'QR';
			$scope.qrText = "Gérez facilement l'information touristique en ligne des ressources et cartes, et ce quelle que soit la langue du touriste.";

			$scope.qrTitle1 = 'Normandie et Bretagne'
			$scope.qrText1 = 'Découvrez un voyage en Normandie et Bretagne avec ce code QR !';
			$scope.qrButton1 = 'Découvrez le voyage';

			$scope.qrTitle2 = 'Barcelone';
			$scope.qrText2 = "Sismotur a rédigé en 2012 le premier plan de signalisation et information touristique de la ville de Barcelone pour l'arrondissement d'Horta-Guinardó.";
			$scope.qrButton2 = "Plus d'Info";

			// drontrip
			$scope.dronTrip = 'DronTrip';
			$scope.dronText = 'Utilisez des vols touristiques enregistrés avec des drones pour viraliser dans les réseaux sociaux la promotion des destinations et services touristiques.';

			$scope.drontripText1 = "Nous vous invitons à voler dans la région d'Extremadure !";
			$scope.drontripButton1 = 'Regarder la vidéo';

			// ******************
			// NOTICIAS FR
			// ******************
			$scope.dividerNews = 'Dernières actualités';
			$scope.moreNews = "Plus d'actualités" ;

			// *********************
			// PARTNERS FR
			// *********************
			$scope.titlePartners = 'Associés';

			// ******************
			// CONTACTO FR
			// ******************
			$scope.btnContact = 'CONTACTEZ-NOUS';

			$scope.cntSpain = 'Espagne';
			$scope.cntSpain2 = 'Madrid & Barcelona';
			$scope.cntSpainPhone = '+34 913.238.208';

			$scope.cntFrance = 'France';
			$scope.cntFrance2 = 'Annecy';
			$scope.cntFrancePhone = '+33 (0)619.20.30.61';

			$scope.copyright = 'Copyright © 2016 SISMOTUR SL.';

			// *********************
			// NEWS FR
			// *********************
			$scope.newsTitle19 = 'Sismotur présentera Blockchain y ses applications potentielles pour le Tourisme lors du salon FITUR 2017, dans  SEGITTUR Lab';
			$scope.newsContent19 = "Sismotur sera présent dans FITUR 2017, section Know-How & Export (Stand 10B09, près de SEGITTUR). Le 18 janvier à 17:30, dans l'espace SEGITTUR Lab, nous organiserons une conférence sur la technologie Blockchain et ses aplications dans le domaine du Tourisme.";
			$scope.newsDetail19 = "Analyse de Blockchain et son potentiel dans le domaine du Tourisme";

			$scope.newsTitle18 = "Article sur la Signalisation Touristique Intelligente dans EFE Empresas";
			$scope.newsContent18 = "Article de EFE Empresas sur l'innovation qui représente la connexion d'une Destination Touristique avec le nouveau touriste numérique et son smartphone via la signalétique touristique intelligente et Inventrip.";
			$scope.newsDetail18 = "Lien vers l'Article";

			$scope.newsTitle17 = 'Article dans le Blog de Kontak.io';
			$scope.newsContent17 = "Kontakt, référence mondiale dans les technologies connectées (Internet of the Things) et collaborateur de Sismotur, explique l'innovation qui repréente Inventrip pour le secteur touristique.";
			$scope.newsDetail17 = 'Lien vers le Blog de Kontakt';

			$scope.newsTitle16 = "Présentation d'Inventrip pour la Route du Vin de Ribera del Duero";
			$scope.newsContent16 = "Le Directeur Général de Tourisme de Castille et on El Director General de Turismo de Castille et Léon présente Inventrip, le nouveau système de sigalisation touristique intelligente de Sismotur.";
			$scope.newsDetail16 = "Lien vers l'Article";

			$scope.newsTitle15 = 'Las Palmas de Gran Canaria adoptera Inventrip';
			$scope.newsContent15 = "La Mairie et le Cabildo sont parvenus à un accord pour implanter la signalétique touristique intelligente de Sismotur dans les zones commerçantes ouvertes d'intérêt touristique et donner de l'information avec Inventrip.";
			$scope.newsDetail15 = "Lien vers l'Artículo";
			
			$scope.newsTitle14 = 'Salon FITUR 2016';
			$scope.newsContent14 = "Sismotur a été choisi pour présenter à S.M. la Reine d'Espagne son concept de Destination Touristique Intelligente lors de l'inauguration du salon. Le CEO de Sismotur, Augusto Ramos, y a présenté l'intégration des signaux touristiques avec notre système cloud computing Inventrip (intégration OFF/ON). La destination touristique peut ainsi communiquer directement avec le smartphone du touriste.";

			$scope.newsTitle13 = "Contribution de Sismotour au livre blanc des Destinations Touristiques Intelligentes";
			$scope.newsContent13 = "En octobre 2015 a été présenté le livre blanc des Destinations Touristiques Intelligentes. Ce livre a été promu par le ministère de l'Industrie, l'Energie et le Tourisme via l'organisme Segittur, en charge des nouvelles technologies appliquées au tourisme. Il s'inscrit dans le cadre du Plan National des Villes Intelligentes d'Espagne. Sismotur a contribué dans la rédaction de ce livre avec le partage de son modèle d'intégration OFF/ON de moyens physiques et numériques, ce qui améliore l'accueil et l'expérience du touriste.";

			$scope.newsTitle12 = "Sismotur a été choisi pour rédiger le Plan de Signalisation Touristique du Pays Basque espagnol";
			$scope.newsContent12 = "Sismotur travaille de pair avec la direction générale du Tourisme du gouvernement du Pays Basque et avec les directions des trois départements. L'application du plan permettra au Pays Basque de disposer d'un système de signalisation unifié, cohérent, et qui intègre les besoins de la destination touristique et du secteur privé.";

			$scope.newsTitle11 = 'Sismotur au salon INTUR 2015';
			$scope.newsContent11 = "Lors de la dernière édition du salon de tourisme intérieur INTUR, qui a eu lieu à Valladolid, Sismotur a présenté les améliorations de sa plateforme Inventrip, lequel est depuis un outil de promotion des destinations touristiques, système de planification de voyages pour le touriste, service d'information numérique dans le territoire lié à la signalétique physique, et plateforme de commercialisation des services présents dans le territoire.";

			$scope.newsTitle10 = "Sismotur participe dans la journée Réseaux Sociaux et Tourisme du Conseil Général de Barcelone.";
			$scope.newsContent10 = "Augusto Ramos, CEO de Sismotur, a exposé le potentiel des réseaux sociaux et des touristes pour agir comme prescripteurs d'une destination touristique, le besoin des territoires d'utiliser ces nouveaux moyens numériques, et la manière dont Sismotur utilise ces outils pour aider les destinations touristiques à être présentes sur le Net.";

			$scope.newsTitle9 = "Sismotur avec la Principauté des Asturies lors de la présentation d'Inventrip pour Piloña";
			$scope.newsContent9 = "Sismotur a accompagné le directeur général de Tourisme de la Principauté des Asturies dans la présentation d'Inventrip, plateforme de promotion de la destination et de gestion de l'information touristique pour Piloña. Cette zone dispose d'un grand potentiel et mise sur les nouvelles technologies offertes par Sismotur pour dévélopper son secteur touristique.";

			$scope.newsTitle8 = "Sismotur avec la région d'Estrémadure lors de la présentation d'Inventrip pour la Sierra de Montánchez";
			$scope.newsContent8 = "Felipe Santi, CTO de Sismotur, accompagne le tourisme d'Estrémadure lors de la présentation d'Inventrip pour la communauté de communes Sierra de Montánchez et Tamuja. Une vidéo de promotion réalisée par Sismotur à l'aide de drones a été également présentée, laquelle a été diffusé sur les réseaux sociaux.";

			$scope.newsTitle7 =
			"Sismotur présente le projet Ibiza, Destination Touristique Intelligente";
			$scope.newsContent7 = "Sismotur a accompagné la commune d'Ibiza dans la présentation de ce projet qui transforme la commune en Destination Touristique Intelligente. Cela est possible grâce à l'implantation du système d'information touristique et de promotion Inventrip, couplé avec un plan de signalisation intelligent au sein de la ville qui prévoit le déploiement d'un réseau de beacons.";

			$scope.newsTitle6 = "Présentation d'Inventrip dans la Sierra Norte de Madrid";
			$scope.newsContent6 = "Julio José Julián, CMO de Sismotur, présente l'implantation de la plateforme Inventrip en tant que système de gestion de l'information touristique, de planification de voyages, et outil de promotion de la destination. Ce projet s'inscrit dans une démarche ambitieuse de promotion de Sierra Norte, et qui s'appuie tout particulièrement dans les technologies numériques et les réseaux sociaux comme moyens de promotion.";

			$scope.newsTitle5 = "Sismotur dans les Journées de Tourisme Espagne-Pérou";
			$scope.newsContent5 = "Sismotur a été présent dans ces journées de tourisme bilatérales à Lima. Cet évènement, organisé par Segittur et l'ICEX, a compté notamment avec la présence de la vice-ministre du Tourisme du Pérou, de l'ambassadeur d'Espagne au Pérou, ainsi que de nombreuses entreprises touristiques travaillant dans le pays.";

			$scope.newsTitle4 = "Sismotur dans les Journées de Tourisme Espagne-Chili"
			$scope.newsContent4 = "Sismotur a accompagné à nouveau Segittur et l'ICEX, cette fois-ci dans les journées bilatérales de tourisme Espagne-Chili qui ont eu lieu dans la capitale Santiago. Nous avons assisté à la signature d'un accord bilatéral entre les deux États, et nous avons eu l'occasion de présenter notre vision OFF/ON d'intégration de la signalisation physique avec nos systèmes numériques pour développer une destination touristique intelligente."

			$scope.newsTitle3 = "Sismotur présente le projet de signalisation touristique du chemin de Saint-Jacques à Castille et Léon";
			$scope.newsContent3 = "Sismotur a présenté le Plan de Signalisation Touristique du chemin de Saint-Jacques de Castille et Léon avec la directrice du Tourisme de la région. Ce plan améliore nettement l'accueil des touristes dans le territoire et la qualité perçue de la destination dans son ensemble.";

			$scope.newsTitle2 = "Sismotur dans le Cluster de Tourismo d'Estrémadure";
			$scope.newsContent2 = "Reportage de la télévision régionale sur le cluster, où notre CEO Augusto Ramos a exposé notre service Inventrip en tant que plateforme de promotion des destinations touristiques et de gestion de l'information du territoire.";

			$scope.newsTitle1 = "Sismotur reçoit le prix à la meilleure idée de marketing des destinations";
			$scope.newsContent1 = "Sismotur a reçu le prix finaliste pour l'apport d'Inventrip à la diffusion et promotion d'une destination touristique. Le jury a reconnu Inventrip comme étant capable de canaliser l'envie de voyager des touristes, en leur aidant à préparer leur voyage et en leur informant durant celui-ci. De même, le jury a apprécié la capacité de promotion de la destination touristique sur les réseaux sociaux offerte par d'Inventrip.";

			break;

		// ************************************
		// ************** ENGLISH (DEFAULT) ***
		// ************************************
		default:

			$scope.moreInfoShort = 'REFERENCES';

			// ******************
			// CLAIM
			// ******************
			$scope.claim1 = 'Connect your destination with the digital tourist';
			$scope.claim2 = 'Discover smart tourism signage';
			$scope.btnMuestra = 'Request a free sample';

			// ******************
			// MENU
			// ******************
			$scope.mnNoticias = 'News';
			$scope.mnObjet = 'Objectives';
			$scope.mnTecno = 'Technologies';
			$scope.mnTeam = 'Partners';
			$scope.mnCont = 'Contact';
			$scope.mnIdioma = 'EN';

			// ******************
			// GREY SEPARATOR 2
			// ******************
			$scope.techTitle = 'Inventrip uses the best technologies';

			// ******************
			// TECNOLOGIAS
			// ******************

			// DronTrip
			$scope.dronText = 'Use tourism videos shot with drones to promote and viralize your destination and touristic services across social networks.';

			// NFC
			$scope.nfcText = 'Provide to your clients with NFC cards (contactless) to personalize their experience in your touristic destination.';

			// Signal
			$scope.senalizacionTitle = 'Smart Signage';
			$scope.senalizacionText = 'Implement a traffic sign system to facilitate tourist guiding and improve the perceived quality of your destination.';

			// QR
			$scope.qrText = 'Share a touristic trip through QR codes.';

			// Beacons
			$scope.beaconText = 'Deploy the new beacon technology to give tourists contextualized information and offer them tailored products and services in their smartphone.';

			// e-Commerce
			$scope.comercializacionText = 'Make it simple for tourists the access to online booking systems for accommodation, restaurants and activities, before or during the trip.';

			// ******************
			// TECNOLOGIAS
			// ******************

			// Inventrip
			$scope.invTextA = 'Connect your destination';
			$scope.invTextB = 'We provide you with a technological platform that enable your travellers to create their own trip plans (organized by days, cities, topics, etc.), and by navigating on the map add the places they want to visit and the services they want to hire.';

			// ******************
			// NOTICIAS
			// ******************

			$scope.resumeNoticias = 'Recent news';
			$scope.newsTitle14 = 'FITUR 2016';
			$scope.newsContent14 = "Sismotur was chosen to present its concept of Smart Tourist Destination via the integration of physical and digital devices OFF/ON which connect the signage to Inventrip. In this way, the signs and the territory speak to the tourist's telephone.";
			$scope.btnNewsClick = "More news" ; // TODO: verify translation

			// ******************
			// CONTACTO
			// ******************
			$scope.cntSpain = 'Spain';
			$scope.cntSpain2 = 'Madrid & Barcelona';
			$scope.cntSpainPhone = '+34 913.238.208';

			$scope.cntFrance = 'France';
			$scope.cntFrance2 = 'Annecy';
			$scope.cntFrancePhone = '+33 (0)619.20.30.61';

			$scope.btnContact = 'Contact us';

			// *********************
			// SUBSECCION TECNOLOGIA
			// *********************

			// Página DronTrip
			$scope.DronTriptext1 = 'We invite you to flight over the county of Sierra de Montánchez and Tamuja, Spain!';
			$scope.DronTripbutton1 = 'Watch Video';

			// Página NFC

			$scope.NFCtitle1 = 'NFC cards for Ibiza';
			$scope.NFCtext1 = "The city of Ibiza presented to the press the project of Smart Tourist Destination: smart signage, beacons, and these NFC cards containing a trip to the city.";
			$scope.NFCbutton1 = 'Discover the trip';

			$scope.NFCtitle2 = 'NFC cards for Palencia'
			$scope.NFCtext2 = 'Palencia Tourism presented Inventrip to the press during the last spanish fair of interior tourism (INTUR).';
			$scope.NFCbutton2 = 'Discover the trip';

			// Página zación
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
			$scope.Beacontitle1 = 'Beacon';
			$scope.Beacontext1 = "Implementation of a network of beacons in Ibiza.";

			$scope.Beacontitle2 = 'Beacon';
			$scope.Beacontext2 = 'Proposal of beacons technology implementation to the province of Palencia, Spain.';

			// Página e-Commerce
			$scope.eCommercetitle1 = 'e-Commerce';
			$scope.eCommercetext1 = 'Integration of booking engines in Inventrip that tourists can access before and during the trip.';

			// *********************
			// STAFF
			// *********************

		  $scope.btnTitleTeam = 'Partners';

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

			$scope.btnContact = 'CONTACT US';

			// *********************
			// news.html
			// *********************

			$scope.newsTitle19 = '';
			$scope.newsContent19 = '.';
			$scope.newsDetail19 = '';

			$scope.newsTitle18 = '';
			$scope.newsContent18 = '.';
			$scope.newsDetail18 = '';

			$scope.newsTitle17 = '';
			$scope.newsContent17 = '.';
			$scope.newsDetail17 = '';

			$scope.newsTitle16 = '';
			$scope.newsContent16 = '.';
			$scope.newsDetail16 = '';

			$scope.newsTitle15 = '';
			$scope.newsContent15 = '.';
			$scope.newsDetail15 = '';

			$scope.newsTitle14 = 'FITUR 2016';
			$scope.newsContent14 = 'Sismotur fue la elegida para presentar en la inauguración su concepto de Destino Turístico Inteligente a través de la integración de medios físicos y digitales OFF/ON conectando la señalización a la plataforma Inventrip. De esta forma, las señales y el territorio le hablan al móvil del turista.';

			$scope.newsTitle13 = 'Aportación de Sismotur al Libro Blanco de Destinos Turísticos Inteligentes';
			$scope.newsContent13 = 'El pasado mes de octubre se presentó en la sede del Ministerio de Industria, Energía y Turismo el Libro Blanco de Destinos Turísticos Inteligentes promovido por Segittur y dentro del marco del Plan Nacional de Ciudades Inteligentes. Sismotur ha participado en la redacción de este Libro Blanco con su  modelo de integración OFF/ON de medios físicos y digitales en un Destino para mejorar la Acogida y la Experiencia del Turista.';

			$scope.newsTitle12 = 'Sismotur redacta el Plan de Señalización Turística de Euskadi';
			$scope.newsContent12 = 'Sismotur ha redactado el Plan de Señalización Turística para Euskadi, trabajando codo a codo con el Gobierno Vasco y su Directora General de Turismo y con las tres Diputaciones Forales, unificando criterios, analizando necesidades y especificidades en pos de la Concertación.';

			$scope.newsTitle11 = 'Sismotur en INTUR 2015';
			$scope.newsContent11 = 'En la pasada edición de INTUR en Valladolid, Sismotur presentó los avances de la plataforma Inventrip como herramienta de Promoción de un Destino, Planificador de viajes para el Turista y servicio de información digital en el Territorio vinculado a la Señalización física y a los Recursos y Servicios del Destino.';

			$scope.newsTitle10 = 'Sismotur Participa en la Jornada de Redes Sociales y Turismo de la Diputación de Barcelona';
			$scope.newsContent10 = 'Augusto Ramos, CEO de Sismotur, ha impartido una ponencia sobre la capacidad de las Redes Sociales y el Turista como prescriptores de un Destino, la necesidad de que los Territorios se sumen a los nuevos medios de difusión y promoción y cómo Inventrip implementa y explota estos medios para la difusión del Destino por parte de turistas y promotores del mismo.';

			$scope.newsTitle9 = 'Sismotur con el Principado de Asturias en la presentación de Inventrip para Piloña';
			$scope.newsContent9 = 'Sismotur ha acompañado al Director General de Turismo del Principado de Asturias en la presentación de Inventrip como plataforma de promoción del Destino y gestión de la información turística para Piloña, zona muy turística de Asturias y que apuesta por las nuevas tecnologías en su desarrollo turístico.';

			$scope.newsTitle8 = 'Sismotur con Turismo de Extremadura en la presentación de Inventrip para la Sierra de Montánchez';
			$scope.newsContent8 = 'Felipe Santi, CTO de Sismotur, acompaña a Turismo de Extremadura en la presentación del servicio Inventrip para la mejora de la promoción de la Sierra de Montánchez y Tamuja en su camino hacia un Destino Turístico Inteligente. También se ha presentado un vídeo promocional con Drones asociado a Inventrip para difundir el destino en las redes sociales.';

			$scope.newsTitle7 = 'Sismotur presentando el proyecto de Ibiza Destino Turístico Inteligente con Beacons e Inventrip';
			$scope.newsContent7 = 'Sismotur ha acompañado al Ayuntamiento de Ibiza en la presentación del proyecto que convierte al municipio en un Destino Turístico Inteligente con la implantación de la plataforma Inventrip como sistema de gestión de la información turística y de la promoción del Destino, integrado con un plan de señalización inteligente peatonal e interpretativa y una red de Beacons.';

			$scope.newsTitle6 = 'Presentación de Inventrip en la Sierra Norte de Madrid';
			$scope.newsContent6 = 'Julio José Julián, CMO de Sismotur, presenta la implantación de la plataforma Inventrip como sistema de gestión de la información turística, planificador de viajes y medio de promoción en las redes sociales del Destino Turístico. Se enmarca dentro de un ambicioso plan para promocionar la Sierra Norte y que se apoya decididamente en las Nuevas Tecnologías y las redes sociales como vehículo de difusión.';

			$scope.newsTitle5 = 'Sismotur en las Jornadas Técnicas de Turismo en Perú';
			$scope.newsContent5 = 'De la mano de Segittur y del ICEX, Sismotur ha estado presente en las Jornadas Tecnicas de Turismo que se han celebrado en la capital de Perú. Se ha presentado la visión del Destino Turístico Inteligente y la capacidad de Inventrip como gestor de la información y herramienta de promoción para un Territorio turístico a nivel global.';

			$scope.newsTitle4 = 'Sismotur en las Jornadas Técnicas de Turismo España-Chile, en Santiago de Chile';
			$scope.newsContent4 = 'Sismotur acompaña a Segittur y al ICEX en las Jornadas Técnicas de Turismo que se han celebrado en Santiago de Chile, y está presente como testigo de excepción de la firma del convenio bilateral entre Chile y España, presentando Inventrip y la potencia de la visión OFF/ON de integración de elementos físicos y digitales para desarrollar un Destino Turístico Inteligente.';

			$scope.newsTitle3 = 'Sismotur presenta el Proyecto de Señalización Turística del Camino de Santiago por Castilla y León';
			$scope.newsContent3 = 'Sismotur ha presentado el Plan de Señalización Turística del Camino de Santiago por las carreteras de Castilla y León, junto con la consejera y el Director General de Turismo. Supone una mejora en la percepción de la calidad del Destino y en el proceso de Acogida al Turista sobre el territorio.';

			$scope.newsTitle2 = 'Sismotur en el Cluster de Turismo de Extremadura';
			$scope.newsContent2 = 'Reportaje de TVE sobre el Cluster de Turismo de Extremadura, donde Augusto Ramos, CEO de Sismotur, expone la capacidad de Inventrip como plataforma de Promoción de un Destino Turístico y su potencia como herramienta para planificar viajes para el turista y como gestor de la información turística de un Territorio.';

			$scope.newsTitle1 = 'Inventrip recibe el Premio a la mejor idea de Marketing de Destinos de Territorio & Marketing';
			$scope.newsContent1 = 'Sismotur ha recibido el premio finalista por la aportación de la plataforma Inventrip a la difusión y promoción de un Destino Turístico. El jurado reconoce cómo Inventrip es capaz de unir la parte emotiva de la experiencia de un Turista a la hora de preparar un viaje con la realidad de desplazarse dentro del territorio durante el viaje y la prescripción en positivo que posteriormente hace de dicho Destino.';

			break;
	}
}
