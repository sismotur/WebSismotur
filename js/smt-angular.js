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
$scope.invTextB = 'Sismotur te implanta un servicio de información y gestión de la señalización turística inteligente para tu destino, que permite consultar la oferta turística, reservar, construir viajes a medida y compartirlos en redes sociales o mediante el uso de las últimas tecnologías: Beacons, NFC, códigos QR.';

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

// Smart Signage
$scope.senalizacionTitle = 'Señalización Inteligente';
$scope.senalizacionText = 'Mejora la señalización turística de tu destino integrándola con sistemas avanzados de información turística. Te ofrecemos nuestro servicio cloud Signing para su planificación y gestión.';

$scope.senalizacionTitle1 = 'Ruta Ribera del Duero Smart';
$scope.senalizacionText1 = 'Sismotur ha implantado el sistema Inventrip de señalización turística inteligente en la Ruta del Vino Ribera del Duero.';

$scope.senalizacionTitle2 = 'Barcelona';
$scope.senalizacionText2 = 'Diseño de la nueva señalización turística peatonal llevado a cabo por Sismotur para la ciudad de Barcelona.';

$scope.senalizacionTitle3 = 'Castilla y León';
$scope.senalizacionText3 = 'La Consejera y el Director General de Turismo de Castilla y León, conjuntamente con Sismotur, presentaron en INTUR el programa de mejora de la señalización turística de la región.';

// Beacons
$scope.beacons = 'Beacons';
$scope.beaconText = 'Incorpora esta nueva tecnología en señales o en oficinas de información para enviar al turista productos y servicios personalizados a su dispositivo móvil.';

$scope.beaconTitle1 = 'Beacons en las Señales Inteligentes';
$scope.beaconText1 = 'Inventrip conecta las señales inteligentes con el turista utilizando Beacons.';

$scope.beaconTitle2 = 'Señalización Turística Inteligente en las Palmas de Gran Canaria';
$scope.beaconText2 = 'Sismotur desarrolla el plan de señalización turística inteligente de las Palmas de Gran Canaria empleando la tecnología Beacons gestionada por Inventrip.';

// API
$scope.apiInventrip = "API";
$scope.apiInventripText = "Integra Inventrip con tus páginas web de turismo o sistemas de información Smart City para reducir costes y simplificar tus desarrollos informáticos.";

$scope.apiTitle1 = "Inventrip REST API";
$scope.apiText1 = "Inventrip es un sistema interoperable que permite obtener información e interaccionar con plataformas Smart City usando tecnologías estándar al alcance de cualquier desarrollador.";

$scope.apiTitle2 = "Schema.org para Turismo";
$scope.apiText2 = "Sismotur es cofundador del grupo de Turismo de Schema.org, proyecto amparado por W3C y principal vocabulario mundial de semántica de datos. Millones de páginas web utilizan Schema.org para mejorar su visibilidad e incrementar su número de visitas.";
$scope.apiButton2 = 'Súmate a esta iniciativa';

// Big Data
$scope.bigData = "Big Data";
$scope.bigDataText = "Analiza con sencillez los datos generados por tus turistas para mejorar la gestión de tu destino.";

$scope.bigDataTitle1 = "La señal inteligente: fuente de datos";
$scope.bigDataText1 = "Inventrip permite generar en tiempo real cuadros de mando y análisis a medida accesibles por navegador sobre el uso que los turistas hacen de las señales conectadas y de cualquier servicio asociado con las mismas.";

// E-Commerce
$scope.eCommerce = 'e-Commerce';
$scope.comercializacionText = 'Facilita al turista el acceso a motores de reserva de alojamientos, restaurantes y actividades, antes o durante el viaje.';

$scope.eCommerceTitle1 = 'e-Commerce';
$scope.eCommerceText1 = 'Integración de centrales de reservas en Inventrip para que los turistas puedan reservar servicios antes y durante el viaje.';

// Blockchain
$scope.blockchain = "Blockchain";
$scope.blockchainText = "Aprovecha el potencial de esta tecnología disruptiva para interaccionar con el turista sin necesidad de depender de intermediarios.";

$scope.blockchainTitle1 = "Blockchain";
$scope.blockchainText1 = "Sismotur presentó en FITUR 2017 algunas de las aplicaciones potenciales para el turismo de esta increíble tecnología que ha permitido, entre otras cosas, la existencia de la moneda digital Bitcoin.";
$scope.blockchainButton1 = 'Descubre las aplicaciones';

// NFC
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

$scope.copyright = 'Copyright © 2017 SISMOTUR SL.';

// *********************
// NEWS ES
// *********************
$scope.newsTitle25 = 'Inicio del plan de señalización inteligente de Gran Canaria';
$scope.newsContent25 = 'El Cabildo encarga a Sismotur la redacción del plan de señalización turística inteligente de la isla de Gran Canaria. Foto: el consejero de Obras Públicas e Infraestructuras (izquierda) con el CEO de Sismotur (derecha) en el momento de la firma del contrato.';
$scope.newsDetail25 = 'Enlace al anuncio del Cabildo de Gran Canaria';

$scope.newsTitle24 = 'Reguengos de Monsaraz, primer destino con señalización turística inteligente de Portugal';
$scope.newsContent24 = 'Sismotur presenta a las Rutas del Vino de Portugal el proyecto de destino inteligente conectado realizado en Reguengos de Monsaraz. Foto: alcalde de Reguengos de Monsaraz y presidente de la Red Europea de Ciudades del Vino (izquierda), presidente de la Asociación de Municipios del Vino de Portugal (centro) y CEO de Sismotur (derecha).';
$scope.newsDetail24 = 'Enlace al artículo de Publituris';

$scope.newsTitle23 = 'ICEX entrevista al CMO de Sismotur durante Fitur';
$scope.newsContent23 = 'Entrevista de la revista El Exportador a Sismotur durante Fitur 2017. Foto: CMO de Sismotur.';
$scope.newsDetail23 = 'Enlace a la entrevista completa (vídeo)';

$scope.newsTitle22 = 'Sismotur expone en Fitur Know-how & Export 2017';
$scope.newsContent22 = 'Sismotur presenta con éxito su señalización turística conectada en Fitur 2017. Foto: el CEO de Sismotur (derecha) presentando nuestro concepto al Viceministro de Turismo de Perú (centro) y al Presidente de SEGITTUR (izquierda).';
$scope.newsDetail22 = 'Enlace a un artículo sobre Sismotur en Fitur Daily';

$scope.newsTitle21 = 'La agencia EFE entrevista a Sismotur sobre Blockchain para el turismo';
$scope.newsContent21 = 'EFE Futuro se interesa por la tecnología Blockchain y ha entrevistado a nuestros expertos para conocer cómo se puede aplicar al turismo.';
$scope.newsDetail21 = 'Enlace al artículo';

$scope.newsTitle20 = 'FITUR 2017 - Tecnología Blockchain y aplicaciones para el Turismo';
$scope.newsContent20 = 'Enrique Melero, experto en Blockchain, y Felipe Santi, CTO de Sismotur, han presentado esta novedosa tecnología en SEGITTUR Lab.';
$scope.newsDetail20 = 'Presentación (idioma español, formato PDF)';

$scope.newsTitle19 = 'Sismotur presentará Blockchain y sus aplicaciones potenciales para el Turismo durante FITUR 2017 en SEGITTUR Lab';
$scope.newsContent19 = 'Sismotur estará presente en FITUR 2017, en el área Know-How & Export (Stand 10B09, cerca del stand de SEGITTUR). El día 18 de enero a las 16:00, en el espacio SEGITTUR Lab, organizaremos una conferencia sobre la tecnología Blockchain y sus aplicaciones en el ámbito del Turismo.';
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
$scope.claim1 = 'Connecta la teva destinació amb el turista digital';
$scope.claim2 = 'Descobreix la senyalització turística intel·ligent';
$scope.btnMuestra = "sol·licita'ns una mostra gratuïta";

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
$scope.dividerInventrip = "Implanta un Servei d'Informació Personalitzat";
$scope.invTextA = 'Connecta la teva destinació';
$scope.invTextB = "Sismotur t'implanta un servei d'informació i gestió de la senyalització turística intel·ligent per a la teva destinació, que permet consultar l'oferta turística, reservar, construir viatges a mesura i compartir-los a les xarxes socials o mitjançant l'ús de les últimes tecnologies: Beacons, NFC, codis QR.";

// **********************
// SIGNING CA
// **********************
$scope.dividerSigning = "Implanta un Servei de Senyalització";
$scope.signingTitle = 'Signing';
$scope.signingTextA = 'Gestiona la teva senyalització';
$scope.signingTextB = "Sismotur és líder en l'elaboració de plans de senyalització i t'implanta Signing, un servei web especialitzat per a la planificació i gestió de la senyalització territorial i urbana utilitzat per més de 30 administracions públiques.";

// ******************
// TECNOLOGIAS CA
// ******************
$scope.dividerTechnologies = 'Inventrip i Signing utilitzen les millores tecnologies';

$scope.btnReferences = 'REFERÈNCIES';

// Smart Signage
$scope.senalizacionTitle = 'Senyalització Intel·ligent';
$scope.senalizacionText = "Millora la senyalització turística de la teva destinació integrant-la amb sistemes avançats d'informació turística. T'oferim	el nostre servei cloud Signing per a la seva planificació i gestió";

$scope.senalizacionTitle1 = 'Ruta Ribera del Duero Smart';
$scope.senalizacionText1 = 'Sismotur ha implantat el sistema Inventrip de senyalització turística intel·ligent a la Ruta del Vino Ribera del Duero.';

$scope.senalizacionTitle2 = 'Barcelona';
$scope.senalizacionText2 = 'Disseny de la nova senyalització turística de vianants portada a terme per Sismotur per a la ciutat de Barcelona.';

$scope.senalizacionTitle3 = 'Castilla y León';
$scope.senalizacionText3 = 'La Consellera i el Director General de Turisme de Castilla y León, conjuntament amb Sismotur, van presentar a INTUR el programa de millora de la senyalització turística de la regió.';

// Beacons
$scope.beacons = 'Beacons';
$scope.beaconText = "Incorpora aquesta nova tecnologia en senyals i oficines d'informació per enviar al turista productes i serveis personalitzats al seu dispositiu mòbil.";

$scope.beaconTitle1 = 'Beacons als Senyals Intel·ligents';
$scope.beaconText1 = 'Inventrip connecta els senyals intel·ligents amb el turista utilitzant Beacons.';

$scope.beaconTitle2 = 'Senyalització Turística Intel·ligent a las Palmas de Gran Canaria';
$scope.beaconText2 = 'Sismotur desenvolupa el pla de senyalització turística intel·ligent de Las Palmas de Gran Canaria utilitzant la tecnologia Beacons gestionada per Inventrip.';

// API
$scope.apiInventrip = "API";
$scope.apiInventripText = "Integra Inventrip amb les teves pàgines web de turisme o sistemes d'informació Smart City per reduir costos i simplificar els teus desenvolupaments informàtics.";

$scope.apiTitle1 = "Inventrip REST API";
$scope.apiText1 = "Inventrip és un sistema interoperable que permet obtenir informació i interaccionar amb plataformes Smart City utilitzant tecnologies estàndard a l'abast de qualsevol desenvolupador.";

$scope.apiTitle2 = "Schema.org para Turismo";
$scope.apiText2 = "Sismotur és cofundador del Grup de Turisme de Schema.org, projecte de la W3C i principal vocabulari mundial de semàntica de dades. Milions de pàgines web utilitzant Schema.org per millorar la seva visibilitat i incrementar el seu nombre de visites.";
$scope.apiButton2 = "Suma't a aquesta iniciativa";

// Big Data
$scope.bigData = "Big Data";
$scope.bigDataText = "Analitza amb senzillesa les dades generades pels teus turistes per millorar la gestió de la teva destinació.";

$scope.bigDataTitle1 = "El senyal intel·ligent: font de dades";
$scope.bigDataText1 = "Inventrip permet generar en temps real quadres de comandament i anàlisi personalitzat accessibles amb el navegador sobre l'ús que els turistes fan dels senyals connectats i de qualsevol servei associat";

// E-commerce
$scope.eCommerce = 'e-Commerce';
$scope.comercializacionText = "Facilita al turista l'accés als motors de reserva d'allotjaments, restaurants i activitats abans i durant el viatge.";

$scope.eCommerceTitle1 = 'e-Commerce';
$scope.eCommerceText1 = 'Integració de centrals de reserva en Inventrip perquè els turistes puguin reservar serveis abans i durant el viatge.';

// Blockchain
$scope.blockchain = "Blockchain";
$scope.blockchainText = "Aprofita el potencial d'aquesta tecnologia disruptiva per interaccionar amb el turista sense necessitat de dependre d'intermediaris.";

$scope.blockchainTitle1 = "Blockchain";
$scope.blockchainText1 = "Sismotur va presentar a FITUR 2017 algunes de les aplicacions potencials per al turisme d'aquesta increïble tecnologia que ha permès, per exemple l'existència de la moneda digital Bitcoin.";
$scope.blockchainButton1 = 'Descobreix les aplicacions';

// NFC
$scope.nfc = 'NFC';
$scope.nfcText = 'Lliura als teus clients targetes contactless per personalitzar la seva experiència turística a la destinació.';

$scope.nfcTitle1 = 'Targetes NFC Eivissa';
$scope.nfcText1 = "L'Ajuntament d'Eivissa va presentar als mitjans el projecte de Destinació Turística Intel·ligent amb Senyalització Intel·ligent, Beacons i aquestes targetes NFC amb un viatge predefinit per Dalt Vila";
$scope.nfcButton1 = 'Descobreix el viatge';

$scope.nfcTitle2 = 'Targetes NFC Palència Turisme'
$scope.nfcText2 = 'Palència Turisme va presentar Inventrip als mitjans durant la Fira de Turisme Interior (INTUR-2015) i va entregar targetes NFC amb un viatge per la Província de Palència.';
$scope.nfcButton2 = 'Descobreix el viatge';

// QR
$scope.qr = 'QR';
$scope.qrText = 'Gestiona fàcilment la informació turística on-line de recursos i mapes en multidioma.';

$scope.qrTitle1 = 'Normandia i Bretanya'
$scope.qrText1 = 'Descobreix un viatge per Normandia i Bretanya escanejant aquest codi QR!';
$scope.qrButton1 = 'Descobreix el viatge';

$scope.qrTitle2 = 'Barcelona';
$scope.qrText2 = 'Sismotur va redactar en 2012 el primer pla de senyalització i informació turística de la ciutat de Barcelona per al districte d\'Horta-Guinardó.';

// drontrip
$scope.dronTrip = 'DronTrip';
$scope.dronText = 'Utilitza vols turístics amb Drons per viralitzar per les xarxes socials la promoció de destinacions i serveis turístics.';

$scope.drontripText1 = 'Et convidem a volar per la comarca Sierra de Montánchez y Tamuja!';
$scope.drontripButton1 = 'Veure Video';

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
$scope.btnContact = "CONTACTA'NS";

$scope.cntSpain = 'Espanya';
$scope.cntSpain2 = 'Madrid & Barcelona';
$scope.cntSpainPhone = '+34 913.238.208';

$scope.cntFrance = 'França';
$scope.cntFrance2 = 'Annecy';
$scope.cntFrancePhone = '+33 (0)619.20.30.61';

$scope.copyright = 'Copyright © 2017 SISMOTUR SL.';

// *********************
// NEWS CA
// *********************
$scope.newsTitle25 = 'Inici del pla de senyalització intel·ligent de Gran Canaria';
$scope.newsContent25 = "El Cabildo encarrega a Sismotur la redacció del pla de senyalització turística intel·ligent de l'illa de Gran Canaria. Foto: El conseller d'Obres Públiques i Infraestructures (esquerra) amb el CEO de Sismotur (dreta) al moment de la signatura del contracte.";
$scope.newsDetail25 = "Link a l'anunci del Cabildo de Gran Canaria";

$scope.newsTitle24 = "Reguengos de Monsaraz, primera destinació amb senyalització turística intel·ligent a Portugal";
$scope.newsContent24 = "Sismotur presenta a les Rutes del Vi de Portugal el projecte de destinació intel·ligent connectada amb inventrip de Reguengos de Monsaraz. Foto: alcalde de Reguengos de Monsaraz i president de la Xarxa Europea de Ciutats del Vi (esquerra), president de l'Associació de Municipis del Vi de Portugal (centre) i CEO de Sismotur (dreta).";
$scope.newsDetail24 = "Link a l'article de Publituris";

$scope.newsTitle23 = 'ICEX entrevista al CMO de Sismotur durant Fitur';
$scope.newsContent23 = "Entrevista de la revista El Exportador a Sismotur durant Fitur 2017. Foto: CMO de Sismotur.";
$scope.newsDetail23 = "Link a l'entrevista completa (vídeo)";

$scope.newsTitle22 = 'Sismotur exposa a Fitur Know-how & Export 2017';
$scope.newsContent22 = 'Sismotur presenta amb èxit la seva senyalització turística connectada a Fitur 2017. Foto: el CEO de Sismotur (dreta) presentant el nostre concepte al Viceministre de Turisme de Perú (centre) i al President de SEGITTUR (esquerra).';
$scope.newsDetail22 = 'Link a un article sobre Sismotur en Fitur Daily';

$scope.newsTitle21 = 'La agència EFE entrevista a Sismotur sobre Blockchain per al turisme';
$scope.newsContent21 = 'EFE Futuro s’interessa per la tecnologia Blockchain i ha entrevistat als nostres experts per conèixer com es pot aplicar al turisme.';
$scope.newsDetail21 = 'Link a l’article';

$scope.newsTitle20 = 'FITUR 2017 - Tecnologia Blockchain i aplicacions per  al turisme';
$scope.newsContent20 = 'Enrique Melero, expert en Blockchain, i Felipe Santi, CTO de Sismotur, han presentat aquesta tecnologia disruptiva a SEGITTUR Lab.';
$scope.newsDetail20 = 'Presentació (idioma castellà, formato PDF)';

$scope.newsTitle19 = 'Sismotur presentarà Blockchain i les seves aplicacions potencials per al Turisme durant FITUR 2017 en SEGITTUR Lab';
$scope.newsContent19 = "Sismotur estarà present en FITUR 2017, a l'área Know How & Export (Stand 10B09, al costat de l'stand de SEGITTUR). El dia 18 de gener a les 16:00, a l'espai SEGITTUR Lab, organitzarem una conferència sobre la tecnologia Blockchain i les seves aplicacions a l'àmbit del Turisme.";
$scope.newsDetail19 = 'Anàlisi de Blockchain i el seu potencial per al Turisme';

$scope.newsTitle18 = 'Article sobre la Senyalització Turística Intel·ligent a EFE Empresas';
$scope.newsContent18 = "Article d'EFE Empresas comentant la innovació que suposa connectar la destinació turística amb el nou turista digital i su Smartphone a través de la senyalització turística intel·ligent i Inventrip.";
$scope.newsDetail18 = "Enllaç a l'Article";

$scope.newsTitle17 = 'Article al Blog de Kontakt.io';
$scope.newsContent17 = 'Kontakt, referència mundial en tecnologies connectades (Internet of the Things) i col·laborador de Sismotur, explica la innovació que suposa Inventrip per al sector turístic.';
$scope.newsDetail17 = 'Enllaç al Blog de Kontakt';

$scope.newsTitle16 = "Presentació d'Inventrip pera a la Ruta del Vi Ribera del Duero";
$scope.newsContent16 = 'El Director General de Turisme de Castilla y León presenta Inventrip, el nou sistema de senyalització turística intel·ligent de Sismotur.';
$scope.newsDetail16 = "Enllaç a l'Article";

$scope.newsTitle15 = 'Las Palmas de Gran Canaria implantarà Inventrip';
$scope.newsContent15 = "L'Ajuntament i el Cabildo han arribat a un acord per implantar la senyalització turística intel·ligent de Sismotur a les zones comercials obertes d'interés turístic i donar informació amb la plataforma Inventrip.";
$scope.newsDetail15 = "Enllaç a l'Article";

$scope.newsTitle14 = 'FITUR 2016';
$scope.newsContent14 = "Sismotur va ser la triada per presentar el seu concepte de Destinació Turística Intel·ligent a través de la integració de mitjans físics i digitals OFF/ON connectant la senyalització a la plataforma Inventrip. D'aquesta forma, els senyals i el territori li parlen al mòbil del turista.";

$scope.newsTitle13 = 'Aportació de Sismotur al Llibre Blanc de Destinacions Turístiques Intel·ligents';
$scope.newsContent13 = "El passat mes d'octubre es va presentar a la seu del Ministeri d'Indústria, Energia i Turisme el Llibre Blanc de Destinacions Turístiques Intel·ligents promogut per SEGITTUR i dins del marc del Pla Nacional de Ciutats Intel·ligents. Sismotur ha participat en la redacció d'aquest llibre blanco amb el seu model d'integració OFF/ON de mitjans físics i digitals en una destinació per millorar l'acolliment i l'experiència del turista.";
$scope.newsDetail13 = 'Enllaç al Llibre Blanc';

$scope.newsTitle12 = "Sismotur redacta el pla de senyalització turística d'Euskadi";
$scope.newsContent12 = 'Sismotur ha redactat el pla de senyalització turística per a Euskadi, treballant braç a braç amb el Govern Basc i la seva directora general de Turisme i amb les tres diputacions forals, unificant criteris, analitzant necessitats i especificitats darrere de la concertació.';

$scope.newsTitle11 = 'Sismotur en INTUR 2015';
$scope.newsContent11 = "En l'edició d'INTUR 2015 a Valladolid, Sismotur va presentar els avanços de la plataforma Inventrip com a eina de promoció d'una destinació, planificador de viatges per al turista i servei d'informació digital al territori vinculat a la senyalització física i als recursos i serveis de la destinació.";

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
// SIGNING FR
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

// Smart Signage
$scope.senalizacionTitle = 'Signalisation Intelligente';
$scope.senalizacionText = "Améliorez la signalisation touristique de votre destination en l'intégrant avec des systèmes d'information touristique de pointe. Nous vous offrons notre service cloud Signing pour sa planification et gestion.";

$scope.senalizacionTitle1 = 'Route Ribera del Duero Smart';
$scope.senalizacionText1 = 'Sismotur a implanté le système Inventrip de signalisation touristique intelligente dans la Route Ribera del Duero.';

$scope.senalizacionTitle2 = 'Barcelone';
$scope.senalizacionText2 = 'Design de la nouvelle signalisation touristique piétonne menée par Sismotur pour la ville de Barcelone.';

$scope.senalizacionTitle3 = 'Castille et Leon';
$scope.senalizacionText3 = "La Conseillère et le Directeur Général de Tourisme de Castille et Leon, ont présenté avec Sismotur le programme d'amélioration de la signalisation touristique de la région lors du salon de tourisme intérieur INTUR.";

// Beacons
$scope.beacons = 'Beacons';
$scope.beaconText = "Adoptez cette nouvelle technologie pour envoyer aux touristes des produits et services personnalisés sur leurs smartphones.";

$scope.beaconTitle1 = 'Beacons dans les Signaux Intelligents';
$scope.beaconText1 = "Inventrip connecte les panneaux intelligents avec le touriste en utilisant des Beacons.";

$scope.beaconTitle2 = 'Signalétique Touristique Intelligente à Las Palmas de Gran Canaria';
$scope.beaconText2 = 'Sismotur développe le plan de signalisation touristique intelligente de Las Palmas de Gran Canaria en utilisant la technologie Beacons gérée par Inventrip.';

// API
$scope.apiInventrip = "API";
$scope.apiInventripText = "Intégrez Inventrip avec vos sites Internet de tourisme ou vos systèmes d'information Smart City pour réduire les coûts et simplifier vos développements informatiques.";

$scope.apiTitle1 = "Inventrip REST API";
$scope.apiText1 = "Inventrip est un système interopérable qui permet d'obtenir de l'information et d'interagir avec des plateformes Smart City en utilisant des technologies standard à la portée de tout développeur.";

$scope.apiTitle2 = "Schema.org pour le Tourisme";
$scope.apiText2 = "Sismotur est cofondateur du groupe de Tourisme de Schema.org, projet soutenu par W3C et principal vocabulaire mondial de sémantique de données. Des millions de sites web utilisent Schema.org pour améliorer leur visibilité et augmenter le nombre de visites.";
$scope.apiButton2 = 'Rejoignez cette initiative';

// Big Data
$scope.bigData = "Big Data";
$scope.bigDataText = "Analysez simplement les données générées par vos touristes pour améliorer la gestion de votre destination.";

$scope.bigDataTitle1 = "Les signaux intelligents: source de données";
$scope.bigDataText1 = "Inventrip permet de générer en temps réel des tableaux de bord et des analyses disponibles sur un navigateur concernant l'usage que les touristes font des signaux connectés et des services qui y sont rattachés.";

// E-commerce
$scope.eCommerce = 'e-Commerce';
$scope.comercializacionText = "Facilitez au touriste l'accés à la réservation en ligne de logements, restaurants et activités, et ce avant ou durant le voyage.";

$scope.eCommerceTitle1 = 'e-Commerce';
$scope.eCommerceText1 = 'Intégration de systèmes de réservation dans Inventrip de manière à permettre aux touristes la réservation de services avant et durant leur voyage.';

// Blockchain
$scope.blockchain = "Blockchain";
$scope.blockchainText = "Profitez du potentiel de cette technologie disruptive pour interagir avec le touriste sans beson de dépendre d'intermédiaires.";

$scope.blockchainTitle1 = "Blockchain";
$scope.blockchainText1 = "Sismotur a présenté dans FITUR 2017 quelques usages potentiels pour le tourisme de cette incroyable technologie, laquelle a permis d'ailleurs l'existance de la monnaie numérique Bitcoin.";
$scope.blockchainButton1 = 'Découvrez les applications';

// NFC
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

$scope.copyright = 'Copyright © 2017 SISMOTUR SL.';

// *********************
// NEWS FR
// *********************
$scope.newsTitle25 = 'Démarrage du plan de signalisation intelligente de Gran Canaria';
$scope.newsContent25 = "Gran Canaria a confié à Sismotur la rédaction du plan de signalisation touristique de l'île. Photo: le directeur de Travaux Publics et Infrastructures (gauche) avec le CEO de Sismotur (droite) lors de la signature du contrat.";
$scope.newsDetail25 = "Lien vers l'annonce du Cabildo de Gran Canaria";

$scope.newsTitle24 = "Reguengos de Monsaraz, première destination équipée d'une signalétique touristique intelligente au Portugal";
$scope.newsContent24 = "Sismotur présente aux Routes du Vin de Portugal le projet de destination intelligente connectée réalisé à Reguengos de Monsaraz. Photo: maire de Reguengos de Monsaraz y président du Réseau Européen des Villes du Vin (gauche), président de l'Association de Communes du Vin de Portugal (centre) et CEO de Sismotur (droite).";
$scope.newsDetail24 = "Lien vers l'article de Publituris";

$scope.newsTitle23 = "Interview de l'ICEX au CMO de Sismotur durant Fitur";
$scope.newsContent23 = "Interview du magazine El Exportador à Sismotur à l'occasion du salon Fitur 2017. Photo: CMO de Sismotur.";
$scope.newsDetail23 = "Lien vers l'interview (vidéo en espagnol)";

$scope.newsTitle22 = 'Sismotur est présent dans Fitur Know-how & Export 2017';
$scope.newsContent22 = 'Sismotur a présenté avec succès sa signalétique touristique connectée dans le salon Fitur 2017. Photo: le CEO de Sismotur (droite) présente notre concept au Viceministre de Tourisme du Pérou (centre) et au Président de SEGITTUR (gauche).';
$scope.newsDetail22 = 'Lien à un article sur Sismotur dans le journal Fitur Daily';

$scope.newsTitle21 = "La agence de presse EFE nous interroge sur Blockchain";
$scope.newsContent21 = "EFE Futur s'intéresse à la technologie Blockchain et a interrogé nos experts sur ses possibilités d'application dans le domaine touristique.";
$scope.newsDetail21 = "Lien vers l'article";

$scope.newsTitle20 = 'FITUR 2017 - Technologie Blockchain et applications dans le Tourisme';
$scope.newsContent20 = 'Enrique Melero, expert en Blockchain, et Felipe Santi, CTO de Sismotur, ont présenté cette nouvelle technologie dans SEGITTUR Lab.';
$scope.newsDetail20 = 'Présentation (en espagnol, format PDF)';

$scope.newsTitle19 = 'Sismotur présentera Blockchain et ses applications potentielles pour le Tourisme lors du salon FITUR 2017, dans SEGITTUR Lab';
$scope.newsContent19 = "Sismotur sera présent dans FITUR 2017, section Know-How & Export (Stand 10B09, près de SEGITTUR). Le 18 janvier à 16:00, dans l'espace SEGITTUR Lab, nous organiserons une conférence sur la technologie Blockchain et ses aplications dans le domaine du Tourisme.";
$scope.newsDetail19 = "Analyse de Blockchain et son potentiel dans le domaine du Tourisme";

$scope.newsTitle18 = "Article sur la Signalisation Touristique Intelligente dans EFE Empresas";
$scope.newsContent18 = "Article de EFE Empresas sur l'innovation qui représente la connexion d'une Destination Touristique avec le nouveau touriste numérique et son smartphone via la signalétique touristique intelligente et Inventrip.";
$scope.newsDetail18 = "Lien vers l'Article";

$scope.newsTitle17 = 'Article dans le Blog de Kontak.io';
$scope.newsContent17 = "Kontakt, référence mondiale dans les technologies connectées (Internet of the Things) et collaborateur de Sismotur, explique l'innovation qui représente Inventrip pour le secteur touristique.";
$scope.newsDetail17 = 'Lien vers le Blog de Kontakt';

$scope.newsTitle16 = "Présentation d'Inventrip pour la Route du Vin de Ribera del Duero";
$scope.newsContent16 = "Le Directeur Général de Tourisme de Castille et Léon présente Inventrip, le nouveau système de sigalisation touristique intelligente de Sismotur.";
$scope.newsDetail16 = "Lien vers l'Article";

$scope.newsTitle15 = 'Las Palmas de Gran Canaria adoptera Inventrip';
$scope.newsContent15 = "La Mairie et le Cabildo sont parvenus à un accord pour implanter la signalétique touristique intelligente de Sismotur dans les zones commerçantes ouvertes d'intérêt touristique et donner de l'information avec Inventrip.";
$scope.newsDetail15 = "Lien vers l'Article";

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

// **********************************
// ********** ENGLISH (DEFAULT) *****
// **********************************

default:

// ******************
// CLAIM DEFAULT (EN)
// ******************
$scope.claim1 = 'Connect your destination with the digital tourist';
$scope.claim2 = 'Discover the smart tourism signage';
$scope.btnMuestra = 'Request a free sample';

// ******************
// MENU DEFAULT (EN)
// ******************
$scope.inventrip = 'Inventrip';
$scope.mnTecno = 'Technologies';
$scope.mnNoticias = 'News';
$scope.mnTeam = 'Partners';
$scope.mnCont = 'Contact';
$scope.mnIdioma = 'EN';

// *********************
// INVENTRIP DEFAULT (EN)
// *********************
$scope.dividerInventrip = 'Get a Personnalized Information System';
$scope.invTextA = 'Connect your destination';
$scope.invTextB = 'Sismotur implements a smart signage information and management service which enables your travellers to consult your touristic offering, build and book customized trips, and share them in social networks or using the latest technologies: Beacons, NFC, QR codes.';

// **********************
// SIGNING DEFAULT (EN)
// **********************
$scope.dividerSigning = "Implement a Signage Service";
$scope.signingTitle = 'Signing';
$scope.signingTextA = 'Manage your signage';
$scope.signingTextB = 'Sismotur is leader in the preparation of master signage plans and implants Signing, a dedicated web service specialised in the planification and management of the territorial and urban signage which is used by more than 30 public administrations.';

// ************************
// TECNOLOGIAS DEFAULT (EN)
// ************************
$scope.dividerTechnologies = 'Inventrip and Signing use the best technologies';

$scope.btnReferences = 'REFERENCES';

// Smart Signage
$scope.senalizacionTitle = 'Smart Signage';
$scope.senalizacionText = 'Improve the tourist signage of your destination by integrating it with advanced tourist information systems. We offer our cloud service Signing for its planification and management.';

$scope.senalizacionTitle1 = 'Route Ribera del Duero Smart';
$scope.senalizacionText1 = 'Sismotur has implemented the smart signage management system Inventrip in the Route Ribera del Duero.';

$scope.senalizacionTitle2 = 'Barcelona';
$scope.senalizacionText2 = 'Design of the new pedestrian touristic signage carried out by Sismotur for the city of Barcelona';

$scope.senalizacionTitle3 = 'Castilla y León';
$scope.senalizacionText3 = 'The Counsellor and the General Director of Tourism of the spanish region of Castilla y León, together with Sismotur, presented during INTUR (Spanish fair of interior tourism) an improvement program for the regional signage.';

// Beacons
$scope.beacons = 'Beacons';
$scope.beaconText = 'Deploy this new technology in tourist signs or information offices to provide contextualized information and offer tourists tailored products and services in their smartphone.';

$scope.beaconTitle1 = 'Beacon in Smart Signs';
$scope.beaconText1 = "Inventrip connects the smart signs with the tourist using beacons.";

$scope.beaconTitle2 = 'Smart Signage in Las Palmas de Gran Canaria';
$scope.beaconText2 = 'Sismotur develops the smart tourist signage plan in Las Palmas de Gran Canaria using the latest Beacon technology managed by Inventrip.';

// API
$scope.apiInventrip = "API";
$scope.apiInventripText = "Link Inventrip with your tourism websites or Smart City platform to reduce costs and simplify your IT developments.";

$scope.apiTitle1 = "Inventrip REST API";
$scope.apiText1 = "Inventrip is an interoperable system which provides information and interacts with Smart City platforms using standard technologies that any developer can use.";

$scope.apiTitle2 = "Schema.org for Tourism";
$scope.apiText2 = "Sismotur is co-chair of the Tourism Group in Schema.org, project hosted by W3C and main data vocabulary of the Internet. Millions of websites use Schema.org to improve their visibility and increment the number of visits.";
$scope.apiButton2 = 'Join the group';

// Big Data
$scope.bigData = "Big Data";
$scope.bigDataText = "Analize easily data generated by your tourists to improve the management of your destination.";

$scope.bigDataTitle1 = "The smart signage: data source";
$scope.bigDataText1 = "Inventrip produces real time dashboards and analysis on your browser with the usage your tourists are doing of the connected signs and the services attached to them.";

// E-commerce
$scope.eCommerce = 'e-Commerce';
$scope.comercializacionText = 'Make it simple for tourists to access online booking systems for accommodations, restaurants and activities, before or during their trip.';

$scope.eCommerceTitle1 = 'e-Commerce';
$scope.eCommerceText1 = 'Integration of booking engines in Inventrip that tourists can access before and during the trip.';

// Blockchain
$scope.blockchain = "Blockchain";
$scope.blockchainText = "Benefit of the potential of this disruptive technology to interact with your tourists without the need to depend on costly intermediaries.";

$scope.blockchainTitle1 = "Blockchain";
$scope.blockchainText1 = "Sismotur presented in FITUR 2017 some of the potential applications for turism of this incredible technology, which has spawned among other things the digital currency Bitcoin.";
$scope.blockchainButton1 = 'Discover the applications';

// NFC
$scope.nfc = 'NFC';
$scope.nfcText = 'Give to your tourists contactless cards in information offices, fairs, or hotels, to personalize their experience in your destination.';

$scope.nfcTitle1 = 'NFC cards for Ibiza';
$scope.nftText1 = "The city of Ibiza presented to the press the Smart Tourist Destination project: smart signage, beacons, and these NFC cards containing a trip to the city.";
$scope.nfcButton1 = 'Discover the trip';

$scope.nfcTitle2 = 'NFC cards for Palencia'
$scope.nfcText2 = 'Palencia Tourism presented Inventrip to the press during the last spanish fair of interior tourism (INTUR).';
$scope.nfcButton2 = 'Discover the trip';

// qr
$scope.qr = 'QR'
$scope.qrText = 'Manage with ease the online touristic information of your maps and points of interest, in multiple languages.';

$scope.qrTitle1 = 'Normandy and Brittany'
$scope.qrText1 = 'Discover a trip to Normandy and Brittany scanning this QR code!';
$scope.qrButton1 = 'Discover the trip';

$scope.qrTitle2 = 'Barcelona';
$scope.qrText2 = 'Sismotur drafted in 2012 the first signage and touristic information plan of the city of Barcelona for the district of Horta-Guinardó.';

// dronTrip
$scope.dronTrip = 'DronTrip';
$scope.dronText = 'Create tourism videos shot with drones to promote and viralize your destination and touristic services across social networks.';

$scope.drontripText1 = 'We invite you to flight over the county of Sierra de Montánchez and Tamuja, Spain!';
$scope.drontripButton1 = 'Watch Video';

// *********************
// NOTICIAS DEFAULT (EN)
// *********************
$scope.dividerNews = 'Recent news';
$scope.moreNews = 'More news' ;

// *********************
// PARTNERS DEFAULT (EN)
// *********************
$scope.titlePartners = 'Partners';

// ********************
// CONTACT DEFAULT (EN)
// ********************
$scope.btnContact = 'CONTACT US';

$scope.cntSpain = 'Spain';
$scope.cntSpain2 = 'Madrid & Barcelona';
$scope.cntSpainPhone = '+34 913.238.208';

$scope.cntFrance = 'France';
$scope.cntFrance2 = 'Annecy';
$scope.cntFrancePhone = '+33 (0)619.20.30.61';

$scope.copyright = 'Copyright © 2017 SISMOTUR SL.';

// *********************
// NEWS EN
// *********************
$scope.newsTitle25 = 'Start of the smart signage plan of Gran Canaria';
$scope.newsContent25 = 'The Gran Canaria Cabildo has commissioned Sismotur to produce the smart signage plan of the island of Gran Canaria. Photo: the councilor of Public Works and Infrastructures (left) with the CEO of Sismotur (right) during the signature of the contract.';
$scope.newsDetail25 = 'Link to the announcement of the Gran Canaria Cabildo';

$scope.newsTitle24 = 'Reguengos de Monsaraz, first Portuguese destination with a smart signage system';
$scope.newsContent24 = 'Sismotur presents to the Wine Routes of Portugal the project done in Reguengos de Monsaraz. Photo: mayor of Reguengos de Monsaraz and president of the European Network of Wine Cities (left), president of the Association of Wine Cities of Portugal (center) and CEO of Sismotur (right).';
$scope.newsDetail24 = 'Link to an article in Publituris';

$scope.newsTitle23 = 'ICEX interviews the CMO of Sismotur during Fitur';
$scope.newsContent23 = 'Interview of the magazine El Exportador to Sismotur during Fitur 2017. Photo: CMO of Sismotur.';
$scope.newsDetail23 = 'Link to the interview (video in spanish)';

$scope.newsTitle22 = 'Sismotur exhibits in Fitur Know-how & Export 2017';
$scope.newsContent22 = 'Sismotur has showcased with success its smart tourism signage in the Fitur 2017 fair. Picture: the CEO de Sismotur (right) presents our concept to the Viceminister of Tourism of Pérou (center) and to the President of SEGITTUR (left).';
$scope.newsDetail22 = 'Link to an article about Sismotur in the journal Fitur Daily';

$scope.newsTitle21 = 'EFE interviews Sismotur about Blockchain for Tourism';
$scope.newsContent21 = "EFE Futuro has shown interest about Blockchain technology and has interviewed our experts about its potential applications in the tourism domain.";
$scope.newsDetail21 = "Link to the article";

$scope.newsTitle20 = 'FITUR 2017 - Blockchain technology and applications for Tourism';
$scope.newsContent20 = 'Enrique Melero, Blockchain expert, and Felipe Santi, CTO de Sismotur, have introduced this new technology in SEGITTUR Lab.';
$scope.newsDetail20 = 'Slides (PDF file in spanish)';

$scope.newsTitle19 = 'Sismotur will present Blockchain and its potential applications for Tourism during FITUR 2017 in SEGITTUR Lab';
$scope.newsContent19 = 'Sismotur will expose in FITUR 2017, in the area Know-How & Export (Stand 10B09, next to SEGITTUR). On January 18 at 16:00, in the area SEGITTUR Lab, we will organize an event about Blockchain technology and its applications in the domain of Tourism.';
$scope.newsDetail19 = 'Analysis of Blockchain and its potential for Tourism';

$scope.newsTitle18 = 'Article by EFE Empresas about Smart Tourism Signage';
$scope.newsContent18 = 'Article by EFE Empresas which comments the innovation entailed by connecting a Tourist Destination with the new digital tourists and their smartphones through a smart signage system and Inventrip.';
$scope.newsDetail18 = 'Link to the Article';

$scope.newsTitle17 = "Article in Kontak's Blog";
$scope.newsContent17 = 'Kontakt, world reference in connected technologies and IoT (Internet of the Things) and collaborator of Sismotur, explains the innovation Inventrip brings to the tourism sector.';
$scope.newsDetail17 = "Link to Kontakt's Blog";

$scope.newsTitle16 = 'Presentation of Inventrip for the Wine Route Ribera del Duero';
$scope.newsContent16 = 'The Director of Tourism of Castilla y León presents Inventrip, the new smart tourism signage management system from Sismotur.';
$scope.newsDetail16 = 'Link to the Article';

$scope.newsTitle15 = 'Las Palmas de Gran Canaria will implement Inventrip';
$scope.newsContent15 = "The City Council and the Cabildo have reached an agreement to implement Sismotur's smart tourism signage in touristic open retail areas and provide information with Inventrip.";
$scope.newsDetail15 = 'Link to the Article';

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
