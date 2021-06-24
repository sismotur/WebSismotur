/**
 * @author Sismotur SL
 */

var myApp = angular.module("smtApp", []);

myApp.controller("languagesController", [
    "$scope",
    function($scope) {
        loadLanguage($scope);

        $scope.changeLang = function(lang) {
            // reset the cookie to track the requested language
            var d = new Date();
            d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
            var expires = "expires=" + d.toUTCString();
            document.cookie = "lang=" + lang + ";" + expires;
            loadLanguage($scope);
        };
    },
]);

function loadLanguage($scope) {
    if (document.cookie.indexOf("lang") == -1)
        $scope.lang = navigator.language.substr(0, 2);
    else {
        // this parses the cookie to find the requested language
        index = document.cookie.indexOf("lang");
        $scope.lang = document.cookie.substr(index + 5, 2);
    }

    // Browser language selector
    switch ($scope.lang) {
        // ***********************************
        // ************** SPANISH ************
        // ***********************************

        case "es":
            // ******************
            // CLAIM ES
            // ******************
            $scope.claim1 = "Conecta tu destino con el turista digital";
            $scope.claim2 = "Descubre la señalización turística inteligente";
            $scope.btnMuestra = "Únete a la Red de Destinos Inventrip";

            // ******************
            // MENU ES
            // ******************
            $scope.inventrip = "Inventrip";
            $scope.mnTecno = "Tecnologías";
            $scope.mnNoticias = "Noticias";
            $scope.mnTeam = "Socios";
            $scope.mnCont = "Contacto";
            $scope.mnIdioma = "ES";

            // ******************
            // INVENTRIP ES
            // ******************
            $scope.dividerInventrip =
                "Implanta un Servicio de Información Personalizado";
            $scope.invTextA = "Conecta tu Destino";
            $scope.invTextB =
                "Sismotur te implanta un servicio de información y gestión de la señalización turística inteligente para tu destino, que permite consultar la oferta turística, reservar, construir viajes a medida y compartirlos en redes sociales o mediante el uso de las últimas tecnologías: Beacons, NFC, códigos QR.";

            // **********************
            // SIGNING ES
            // **********************
            $scope.dividerSigning = "Implanta un Servicio de Señalización";
            $scope.signingTitle = "Signing";
            $scope.signingTextA = "Gestiona tu señalización";
            $scope.signingTextB =
                "Sismotur es líder en la elaboración de planes de señalización y te implanta Signing, un servicio web especializado para la planificación y gestión de la señalización territorial y urbana utilizado por más de 30 administraciones públicas.";

            // ******************
            // TECNOLOGIAS ES
            // ******************
            $scope.dividerTechnologies =
                "Inventrip y Signing utilizan las mejores tecnologías";

            $scope.btnReferences = "REFERENCIAS";

            // Smart Signage
            $scope.senalizacionTitle = "Señalización Inteligente";
            $scope.senalizacionText =
                "Mejora la señalización turística de tu destino integrándola con sistemas avanzados de información turística. Te ofrecemos nuestro servicio cloud Signing para su planificación y gestión.";

            $scope.senalizacionTitle1 = "Ruta Ribera del Duero Smart";
            $scope.senalizacionText1 =
                "Sismotur ha implantado el sistema Inventrip de señalización turística inteligente en la Ruta del Vino Ribera del Duero.";

            $scope.senalizacionTitle2 = "Barcelona";
            $scope.senalizacionText2 =
                "Diseño de la nueva señalización turística peatonal llevado a cabo por Sismotur para la ciudad de Barcelona.";

            $scope.senalizacionTitle3 = "Más de 50 referencias en señalización inteligente";
            $scope.senalizacionText3 =
                "Sismotur creó en 2015 el concepto de señalización turística inteligente y desde esta fecha ha acompañado a más de 50 destinos turísticos en la implantación de señalización turística inteligente con la utilización de sus plataforma Signing e Inventrip (ambas soluciones pertenecientes al catálogo de la Red DTI).";

            // Beacons
            $scope.beacons = "Beacons";
            $scope.beaconText =
                "Incorpora esta nueva tecnología en señales o en oficinas de información para enviar al turista productos y servicios personalizados a su dispositivo móvil.";

            $scope.beaconTitle1 = "Beacons en las Señales Inteligentes";
            $scope.beaconText1 =
                "Inventrip conecta las señales inteligentes con el turista utilizando Beacons.";

            $scope.beaconTitle2 =
                "Señalización Turística Inteligente en las Palmas de Gran Canaria";
            $scope.beaconText2 =
                "Sismotur desarrolla el plan de señalización turística inteligente de las Palmas de Gran Canaria empleando la tecnología Beacons gestionada por Inventrip.";

            // API
            $scope.apiInventrip = "API";
            $scope.apiInventripText =
                "Integra Inventrip con tus páginas web de turismo o sistemas de información Smart City para reducir costes y simplificar tus desarrollos informáticos.";

            $scope.apiTitle1 = "Inventrip REST API";
            $scope.apiText1 =
                "Inventrip es un sistema interoperable que permite obtener información e interaccionar con plataformas Smart City usando tecnologías estándar al alcance de cualquier desarrollador.";

            $scope.apiTitle2 = "Schema.org para Turismo";
            $scope.apiText2 =
                "Sismotur es cofundador del grupo de Turismo de Schema.org, proyecto amparado por W3C y principal vocabulario mundial de semántica de datos. Millones de páginas web utilizan Schema.org para mejorar su visibilidad e incrementar su número de visitas.";
            $scope.apiButton2 = "Súmate a esta iniciativa";

            // Big Data
            $scope.bigData = "Big Data";
            $scope.bigDataText =
                "Analiza con sencillez los datos generados por tus turistas para mejorar la gestión de tu destino.";

            $scope.bigDataTitle1 = "La señal inteligente: fuente de datos";
            $scope.bigDataText1 =
                "Inventrip permite generar en tiempo real cuadros de mando y análisis a medida accesibles por navegador sobre el uso que los turistas hacen de las señales conectadas y de cualquier servicio asociado con las mismas.";

            // E-Commerce
            $scope.eCommerce = "e-Commerce";
            $scope.comercializacionText =
                "Facilita al turista el acceso a motores de reserva de alojamientos, restaurantes y actividades, antes o durante el viaje.";

            $scope.eCommerceTitle1 = "e-Commerce";
            $scope.eCommerceText1 =
                "Integración de centrales de reservas en Inventrip para que los turistas puedan reservar servicios antes y durante el viaje.";

            // Blockchain
            $scope.blockchain = "Blockchain";
            $scope.blockchainText =
                "Aprovecha el potencial de esta tecnología disruptiva para interaccionar con el turista sin necesidad de depender de intermediarios.";

            $scope.blockchainTitle1 = "Blockchain";
            $scope.blockchainText1 =
                "Sismotur presentó en FITUR 2017 algunas de las aplicaciones potenciales para el turismo de esta increíble tecnología que ha permitido, entre otras cosas, la existencia de la moneda digital Bitcoin.";
            $scope.blockchainButton1 = "Descubre las aplicaciones";

            // NFC
            $scope.nfc = "NFC";
            $scope.nfcText =
                "Entrega al turista tarjetas contactless en oficinas, ferias u hoteles para personalizar su experiencia turística en el destino.";

            $scope.nfcTitle1 = "Tarjetas NFC Ibiza";
            $scope.nfcText1 =
                "El Ayuntamiento de Ibiza presentó a los medios el proyecto de Destino Turístico Inteligente con señalización inteligente, beacons y estas tarjetas NFC con un viaje predefinido por Dalt Vila.";
            $scope.nfcButton1 = "Descubre el viaje";

            $scope.nfcTitle2 = "Tarjetas NFC Palencia Turismo";
            $scope.nfcText2 =
                "Palencia Turismo presentó Inventrip a los medios durante la Feria de Turismo Interior (INTUR-2015) y entregó tarjetas NFC con un viaje por la Provincia de Palencia.";
            $scope.nfcButton2 = "Descubre el viaje";

            // qr
            $scope.qr = "QR";
            $scope.qrText =
                "Gestiona fácilmente la información turística online de recursos y mapas en múltiples idiomas.";

            $scope.qrTitle1 = "Normandía y Bretaña";
            $scope.qrText1 =
                "¡Descubre un viaje por Normandía y Bretaña escaneando este código QR!";
            $scope.qrButton1 = "Descubre el viaje";

            $scope.qrTitle2 = "Barcelona";
            $scope.qrText2 =
                "Sismotur redactó en 2012 el primer plan de señalización e información turística de la ciudad de Barcelona para el distrito de Horta-Guinardó.";

            // Drontrip
            $scope.dronTrip = "DronTrip";
            $scope.dronText =
                "Utiliza vuelos turísticos con Drones para viralizar por las redes sociales la promoción de destinos y servicios turísticos.";

            $scope.drontripText1 =
                "¡Te invitamos a volar por la comarca Sierra de Montánchez y Tamuja!";
            $scope.drontripButton1 = "Ver Video";

            // ******************
            // NOTICIAS ES
            // ******************
            $scope.dividerNews = "Últimas noticias";
            $scope.moreNews = "Más noticias";

            // *********************
            // PARTNERS ES
            // *********************
            $scope.titlePartners = "Socios";

            // ******************
            // CONTACTO ES
            // ******************
            $scope.btnContact = "CONTÁCTANOS";

            $scope.cntSpain = "España";
            $scope.cntSpain2 = "Madrid & Barcelona";
            $scope.cntSpainPhone = "+34 913.238.208";

            $scope.cntFrance = "Francia";
            $scope.cntFrance2 = "Annecy";
            $scope.cntFrancePhone = "+33 (0)619.20.30.61";

            $scope.copyright = "Copyright © 2021 SISMOTUR SL.";

            // *********************
            // NEWS ES
            // *********************
            $scope.newsTitle56 =
                "Jornada de la Red de Destinos Inventrip 2020";
            $scope.newsContent56 =
                "El 13 de noviembre tuvo lugar la Jornada Inventrip 2020, donde participaron 65 destinos usuarios e interesados en esta plataforma global de turismo digital, para compartir casos de éxito y contribuir en su desarrollo.";
            $scope.newsDetail56 = "Enlace programa";

            $scope.newsTitle55 =
                "La Ruta del Vino Sierra de Francia galardonada en los premios de Enoturismo - Octubre 2020";
            $scope.newsContent55 =
                "Premiada como mejor destino enoturístico sostenible y responsable, gracias en gran medida a la digitalización de la ruta y sus asociados con Inventrip.";
            $scope.newsDetail55 = "Enlace noticia";

            $scope.newsTitle54 = "Sismotur premiada en Digital Tourism. Octubre 2020";
            $scope.newsContent54 =
                "Por la actuación más relevante en el ámbito de la normalización, con la implantación de Inventrip en la comarca La Canal de Navarrés y su interoperabilidad con la web del destino y los terminales táctiles (desarrollados por Sien Consulting e Insyde respectivamente y también partícipes de este premio).";
            $scope.newsDetail54 = "Enlace noticia";

            $scope.newsTitle53 =
                "Inventrip y Signing soluciones del catálogo oficial de la Red DTI. Octubre 2020";
            $scope.newsContent53 =
                "Nuestras plataformas, Inventrip y Signing, de información turística y señalización inteligente forman parte de las soluciones tecnológicas de la Red de Destinos Turísticos Inteligentes que presentó la Ministra Reyes Maroto en la apertura de Digital Tourism 2020.";
            $scope.newsDetail53 = "Enlace catálogo";

            $scope.newsTitle52 = "Sismotur entra en la Red DTI - Octubre 2020";
            $scope.newsContent52 =
                "La III Comisión Plenaria de la Red de Destinos Turísticos Inteligentes, que ha sido presidida por la Ministra Reyes Maroto, aprueba la incorporación de 19 nuevos miembros, entre ellos nuestra empresa Sismotur.";
            $scope.newsDetail52 = "Enlace noticia";

            $scope.newsTitle51 =
                "Actualización del manual de semántica para el Covid-19. Julio 2020";
            $scope.newsContent51 =
                "Sismotur colabora con Segittur en un proyecto piloto con con tres destinos inventrip: Conil, Santa Susanna y Sanxenxo para la actualización del manual de semántica de destinos turísticos inteligentes e implementa en inventrip funcionalidades para informar sobre el Covid.";
            $scope.newsDetail51 = "Enlace noticia";

            $scope.newsTitle50 =
                "Consultoría al Ministerio de Comercio y Turismo de Perú. Ollantaytambo, Julio 2019";
            $scope.newsContent50 =
                "Los expertos y socios de Sismotur, Augusto Ramos y Manuel Mariscal, asesoran a MINCETUR para la implantación de un Destino Turístico Inteligente conectado con inventrip en Ollantaytambo, en el Valle Sagrado y puerta de entrada de Machu Picchu.";

            $scope.newsTitle49 =
                "Consultoría a la Asociación Transfronteriza del Lago Alqueva (ATLA). Julio de 2019";
            $scope.newsContent49 =
                "Sismotur ha sido adjudicataria para la elaboración del plan de información y señalización turística inteligente de los 9 municipios portugueses de ATLA que incluye  la implantación de sus plataformas Signing e Inventrip.";

            $scope.newsTitle48 =
                "Jornada de entrega de Kit Digitales Inventrip. Provincia de Salamanca. Junio 2019";
            $scope.newsContent48 =
                "La Diputación de Salamanca y Sismotur entregaron a los empresarios de las Rutas del Vino, ganaderías, albergues y oficinas de turismo 110 Kit Digitales conectados con la plataforma Inventrip de la provincia. Durante el acto se presentaron las tecnologías QR, NFC y Beacons incuidas en la oferta de digitalización de cada establecimiento y oficinas de turismo.";
            $scope.newsDetail48 = "Enlace Twitter";

            $scope.newsTitle47 =
                "Nueva Norma UNE: Semántica de datos de turismo. Mayo 2019";
            $scope.newsContent47 =
                "En el marco del Comité de CTN178 (normalización de ciudades inteligentes), Sismotur ha co-redactado junto con Globaldit la futura norma UNE PNE 178503 “Destinos Turísticos Inteligentes. Semántica aplicada a turismo”, aportando el expertise de 20 años modelando más de 20.000 recursos turísticos y la experiencia adquirida en la gestión del grupo mundial de turismo de schema.org. Esta norma ha sido publicada en el BOE y se encuentra en proceso de información pública, esperándose su aprobación en la segunda mitad de 2019.";
            $scope.newsDetail47 = "Enlace norma";

            $scope.newsTitle46 =
                "II Encuentro Red DTI - Buenas Prácticas. Abril 2019";
            $scope.newsContent46 =
                "Conil de la Frontera, integrante de la Red de Destinos Inventrip, presentó como ejemplo de buenas prácticas, en la Red de Destinos Turísticos Inteligentes creada por la Secretaría de Estado de Turismo, la señalización inteligente implantda en su municipio, así como la utilización de tarjetas NFC conectadas con Inventrip para la promoción e información turística de Conil.";
            $scope.newsDetail46 = "Buenas prácticas";

            $scope.newsTitle45 =
                "Presentación de inventrip a los hoteleros de Sanxenxo. Marzo 2019";
            $scope.newsContent45 =
                "El concejal de turismo de Sanxenxo y el CEO de Sismotur presentaron a los hoteleros de Sanxenxo las posibilidades para conectar los establecimientos turísticos con el turista digital a través de la plataforma Inventrip ya implantada en el municipio.";
            $scope.newsDetail45 = "Presentación a los hoteleros de Sanxenxo";

            $scope.newsTitle44 =
                "Señalética Inteligente de Lago Alqueva. Portugal, febrero de 2019";
            $scope.newsContent44 =
                "El CEO de Sismotur, Augusto Ramos, presentó al consejero de Turismo de Portugal, al presidente de la región Alentejo-Ribatejo, al presidente de la Asociación transfronteriza del Lago Alqueva (ATLA) y a los 9 municipios portugueses que la constituyen, el proyecto para la transformación de Lago Alqueva en un Destino Turístico inteligente conectado con Inventrip.";

            $scope.newsTitle43 = "Spain Convention Bureau. Benidorm, febrero de 2019";
            $scope.newsContent43 =
                "Augusto Ramos, CEO de Sismotur, fue invitado a presentar la utilización de la señalización turística inteligente en el turismo de reuniones.";

            $scope.newsTitle42 = "Fitur Know How & Export. Madrid, enero de 2019";
            $scope.newsContent42 =
                "Sismotur estuvo de nuevo presente en la zona de innovación y tecnología de FITUR presentando la Red de Destinos Inventrip que cuenta al día de hoy con 40 destinos en la península (10 de ellos en Portugal).";
            $scope.newsDetail42 = "Red de Destinos Inventrip";

            $scope.newsTitle41 = "Smart Rural - Asturias. FITUR 2019";
            $scope.newsContent41 =
                "El presidente de la asociación de casas rurales de Asturias ARCA, Jaime García, presentó el proyecto Smart Rural Asturias para la digitalización de los alojamientos rurales con la plataforma Inventrip.";

            $scope.newsTitle40 =
                "INTUR, Feria internacional de turismo interior. Valladolid, noviembre de 2018";
            $scope.newsContent40 =
                "El diputado de turismo de la Diputación de Salamanca presentó la implantación de la plataforma Inventrip para la provincia. Se entregaron durante la feria tarjetas NFC promocionales.";
            $scope.newsDetail40 = "Tarjetas NFC";

            $scope.newsTitle39 = "Congreso Turkey Blockchain Summit 2018";
            $scope.newsContent39 =
                "Sismotur ha sido invitada al primer congreso nacional de blockchain de Turquía, organizado por el gobierno turco en noviembre de 2018 en Ankara. El CTO de Sismotur, Felipe Santi, ha realizado una presentación sobre el potencial de Blockchain y de las tecnologías conectadas en el sector del Turismo, y ha organizado junto con nuestro colaborador Enrique Melero un taller práctico para 40 ingenieros sobre un caso de aplicación concreto: una cerradura electrónica que recibe pagos en Bitcoin a través de un teléfono móvil.";

            $scope.newsTitle38 =
                "Jornada Red Destinos Inventrip. Madrid, octubre de 2018";
            $scope.newsContent38 =
                "Sismotur organizó, para la jornada de la Red de Destinos Inventrip, un programa de presentaciones con invitados donde se debatieron estrategias para mejorar los procesos de digitalización de Destinos Turísticos Inteligentes con  la plataforma Inventrip.";
            $scope.newsDetail38 = "Programa";

            $scope.newsTitle37 =
                "Sismotur elaboró el plan de señalización turística inteligente de Santander";
            $scope.newsContent37 =
                "Los socios de Sismotur, Manuel Mariscal y Augusto Ramos, presentaron a la alcaldesa, Gema Igual y al sector turístico de la ciudad las bases del nuevo plan de señalización turística de la ciudad con la incorporación de la tecnología Beacon para conectar Santander con el turista digital.";

            $scope.newsTitle36 =
                "IV Jornadas Internacionales de Turismo. Águeda, Julio de 2018";
            $scope.newsContent36 =
                "Sismotur fue invitado a presentar la experiencia de Reguengos de Monsaraz en su transformación en un Destino Turístico Inteligente. Augusto Ramos, CEO de Sismotur, presentó la plataforma global Inventrip para conectar el destino con el turista digital.";

            $scope.newsTitle35 = "Sismotur gana el hackaton IoT + Blockchain 2018";
            $scope.newsContent35 =
                "El caso de uso presentado por Sismotur “Proof of Visit”, basado en Inventrip, ha ganado el hackaton internacional IoT Blockchain Camp 2018. En el mismo, han participado ingenieros y responsables de negocio de empresas de múltiples sectores, algunas de ellas muy conocidas en el ámbito de blockchain (Ambrosus, Climate Coin), que han validado la relevancia del uso de Beacons como notarios digitales para registrar el paso de turistas por un territorio y permitir así la creación de mecanismos de recompensa en función de su comportamiento.";
            $scope.newsDetail35 = "IoT Blockchain Camp 2018";

            $scope.newsTitle34 =
                "BTL, Feria Internacional de Turismo. Lisboa, marzo de 2018";
            $scope.newsContent34 =
                "Augusto Ramos, CEO de Sismotur, fue invitado a presentar a los responsables municipales y regionales de turismo de Açores la experiencia de Sismotur en la implantación de Destinos Turísticos Inteligentes conectados con Inventrip.";

            $scope.newsTitle33 =
                "Proyecto Innovatour. Puerto de la Cruz y Arona, enero de 2018";
            $scope.newsContent33 =
                "En el marco del proyecto europeo Innovatur, para la reactivación y modernización de los destinos turísticos de Canarias, Madeira y Azores, Augusto Ramos, CEO de Sismotur, presentó la aplicación de la señalización inteligente para la dinamización de las zonas comerciales en Destinos Turísticos Inteligentes.";
            $scope.newsDetail33 = "Innovatur";

            $scope.newsTitle32 = "Fitur Know How & Export. Madrid, enero de 2018";
            $scope.newsContent32 =
                "Nueva presentación de blockchain en SEGITTUR Lab organizada por los CEO y CTO de Sismotur, en la que se han profundizado los conceptos expuestos en 2017 y se ha presentado el uso de Inventrip como herramienta para contribuir a la sostenibilidad de los destinos turísticos utilizando tecnologías existentes de cadena de bloques.";
            $scope.newsDetail32 = "Presentación";

            $scope.newsTitle31 =
                "Foro Meriendas Verdes - Agencia EFE. Madrid, noviembre de 2017";
            $scope.newsContent31 =
                "En el marco del debate sobre tecnologías para impulsar un medioambiente rentable organizado por EFE Verde, el CEO de Sismotur presenta las posibilidades de equipar los parques naturales con señales inteligentes que incorporen  Beacons para dar información conextualizada a los turistas durante su visita, incluso sin necesidad de cobertura de internet.";
            $scope.newsDetail31 = "Debate";

            $scope.newsTitle30 =
                "Comunidad Rural digital: Construyendo el territorio inteligente. Valladolid, noviembre de 2017";
            $scope.newsContent30 =
                "Sara García, gerente del Consorcio Ruta del Vino Ribera del Duero y Augusto Ramos, CEO de Sismotur, presentaron la Ruta Smart Ribera del Duero. Destacaron la importancia de la utilización en sus señales inteligentes de la tecnología Beacon en zonas sin conexión a datos para dar información a los turistas.";

            $scope.newsTitle29 =
                "Expo World Congress de Barcelona, noviembre de 2017";
            $scope.newsContent29 =
                "Manuel Mariscal, COO de Sismotur, presenta en el stand Barcelona Smart Region los casos de éxito de la implantación de señalización turística inteligente conectada con Inventrip en Vilafranca del Penedès y Santa Susanna.";
            $scope.newsDetail29 = "Barcelona Smart Region";

            $scope.newsTitle28 =
                "Jornada DTI - UOC Catalunya. Barcelona, octubre de 2017";
            $scope.newsContent28 =
                "Augusto Ramos, CEO de Sismotur, fue invitado a participar en la jornada de Destinos Turísticos Inteligentes organizada por la Universitat Oberta de Catalunya, para presentar dos de los destinos inteligentes de Cataluña que están actualmente conectados con la plataforma Inventrip: Santa Susanna y Vilafranca del Penedès.";

            $scope.newsTitle27 = "Congreso Green Cities, Málaga";
            $scope.newsContent27 =
                "Sismotur ha participado, en Junio de 2017, en la maqueta de ciudad inteligente preparada por el Ministerio de Energía, Turismo y Agenda Digital. El turista a su llegada a la estación del AVE recibe información con señalización inteligente conectada con Inventrip. Foto: CEO de Sismotur con el secretario de Estado para la Sociedad de la Información y la Agenda Digital y el coordinador del Plan Nacional de Ciudades Inteligentes.";

            $scope.newsTitle26 = "III Congreso de Ciudades Inteligentes, Madrid";
            $scope.newsContent26 =
                'La Junta de Castilla y León y Sismotur han presentado en Abril de 2017 el proyecto "Ruta Smart Ribera del Duero: Señalización Turística Inteligente Conectada con Inventrip" en la tercera edición del Congreso Ciudades Inteligentes de Madrid. Foto: presentación del CEO de Sismotur; la Ruta Ribera del Duero dispone ahora de 103 Oficinas de Información Turística digitales.';
            $scope.newsDetail26 = "Enlace a la presentación";
            $scope.newsDetail26_b = "Vídeo de la presentación";

            $scope.newsTitle25 =
                "Inicio del plan de señalización inteligente de Gran Canaria";
            $scope.newsContent25 =
                "El Cabildo encarga a Sismotur la redacción del plan de señalización turística inteligente de la isla de Gran Canaria. Foto: el consejero de Obras Públicas e Infraestructuras (izquierda) con el CEO de Sismotur (derecha) en el momento de la firma del contrato.";
            $scope.newsDetail25 = "Enlace al anuncio del Cabildo de Gran Canaria";

            $scope.newsTitle24 =
                "Reguengos de Monsaraz, primer destino con señalización turística inteligente de Portugal";
            $scope.newsContent24 =
                "Sismotur presenta a las Rutas del Vino de Portugal el proyecto de destino inteligente conectado realizado en Reguengos de Monsaraz. Foto: alcalde de Reguengos de Monsaraz y presidente de la Red Europea de Ciudades del Vino (izquierda), presidente de la Asociación de Municipios del Vino de Portugal (centro) y CEO de Sismotur (derecha).";
            $scope.newsDetail24 = "Enlace al artículo de Publituris";

            $scope.newsTitle23 = "ICEX entrevista al CMO de Sismotur durante Fitur";
            $scope.newsContent23 =
                "Entrevista de la revista El Exportador a Sismotur durante Fitur 2017. Foto: CMO de Sismotur.";
            $scope.newsDetail23 = "Enlace a la entrevista completa (vídeo)";

            $scope.newsTitle22 = "Sismotur expone en Fitur Know-how & Export 2017";
            $scope.newsContent22 =
                "Sismotur presenta con éxito su señalización turística conectada en Fitur 2017. Foto: el CEO de Sismotur (derecha) presentando nuestro concepto al Viceministro de Turismo de Perú (centro) y al Presidente de SEGITTUR (izquierda).";
            $scope.newsDetail22 =
                "Enlace a un artículo sobre Sismotur en Fitur Daily";

            $scope.newsTitle21 =
                "La agencia EFE entrevista a Sismotur sobre Blockchain para el turismo";
            $scope.newsContent21 =
                "EFE Futuro se interesa por la tecnología Blockchain y ha entrevistado a nuestros expertos para conocer cómo se puede aplicar al turismo.";
            $scope.newsDetail21 = "Enlace al artículo";

            $scope.newsTitle20 =
                "FITUR 2017 - Tecnología Blockchain y aplicaciones para el Turismo";
            $scope.newsContent20 =
                "Enrique Melero, experto en Blockchain, y Felipe Santi, CTO de Sismotur, han presentado esta novedosa tecnología en SEGITTUR Lab.";
            $scope.newsDetail20 = "Presentación (idioma español, formato PDF)";

            $scope.newsTitle19 =
                "Sismotur presentará Blockchain y sus aplicaciones potenciales para el Turismo durante FITUR 2017 en SEGITTUR Lab";
            $scope.newsContent19 =
                "Sismotur estará presente en FITUR 2017, en el área Know-How & Export (Stand 10B09, cerca del stand de SEGITTUR). El día 18 de enero a las 16:00, en el espacio SEGITTUR Lab, organizaremos una conferencia sobre la tecnología Blockchain y sus aplicaciones en el ámbito del Turismo.";
            $scope.newsDetail19 =
                "Análisis de Blockchain y su potencial para el Turismo";

            $scope.newsTitle18 =
                "Artículo sobre la Señalización Turística Inteligente en EFE Empresas";
            $scope.newsContent18 =
                "Artículo de EFE Empresas comentando la innovación que supone conectar el Destino Turístico con el nuevo turista digital y su Smartphone a través de la señalización turística inteligente e Inventrip.";
            $scope.newsDetail18 = "Enlace al Artículo";

            $scope.newsTitle17 = "Artículo en el Blog de Kontakt.io";
            $scope.newsContent17 =
                "Kontakt, referencia mundial en tecnologías conectadas (Internet of the Things) y colaborador de Sismotur, explica la innovación que supone Inventrip para el sector turístico.";
            $scope.newsDetail17 = "Enlace al Blog de Kontakt";

            $scope.newsTitle16 =
                "Presentación de Inventrip para la Ruta del Vino Ribera del Duero";
            $scope.newsContent16 =
                "El Director General de Turismo de Castilla y León presenta Inventrip, el nuevo sistema de señalización turística inteligente de Sismotur.";
            $scope.newsDetail16 = "Enlace al Artículo";

            $scope.newsTitle15 = "Las Palmas de Gran Canaria implantará Inventrip";
            $scope.newsContent15 =
                "El Ayuntamiento y el Cabildo han llegado a un acuerdo para implantar la señalización turística inteligente de Sismotur en las zonas comerciales abiertas de interés turístico y dar información con la plataforma Inventrip.";
            $scope.newsDetail15 = "Enlace al Artículo";

            $scope.newsTitle14 = "FITUR 2016";
            $scope.newsContent14 =
                "Sismotur fue la elegida para presentar en la inauguración su concepto de Destino Turístico Inteligente a través de la integración de medios físicos y digitales OFF/ON conectando la señalización a la plataforma Inventrip. De esta forma, las señales y el territorio le hablan al móvil del turista.";

            $scope.newsTitle13 =
                "Aportación de Sismotur al Libro Blanco de Destinos Turísticos Inteligentes";
            $scope.newsContent13 =
                "El pasado mes de octubre se presentó en la sede del Ministerio de Industria, Energía y Turismo el libro blanco de Destinos Turísticos Inteligentes promovido por SEGITTUR dentro del marco del Plan Nacional de Ciudades Inteligentes. Sismotur ha participado en la redacción de este libro blanco con su modelo de integración OFF/ON de medios físicos y digitales en un destino para mejorar la acogida y la experiencia del turista.";
            $scope.newsDetail13 = "Enlace al Libro Blanco";

            $scope.newsTitle12 =
                "Sismotur redacta el Plan de Señalización Turística de Euskadi";
            $scope.newsContent12 =
                "Sismotur ha redactado el plan de señalización turística para Euskadi, trabajando codo a codo con el Gobierno Vasco y su directora general de Turismo y con las tres diputaciones forales, unificando criterios, analizando necesidades y especificidades en pos de la concertación.";

            $scope.newsTitle11 = "Sismotur en INTUR 2015";
            $scope.newsContent11 =
                "En la pasada edición de INTUR en Valladolid, Sismotur presentó los avances de la plataforma Inventrip como herramienta de promoción de un destino, planificador de viajes para el turista y servicio de información digital en el territorio vinculado a la señalización física y a los recursos y servicios del destino.";

            $scope.newsTitle10 =
                "Sismotur participa en la Jornada de Redes Sociales y Turismo de la Diputación de Barcelona";
            $scope.newsContent10 =
                "Augusto Ramos, CEO de Sismotur, ha impartido una ponencia sobre la capacidad de las redes sociales y el turista como prescriptores de un destino, la necesidad de que los territorios se sumen a los nuevos medios de difusión y promoción y cómo Inventrip implementa y explota estos medios para la difusión del destino por parte de turistas y promotores del mismo.";

            $scope.newsTitle9 =
                "Sismotur con el Principado de Asturias en la presentación de Inventrip para Piloña";
            $scope.newsContent9 =
                "Sismotur ha acompañado al director general de Turismo del Principado de Asturias en la presentación de Inventrip como plataforma de promoción del destino y gestión de la información turística para Piloña, zona muy turística de Asturias y que apuesta por las nuevas tecnologías en su desarrollo turístico.";

            $scope.newsTitle8 =
                "Sismotur con Turismo de Extremadura en la presentación de Inventrip para la Sierra de Montánchez";
            $scope.newsContent8 =
                "Felipe Santi, CTO de Sismotur, acompaña a Turismo de Extremadura en la presentación del servicio Inventrip para la mejora de la promoción de la Sierra de Montánchez y Tamuja en su camino hacia un destino turístico inteligente. También se ha presentado un vídeo promocional con drones asociado a Inventrip para difundir el destino en las redes sociales.";

            $scope.newsTitle7 =
                "Sismotur presentando el proyecto de Ibiza Destino Turístico Inteligente con beacons e Inventrip";
            $scope.newsContent7 =
                "Sismotur ha acompañado al Ayuntamiento de Ibiza en la presentación del proyecto que convierte al municipio en un destino turístico inteligente con la implantación de la plataforma Inventrip como sistema de gestión de la información turística y de la promoción del destino, integrado con un plan de señalización inteligente peatonal e interpretativa y una red de beacons.";

            $scope.newsTitle6 =
                "Presentación de Inventrip en la Sierra Norte de Madrid";
            $scope.newsContent6 =
                "Julio José Julián, CMO de Sismotur, presenta la implantación de la plataforma Inventrip como sistema de gestión de la información turística, planificador de viajes y medio de promoción en las redes sociales del destino turístico. Se enmarca dentro de un ambicioso plan para promocionar la Sierra Norte y que se apoya decididamente en las nuevas tecnologías y las redes sociales como vehículo de difusión.";

            $scope.newsTitle5 =
                "Sismotur en las Jornadas Técnicas de Turismo en Perú";
            $scope.newsContent5 =
                "De la mano de SEGITTUR y del ICEX, Sismotur ha estado presente en las Jornadas Tecnicas de Turismo que se han celebrado en la capital de Perú. Se ha presentado la visión del destino turístico inteligente y la capacidad de Inventrip como gestor de la información y herramienta de promoción para un territorio turístico a nivel global.";

            $scope.newsTitle4 =
                "Sismotur en las Jornadas Técnicas de Turismo España-Chile, en Santiago de Chile";
            $scope.newsContent4 =
                "Sismotur acompaña a SEGITTUR y al ICEX en las Jornadas Técnicas de Turismo que se han celebrado en Santiago de Chile, y está presente como testigo de excepción de la firma del convenio bilateral entre Chile y España, presentando Inventrip y la potencia de la visión OFF/ON de integración de elementos físicos y digitales para desarrollar un destino turístico inteligente.";

            $scope.newsTitle3 =
                "Sismotur presenta el Proyecto de Señalización Turística del Camino de Santiago por Castilla y León";
            $scope.newsContent3 =
                "Sismotur ha presentado el plan de señalización turística del Camino de Santiago por las carreteras de Castilla y León, junto con la consejera y el director general de Turismo. Supone una mejora en la percepción de la calidad del destino y en el proceso de acogida al turista sobre el territorio.";

            $scope.newsTitle2 = "Sismotur en el Cluster de Turismo de Extremadura";
            $scope.newsContent2 =
                "Reportaje de TVE sobre el Cluster de Turismo de Extremadura, donde Augusto Ramos, CEO de Sismotur, expone la capacidad de Inventrip como plataforma de promoción de un destino turístico y su potencia como herramienta para planificar viajes para el turista y como gestor de la información turística de un territorio.";

            $scope.newsTitle1 =
                "Inventrip recibe el premio a la mejor idea de marketing de destinos de Territorio & Marketing";
            $scope.newsContent1 =
                "Sismotur ha recibido el premio finalista por la aportación de la plataforma Inventrip a la difusión y promoción de un destino turístico. El jurado reconoce cómo Inventrip es capaz de unir la parte emotiva de la experiencia de un turista a la hora de preparar un viaje con la realidad de desplazarse dentro del territorio durante el viaje y la prescripción en positivo que posteriormente hace de dicho destino.";

            break;

            // ***********************************
            // ************* CATALAN *************
            // ***********************************

        case "ca":
            // ******************
            // CLAIM CA
            // ******************
            $scope.claim1 = "Connecta la teva destinació amb el turista digital";
            $scope.claim2 = "Descobreix la senyalització turística intel·ligent";
            $scope.btnMuestra = "sol·licita'ns una mostra gratuïta";

            // ******************
            // MENU CA
            // ******************
            $scope.inventrip = "Inventrip";
            $scope.mnTecno = "Tecnologies";
            $scope.mnNoticias = "Notícies";
            $scope.mnTeam = "Socis";
            $scope.mnCont = "Contacte";
            $scope.mnIdioma = "CA";

            // ******************
            // INVENTRIP CA
            // ******************
            $scope.dividerInventrip = "Implanta un Servei d'Informació Personalitzat";
            $scope.invTextA = "Connecta la teva destinació";
            $scope.invTextB =
                "Sismotur t'implanta un servei d'informació i gestió de la senyalització turística intel·ligent per a la teva destinació, que permet consultar l'oferta turística, reservar, construir viatges a mesura i compartir-los a les xarxes socials o mitjançant l'ús de les últimes tecnologies: Beacons, NFC, codis QR.";

            // **********************
            // SIGNING CA
            // **********************
            $scope.dividerSigning = "Implanta un Servei de Senyalització";
            $scope.signingTitle = "Signing";
            $scope.signingTextA = "Gestiona la teva senyalització";
            $scope.signingTextB =
                "Sismotur és líder en l'elaboració de plans de senyalització i t'implanta Signing, un servei web especialitzat per a la planificació i gestió de la senyalització territorial i urbana utilitzat per més de 30 administracions públiques.";

            // ******************
            // TECNOLOGIAS CA
            // ******************
            $scope.dividerTechnologies =
                "Inventrip i Signing utilitzen les millores tecnologies";

            $scope.btnReferences = "REFERÈNCIES";

            // Smart Signage
            $scope.senalizacionTitle = "Senyalització Intel·ligent";
            $scope.senalizacionText =
                "Millora la senyalització turística de la teva destinació integrant-la amb sistemes avançats d'informació turística. T'oferim	el nostre servei cloud Signing per a la seva planificació i gestió";

            $scope.senalizacionTitle1 = "Ruta Ribera del Duero Smart";
            $scope.senalizacionText1 =
                "Sismotur ha implantat el sistema Inventrip de senyalització turística intel·ligent a la Ruta del Vino Ribera del Duero.";

            $scope.senalizacionTitle2 = "Barcelona";
            $scope.senalizacionText2 =
                "Disseny de la nova senyalització turística de vianants portada a terme per Sismotur per a la ciutat de Barcelona.";

            $scope.senalizacionTitle3 = "Més de 50 referències en senyalització intel·ligent";
            $scope.senalizacionText3 =
                "Sismotur va crear en 2015 el concepte de senyalització turística intel·ligent i des d’aquesta data ha acompanyat més de 50 destinacions turístiques en la implantació de senyalització intel·ligent amb la utilització de les seves plataformes Signing i Inventrip (totes dues solucions pertanyents al catàleg de la Xarxa DTI).";

            // Beacons
            $scope.beacons = "Beacons";
            $scope.beaconText =
                "Incorpora aquesta nova tecnologia en senyals i oficines d'informació per enviar al turista productes i serveis personalitzats al seu dispositiu mòbil.";

            $scope.beaconTitle1 = "Beacons als Senyals Intel·ligents";
            $scope.beaconText1 =
                "Inventrip connecta els senyals intel·ligents amb el turista utilitzant Beacons.";

            $scope.beaconTitle2 =
                "Senyalització Turística Intel·ligent a las Palmas de Gran Canaria";
            $scope.beaconText2 =
                "Sismotur desenvolupa el pla de senyalització turística intel·ligent de Las Palmas de Gran Canaria utilitzant la tecnologia Beacons gestionada per Inventrip.";

            // API
            $scope.apiInventrip = "API";
            $scope.apiInventripText =
                "Integra Inventrip amb les teves pàgines web de turisme o sistemes d'informació Smart City per reduir costos i simplificar els teus desenvolupaments informàtics.";

            $scope.apiTitle1 = "Inventrip REST API";
            $scope.apiText1 =
                "Inventrip és un sistema interoperable que permet obtenir informació i interaccionar amb plataformes Smart City utilitzant tecnologies estàndard a l'abast de qualsevol desenvolupador.";

            $scope.apiTitle2 = "Schema.org para Turismo";
            $scope.apiText2 =
                "Sismotur és cofundador del Grup de Turisme de Schema.org, projecte de la W3C i principal vocabulari mundial de semàntica de dades. Milions de pàgines web utilitzant Schema.org per millorar la seva visibilitat i incrementar el seu nombre de visites.";
            $scope.apiButton2 = "Suma't a aquesta iniciativa";

            // Big Data
            $scope.bigData = "Big Data";
            $scope.bigDataText =
                "Analitza amb senzillesa les dades generades pels teus turistes per millorar la gestió de la teva destinació.";

            $scope.bigDataTitle1 = "El senyal intel·ligent: font de dades";
            $scope.bigDataText1 =
                "Inventrip permet generar en temps real quadres de comandament i anàlisi personalitzat accessibles amb el navegador sobre l'ús que els turistes fan dels senyals connectats i de qualsevol servei associat";

            // E-commerce
            $scope.eCommerce = "e-Commerce";
            $scope.comercializacionText =
                "Facilita al turista l'accés als motors de reserva d'allotjaments, restaurants i activitats abans i durant el viatge.";

            $scope.eCommerceTitle1 = "e-Commerce";
            $scope.eCommerceText1 =
                "Integració de centrals de reserva en Inventrip perquè els turistes puguin reservar serveis abans i durant el viatge.";

            // Blockchain
            $scope.blockchain = "Blockchain";
            $scope.blockchainText =
                "Aprofita el potencial d'aquesta tecnologia disruptiva per interaccionar amb el turista sense necessitat de dependre d'intermediaris.";

            $scope.blockchainTitle1 = "Blockchain";
            $scope.blockchainText1 =
                "Sismotur va presentar a FITUR 2017 algunes de les aplicacions potencials per al turisme d'aquesta increïble tecnologia que ha permès, per exemple l'existència de la moneda digital Bitcoin.";
            $scope.blockchainButton1 = "Descobreix les aplicacions";

            // NFC
            $scope.nfc = "NFC";
            $scope.nfcText =
                "Lliura als teus clients targetes contactless per personalitzar la seva experiència turística a la destinació.";

            $scope.nfcTitle1 = "Targetes NFC Eivissa";
            $scope.nfcText1 =
                "L'Ajuntament d'Eivissa va presentar als mitjans el projecte de Destinació Turística Intel·ligent amb Senyalització Intel·ligent, Beacons i aquestes targetes NFC amb un viatge predefinit per Dalt Vila";
            $scope.nfcButton1 = "Descobreix el viatge";

            $scope.nfcTitle2 = "Targetes NFC Palència Turisme";
            $scope.nfcText2 =
                "Palència Turisme va presentar Inventrip als mitjans durant la Fira de Turisme Interior (INTUR-2015) i va entregar targetes NFC amb un viatge per la Província de Palència.";
            $scope.nfcButton2 = "Descobreix el viatge";

            // QR
            $scope.qr = "QR";
            $scope.qrText =
                "Gestiona fàcilment la informació turística on-line de recursos i mapes en multidioma.";

            $scope.qrTitle1 = "Normandia i Bretanya";
            $scope.qrText1 =
                "Descobreix un viatge per Normandia i Bretanya escanejant aquest codi QR!";
            $scope.qrButton1 = "Descobreix el viatge";

            $scope.qrTitle2 = "Barcelona";
            $scope.qrText2 =
                "Sismotur va redactar en 2012 el primer pla de senyalització i informació turística de la ciutat de Barcelona per al districte d'Horta-Guinardó.";

            // drontrip
            $scope.dronTrip = "DronTrip";
            $scope.dronText =
                "Utilitza vols turístics amb Drons per viralitzar per les xarxes socials la promoció de destinacions i serveis turístics.";

            $scope.drontripText1 =
                "Et convidem a volar per la comarca Sierra de Montánchez y Tamuja!";
            $scope.drontripButton1 = "Veure Video";

            // ******************
            // NOTICIAS CA
            // ******************
            $scope.dividerNews = "Últimes notícies";
            $scope.moreNews = "Més notícies";

            // *********************
            // PARTNERS CA
            // *********************
            $scope.titlePartners = "Socis";

            // ******************
            // CONTACTO CA
            // ******************
            $scope.btnContact = "CONTACTA'NS";

            $scope.cntSpain = "Espanya";
            $scope.cntSpain2 = "Madrid & Barcelona";
            $scope.cntSpainPhone = "+34 913.238.208";

            $scope.cntFrance = "França";
            $scope.cntFrance2 = "Annecy";
            $scope.cntFrancePhone = "+33 (0)619.20.30.61";

            $scope.copyright = "Copyright © 2017 SISMOTUR SL.";

            // *********************
            // NEWS CA
            // *********************
            $scope.newsTitle56 =
                "Jornada Xarxa de Destinacions Inventrip 2020";
            $scope.newsContent56 =
                "El 13 de novembre va tindre lloc la Jornada Inventrip 20202 on van participar 65 destinacions turístiques usuàries i interessades en aquesta plataforma global de turisme digital per compartir casos d’èxit i contribuir al seu desenvolupament.";
            $scope.newsDetail56 = "Link programa";

            $scope.newsTitle55 =
                "La Ruta del vi Sierra de França guardonada als premis de Enoturismo. Octubre 2020";
            $scope.newsContent55 =
                "Premiada com a millor destinació enoturística sostenible i responsable, gràcies en gran manera a la digitalització de la ruta i els seus associats amb inventrip.";
            $scope.newsDetail55 = "Link notícia";

            $scope.newsTitle54 = "Sismotur premiada a Digital Tourism. Octubre 2020";
            $scope.newsContent54 =
                "Per l'actuació més rellevant a l'àmbit de la normalització, amb la implantació de Inventrip a la comarca La Canal de Navarrés i la seva interoperabilitat amb la web de la destinación i els terminals tàctils (desenvolupat per Sien Consulting i Insyde respectivament i també partícips d'aquest premi).";
            $scope.newsDetail54 = "Link notícia";

            $scope.newsTitle53 =
                "Inventrip i Signing solucions del catàleg oficial de la xarxa DTI - Octubre 2020";
            $scope.newsContent53 =
                "Les nostres plataformes, Inventrip i Signing, d'informació turística i senyalització intel·ligent formen part de les solucions tecnològiques de la Xarxa de Destinacions Turístiques Intel·ligents que va presentar la Ministra Reyes Maroto a l'obertura de Digital Tourism 2020.";
            $scope.newsDetail53 = "Link catàleg";

            $scope.newsTitle52 = "Sismotur entra en la xarxa DTI - Octubre 2020";
            $scope.newsContent52 =
                "La III Comissió Plenària de la xarxa de Destinacions Turístiques Intel·ligents, que ha estat presidida per la Ministra Reyes Maroto, aprova la incorporació de 19 nous membres, entre els la nostra empresa Sismotur.";
            $scope.newsDetail52 = "Link notícia";

            $scope.newsTitle51 =
                "Actualització del manual de semàntica per al Covid-19. Juliol 2020";
            $scope.newsContent51 =
                "Sismotur col·labora amb Segittur a un projecte pilot amb amb tres destinacions inventrip: Conil, Santa Susanna i Sanxenxo per a l'actualització del manual de semàntica de destinacions turístiques intel·ligents i implementa en inventrip funcionalitats per a informar sobre el Covid.";
            $scope.newsDetail51 = "Link notícia";

            $scope.newsTitle50 =
                "Consultoria al Ministeri de Comerç i Turisme del Perú. Ollantaytambo, Juliol 2019";
            $scope.newsContent50 =
                "Els experts i socis de Sismotur, Augusto Ramos i Manuel Mariscal, assessoren a MINCETUR per a la implantació d'una Destinació Turística Intel·ligent connectada amb inventrip en Ollantaytambo, a la Vall Sagrada i porta d'entrada de Machu Picchu.";

            $scope.newsTitle49 =
                "Consultoria a l'Associació Transfronterera del Llac Alqueva (ATLA). Juliol de 2019";
            $scope.newsContent49 =
                "Sismotur ha estat adjudicatària per a l'elaboració del pla d'informació i senyalització turística intel·ligent dels 9 municipis portuguesos de ATLA que inclou la implantació de les seves plataformes Signing i Inventrip.";

            $scope.newsTitle48 =
                "Jornada de lliurament de Kit Digitals Inventrip. Província de Salamanca, juny 2019";
            $scope.newsContent48 =
                "La Diputació de Salamanca i Sismotur van lliurar als empresaris de les Rutes del Vi, ramaderies, albergs i oficines de turisme 110 Kit Digitals connectats amb la plataforma Inventrip de la província. Durant l'acte es van presentar les tecnologies QR, NFC i Beacons incuidas en l'oferta de digitalització de cada establecimeinto i oficines de turisme.";
            $scope.newsDetail48 = "Link Twitter";

            $scope.newsTitle47 =
                "Nova Norma UNE: Semàntica de dades de turisme. Maig 2019";
            $scope.newsContent47 =
                "En el marc del Comitè de CTN178 (normalització de ciutats intel·ligents), Sismotur ha co-redactat juntament amb Globaldit la futura norma UNE PNE 178503 “Destinacions Turístiques Intel·ligents. Semàntica aplicada a turisme”, aportant el expertise de 20 anys modelant més de 20.000 recursos turístics i l'experiència adquirida en la gestió del grup mundial de turisme de schema.org. Aquesta norma ha estat publicada al BOE i es troba en procés d'informació pública, esperant-se la seva aprovació en la segona meitat de 2019.";
            $scope.newsDetail47 = "Link norma";

            $scope.newsTitle46 =
                "II Trobada Xarxa DTI - Bones Pràctiques. Abril 2019";
            $scope.newsContent46 =
                "Conil de la Frontera, integrant de la Xarxa de Destinacions Inventrip, va presentar com a exemple de bones pràctiques, a la Xarxa de Destinacions Turístiques Intel·ligents creada per la Secretaria d'Estat de Turisme, la senyalització intel·ligent implantada al seu municipi, així com la utilització de targetes NFC connectades amb Inventrip per a la promoció i informació turística de Conil.";
            $scope.newsDetail46 = "Bones pràctiques";

            $scope.newsTitle45 =
                "Presentació de inventrip als hotelers de Sanxenxo. Març 2019";
            $scope.newsContent45 =
                "El regidor de turisme de Sanxenxo i el CEO de Sismotur van presentar als hotelers de Sanxenxo les possibilitats per a connectar els establiments turístics amb el turista digital a través de la plataforma Inventrip ja implantada al municipi.";
            $scope.newsDetail45 = "Link presentació";

            $scope.newsTitle44 =
                "Senyalització Intel·ligent del Lago Alqueva. Portugal, febrer de 2019";
            $scope.newsContent44 =
                "El CEO de Sismotur, Augusto Ramos, va presentar al conseller de Turisme de Portugal, al president de la regió Alentejo-Ribatejo, al president de l'Associació transfronterera del Lago Alqueva (ATLA) i als 9 municipis portuguesos que la constitueixen el projecte per a la transformació de Lago Alqueva en una Destinació Turística intel·ligent connectada amb Inventrip";

            $scope.newsTitle43 = "Spain Convention Bureau. Benidorm, fevrer de 2019";
            $scope.newsContent43 =
                "Augusto Ramos, CEO de Sismotur, va ser convidat a presentar la utilització de la senyalització turística intel·ligent en el turisme de reunions.";

            $scope.newsTitle42 = "Fitur Know How & Export. Madrid, gener de 2019";
            $scope.newsContent42 =
                "Sismotur va estar novamente present a la zona d'innovació i tecnologia de FITUR presentant la Xarxa de Destinacions Inventrip que compte al dia d'avui amb 40 destinacions a la península (10 d'elles a Portugal).";
            $scope.newsDetail42 = "Xarxa de Destinacions Inventrip";

            $scope.newsTitle41 = "Smart Rural - Asturias. FITUR 2019";
            $scope.newsContent41 =
                "El president de l'associació de cases rurals de asturias ARCA, Jaime García, va presentar el projecte Smart Rural Astúries per a la digitalització dels allotjaments rurals amb la plataforma Inventrip";

            $scope.newsTitle40 =
                "INTUR, Fira internacional de turisme interior. Valladolid, novembre de 2018";
            $scope.newsContent40 =
                "El diputat de turisme de la Diputació de Salamanca va presentar la implantació de la plataforma Inventrip per a la província. Es van lliurar durant la fira targetes NFC promocionals.";
            $scope.newsDetail40 = "Targetes NFC";

            $scope.newsTitle39 = "Congrés Turkey Blockchain Summit 2018";
            $scope.newsContent39 =
                "Sismotur ha estat convidada al primer congrés nacional de blockchain de Turquia, organitzat pel govern turc al novembre de 2018 a Ankara. El CTO de Sismotur, Felipe Santi, ha realitzat una presentació sobre el potencial de Blockchain i de les tecnologies connectades al sector del Turisme, i ha organitzat juntament amb el col·laborador Enrique Melero un taller pràctic per a 40 enginyers sobre un cas d'aplicació concret: un pany electrònic que rep pagaments en Bitcoin a través d'un telèfon mòbil";

            $scope.newsTitle38 =
                "Jornada Xarxa Destinacions Inventrip. Madrid, octubre de 2018";
            $scope.newsContent38 =
                "Sismotur va organitzar, per a la jornada de la Xarxa de Destinacions Inventrip, un programa de presentacions i convidats on es van debatre estratègies per millorar els proceos de digitalització de Destinacions Turístiques Intel·ligents amb la plataforma Inventrip.";
            $scope.newsDetail38 = "Programa";

            $scope.newsTitle37 =
                "Sismotur va redactar el pla de senyalització turística intel·ligent de Santander";
            $scope.newsContent37 =
                "Els socis de Sismotur, Manuel Mariscal i Augusto Ramos, van presentar a l'alcaldessa, Gema Igual i al sector turístic de la ciutat les bases del nou pla de senyalització turística de la ciutat amb la incorporació de la tecnologia Beacons per connectar Santander amb el turista digital.";

            $scope.newsTitle36 =
                "IV Jornades Internacionals de Turisme. Águeda, Juliol de 2018";
            $scope.newsContent36 =
                "Sismotur va ser convidat a presentar l'experiència de Reguengos de Monsaraz en la seva transformació en una Destinació Turística Intel·ligent. Augusto Ramos, CEO de Sismotur, va presentar la plataforma global Inventrip per a connectar la destinació amb el turista digital";

            $scope.newsTitle35 = "Sismotur guanya el hackaton IoT + Blockchain 2018";
            $scope.newsContent35 =
                "El cas d'ús presentat per Sismotur “Proof of Visit”, basat en Inventrip, ha guanyat el hackaton internacional IoT Blockchain Camp 2018. En aquest, han participat enginyers i responsables de negoci d'empreses de múltiples sectors, algunes molt conegudes a l'àmbit de blockchain (Ambrosus, Climate Coin), que han validat la rellevància de l'ús de Beacons com a notaris digitals per registrar el pas de turistes per un territori i permetre així la creació de mecanismes de recompensa en funció del seu comportament.";
            $scope.newsDetail35 = "IoT Blockchain Camp 2018";

            $scope.newsTitle34 =
                "BTL, Fira Internacional de Turisme. Lisboa, març de 2018";
            $scope.newsContent34 =
                "Augusto Ramos, CEO de Sismotur, va ser convidat a presentar als responsables municipals i regionals de turisme de Açores l'experiència de Sismotur en la implantació de Destinacions Turístiques Intel·ligents connectades amb Inventrip";

            $scope.newsTitle33 =
                "Projecte Innovatur. Puerto de la Cruz i Arona, gener de 2018";
            $scope.newsContent33 =
                "En el marc del projecte europeu Innovatur, per a la reactivació i modernització de les destinacions turístiques de Canàries, Madeira i Açores, Augusto Ramos, CEO de Sismotur, va presentar l'aplicació de la senyalització intel·ligent per a la dinamització de les zones comercials a Destinacions Turístiques Intel·ligents.";
            $scope.newsDetail33 = "Innovatur";

            $scope.newsTitle32 = "Fitur Know How & Export. Madrid, gener de 2018";
            $scope.newsContent32 =
                "Nova presentació de blockchain en SEGITTUR Lab organitzada pels CEO i CTO de Sismotur, en la qual s'han aprofundit els conceptes exposats en 2017 i s'ha presentat l'ús d'Inventrip com a eina per contribuir a la sostenibilitat de les destinacions turístiques utilitzant tecnologies existents de cadena de blocs.";
            $scope.newsDetail32 = "Presentació";

            $scope.newsTitle31 =
                "Fòrum Berenars Verds - Agència EFE. Madrid, novembre de 2017";
            $scope.newsContent31 =
                "En el marc del debat sobre tecnologies per impulsar un medi ambient rendible organitzat per EFE Verd, el CEO de Sismotur presenta les possibilitats d'equipar els parcs naturals amb senyals intel·ligents que incorporin Beacons per donar informació conextualizada als turistes durant la seva visita, fins i tot sense necessitat de cobertura d'internet.";
            $scope.newsDetail31 = "Debat";

            $scope.newsTitle30 =
                "Comunitat Rural digital: Construint el territori intel·ligent. Valladolid, novembre de 2017";
            $scope.newsContent30 =
                "Sara García, gerent del Consorci Ruta del Vi Ribera del Duero i Augusto Ramos, CEO de Sismotur, van presentar la Ruta Smart Ribera del Duero. Van destacar la importància de la utilització als seus senyals intel·ligents de la tecnologia Beacon a zones sense connexió a dades per donar informació als turistes.";

            $scope.newsTitle29 = "Expo World Congress de Barcelona, novembre de 2017";
            $scope.newsContent29 =
                "Manuel Mariscal, COO de Sismotur, presenta a l'estand 'Barcelona Smart Region' els casos d'èxit de la implantació de senyalització turística intel·ligent connectada amb Inventrip a Vilafranca del Penedès i Santa Susanna.";
            $scope.newsDetail29 = "Barcelona Smart Region";

            $scope.newsTitle28 =
                "Jornada DTI - UOC Catalunya. Barcelona, octubre de 2017";
            $scope.newsContent28 =
                "Augusto Ramos, CEO de Sismotur, va ser convidat a parctipar a la jornada de Destinacions Turístiques Intel·ligents organitzada per la Universitat Oberta de Catalunya a l'octubre de 2017, per presentar dues de les destinacions intel·ligents de Catalunya que estan actualment connectades amb la plataforma Inventrip: Santa Susanna i Vilafranca del Penedès.";

            $scope.newsTitle27 = "Congreso Green Cities";
            $scope.newsContent27 =
                "Sismotur va participar, en juny de 2017, en la maqueta de ciutat intel·ligent preparada pel Ministeri d’Energia, Turisme i Agenda Digital. El turista, a la  seva arribada a l’estació d’AVE, rep al seu mòbil informació amb senyalització intel·ligent connectada amb inventrip. Foto. CEO de Sismotur amb el Secretari d’Estat per a la Societat de la Informació i Agenda Digital i el coordinador del Pla Nacional de Ciutats Intel·ligents.";

            $scope.newsTitle26 = "III Congrés de Ciutats Intel·ligents";
            $scope.newsContent26 =
                "La Junta de Castella i Lleó i Sismotur van presentar en abril de 2017 el projecte “Ruta Smart Ribera del Duero: Senyalització Turística Intel·ligent Connectada amb Inventrip” a la tercera edició del Congrés de Ciutats Intel·ligents de Madrid. Foto: presentació del CEO de Sismotur; La Ruta Ribera del Duero disposa ara de 103 oficines d’informació turística digitals.";
            $scope.newsDetail26 = "Link a la presentació";
            $scope.newsDetail26_b = "Vídeo de la presentació";

            $scope.newsTitle25 =
                "Inici del pla de senyalització intel·ligent de Gran Canaria";
            $scope.newsContent25 =
                "El Cabildo encarrega a Sismotur la redacció del pla de senyalització turística intel·ligent de l'illa de Gran Canaria. Foto: El conseller d'Obres Públiques i Infraestructures (esquerra) amb el CEO de Sismotur (dreta) al moment de la signatura del contracte.";
            $scope.newsDetail25 = "Link a l'anunci del Cabildo de Gran Canaria";

            $scope.newsTitle24 =
                "Reguengos de Monsaraz, primera destinació amb senyalització turística intel·ligent a Portugal";
            $scope.newsContent24 =
                "Sismotur presenta a les Rutes del Vi de Portugal el projecte de destinació intel·ligent connectada amb inventrip de Reguengos de Monsaraz. Foto: alcalde de Reguengos de Monsaraz i president de la Xarxa Europea de Ciutats del Vi (esquerra), president de l'Associació de Municipis del Vi de Portugal (centre) i CEO de Sismotur (dreta).";
            $scope.newsDetail24 = "Link a l'article de Publituris";

            $scope.newsTitle23 = "ICEX entrevista al CMO de Sismotur durant Fitur";
            $scope.newsContent23 =
                "Entrevista de la revista El Exportador a Sismotur durant Fitur 2017. Foto: CMO de Sismotur.";
            $scope.newsDetail23 = "Link a l'entrevista completa (vídeo)";

            $scope.newsTitle22 = "Sismotur exposa a Fitur Know-how & Export 2017";
            $scope.newsContent22 =
                "Sismotur presenta amb èxit la seva senyalització turística connectada a Fitur 2017. Foto: el CEO de Sismotur (dreta) presentant el nostre concepte al Viceministre de Turisme de Perú (centre) i al President de SEGITTUR (esquerra).";
            $scope.newsDetail22 = "Link a un article sobre Sismotur en Fitur Daily";

            $scope.newsTitle21 =
                "La agència EFE entrevista a Sismotur sobre Blockchain per al turisme";
            $scope.newsContent21 =
                "EFE Futuro s’interessa per la tecnologia Blockchain i ha entrevistat als nostres experts per conèixer com es pot aplicar al turisme.";
            $scope.newsDetail21 = "Link a l’article";

            $scope.newsTitle20 =
                "FITUR 2017 - Tecnologia Blockchain i aplicacions per  al turisme";
            $scope.newsContent20 =
                "Enrique Melero, expert en Blockchain, i Felipe Santi, CTO de Sismotur, han presentat aquesta tecnologia disruptiva a SEGITTUR Lab.";
            $scope.newsDetail20 = "Presentació (idioma castellà, formato PDF)";

            $scope.newsTitle19 =
                "Sismotur presentarà Blockchain i les seves aplicacions potencials per al Turisme durant FITUR 2017 en SEGITTUR Lab";
            $scope.newsContent19 =
                "Sismotur estarà present en FITUR 2017, a l'área Know How & Export (Stand 10B09, al costat de l'stand de SEGITTUR). El dia 18 de gener a les 16:00, a l'espai SEGITTUR Lab, organitzarem una conferència sobre la tecnologia Blockchain i les seves aplicacions a l'àmbit del Turisme.";
            $scope.newsDetail19 =
                "Anàlisi de Blockchain i el seu potencial per al Turisme";

            $scope.newsTitle18 =
                "Article sobre la Senyalització Turística Intel·ligent a EFE Empresas";
            $scope.newsContent18 =
                "Article d'EFE Empresas comentant la innovació que suposa connectar la destinació turística amb el nou turista digital i su Smartphone a través de la senyalització turística intel·ligent i Inventrip.";
            $scope.newsDetail18 = "Enllaç a l'Article";

            $scope.newsTitle17 = "Article al Blog de Kontakt.io";
            $scope.newsContent17 =
                "Kontakt, referència mundial en tecnologies connectades (Internet of the Things) i col·laborador de Sismotur, explica la innovació que suposa Inventrip per al sector turístic.";
            $scope.newsDetail17 = "Enllaç al Blog de Kontakt";

            $scope.newsTitle16 =
                "Presentació d'Inventrip pera a la Ruta del Vi Ribera del Duero";
            $scope.newsContent16 =
                "El Director General de Turisme de Castilla y León presenta Inventrip, el nou sistema de senyalització turística intel·ligent de Sismotur.";
            $scope.newsDetail16 = "Enllaç a l'Article";

            $scope.newsTitle15 = "Las Palmas de Gran Canaria implantarà Inventrip";
            $scope.newsContent15 =
                "L'Ajuntament i el Cabildo han arribat a un acord per implantar la senyalització turística intel·ligent de Sismotur a les zones comercials obertes d'interés turístic i donar informació amb la plataforma Inventrip.";
            $scope.newsDetail15 = "Enllaç a l'Article";

            $scope.newsTitle14 = "FITUR 2016";
            $scope.newsContent14 =
                "Sismotur va ser la triada per presentar el seu concepte de Destinació Turística Intel·ligent a través de la integració de mitjans físics i digitals OFF/ON connectant la senyalització a la plataforma Inventrip. D'aquesta forma, els senyals i el territori li parlen al mòbil del turista.";

            $scope.newsTitle13 =
                "Aportació de Sismotur al Llibre Blanc de Destinacions Turístiques Intel·ligents";
            $scope.newsContent13 =
                "El passat mes d'octubre es va presentar a la seu del Ministeri d'Indústria, Energia i Turisme el Llibre Blanc de Destinacions Turístiques Intel·ligents promogut per SEGITTUR i dins del marc del Pla Nacional de Ciutats Intel·ligents. Sismotur ha participat en la redacció d'aquest llibre blanco amb el seu model d'integració OFF/ON de mitjans físics i digitals en una destinació per millorar l'acolliment i l'experiència del turista.";
            $scope.newsDetail13 = "Enllaç al Llibre Blanc";

            $scope.newsTitle12 =
                "Sismotur redacta el pla de senyalització turística d'Euskadi";
            $scope.newsContent12 =
                "Sismotur ha redactat el pla de senyalització turística per a Euskadi, treballant braç a braç amb el Govern Basc i la seva directora general de Turisme i amb les tres diputacions forals, unificant criteris, analitzant necessitats i especificitats darrere de la concertació.";

            $scope.newsTitle11 = "Sismotur en INTUR 2015";
            $scope.newsContent11 =
                "En l'edició d'INTUR 2015 a Valladolid, Sismotur va presentar els avanços de la plataforma Inventrip com a eina de promoció d'una destinació, planificador de viatges per al turista i servei d'informació digital al territori vinculat a la senyalització física i als recursos i serveis de la destinació.";

            $scope.newsTitle10 =
                "Sismotur participa en la Jornada de Xarxes Socials i Turisme de la Diputació de Barcelona";
            $scope.newsContent10 =
                "Augusto Ramos, CEO de Sismotur, ha impartit una ponència sobre la capacitat de les xarxes socials i el turista com a prescriptors d'una destinació, la necessitat que els territoris se sumeixen als nous mitjans de difusió i promoció i com Inventrip implementa i explota aquests mitjans per a la difusió de la destinació per part de turistes i promotors del mateix.";

            $scope.newsTitle9 =
                "Sismotur amb el Principat d'Astúries en la presentació d’Inventrip per a Piloña";
            $scope.newsContent9 =
                "Sismotur ha acompanyat al director general de Turisme del Principat d'Astúries en la presentació d’Inventrip com a plataforma de promoció de la destinació i gestió de la informació turística per a Piloña, zona molt turística d'Astúries i que aposta per les noves tecnologies en el seu desenvolupament turístic.";

            $scope.newsTitle8 =
                "Sismotur amb Turisme d'Extremadura en la presentació de Inventrip per a la Serra de Montánchez";
            $scope.newsContent8 =
                "Felipe Santi, CTO de Sismotur, acompanya a Turisme d'Extremadura en la presentació del servei Inventrip per a la millora de la promoció de la Serra de Montánchez i Tamuja en el seu camí cap a una destinació turística intel·ligent. També s'ha presentat un vídeo promocional amb drones associat a Inventrip per difondre la destinació a les xarxes socials.";

            $scope.newsTitle7 =
                "Sismotur presentant el projecte d'Eivissa Destino Turístic Intel·ligent amb beacons i Inventrip";
            $scope.newsContent7 =
                "Sismotur ha acompanyat a l'Ajuntament d'Eivissa en la presentació del projecte que converteix al municipi en una destinació turística intel·ligent amb la implantació de la plataforma Inventrip com a sistema de gestió de la informació turística i de la promoció de la destinació, integrat amb un pla de senyalització intel·ligent per als vianants i interpretativa i una xarxa de Beacons.";

            $scope.newsTitle6 = "Presentació de Inventrip en la Serra Nord de Madrid";
            $scope.newsContent6 =
                "Julio José Julián, CMO de Sismotur, presenta la implantació de la plataforma Inventrip com a sistema de gestió de la informació turística, planificador de viatges i mitjà de promoció a les xarxes socials de la destinació turística. S'emmarca dins d'un ambiciós pla per promocionar la Serra Nord i que es recolza decididament a les noves tecnologies i les xarxes socials com a vehicle de difusió.";

            $scope.newsTitle5 =
                "Sismotur en les Jornades Tècniques de Turisme a Perú";
            $scope.newsContent5 =
                "De la mà de SEGITTUR i del ICEX, Sismotur ha estat present en les Jornades Tècniques de Turisme que s'han celebrat a la capital de Perú. S'ha presentat la visió de la destinació turística intel·ligent i la capacitat de Inventrip com a gestor de la informació i eina de promoció per a un territori turístic a nivell global.";

            $scope.newsTitle4 =
                "Sismotur en les Jornades Tècniques de Turisme Espanya-Xile, a Santiago de Xile";
            $scope.newsContent4 =
                "Sismotur acompanya a Segittur i al ICEX en les Jornades Tècniques de Turisme que s'han celebrat a Santiago de Xile, i està present com a testimoni d'excepció de la signatura del conveni bilateral entre Xile i Espanya, presentant Inventrip i la potència de la visió OFF/ON d'integració d'elements físics i digitals per desenvolupar una destinació turística intel·ligent.";

            $scope.newsTitle3 =
                "Sismotur presenta el Projecte de senyalització turística del Camí de Santiago per Castella i Lleó";
            $scope.newsContent3 =
                "Sismotur ha presentat el pla de senyalització turística del Camí de Santiago per les carreteres de Castella i Lleó, juntament amb la consellera i el director general de Turisme. Suposa una millora en la percepció de la qualitat de la destinació i en el procés d'acolliment al turista sobre el territori.";

            $scope.newsTitle2 = "Sismotur en el Cluster de Turisme d'Extremadura";
            $scope.newsContent2 =
                "Reportatge de TVE sobre el Cluster de Turisme d'Extremadura, on Augusto Ramos, CEO de Sismotur, exposa la capacitat de Inventrip com a plataforma de promoció d'una Destinació Turística i la seva potència com a eina per planificar viatges per al turista i com a gestor de la informació turística d'un Territori.";

            $scope.newsTitle1 =
                "Inventrip rep el premi a la millor idea de màrqueting de destinacions de Territorio & Màrqueting";
            $scope.newsContent1 =
                "Sismotur ha rebut el premi finalista per l'aportació de la plataforma Inventrip a la difusió i promoció d'una destinació turística. El jurat reconeix com Inventrip és capaç d'unir la part emotiva de l'experiència d'un turista a l'hora de preparar un viatge amb la realitat de desplaçar-se dins del territori durant el viatge i la prescripció en positiu que posteriorment fa d'aquesta destinació.";

            break;

            // ***********************************
            // *********** PORTUGUESE ************
            // ***********************************

        case "pt":
            // ******************
            // CLAIM PT
            // ******************

            $scope.claim1 = "Ligue o seu destino com o turista digital";
            $scope.claim2 = "Descubra a sinalização turística inteligente";
            $scope.btnMuestra = "Una-se à Rede de Destinos Inventrip";

            // ******************
            // MENU PT
            // ******************
            $scope.inventrip = "Inventrip";
            $scope.mnTecno = "Tecnologias";
            $scope.mnNoticias = "Notícias";
            $scope.mnTeam = "Sócios";
            $scope.mnCont = "Contacto";
            $scope.mnIdioma = "PT";

            // ******************
            // INVENTRIP PT
            // ******************
            $scope.dividerInventrip =
                "Implemente um Serviço de Informação Personalizado";
            $scope.invTextA = "Conecte o seu destino";
            $scope.invTextB =
                "A Sismotur implementa um serviço de informação e gestão da sinalização turística inteligente para o seu destino, que permite consultar a oferta turística, reservar, construir viagens à medida e partilhar tudo isto nas redes sociais ou através da utilização das mais recentes tecnologias: Beacons, NFC, códigos QR.";

            // **********************
            // SIGNING PT
            // **********************
            $scope.dividerSigning = "Implemente um serviço de Sinalização";
            $scope.signingTitle = "Signing";
            $scope.signingTextA = "Faça a gestão da sua sinalização";
            $scope.signingTextB =
                "A Sismotur é líder na elaboração de planos de sinalização e implementa o Signing, um serviço web especializado para a planificação e gestão da sinalização territorial e urbana, utilizado por mais de 30 administrações públicas.";

            // ******************
            // TECNOLOGIAS PT
            // ******************
            $scope.dividerTechnologies =
                "O Inventrip e o Signing utilizam as melhores tecnologias";

            $scope.btnReferences = "REFERÊNCIAS";

            // Smart Signage
            $scope.senalizacionTitle = "Sinalização Inteligente";
            $scope.senalizacionText =
                "Melhora a sinalização turística do seu destino integrando-a com sistemas avançados de informação turística. Oferecemos-lhe o nosso serviço de cloud Signing para a sua planificação e gestão.";

            $scope.senalizacionTitle1 = "Rota Ribera del Duero Smart";
            $scope.senalizacionText1 =
                "A Sismotur implementou o sistema Inventrip de sinalização turística inteligente na Rota do Vinho da Ribera del Duero.";

            $scope.senalizacionTitle2 = "Barcelona";
            $scope.senalizacionText2 =
                "Design da nova sinalização turística pedonal levado a cabo pela Sismotur para a cidade de Barcelona.";

            $scope.senalizacionTitle3 = "Mais de 50 referências em sinalização inteligente";
            $scope.senalizacionText3 =
                "Sismotur criou em 2015 o conceito de sinalização turística inteligente e desde essa data acompanhou mais de 50 destinos turísticos na implantação de sinais inteligentes com a utilização das suas plataformas Signing e Inventrip (plataformas tecnológicas adotadas no projeto de Lago Alqueva e na digitalização turística dos municípios do vinho da AMPV em Portugal).";

            // Beacons
            $scope.beacons = "Beacons";
            $scope.beaconText =
                "Incorpora esta nova tecnologia em sinais ou em postos de informação para enviar ao turista produtos e serviços personalizados para o seu dispositivo móvel.";

            $scope.beaconTitle1 = "Beacons nos Sinais Inteligentes";
            $scope.beaconText1 =
                "O Inventrip conecta os sinais inteligentes com o turista utilizando Beacons.";

            $scope.beaconTitle2 =
                "Sinalização Turística Inteligente em Las Palmas de Gran Canaria";
            $scope.beaconText2 =
                "A Sismotur desenvolve o plano de sinalização turística inteligente de Las Palmas de Gran Canaria utilizando a tecnologia Beacons gerida pelo Inventrip.";

            // API
            $scope.apiInventrip = "API";
            $scope.apiInventripText =
                "Integra o Inventrip com as suas páginas web de turismo ou sistemas de informação Smart City, para reduzir custos e simplificar os seus desenvolvimentos informáticos.";

            $scope.apiTitle1 = "Inventrip REST API";
            $scope.apiText1 =
                "O Inventrip é um sistema interoperativo que permite obter informações e interagir com plataformas Smart City utilizando tecnologias padrão ao alcance de qualquer programador.";

            $scope.apiTitle2 = "Schema.org para Turismo";
            $scope.apiText2 =
                "A Sismotur é cofundadora do grupo de Turismo do Schema.org, projeto suportado pela W3C e principal vocabulário mundial de semântica de dados. Milhões de páginas web utilizam o Schema.org para melhorar a sua visibilidade e aumentar o número de visitas.";
            $scope.apiButton2 = "Junte-se a esta iniciativa";

            // Big Data
            $scope.bigData = "Big Data";
            $scope.bigDataText =
                "Analisa, de forma simples, os dados gerados pelos seus turistas para melhorar a gestão do seu destino.";

            $scope.bigDataTitle1 = "O sinal inteligente: fonte de dados";
            $scope.bigDataText1 =
                "O Inventrip permite gerar, em tempo real, quadros de comando e análise, à medida, acessíveis via navegador, sobre a utilização que os turistas fazem dos sinais conectados e de qualquer serviço associado aos mesmos.";

            // E-Commerce
            $scope.eCommerce = "e-Commerce";
            $scope.comercializacionText =
                "Facilita ao turista o acesso a motores de reserva de alojamentos, restaurantes e atividades, antes ou durante a viagem.";

            $scope.eCommerceTitle1 = "e-Commerce";
            $scope.eCommerceText1 =
                "Integração de centrais de reservas no Inventrip, para que os turistas possam reservar serviços antes e durante a viagem.";

            // Blockchain
            $scope.blockchain = "Blockchain";
            $scope.blockchainText =
                "Aproveite o potencial desta tecnologia disruptiva para interagir com o turista, sem necessidade de depender de intermediários.";

            $scope.blockchainTitle1 = "Blockchain";
            $scope.blockchainText1 =
                "A Sismotur apresenta na FITUR 2017 algumas das aplicações potenciais para o turismo desta incrível tecnologia, que permitiu, entre outras coisas, a existência da moeda digital Bitcoin.";
            $scope.blockchainButton1 = "Descubra as aplicações";

            // NFC
            $scope.nfc = "NFC";
            $scope.nfcText =
                "Entrega ao turista de cartões contactless em postos de turismo, feiras ou hotéis, para personalizar a sua experiência turística no destino.";

            $scope.nfcTitle1 = "Cartões NFC Ibiza";
            $scope.nfcText1 =
                "A Câmara Municipal de Ibiza apresenta aos meios de comunicação o projeto de Destino Turístico Inteligente com sinalização inteligente, beacons e estes cartões NFC com uma viagem pré-definida por Dalt Vila.";
            $scope.nfcButton1 = "Descubra a viagem";

            $scope.nfcTitle2 = "Cartões NFC Palencia Turismo";
            $scope.nfcText2 =
                "A Palencia Turismo apresenta o Inventrip aos meios de comunicação durante a Feira de Turismo Interior (INTUR-2015) e entrega cartões NFC com uma viagem pela Província de Palencia.";
            $scope.nfcButton2 = "Descubra a viagem";

            // qr
            $scope.qr = "QR";
            $scope.qrText =
                "Gere facilmente as informações turísticas online de recursos e mapas, em vários idiomas.";

            $scope.qrTitle1 = "Normandia e Bretanha";
            $scope.qrText1 =
                "Descubra uma viagem pela Normandia e Bretanha lendo este código QR.!";
            $scope.qrButton1 = "Descubra a viagem";

            $scope.qrTitle2 = "Barcelona";
            $scope.qrText2 =
                "A Sismotur cria em 2012 o primeiro plano de sinalização e informação turística da cidade de Barcelona para o distrito de Horta-Guinardó.";

            // Drontrip
            $scope.dronTrip = "DronTrip";
            $scope.dronText =
                "Utiliza voos turísticos com drones para espalhar pelas redes sociais a promoção de destinos e serviços turísticos.";

            $scope.drontripText1 =
                "Convidamo-lo a voar pela comarca de Sierra Montánchez e Tamuja!";
            $scope.drontripButton1 = "Ver Vídeo";

            // ******************
            // NOTICIAS PT
            // ******************
            $scope.dividerNews = "Últimas notícias";
            $scope.moreNews = "Mais notícias";

            // *********************
            // PARTNERS PT
            // *********************
            $scope.titlePartners = "Sócios";

            // ******************
            // CONTACTO PT
            // ******************
            $scope.btnContact = "CONTACTE-NOS";

            $scope.cntSpain = "Espanha";
            $scope.cntSpain2 = "Madrid & Barcelona";
            $scope.cntSpainPhone = "+34 913.238.208";

            $scope.cntFrance = "França";
            $scope.cntFrance2 = "Annecy";
            $scope.cntFrancePhone = "+33 (0)619.20.30.61";

            $scope.copyright = "Copyright © 2017 SISMOTUR SL.";

            // *********************
            // NEWS PT
            // *********************
            $scope.newsTitle56 =
                "Jornada da Rede de Destinos Inventrip 2020";
            $scope.newsContent56 =
                "O dia 13 de novembro teve lugar a Jornada Inventrip 2020, onde participaram 65 destinos turísticos utilizadores e interessados nesta plataforma global de turismo digital para partilhar cassos de sucesso é contribuir no seu desenvolvimento.";
            $scope.newsDetail56 = "Enlace programa";
            
            $scope.newsTitle55 =
                "A Rota do Vinho da Sierra de Francia galardoada nos prêmios de Enoturismo – Outubro 2020";
            $scope.newsContent55 =
                "Premiado como melhor destino enoturístico sustentável e responsável, graças em grande medida à digitalização da Rota e os seus associados com inventrip.";
            $scope.newsDetail55 = "Link notícia";

            $scope.newsTitle54 = "Sismotur premiada no congresso Digital Tourism – Outubro 2020";
            $scope.newsContent54 =
                "Pela atuação mais relevante no âmbito da normalização, com a implantação de Inventrip na comarca La Canal de Navarrés e a sua interoperabilidade com o site do destino e os terminais tácteis (desenvolvidos por Sien Consulting e Insyde respectivamente e também participantes deste prémio).";
            $scope.newsDetail54 = "Link notícia";

            $scope.newsTitle53 =
                "Inventrip e Signing soluções do catálogo oficial da Rede DTI. Octubre 2020";
            $scope.newsContent53 =
                "As nossas plataformas, Inventrip e Signing, de informação turística e sinalização inteligente fazem parte das soluções tecnológicas da Rede de Destinos Turísticos Inteligentes que apresentou a Ministra Reyes Maroto na apertura do Congresso Digital Tourism 2020.";
            $scope.newsDetail53 = "Link catálogo";

            $scope.newsTitle52 = "Sismotur entra na rede DTI - Outubro 2020";
            $scope.newsContent52 =
                "La III Comissão da Rede de Destinos Turísticos Inteligentes, que foi presidida pela Ministra Reyes Maroto do governo espanhol, aprova la incorporação de 19 novos membros, entre eles a nossa empresa Sismotur.";
            $scope.newsDetail52 = "Link notícia";

            $scope.newsTitle51 =
                "Atualização do manual de semântica de dados para o Covid-19. Julho 2020";
            $scope.newsContent51 =
                "A Sismotur colabora com a Secretaria do Estado de Turismo Espanhol num projeto piloto com três destinos inventrip: Conil, Santa Susanna e Sanxenxo para a atualização do manual de semântica de destinos turísticos inteligentes e implementa na inventrip funcionalidades para informar sobre o Covid.";
            $scope.newsDetail51 = "Link notícia";

            $scope.newsTitle50 =
                "Consultoria ao Ministério de Comércio e Turismo de Perú. Ollantaytambo, julho 2019";
            $scope.newsContent50 =
                "Os expertos e sócios de Sismotur, Augusto Ramos e Manuel Mariscal, aconselham a MINCETUR para a implantação dum Destino Turístico Inteligente ligado com inventrip em Ollantaytambo, no Vale Sagrado e porta de entrada de Machu Picchu.";

            $scope.newsTitle49 =
                "Consultoria à Associação Transfronteiriça do Lago Alqueva (ATLA). julho 2019";
            $scope.newsContent49 =
                "Sismotur foi adjudicatária para a elaboração do plano de informação e sinalização turística inteligente dos 9 municípios portugueses de ATLA que inclue a implantação das suas plataformas Signing e Inventrip.";

            $scope.newsTitle48 =
                "Jornada de entrega de Kit Digitais Inventrip.  Província de Salamanca, junho de 2019";
            $scope.newsContent48 =
                'O governo da "Diputación de Salamanca" e Sismotur entregaram aos empresários das Rotas do Vinho, ganadarias, albergues e postos de turismo 110 Kit Digitais ligados com a plataforma inventrip de la província de Salamanca. Durante o evento presentaram-se as tecnologias QR, NFC e Beacons incluidas na oferta de digitalização de cada estabelecimento e posto de turismo.';
            $scope.newsDetail48 = "Link Twitter";

            $scope.newsTitle47 =
                "Nova norma UNE: Semántica de dados de turismo. Maio de 2019";
            $scope.newsContent47 =
                'No âmbito do comité de CTN 178 (normalização de cidades inteligentes) Sismotur redatou de forma conjunta com a empresa Globaldit, a futura norma UNE PNE 178503 “Destinos Turísticos Inteligentes. Semántica aplicada a turismo”, contribuindo com a sua experiência de 20 anos modelando mais de 20.000 recursos turísticos e a experiência adquirida na gestão mundial do turismo de schema.org. Esta norma foi publicada no "BOE" e encontra-se em processo de consulta pública. Espera-se a sua aprovação na segunda metade de 2019.';
            $scope.newsDetail47 = "Link norma";

            $scope.newsTitle46 =
                "II Emcontro Red DTI - Boas Práticas. Aranjuez, abril de 2019";
            $scope.newsContent46 =
                "Conil de la Frontera, integrante da Rede de Destinos Inventrip, apresentou com exemplo de boas práticas, na Rede de Destinos Turísticos Inteligentes criada pe la Secretaria de Estado de Turismo do governo espanhol, a sinalização inteligente do seu município, bem como  a utilização de cartões NFC ligados com Inventrip para la promoção e informação turística de Conil.";
            $scope.newsDetail46 = "Boas práticas";

            $scope.newsTitle45 =
                "Apresentação de Inventrip aos hoteleiros de Sanxenxo. Març de 2019";
            $scope.newsContent45 =
                "O vereador de turismo de Sanxenxo e o CEO de Sismotur apresentaram aos hoteleiros de Sanxenxo as possibilidades para ligar os estabelecimentos turísticos com o turista digital através da plataforma inventrip já implantada no município.";
            $scope.newsDetail45 = "Link apresentação";

            $scope.newsTitle44 =
                "Sinalética inteligente do Lago Alqueva. Portugal, fevreiro 2019";
            $scope.newsContent44 =
                "O CEO de Sismotur, Augusto Ramos, apresentou ao conselleiro de Turismo de Portugal, ao presidente da região Alentejo-Ribatejo, ao presidente da Associação Transfronteiriça do Lago Alqueva (ATLA) e aos 9 municípios portugueses que a constituem, o projeto para a transformação do Lago Alqueva num Destino Turístico Inteligente ligado através da plataforma Inventrip.";

            $scope.newsTitle43 =
                "Spain Convention Bureau. Benidorm, fevreiro de 2019";
            $scope.newsContent43 =
                "Augusto Ramos, CEO de Sismotur, foi invitado a apresentar la utilização da sinalização turística inteligent no turimo de reuniões.";

            $scope.newsTitle42 = "Fitur Know How & Export. Madrid, janeiro de 2019";
            $scope.newsContent42 =
                "Sismotur voltou a ter um stand na zona de inovação e tecnologia de FITUR apresentando a Rede de Destinos Inventrip que conta já com 40 destinos na península (10 deles em Portugal).";
            $scope.newsDetail42 = "Rede de Destinos Inventrip";

            $scope.newsTitle41 = "Smart Rural - Asturias. FITUR 2019";
            $scope.newsContent41 =
                "O presidente da associação de caisas rurais ARCA, Jaime García, apresentou o projeto Smart Rural Asturias para a digitalização dos alojamentos rurais com a plataforma inventrip";

            $scope.newsTitle40 =
                "INTUR, Feira internacional de turismo interior. Valladolid, novembro de 2018";
            $scope.newsContent40 =
                'O responsável de turismo do governo da "Diputación de Salamanca" apresentou a implantação da plataforma Inventrip para a província. Foram entregues durante a Feira cartões NFC promocionais.';
            $scope.newsDetail40 = "Cartões NFC";

            $scope.newsTitle39 = "Congresso Turkey Blockchain Summit 2018";
            $scope.newsContent39 =
                "Sismotur foi convidada a participar no primeiro congresso nacional de blockchain de Turquia, organizado pelo governo turco em novembro de 2018 em Ankara. O CTO de Sismotur, Felipe Santi, realizou uma apresantação sobre o pontencial de Blockchain e das tecnologias ligadas com o setor do turismo, e organizou com o colaborador Enrique Melero um talher prático para 40 engenheiros sobre um caso de aplicação concreto: uma fechadura eletrónica que recebe pagamentos em Bitcoin através de um telemóvel.";

            $scope.newsTitle38 =
                "Jornada Rede Destinos Inventrip. Madrid, outubro de 2018";
            $scope.newsContent38 =
                "Sismotur organizou, no âmbito da primeira jornada da Rede de Destinos Inventrip, um programa muito completo de apresentações com convidados, que debateram sobre as estratégias para otimizar os procesos de digitalização do Destinos Turísticos Inteligentes com a plataforma Inventrip.";
            $scope.newsDetail38 = "Programa";

            $scope.newsTitle37 =
                "Sismotur elaborou o plano de sinalização turística inteligente de Santander";
            $scope.newsContent37 =
                "Os sócios de Sismotur, AR MM, apresentaram à Autarca, Gema Igual, e o sector turístico da cidade as bases do novo plano de sinalização turística de la cidade com a incorporação da tecnologia Beacons para establecer a ligação entre Santader e o turista digital.";

            $scope.newsTitle36 =
                "IV Jornadas Internacionais de Turismo. Águeda, julho de 2018";
            $scope.newsContent36 =
                "Sismotur foi convidada a apresentar a experiência de Reguengos de Monsaraz na sua transformação num Destino Turístico Inteligente. AR CEO deu a conhecer a plataforma global Inventrip para establecer a ligação do destino com o turista digital.";

            $scope.newsTitle35 = "Sismotur vence o Hackaton IoT + Blockchain 2018";
            $scope.newsContent35 =
                'O caso de utilização apresentado por Sismotur "Proof of Visit", baseado em Inventrip, venceu o hackaton internacional IoT Blockchain Camp 2018. Neste evento participaram os engenheiros e responsáveis de negócio de empresas de multiplos setores, algumas delas sobejamente conhecidas no âmbito de blockchain (Ambrosus, Climate Coin). Este facto destaca a importância da utilização de Beacons como notarios digitais para o registo da passagem de turistas por um território permitindo, desse modo, a criação de mecanismos de recompensa em função do seu comportamento.';
            $scope.newsDetail35 = "IoT Blockchain Camp 2018";

            $scope.newsTitle34 =
                "BTL, Feira Internacional de Turismo. Lisboa, março de 2018";
            $scope.newsContent34 =
                "Augusto Ramos, CEO de Sismotur, foi convidado a apresentar aos responsáveis municipais e regionais de turismo dos Açores, a experiência de Sismotur na implantação de Destinos Turísticos Inteligentes ligados através de Inventrip.";

            $scope.newsTitle33 =
                "Projeto Innovatur. Puerto de la Cruz e Arona, janeiro de 2018";
            $scope.newsContent33 =
                "No âmbito do projeto interreg, Innovatur, para a reativação e modernização dos destinos turísticos de Canárias, Madeira e Açores, AR CEO, apresentou a aplicação de sinalização inteligente para a dinamização das zonas comerciais em Destinos Turísticos Inteligentes.";
            $scope.newsDetail33 = "Innovatur";

            $scope.newsTitle32 = "Fitur Know How & Export. Madrid, janeiro de 2018";
            $scope.newsContent32 =
                'Nova apresentação de blockchain no espaço "SEGITTUR Lab" organizada pelos CEO e CTO de Sismotur, na qual foram aprofundados os conceitos expostos em 2017 e tendo sido apresentada a utilização da plataforma Inventrip como ferramenta para contribuir à sustentabilidade dos destinos turísticos, utilizando tecnologias existentes de cadeias de blocos.';
            $scope.newsDetail32 = "Apresentação";

            $scope.newsTitle31 =
                "Foro Merendas Verdes - Agência EFE. Madrid, novembro de 2017";
            $scope.newsContent31 =
                "No âmbito do debate promovido pela agência EFE sobre tecnologias para impulsar uma rentabilização do meio ambiente, Augusto Ramos, CEO de Sismotur, deu a conhecer a solução para equipar os parques naturais com sinais inteligentes que incorporam a tecnologia Beacons para fornecer informação contextualizada aos visitantes durante a sua estadia, até mesmo sem necessidade de cobertura de internet.";
            $scope.newsDetail31 = "Debate";

            $scope.newsTitle30 =
                "Comunidade Rural digital: Construindo o território inteligente. Valladolid, novembro de 2017";
            $scope.newsContent30 =
                'Sara García, gerente do "Consorcio Ruta del Vino Ribera del Duero", e Augusto Ramos, CEO de Sismotur, apresentaram a Rota "Smart" Ribera del Duero. Destacaram a importância da utilização na sua sinalização turística inteligente da tecnologia Beacon nas zonas rurais sem ligação de dados para dar informaçã aos turistas.';

            $scope.newsTitle29 = "Expo World Congress. Barcelona, novembro de 2017";
            $scope.newsContent29 =
                'Manuel Mariscal, COO de Sismotur, apresentou no stand "Barcelona Smart Region" os casos de sucesso da implantação da sinalização turística ligada através de Inventrip em Vilafranca del Penedès e Santa Susanna.';
            $scope.newsDetail29 = "Barcelona Smart Region";

            $scope.newsTitle28 =
                'Jornada DTI - "UOC Catalunya". Barcelona, otubro de 2017';
            $scope.newsContent28 =
                'Augusto Ramos, CEO de Sismotur, foi convidado a participar na jornada de Destinos Turísticos Inteligentes organizada per la "Univeristat Oberta de Catalunya", para apresentar dois dos destinos inteligentes de Catalunha atualmente ligados através da plataforma Inventrip: Santa Susanna e Vilafranca de Penedès.';

            $scope.newsTitle27 = "Congreso Green Cities";
            $scope.newsContent27 =
                "Sismotur tem participado, em Junho de 2017, na maqueta de cidade inteligente preparada pelo Ministério de Energia, Turismo e Agenda Digital. O turista a sua chegada à estação do AVE recebe informação com sinalização inteligente conectada com Inventrip. Foto: CEO de Sismotur com o Secretário de Estado para a Sociedade da Informação e Agenda Digital e o Coordenador do Plano Nacional de Cidades Inteligentes.";

            $scope.newsTitle26 = "III Congresso Cidades Inteligentes";
            $scope.newsContent26 =
                'O governo da região de “Castilla y León” e Sismotur têm apresentado em abril de 2017 o projeto "Rota Smart Ribera do Duero: Sinalização Turística Inteligente Conectada com Inventrip" na terceira edição do Congresso Cidades Inteligentes de Madrid. Foto: apresentação do CEO de Sismotur; a Rota Ribera do Duero dispõe agora de 103 postos de informação turística digitais';
            $scope.newsDetail26 = "Link para a apresentação";
            $scope.newsDetail26_b = "Link para o vídeo";

            $scope.newsTitle25 =
                "Início do plano de sinalização inteligente de Gran Canaria.";
            $scope.newsContent25 =
                "O Cabildo encarrega a Sismotur da redação do plano de sinalização turística inteligente da ilha de Gran Canaria.’ Foto: o Conselheiro de Obras Públicas e Infraestruturas (à esquerda) com o CEO da Sismotur (à direita) no momento da assinatura do contrato.";
            $scope.newsDetail25 = "Link para o anúncio do Cabildo de Gran Canaria";

            $scope.newsTitle24 =
                "Reguengos de Monsaraz, primeiro destino com sinalização turística inteligente de Portugal.";
            $scope.newsContent24 =
                "A Sismotur apresenta às Rotas do Vinho de Portugal o projeto de destino inteligente conectado realizado em Reguengos de Monsaraz. Foto: O Presidente da Câmara de Reguengos de Monsaraz e Presidente da Rede Europeia de Cidades do Vinho (à esquerda), o Presidente da Associação de Municípios do Vinho de Portugal (ao centro) e o CEO da Sismotur (à direita).";
            $scope.newsDetail24 = "Link para o artigo da Publituris";

            $scope.newsTitle23 = "ICEX entrevista ao CMO da Sismotur durante a Fitur";
            $scope.newsContent23 =
                "Entrevista da revista El Exportador à Sismotur durante a Fitur 2017. Foto: CMO da Sismotur.";
            $scope.newsDetail23 = "Link para a entrevista completa (vídeo)";

            $scope.newsTitle22 = "A Sismotur expõe na Fitur Know-how & Export 2017";
            $scope.newsContent22 =
                "A Sismotur apresenta com êxito a sua sinalização turística conectada na Fitur 2017. Foto: O CEO da Sismotur (à direita) apresentando o nosso conceito ao vice-ministro do Turismo do Peru (ao centro) e ao Presidente da SEGITTUR (à esquerda).";
            $scope.newsDetail22 =
                "Link para um artigo sobre a Sismotur na Fitur Daily";

            $scope.newsTitle21 =
                "A agência EFE entrevista a Sismotur sobre a Blockchain para o turismo";
            $scope.newsContent21 =
                "A EFE Futuro interessa-se pela tecnologia Blockchain e já entrevistou os nossos especialistas para saber como se pode aplicar ao turismo.";
            $scope.newsDetail21 = "Link para o artigo";

            $scope.newsTitle20 =
                "FITUR 2017 - Tecnologia Blockchain e aplicações para o Turismo";
            $scope.newsContent20 =
                "Enrique Melero, especialista em Blockchain e Felipe Santi, CTO da Sismotur, apresentaram a novíssima tecnologia no SEGITTUR Lab.";
            $scope.newsDetail20 = "Apresentação (idioma Espanhol, formato PDF)";

            $scope.newsTitle19 =
                "A Sismotur apresentará a Blockchain e as suas aplicações potenciais para o Turismo durante a FITUR 2017 no SEGITTUR Lab.";
            $scope.newsContent19 =
                "A Sismotur estará presente na FITUR 2017, na área Know-How e Export (Stand 10B09, próximo do stand da SEGITTUR). A 18 de janeiro às 16h, no espaço SEGITTUR Lab, organizaremos uma conferência sobre a tecnologia Blockchain e suas aplicações no Âmbito do Turismo.";
            $scope.newsDetail19 =
                "Análise do Blockchain e do seu potencial para o Turismo";

            $scope.newsTitle18 =
                "Artigo sobre Sinalização Turística Inteligente na EFE Empresas";
            $scope.newsContent18 =
                "Artigo da EFE Empresas sobre a inovação que representa conectar o Destino Turístico com o novo turista digital e o seu smartphone, através da sinalização turística inteligente e do Inventrip.";
            $scope.newsDetail18 = "Link para o artigo";

            $scope.newsTitle17 = "Artigo no blog do Kontakt.io";
            $scope.newsContent17 =
                "Kontakt, referência mundial em tecnologias conectadas (Internet of the Things) e colaborador da Sismotur, explica a inovação que o Inventrip representa para o setor turístico.";
            $scope.newsDetail17 = "Link para o blog Kontakt";

            $scope.newsTitle16 =
                "Apresentação do Inventrip para a Rota do Vinho da Ribera del Duero";
            $scope.newsContent16 =
                "O Diretor Geral de Turismo de Castela e Leão apresenta o Inventrip, o novo sistema de sinalização turística inteligente da Sismotur.";
            $scope.newsDetail16 = "Link para o artigo";

            $scope.newsTitle15 =
                "Las Palmas de Gran Canaria irá implementar o Inventrip";
            $scope.newsContent15 =
                "A Câmara Municipal e o Cabildo chegaram a acordo para implementar a sinalização turística inteligente da Sismotur nas zonas comerciais abertas de interesse turístico e dar informações com a plataforma Inventrip.";
            $scope.newsDetail15 = "Link para o artigo";

            $scope.newsTitle14 = "FITUR 2016";
            $scope.newsContent14 =
                "A Sismotur foi eleita para apresentar, na inauguração, o seu conceito de Destino Turístico Inteligente através da integração de meios físicos e digitais OFF/ON conectando a sinalização à plataforma Inventrip. Desta forma, os sinais e o território falam com o telemóvel do turista.";

            $scope.newsTitle13 =
                "Contribuição da Sismotur para o Livro Branco de Destinos Turísticos Inteligentes";
            $scope.newsContent13 =
                "No passado mês de outubro foi apresentado, na sede do Ministério da Indústria, Energia e Turismo, o livro branco de Destinos Turísticos Inteligentes promovido pela SEGITTUR no âmbito do Plano Nacional de Cidades Inteligentes. A Sismotur participou na redação deste livro branco com o seu modelo de integração OFF/ON de meios físicos e digitais num destino para melhorar o acolhimento e a experiência do turista.";
            $scope.newsDetail13 = "Link para o Livro Branco";

            $scope.newsTitle12 =
                "A Sismotur redige o Plano de Sinalização Turística do País Basco.";
            $scope.newsContent12 =
                "A Sismotur redigiu o plano de sinalização turística para o País Basco, trabalhando lado a lado com o Governo Basco e a sua Diretora Geral de Turismo e ainda com as três administrações forais, unificando critérios, analisando necessidades e especificidades com vista a uma concertação.";

            $scope.newsTitle11 = "A Sismotur na INTUR 2015";
            $scope.newsContent11 =
                "Na edição passada da INTUR em Valladolid, a Sismotur apresentou os avanços da plataforma Inventrip como ferramenta de promoção de um destino, planificador de viagens para o turista e serviços de informação digital no território vinculado à sinalização física e aos recursos e serviços do destino.";

            $scope.newsTitle10 =
                "A Sismotur participa na Jornada de Redes Sociais e Turismo da Administração de Barcelona.";
            $scope.newsContent10 =
                "Augusto Ramos, CEO da Sismotur, apresentou uma comunicação sobre a capacidade das redes sociais e do turista como prescritores de um destino, a necessidade de os territórios se unirem aos novos meios de difusão e promoção e como o Inventrip implementa e explora estes meios para a difusão do destino por parte de turistas e promotores do mesmo.";

            $scope.newsTitle9 =
                "A Sismotur com o Principado das Astúrias na apresentação do Inventrip para Piloña.";
            $scope.newsContent9 =
                "A Sismotur acompanhou o Diretor Geral do Turismo do Principado das Astúrias na apresentação do Inventrip como plataforma de promoção do destino e gestão da informação turística para Piloña, zona muito turística das Astúrias e que aposta nas novas tecnologias para o seu desenvolvimento turístico.";

            $scope.newsTitle8 =
                "A Sismotur com o Turismo da Estremadura na apresentação do Inventrip para a Serra de Montánchez.";
            $scope.newsContent8 =
                "Felipe Santi, CTO da Sismotur, acompanha o Turismo da Estremadura na apresentação do serviço Inventrip para a melhoria da promoção da Serra de Montánchez e Tamuja no seu caminho para um destino turístico inteligente.’ Também foi apresentado um vídeo promocional com drones associado ao Inventrip para difundir esse destino nas redes sociais.";

            $scope.newsTitle7 =
                "A Sismotur apresentando o projeto de Ibiza Destino Turístico Inteligente com beacons e o Inventrip.";
            $scope.newsContent7 =
                "A Sismotur acompanhou a Câmara Municipal de Ibiza na apresentação do projeto que converte o município num destino turístico inteligente com a implementação da plataforma Inventrip como sistema de gestão da informação turística e da promoção do destino, associado com um plano de sinalização inteligente pedonal e interpretativo e uma rede de beacons.";

            $scope.newsTitle6 = "Apresentação do Inventrip na Sierra Norte de Madrid";
            $scope.newsContent6 =
                "Julio José Julián, CMO da Sismotur, apresenta a implementação da plataforma Inventrip como sistema de gestão da informação turística, planificador de viagens e meio de promoção do destino turístico nas redes sociais. Enquadra-se dentro de um ambicioso plano para promover a Sierra Norte e que se apoia, de forma contundente, nas novas tecnologias e nas redes sociais como veículo de difusão.";

            $scope.newsTitle5 =
                "A Sismotur nas Jornadas Técnicas de Turismo no Peru.";
            $scope.newsContent5 =
                "Pela mão da SEGITTUR e do ICEX, a Sismotur esteve presente nas Jornadas Técnicas de Turismo que se celebraram na capital do Peru. Foi apresentada a visão do destino turístico inteligente e a capacidade do Inventrip como gestor da informação e ferramenta de promoção para um território turístico a nível global.";

            $scope.newsTitle4 =
                "A Sismotur nas Jornadas Técnicas de Turismo Espanha-Chile, em Santiago do Chile.";
            $scope.newsContent4 =
                "A Sismotur acompanha a SEGITTUR e o ICEX nas Jornadas Técnicas de Turismo, que se celebraram em Santiago do Chile, e está presente como testemunho de exceção da assinatura do convénio bilateral entre o Chile e a Espanha, apresentando o Inventrip e a potência da visão OFF/ON de integração de elementos físicos e digitais para desenvolver um destino turístico inteligente.";

            $scope.newsTitle3 =
                "A Sismotur apresenta o Projeto de Sinalização Turística do Caminho de Santiago por Castela e Leão.";
            $scope.newsContent3 =
                "A Sismotur apresentou o plano de sinalização turística do Caminho de Santiago pelas estradas de Castela e Leão, juntamente com a Conselheira e o Diretor Geral de Turismo. Representa uma melhoria na perceção da qualidade do destino e no processo de acolhimento do turista no território.";

            $scope.newsTitle2 = "A Sismotur no Cluster de Turismo da Estremadura";
            $scope.newsContent2 =
                "Reportagem da TVE sobre o Cluster de Turismo da Estremadura, onde Augusto Ramos, CEO da Sismotur, expõe a capacidade do Inventrip como plataforma de promoção de um destino turístico e o seu potencial como ferramenta para planear viagens para o turista e como gestor da informação turística de um território.";

            $scope.newsTitle1 =
                "O Inventrip recebe o prémio para a melhor ideia de marketing de destinos de Território & Marketing.";
            $scope.newsContent1 =
                "A Sismotur recebeu o prémio de finalista pela contribuição da plataforma Inventrip para a difusão e promoção de um destino turístico. O júri reconhece como o Inventrip é capaz de unir a parte emotiva da experiência de um turista, na hora de preparar uma viagem, com a realidade de se deslocar dentro do território durante a viagem e a recomendação positiva que faz posteriormente do dito destino.";

            break;

            // ***********************************
            // ************** FRENCH *************
            // ***********************************

        case "fr":
            // ******************
            // CLAIM FR
            // ******************
            $scope.claim1 = "Connectez votre destination avec le touriste numérique";
            $scope.claim2 = "Découvrez la signalétique touristique intelligente";
            $scope.btnMuestra = "Rejoignez le Réseau de Destinations Inventrip";

            // ******************
            // MENU FR
            // ******************
            $scope.inventrip = "Inventrip";
            $scope.mnTecno = "Technologies";
            $scope.mnNoticias = "Actualités";
            $scope.mnTeam = "Partenaires";
            $scope.mnCont = "Contact";
            $scope.mnIdioma = "FR";

            // ******************
            // INVENTRIP FR
            // ******************
            $scope.dividerInventrip =
                "Implantez un Service d'Information Personnalisé";
            $scope.invTextA = "Connectez votre Destination";
            $scope.invTextB =
                "Sismotur implante dans votre destination un service d'information et gestion de la signalisation touristique intelligente, lequel permet la consultation de l'offre touristique, la réservation, ainsi que la construction de voyages sur mesure. Il permet également le partage d'expériences sur les réseaux sociaux ou par l'usage de dispositifs de connexion: Beacons, NFC, codes QR.";

            // **********************
            // SIGNING FR
            // **********************
            $scope.dividerSigning = "Implantez un Service de Signalisation";
            $scope.signingTitle = "Signing";
            $scope.signingTextA = "Gérez votre signalétique";
            $scope.signingTextB =
                "Sismotur est leader dans l'élaboration de schémas directeurs et vous implante Signing, un service web spécialisé pour la planification et la gestion de la signalisation territoriale et urbaine qui est utilisé par plus de 30 administrations publiques.";

            // ******************
            // TECNOLOGIAS FR
            // ******************
            $scope.dividerTechnologies =
                "Inventrip et Signing utilisent les meilleures technologies";

            $scope.btnReferences = "RÉFÉRENCES";

            // Smart Signage
            $scope.senalizacionTitle = "Signalisation Intelligente";
            $scope.senalizacionText =
                "Améliorez la signalisation touristique de votre destination en l'intégrant avec des systèmes d'information touristique de pointe. Nous vous offrons notre service cloud Signing pour sa planification et gestion.";

            $scope.senalizacionTitle1 = "Route Ribera del Duero Smart";
            $scope.senalizacionText1 =
                "Sismotur a implanté le système Inventrip de signalisation touristique intelligente dans la Route Ribera del Duero.";

            $scope.senalizacionTitle2 = "Barcelone";
            $scope.senalizacionText2 =
                "Design de la nouvelle signalisation touristique piétonne menée par Sismotur pour la ville de Barcelone.";

            $scope.senalizacionTitle3 = "Plus de 50 références en signalétique intelligente";
            $scope.senalizacionText3 =
                "Sismotur a créé en 2015 le concept de signalétique touristique intelligente. Depuis, nous avons accompagné plus de 50 destinations touristiques dans la mise en œuvre de leur signalétique touristique intelligente avec l'utilisation de ses plateformes Signing et Inventrip (toutes deux des solutions appartenant au catalogue Réseau DTI d'Espagne).";

            // Beacons
            $scope.beacons = "Beacons";
            $scope.beaconText =
                "Adoptez cette nouvelle technologie pour envoyer aux touristes des produits et services personnalisés sur leurs smartphones.";

            $scope.beaconTitle1 = "Beacons dans les Signaux Intelligents";
            $scope.beaconText1 =
                "Inventrip connecte les panneaux intelligents avec le touriste en utilisant des Beacons.";

            $scope.beaconTitle2 =
                "Signalétique Touristique Intelligente à Las Palmas de Gran Canaria";
            $scope.beaconText2 =
                "Sismotur développe le plan de signalisation touristique intelligente de Las Palmas de Gran Canaria en utilisant la technologie Beacons gérée par Inventrip.";

            // API
            $scope.apiInventrip = "API";
            $scope.apiInventripText =
                "Intégrez Inventrip avec vos sites Internet de tourisme ou vos systèmes d'information Smart City pour réduire les coûts et simplifier vos développements informatiques.";

            $scope.apiTitle1 = "Inventrip REST API";
            $scope.apiText1 =
                "Inventrip est un système interopérable qui permet d'obtenir de l'information et d'interagir avec des plateformes Smart City en utilisant des technologies standard à la portée de tout développeur.";

            $scope.apiTitle2 = "Schema.org pour le Tourisme";
            $scope.apiText2 =
                "Sismotur est cofondateur du groupe de Tourisme de Schema.org, projet soutenu par W3C et principal vocabulaire mondial de sémantique de données. Des millions de sites web utilisent Schema.org pour améliorer leur visibilité et augmenter le nombre de visites.";
            $scope.apiButton2 = "Rejoignez cette initiative";

            // Big Data
            $scope.bigData = "Big Data";
            $scope.bigDataText =
                "Analysez simplement les données générées par vos touristes pour améliorer la gestion de votre destination.";

            $scope.bigDataTitle1 = "Les signaux intelligents: source de données";
            $scope.bigDataText1 =
                "Inventrip permet de générer en temps réel des tableaux de bord et des analyses disponibles sur un navigateur concernant l'usage que les touristes font des signaux connectés et des services qui y sont rattachés.";

            // E-commerce
            $scope.eCommerce = "e-Commerce";
            $scope.comercializacionText =
                "Facilitez au touriste l'accés à la réservation en ligne de logements, restaurants et activités, et ce avant ou durant le voyage.";

            $scope.eCommerceTitle1 = "e-Commerce";
            $scope.eCommerceText1 =
                "Intégration de systèmes de réservation dans Inventrip de manière à permettre aux touristes la réservation de services avant et durant leur voyage.";

            // Blockchain
            $scope.blockchain = "Blockchain";
            $scope.blockchainText =
                "Profitez du potentiel de cette technologie disruptive pour interagir avec le touriste sans besoin de dépendre d'intermédiaires.";

            $scope.blockchainTitle1 = "Blockchain";
            $scope.blockchainText1 =
                "Sismotur a présenté dans FITUR 2017 quelques usages potentiels pour le tourisme de cette incroyable technologie, laquelle a permis d'ailleurs l'existance de la monnaie numérique Bitcoin.";
            $scope.blockchainButton1 = "Découvrez les applications";

            // NFC
            $scope.nfc = "NFC";
            $scope.nfcText =
                "Donnez à vos touristes de belles cartes équipées de puces sans contact pour personnaliser et enrichir leur expérience touristique dans votre territoire.";

            $scope.nfcTitle1 = "Cartes NFC Ibiza";
            $scope.nfcText1 =
                "L'équipe municipale d'Ibiza a présenté à la presse le projet de Destination Touristique Intelligente: signalisation connectée, beacons, et ces cartes NFC qui contiennent un voyage à Dalt Vila";
            $scope.nfcButton1 = "Découvrez le voyage";

            $scope.nfcTitle2 = "Cartes NFC Palencia Tourisme";
            $scope.nfcText2 =
                "L'Office de Tourisme de Palencia (Espagne) a présenté Inventrip à la presse au cours salon de tourisme d'intérieur espagnol (INTUR) et a distribué des cartes NFC avec un voyage dans la province de Palencia.";
            $scope.nfcButton2 = "Découvrez le voyage";

            // qr
            $scope.qr = "QR";
            $scope.qrText =
                "Gérez facilement l'information touristique en ligne des ressources et cartes, et ce quelle que soit la langue du touriste.";

            $scope.qrTitle1 = "Normandie et Bretagne";
            $scope.qrText1 =
                "Découvrez un voyage en Normandie et Bretagne avec ce code QR !";
            $scope.qrButton1 = "Découvrez le voyage";

            $scope.qrTitle2 = "Barcelone";
            $scope.qrText2 =
                "Sismotur a rédigé en 2012 le premier plan de signalisation et information touristique de la ville de Barcelone pour l'arrondissement d'Horta-Guinardó.";
            $scope.qrButton2 = "Plus d'Info";

            // drontrip
            $scope.dronTrip = "DronTrip";
            $scope.dronText =
                "Utilisez des vols touristiques enregistrés avec des drones pour viraliser dans les réseaux sociaux la promotion des destinations et services touristiques.";

            $scope.drontripText1 =
                "Nous vous invitons à voler dans la région d'Extremadure !";
            $scope.drontripButton1 = "Regarder la vidéo";

            // ******************
            // NOTICIAS FR
            // ******************
            $scope.dividerNews = "Dernières actualités";
            $scope.moreNews = "Plus d'actualités";

            // *********************
            // PARTNERS FR
            // *********************
            $scope.titlePartners = "Associés";

            // ******************
            // CONTACTO FR
            // ******************
            $scope.btnContact = "CONTACTEZ-NOUS";

            $scope.cntSpain = "Espagne";
            $scope.cntSpain2 = "Madrid & Barcelona";
            $scope.cntSpainPhone = "+34 913.238.208";

            $scope.cntFrance = "France";
            $scope.cntFrance2 = "Annecy";
            $scope.cntFrancePhone = "+33 (0)619.20.30.61";

            $scope.copyright = "Copyright © 2017 SISMOTUR SL.";

            // *********************
            // NEWS FR
            // *********************
            $scope.newsTitle56 =
                "Journée du réseau de destinations Inventrip 2020";
            $scope.newsContent56 =
                "Le 13 novembre a eu lieu la conférence Inventrip 2020. 65 destinations touristiques y ont participé, partageant des histoires de réussite et contribuaint ainsi au  développement du réseau.";
            $scope.newsDetail56 = "Lien programme (es)";

            $scope.newsTitle55 =
                "La Route du Vin de la Sierra de Francia récompensée aux prix d'Oenotourisme. Octobre 2020";
            $scope.newsContent55 =
                "Récompensée comme la meilleure destination œnotouristique durable et responsable, en grande partie grâce à sa digitalisation et celle de ses partenaires avec Inventrip.";
            $scope.newsDetail55 = "Lien info";

            $scope.newsTitle54 = "Sismotur reçoit un prix dans le congrès Digital Tourism. Octobre 2020";
            $scope.newsContent54 =
                "Pour l'action la plus notoire dans le domaine de la normalisation, avec la mise en œuvre d'Inventrip dans la région de La Canal de Navarrés et son interopérabilité avec le site web de la destination et les terminaux tactiles (développés par les sociétés Sien Consulting et Insyde qui ont également reçu ce prix).";
            $scope.newsDetail54 = "Lien info";

            $scope.newsTitle53 =
                "Nos solutions Inventrip et Signing font partie du catalogue officiel du réseau DTI. Octobre 2020";
            $scope.newsContent53 =
                "Nos plateformes d'information touristique et de signalétique intelligente, Inventrip et Signing, font partie des solutions technologiques du Réseau de Destinations Touristiques Intelligentes que la ministre Reyes Maroto a présentées à l'ouverture du Tourisme numérique 2020.";
            $scope.newsDetail53 = "Lien catalogue";

            $scope.newsTitle52 = "Sismotur fait partie du Réseau DTI. Octobre 2020";
            $scope.newsContent52 =
                "La III commission plénière du Réseau des Destinations Touristiques Intelligentes, présidée par la Ministre Reyes Maroto, approuve l'incorporation de 19 nouveaux membres, dont notre société Sismotur.";
            $scope.newsDetail52 = "Lien info";

            $scope.newsTitle51 =
                "Mise à jour du manuel de sémantique pour le COVID-19. Juillet 2020";
            $scope.newsContent51 =
                "Sismotur colabora con Segittur dans un projet pilote avec trois destinations inventrip: Conil, Santa Susanna et Sanxenxo pour la mise à jour du manuel de sémantique des destinations touristiques intelligentes et implémente dans inventrip des fonctionnalités pour informer sur le COVID.";
            $scope.newsDetail51 = "Lien info";

            $scope.newsTitle50 =
                "Mission de conseil pour le Ministère du Commerce et du Tourisme du Pérou. Ollantaytambo, juillet 2019";
            $scope.newsContent50 =
                "Les experts et partenaires de Sismotur, Augusto Ramos et Manuel Mariscal, conseillent MINCETUR pour l'implantation d'une Destination Touristique Intelligente connectée avec Inventrip dans Ollantaytambo, dans la Vallée Sacrée et porte d'entrée du Machu Picchu";

            $scope.newsTitle49 =
                "Mission de conseil pour l'Association Transfrontalière du Lac d'Alqueva (ATLA). Juillet 2019";
            $scope.newsContent49 =
                "Sismotur a remporté le contrat pour l'élaboration du plan d'information et signalisation touristique intelligente des 9 communes portugaises d'ATLA, lequel inclut l'implantation des plateformes Signing et Inventrip";

            $scope.newsTitle48 =
                "Journée de remise des Kits Numériques Inventrip. Département de Salamanca, juin 2019";
            $scope.newsContent48 =
                "Le Conseil Départemental de Salamanca et Sismotur ont remis aux entrepreneurs des Routes du Vin, éleveurs, auberges et offices de tourisme, 110 kits numériques connectés avec la plateforme Inventrip du département. A cette occasion, ont été présentés les technologies QR, NFC et Beacons inclues dans l'offre de digitalisation de chaque établissement.";
            $scope.newsDetail48 = "Lien Twitter";

            $scope.newsTitle47 =
                "Nouvelle Norme UNE: Sémantique de données de tourisme. Mai 2019";
            $scope.newsContent47 =
                "Dans le cadre du Comité CTN178 (normalisation de smart cities), Sismotur a co-redigé avec Globaldit la future norme UNE PNE 178503 'Destinations Touristiques Intelligentes. Semantique appliquée au tourisme', apportant l'expertise de 20 années de modélisation de plus de 20.000 ressources touristiques et l'expérience acquise dans la gestion du groupe mondiel de tourisme de schema.org. Cette norme a été publiée dans le bulletin officiel d'Espagne et se trouve en phase d'enquête publique. On attend sa validation définitive avant la fin 2019.";
            $scope.newsDetail47 = "Lien norme";

            $scope.newsTitle46 = "II Rencontre DTI - Bonnes Pratiques. Avril 2019";
            $scope.newsContent46 =
                "Conil de la Frontera, faisant partie du Réseau de Destinations Inventrip, a présenté comme exemple de bonnes pratiques la signalisation intelligente de sa commune et l'utilisation des cartes NFC pour la promotion et information touristique de Conil au Réseau de Destinations Touristiques Intelligentes, crée par le Secrétariat d'Etat de Tourisme.";
            $scope.newsDetail46 = "Bonnes pratiques";

            $scope.newsTitle45 =
                "Présentation au secteur hôtelier de Sanxexo. Mars 2019";
            $scope.newsContent45 =
                "L'adjoint au Tourisme de Sanxenxo et le CEO de Sismotur ont présenté aux hôteliers de Sanxenxo les possibilités pour connecter leurs établissements touristiques avec le touriste numérique à travers la plateforme Inventrip, déjà implantée dans la commune.";
            $scope.newsDetail45 = "Présentation";

            $scope.newsTitle44 =
                "Signalétique Intelligente du Lac Alqueva. Portugal, février 2019";
            $scope.newsContent44 =
                "Le CEO de Sismotur, Augusto Ramos, a présenté au conseiller de Tourisme du Portugal, au président de la région Alentejo-Ribatejo, au président de l'Association tranfrontalière du Lac Alqueva (ATLA) et aux 9 communes portugaises qui la composent, le projet de transformation du lac Alqueva en une Destination Touristique Intelligente connectée avec Inventrip.";

            $scope.newsTitle43 = "Spain Convention Bureau. Benidorm, février 2019";
            $scope.newsContent43 =
                "Augusto Ramos, CEO de Sismotur, a été invité à présenter l'utilisation de la signalisation touristique intelligente dans le tourisme de réunions.";

            $scope.newsTitle42 = "Fitur Know How & Export. Madrid, janvier 2019";
            $scope.newsContent42 =
                "Sismotur a été de nouveau présent dans la zone de technologies et d'innovation de FITUR en présentant le Réseau des Destination Inventrip, qui compte à ce jour 40 destination dans la péninsule Ibérique (dont 10 au Portugal).";
            $scope.newsDetail42 = "Réseau des Destinations Inventrip";

            $scope.newsTitle41 = "Smart Rural - Asturias. FITUR 2019";
            $scope.newsContent41 =
                "Le président de l'association ARCA de maisons rurales d'Asturies, Jaime García, a présenté le projet Smart Rural Asturies pour la numérisation des logements ruraux avec Inventrip.";

            $scope.newsTitle40 =
                "INTUR, Salon international de tourisme intérieur. Valladolid, novembre 2018";
            $scope.newsContent40 =
                "Le député de tourisme du Conseil Départemental de Salamanca a présenté l'implantation d'Inventrip pour l'ensemble du département. Des cartes NFC ont été distribuées aux participants durant le salon.";
            $scope.newsDetail40 = "Cartes NFC";

            $scope.newsTitle39 = "Congrès Turkey Blockchain Summit 2018";
            $scope.newsContent39 =
                "Sismotur a été invité au premier congrès national turque de blockchain, organisé par le gouvernement du pays en novembre 2018 à Ankara. Le CTO de Sismotur, Felipe Santi, a présenté le potentiel de blochchain et des technologies connectées dans le secteur du Tourisme, et a organisé avec notre collaborateur Enrique Melero un atelier pratique pour 40 ingénieurs sur un cas pratique concret : une serrure électronique qui reçoit des paiements en Bitcoin d'un smartphone.";

            $scope.newsTitle38 =
                "Journée Réseau des Destinations Inventrip. Madrid, octobre 2018";
            $scope.newsContent38 =
                "Sismotur a organisé, pour la journée du Réseau des Destinations Inventrip, un programme de présentations avec des invités, au cours duquel ont été débattues des stratégies pour améliorer les processus de numérisation des Destinations Touristiques Intelligentes avec la plateforme Inventrip.";
            $scope.newsDetail38 = "Programme";

            $scope.newsTitle37 =
                "Sismotur a élaboré le plan de signalisation touristique intelligent de la ville de Santander";
            $scope.newsContent37 =
                "Les partenaires de Sismotur, Augusto Ramos et Manuel Mariscal, ont présenté à la mairesse Gema Igual et au secteur touristique de la ville les bases du nouveau plan de signalisation touristique de la ville avec l'incorporation de la technologie Beacon pour connecter Santander avec le touriste numérique.";

            $scope.newsTitle36 =
                "IV Journées Internationales de Tourisme. Agueda, juillet 2018";
            $scope.newsContent36 =
                "Sismotur a été invité à présenter le retour d'expérience de Reguengos de Monsaraz dans sa transformation en Destination Touristique Intelligente. Augusto Ramos, CEO de Sismotur, a présenté Inventrip pour connecter la destination avec le touriste numérique.";

            $scope.newsTitle35 = "Sismotur gagne le hackaton IoT + Blockchain 2018";
            $scope.newsContent35 =
                "Le cas d'usage présenté par Sismotur 'Proof of Visit', basé sur Inventrip, a gagné le hackaton international IoT Blockchain Camp 2018. Lors de cette édition, étaient présents des ingénieurs et des responsables d'affaires d'entreprises dans plusieurs secteurs, dont certaines d'entre elles très connues dans le domaine de blockchain (Ambrosus, Climate Coin). Ceux-ci ont validé la pertinence de l'usage de Beacons comme 'notaires numériques' pour enregistrer le passage de touristes sur un territoire et permettre ainsi la création de mécanismes de récompense en fonction de leur comportément.";
            $scope.newsDetail35 = "IoT Blockchain Camp 2018";

            $scope.newsTitle34 =
                "BTL, Salon International de Tourisme. Lisbonne, mars 2018";
            $scope.newsContent34 =
                "Augusto Ramos, CEO de Sismotur, a été invité à présenter aux responsables municipaux et régionaux de tourisme des Açores l'expérience de Sismotur lors de l'implantation des des Destinations Touristiques Intelligentes connectées avec Inventrip.";

            $scope.newsTitle33 =
                "Projet Innovatur. Puerto de la Cruz et Arona, janvier 2018";
            $scope.newsContent33 =
                "Dans le cadre du projet européen Innovatour pour la réactivation et la modernisation des destinations touristiques des Canaries, de Madère et des Açores, Augusto Ramos, CEO de Sismotur, a présenté l'usage de la signalisation intelligente pour la dynamisation des zones commerçantes en Destinations Touristiques Intelligentes.";
            $scope.newsDetail33 = "Innovatur";

            $scope.newsTitle32 = "Fitur Know How & Export. Madrid, janvier 2018";
            $scope.newsContent32 =
                "Nouvelle présentation de blockchain dans SEGITTUR Lab organisée par les CEO et CTO de Sismotur, dans laquelle ont été approfondis les concepts exposés en 2017 et a été présenté le fonctionnement d'Inventrip comme outil pour contribuer à la durabilité des destinations touristiques utilisant des technologies existantes de blockchain.";
            $scope.newsDetail32 = "Présentation";

            $scope.newsTitle31 =
                "Forum Goûters Verts - Agence EFE. Madrid, novembre 2017";
            $scope.newsContent31 =
                "Dans le cadre du débat sur les technologies pour promouvoir un environnement durable organisé par EFE Verde, le CEO de Sismotur a présenté les possibilités d'équiper les parcs naturels avec des panneaux intelligents qui intégrent des Beacons pour donner de l'information contextualisée aux touristes durant leur visite, y compris sans réseau.";
            $scope.newsDetail31 = "Débat";

            $scope.newsTitle30 =
                "Communauté Rurale digitale: En construisant le territoire intelligent. Valladolid, novembre 2017.";
            $scope.newsContent30 =
                "Sara García, gérant du Consortium Route du Vin Ribéra del Duero, et Augusto Ramos, CEO de Sismotur, ont présenté la Route Smart Ribéra del Duero. Ils ont souligné l'importante de l'utilisation de la technologie Beacon dans leurs panneaux intelligents, et ce dans des zones sans réseau pour donner de l'information aux touristes.";

            $scope.newsTitle29 = "Expo World Congress de Barcelone, novembre 2017";
            $scope.newsContent29 =
                "Manuel Mariscal, COO de Sismotur, présente dans le stand Barcelona Smart Region les cas de réussite de l'implantation de la signalisation touristique intelligente connectée avec Inventrip dans Vilafranca del Penedés et Santa Susanna.";
            $scope.newsDetail29 = "Barcelona Smart Region";

            $scope.newsTitle28 =
                "Journée DTI - UOC Catalogne. Barcelone, octobre 2017";
            $scope.newsContent28 =
                "Augusto Ramos, CEO de Sismotur, a été invité à participer à la journée de Destinations Touristiques Intelligentes organisée par l'Université Oberta de Catalogne, pour présenter deux des destinations intelligentes de Catalogne qui sont actuellement connectées avec la plateforme Inventrip : Santa Susanna et Vilafranca del Penedés.";

            $scope.newsTitle27 = "Congrès Green Cities, Málaga";
            $scope.newsContent27 =
                "Sismotur a participé, en juin 2017, à l'élaboration de la maquette de ville intelligente préparée par le ministère de l'Energie, du Tourisme et du Numérique. Le touriste, lors de son arrivée à la gare TGV, reçoit de l'information avec la signalétique intelligente connectée avec Inventrip. Photo: CEO de Sismotur avec le secrétaire d'Etat pour la Société de l'Information et l'Agenda Numérique et le coordonnateur du Plan National de Smart Cities.";

            $scope.newsTitle26 = "III Congrès Smart Cities de Madrid";
            $scope.newsContent26 =
                'La Région de Castille et Leon et Sismotur ont présenté en avril 2017 le projet "Route Smart Ribera del Duero: Signalisation Touristique Intelligente Connectée avec Inventrip" lors de la troisième édition du Congrès Smart Cities de Madrid. Photo: présentation du CEO de Sismotur; la Route Ribera del Duero dispose désormais de 103 Offices de Tourisme Numériques.';
            $scope.newsDetail26 = "Lien vers la présentation";
            $scope.newsDetail26_b = "Lien vers le vídeo";

            $scope.newsTitle25 =
                "Démarrage du plan de signalisation intelligente de Gran Canaria";
            $scope.newsContent25 =
                "Gran Canaria a confié à Sismotur la rédaction du plan de signalisation touristique de l'île. Photo: le directeur de Travaux Publics et Infrastructures (gauche) avec le CEO de Sismotur (droite) lors de la signature du contrat.";
            $scope.newsDetail25 = "Lien vers l'annonce du Cabildo de Gran Canaria";

            $scope.newsTitle24 =
                "Reguengos de Monsaraz, première destination équipée d'une signalétique touristique intelligente au Portugal";
            $scope.newsContent24 =
                "Sismotur présente aux Routes du Vin de Portugal le projet de destination intelligente connectée réalisé à Reguengos de Monsaraz. Photo: maire de Reguengos de Monsaraz y président du Réseau Européen des Villes du Vin (gauche), président de l'Association de Communes du Vin de Portugal (centre) et CEO de Sismotur (droite).";
            $scope.newsDetail24 = "Lien vers l'article de Publituris";

            $scope.newsTitle23 =
                "Interview de l'ICEX au CMO de Sismotur durant Fitur";
            $scope.newsContent23 =
                "Interview du magazine El Exportador à Sismotur à l'occasion du salon Fitur 2017. Photo: CMO de Sismotur.";
            $scope.newsDetail23 = "Lien vers l'interview (vidéo en espagnol)";

            $scope.newsTitle22 =
                "Sismotur est présent dans Fitur Know-how & Export 2017";
            $scope.newsContent22 =
                "Sismotur a présenté avec succès sa signalétique touristique connectée dans le salon Fitur 2017. Photo: le CEO de Sismotur (droite) présente notre concept au Viceministre de Tourisme du Pérou (centre) et au Président de SEGITTUR (gauche).";
            $scope.newsDetail22 =
                "Lien à un article sur Sismotur dans le journal Fitur Daily";

            $scope.newsTitle21 =
                "La agence de presse EFE nous interroge sur Blockchain";
            $scope.newsContent21 =
                "EFE Futur s'intéresse à la technologie Blockchain et a interrogé nos experts sur ses possibilités d'application dans le domaine touristique.";
            $scope.newsDetail21 = "Lien vers l'article";

            $scope.newsTitle20 =
                "FITUR 2017 - Technologie Blockchain et applications dans le Tourisme";
            $scope.newsContent20 =
                "Enrique Melero, expert en Blockchain, et Felipe Santi, CTO de Sismotur, ont présenté cette nouvelle technologie dans SEGITTUR Lab.";
            $scope.newsDetail20 = "Présentation (en espagnol, format PDF)";

            $scope.newsTitle19 =
                "Sismotur présentera Blockchain et ses applications potentielles pour le Tourisme lors du salon FITUR 2017, dans SEGITTUR Lab";
            $scope.newsContent19 =
                "Sismotur sera présent dans FITUR 2017, section Know-How & Export (Stand 10B09, près de SEGITTUR). Le 18 janvier à 16:00, dans l'espace SEGITTUR Lab, nous organiserons une conférence sur la technologie Blockchain et ses aplications dans le domaine du Tourisme.";
            $scope.newsDetail19 =
                "Analyse de Blockchain et son potentiel dans le domaine du Tourisme";

            $scope.newsTitle18 =
                "Article sur la Signalisation Touristique Intelligente dans EFE Empresas";
            $scope.newsContent18 =
                "Article de EFE Empresas sur l'innovation qui représente la connexion d'une Destination Touristique avec le nouveau touriste numérique et son smartphone via la signalétique touristique intelligente et Inventrip.";
            $scope.newsDetail18 = "Lien vers l'Article";

            $scope.newsTitle17 = "Article dans le Blog de Kontak.io";
            $scope.newsContent17 =
                "Kontakt, référence mondiale dans les technologies connectées (Internet of the Things) et collaborateur de Sismotur, explique l'innovation qui représente Inventrip pour le secteur touristique.";
            $scope.newsDetail17 = "Lien vers le Blog de Kontakt";

            $scope.newsTitle16 =
                "Présentation d'Inventrip pour la Route du Vin de Ribera del Duero";
            $scope.newsContent16 =
                "Le Directeur Général de Tourisme de Castille et Léon présente Inventrip, le nouveau système de sigalisation touristique intelligente de Sismotur.";
            $scope.newsDetail16 = "Lien vers l'Article";

            $scope.newsTitle15 = "Las Palmas de Gran Canaria adoptera Inventrip";
            $scope.newsContent15 =
                "La Mairie et le Cabildo sont parvenus à un accord pour implanter la signalétique touristique intelligente de Sismotur dans les zones commerçantes ouvertes d'intérêt touristique et donner de l'information avec Inventrip.";
            $scope.newsDetail15 = "Lien vers l'Article";

            $scope.newsTitle14 = "Salon FITUR 2016";
            $scope.newsContent14 =
                "Sismotur a été choisi pour présenter à S.M. la Reine d'Espagne son concept de Destination Touristique Intelligente lors de l'inauguration du salon. Le CEO de Sismotur, Augusto Ramos, y a présenté l'intégration des signaux touristiques avec notre système cloud computing Inventrip (intégration OFF/ON). La destination touristique peut ainsi communiquer directement avec le smartphone du touriste.";

            $scope.newsTitle13 =
                "Contribution de Sismotour au livre blanc des Destinations Touristiques Intelligentes";
            $scope.newsContent13 =
                "En octobre 2015 a été présenté le livre blanc des Destinations Touristiques Intelligentes. Ce livre a été promu par le ministère de l'Industrie, l'Energie et le Tourisme via l'organisme Segittur, en charge des nouvelles technologies appliquées au tourisme. Il s'inscrit dans le cadre du Plan National des Villes Intelligentes d'Espagne. Sismotur a contribué dans la rédaction de ce livre avec le partage de son modèle d'intégration OFF/ON de moyens physiques et numériques, ce qui améliore l'accueil et l'expérience du touriste.";

            $scope.newsTitle12 =
                "Sismotur a été choisi pour rédiger le Plan de Signalisation Touristique du Pays Basque espagnol";
            $scope.newsContent12 =
                "Sismotur travaille de pair avec la direction générale du Tourisme du gouvernement du Pays Basque et avec les directions des trois départements. L'application du plan permettra au Pays Basque de disposer d'un système de signalisation unifié, cohérent, et qui intègre les besoins de la destination touristique et du secteur privé.";

            $scope.newsTitle11 = "Sismotur au salon INTUR 2015";
            $scope.newsContent11 =
                "Lors de la dernière édition du salon de tourisme intérieur INTUR, qui a eu lieu à Valladolid, Sismotur a présenté les améliorations de sa plateforme Inventrip, lequel est depuis un outil de promotion des destinations touristiques, système de planification de voyages pour le touriste, service d'information numérique dans le territoire lié à la signalétique physique, et plateforme de commercialisation des services présents dans le territoire.";

            $scope.newsTitle10 =
                "Sismotur participe dans la journée Réseaux Sociaux et Tourisme du Conseil Général de Barcelone.";
            $scope.newsContent10 =
                "Augusto Ramos, CEO de Sismotur, a exposé le potentiel des réseaux sociaux et des touristes pour agir comme prescripteurs d'une destination touristique, le besoin des territoires d'utiliser ces nouveaux moyens numériques, et la manière dont Sismotur utilise ces outils pour aider les destinations touristiques à être présentes sur le Net.";

            $scope.newsTitle9 =
                "Sismotur avec la Principauté des Asturies lors de la présentation d'Inventrip pour Piloña";
            $scope.newsContent9 =
                "Sismotur a accompagné le directeur général de Tourisme de la Principauté des Asturies dans la présentation d'Inventrip, plateforme de promotion de la destination et de gestion de l'information touristique pour Piloña. Cette zone dispose d'un grand potentiel et mise sur les nouvelles technologies offertes par Sismotur pour dévélopper son secteur touristique.";

            $scope.newsTitle8 =
                "Sismotur avec la région d'Estrémadure lors de la présentation d'Inventrip pour la Sierra de Montánchez";
            $scope.newsContent8 =
                "Felipe Santi, CTO de Sismotur, accompagne le tourisme d'Estrémadure lors de la présentation d'Inventrip pour la communauté de communes Sierra de Montánchez et Tamuja. Une vidéo de promotion réalisée par Sismotur à l'aide de drones a été également présentée, laquelle a été diffusé sur les réseaux sociaux.";

            $scope.newsTitle7 =
                "Sismotur présente le projet Ibiza, Destination Touristique Intelligente";
            $scope.newsContent7 =
                "Sismotur a accompagné la commune d'Ibiza dans la présentation de ce projet qui transforme la commune en Destination Touristique Intelligente. Cela est possible grâce à l'implantation du système d'information touristique et de promotion Inventrip, couplé avec un plan de signalisation intelligent au sein de la ville qui prévoit le déploiement d'un réseau de beacons.";

            $scope.newsTitle6 =
                "Présentation d'Inventrip dans la Sierra Norte de Madrid";
            $scope.newsContent6 =
                "Julio José Julián, CMO de Sismotur, présente l'implantation de la plateforme Inventrip en tant que système de gestion de l'information touristique, de planification de voyages, et outil de promotion de la destination. Ce projet s'inscrit dans une démarche ambitieuse de promotion de Sierra Norte, et qui s'appuie tout particulièrement dans les technologies numériques et les réseaux sociaux comme moyens de promotion.";

            $scope.newsTitle5 =
                "Sismotur dans les Journées de Tourisme Espagne-Pérou";
            $scope.newsContent5 =
                "Sismotur a été présent dans ces journées de tourisme bilatérales à Lima. Cet évènement, organisé par Segittur et l'ICEX, a compté notamment avec la présence de la vice-ministre du Tourisme du Pérou, de l'ambassadeur d'Espagne au Pérou, ainsi que de nombreuses entreprises touristiques travaillant dans le pays.";

            $scope.newsTitle4 =
                "Sismotur dans les Journées de Tourisme Espagne-Chili";
            $scope.newsContent4 =
                "Sismotur a accompagné à nouveau Segittur et l'ICEX, cette fois-ci dans les journées bilatérales de tourisme Espagne-Chili qui ont eu lieu dans la capitale Santiago. Nous avons assisté à la signature d'un accord bilatéral entre les deux États, et nous avons eu l'occasion de présenter notre vision OFF/ON d'intégration de la signalisation physique avec nos systèmes numériques pour développer une destination touristique intelligente.";

            $scope.newsTitle3 =
                "Sismotur présente le projet de signalisation touristique du chemin de Saint-Jacques à Castille et Léon";
            $scope.newsContent3 =
                "Sismotur a présenté le Plan de Signalisation Touristique du chemin de Saint-Jacques de Castille et Léon avec la directrice du Tourisme de la région. Ce plan améliore nettement l'accueil des touristes dans le territoire et la qualité perçue de la destination dans son ensemble.";

            $scope.newsTitle2 = "Sismotur dans le Cluster de Tourismo d'Estrémadure";
            $scope.newsContent2 =
                "Reportage de la télévision régionale sur le cluster, où notre CEO Augusto Ramos a exposé notre service Inventrip en tant que plateforme de promotion des destinations touristiques et de gestion de l'information du territoire.";

            $scope.newsTitle1 =
                "Sismotur reçoit le prix à la meilleure idée de marketing des destinations";
            $scope.newsContent1 =
                "Sismotur a reçu le prix finaliste pour l'apport d'Inventrip à la diffusion et promotion d'une destination touristique. Le jury a reconnu Inventrip comme étant capable de canaliser l'envie de voyager des touristes, en leur aidant à préparer leur voyage et en leur informant durant celui-ci. De même, le jury a apprécié la capacité de promotion de la destination touristique sur les réseaux sociaux offerte par d'Inventrip.";

            break;

            // **********************************
            // ********** ENGLISH (DEFAULT) *****
            // **********************************

        default:
            // ******************
            // CLAIM DEFAULT (EN)
            // ******************
            $scope.claim1 = "Connect your destination with the digital tourist";
            $scope.claim2 = "Discover the smart tourism signage";
            $scope.btnMuestra = "Join the Inventrip Destinations Network";

            // ******************
            // MENU DEFAULT (EN)
            // ******************
            $scope.inventrip = "Inventrip";
            $scope.mnTecno = "Technologies";
            $scope.mnNoticias = "News";
            $scope.mnTeam = "Partners";
            $scope.mnCont = "Contact";
            $scope.mnIdioma = "EN";

            // *********************
            // INVENTRIP DEFAULT (EN)
            // *********************
            $scope.dividerInventrip = "Get a Personnalized Information System";
            $scope.invTextA = "Connect your destination";
            $scope.invTextB =
                "Sismotur implements a smart signage information and management service which enables your travellers to consult your touristic offering, build and book customized trips, and share them in social networks or using the latest technologies: Beacons, NFC, QR codes.";

            // **********************
            // SIGNING DEFAULT (EN)
            // **********************
            $scope.dividerSigning = "Implement a Signage Service";
            $scope.signingTitle = "Signing";
            $scope.signingTextA = "Manage your signage";
            $scope.signingTextB =
                "Sismotur is leader in the preparation of master signage plans and implants Signing, a dedicated web service specialised in the planification and management of the territorial and urban signage which is used by more than 30 public administrations.";

            // ************************
            // TECNOLOGIAS DEFAULT (EN)
            // ************************
            $scope.dividerTechnologies =
                "Inventrip and Signing use the best technologies";

            $scope.btnReferences = "REFERENCES";

            // Smart Signage
            $scope.senalizacionTitle = "Smart Signage";
            $scope.senalizacionText =
                "Improve the tourist signage of your destination by integrating it with advanced tourist information systems. We offer our cloud service Signing for its planification and management.";

            $scope.senalizacionTitle1 = "Route Ribera del Duero Smart";
            $scope.senalizacionText1 =
                "Sismotur has implemented the smart signage management system Inventrip in the Route Ribera del Duero.";

            $scope.senalizacionTitle2 = "Barcelona";
            $scope.senalizacionText2 =
                "Design of the new pedestrian touristic signage carried out by Sismotur for the city of Barcelona";

            $scope.senalizacionTitle3 = "More than 50 references in smart signange";
            $scope.senalizacionText3 =
                "Sismotur created in 2015 the concept of smart signage, and since then we have helped more than 50 tourist destinations in the implementation of their smart tourist signs with our platforms Signing and Inventrip (both of them official solutions of the Spanish Smart Destinations Network).";

            // Beacons
            $scope.beacons = "Beacons";
            $scope.beaconText =
                "Deploy this new technology in tourist signs or information offices to provide contextualized information and offer tourists tailored products and services in their smartphone.";

            $scope.beaconTitle1 = "Beacon in Smart Signs";
            $scope.beaconText1 =
                "Inventrip connects the smart signs with the tourist using beacons.";

            $scope.beaconTitle2 = "Smart Signage in Las Palmas de Gran Canaria";
            $scope.beaconText2 =
                "Sismotur develops the smart tourist signage plan in Las Palmas de Gran Canaria using the latest Beacon technology managed by Inventrip.";

            // API
            $scope.apiInventrip = "API";
            $scope.apiInventripText =
                "Link Inventrip with your tourism websites or Smart City platform to reduce costs and simplify your IT developments.";

            $scope.apiTitle1 = "Inventrip REST API";
            $scope.apiText1 =
                "Inventrip is an interoperable system which provides information and interacts with Smart City platforms using standard technologies that any developer can use.";

            $scope.apiTitle2 = "Schema.org for Tourism";
            $scope.apiText2 =
                "Sismotur is co-chair of the Tourism Group in Schema.org, project hosted by W3C and main data vocabulary of the Internet. Millions of websites use Schema.org to improve their visibility and increment the number of visits.";
            $scope.apiButton2 = "Join the group";

            // Big Data
            $scope.bigData = "Big Data";
            $scope.bigDataText =
                "Analize easily data generated by your tourists to improve the management of your destination.";

            $scope.bigDataTitle1 = "The smart signage: data source";
            $scope.bigDataText1 =
                "Inventrip produces real time dashboards and analysis on your browser with the usage your tourists are doing of the connected signs and the services attached to them.";

            // E-commerce
            $scope.eCommerce = "e-Commerce";
            $scope.comercializacionText =
                "Make it simple for tourists to access online booking systems for accommodations, restaurants and activities, before or during their trip.";

            $scope.eCommerceTitle1 = "e-Commerce";
            $scope.eCommerceText1 =
                "Integration of booking engines in Inventrip that tourists can access before and during the trip.";

            // Blockchain
            $scope.blockchain = "Blockchain";
            $scope.blockchainText =
                "Benefit of the potential of this disruptive technology to interact with your tourists without the need to depend on costly intermediaries.";

            $scope.blockchainTitle1 = "Blockchain";
            $scope.blockchainText1 =
                "Sismotur presented in FITUR 2017 some of the potential applications for turism of this incredible technology, which has spawned among other things the digital currency Bitcoin.";
            $scope.blockchainButton1 = "Discover the applications";

            // NFC
            $scope.nfc = "NFC";
            $scope.nfcText =
                "Give to your tourists contactless cards in information offices, fairs, or hotels, to personalize their experience in your destination.";

            $scope.nfcTitle1 = "NFC cards for Ibiza";
            $scope.nftText1 =
                "The city of Ibiza presented to the press the Smart Tourist Destination project: smart signage, beacons, and these NFC cards containing a trip to the city.";
            $scope.nfcButton1 = "Discover the trip";

            $scope.nfcTitle2 = "NFC cards for Palencia";
            $scope.nfcText2 =
                "Palencia Tourism presented Inventrip to the press during the last spanish fair of interior tourism (INTUR).";
            $scope.nfcButton2 = "Discover the trip";

            // qr
            $scope.qr = "QR";
            $scope.qrText =
                "Manage with ease the online touristic information of your maps and points of interest, in multiple languages.";

            $scope.qrTitle1 = "Normandy and Brittany";
            $scope.qrText1 =
                "Discover a trip to Normandy and Brittany scanning this QR code!";
            $scope.qrButton1 = "Discover the trip";

            $scope.qrTitle2 = "Barcelona";
            $scope.qrText2 =
                "Sismotur drafted in 2012 the first signage and touristic information plan of the city of Barcelona for the district of Horta-Guinardó.";

            // dronTrip
            $scope.dronTrip = "DronTrip";
            $scope.dronText =
                "Create tourism videos shot with drones to promote and viralize your destination and touristic services across social networks.";

            $scope.drontripText1 =
                "We invite you to flight over the county of Sierra de Montánchez and Tamuja, Spain!";
            $scope.drontripButton1 = "Watch Video";

            // *********************
            // NOTICIAS DEFAULT (EN)
            // *********************
            $scope.dividerNews = "Recent news";
            $scope.moreNews = "More news";

            // *********************
            // PARTNERS DEFAULT (EN)
            // *********************
            $scope.titlePartners = "Partners";

            // ********************
            // CONTACT DEFAULT (EN)
            // ********************
            $scope.btnContact = "CONTACT US";

            $scope.cntSpain = "Spain";
            $scope.cntSpain2 = "Madrid & Barcelona";
            $scope.cntSpainPhone = "+34 913.238.208";

            $scope.cntFrance = "France";
            $scope.cntFrance2 = "Annecy";
            $scope.cntFrancePhone = "+33 (0)619.20.30.61";

            $scope.copyright = "Copyright © 2017 SISMOTUR SL.";

            // *********************
            // NEWS EN
            // *********************
            $scope.newsTitle56 =
                 "Inventrip Destinations Network Day 2020";
            $scope.newsContent56 =
                "The Inventrip 2020 Day took place on November 13th. 65 tourist destinations participated, sharing success stories and contributing to the development of the network.";
            $scope.newsDetail56 = "Link to the program (es)";

            $scope.newsTitle55 =
                "The Sierra de Francia Wine Route awarded at the Wine Tourism Awards. October 2020";
            $scope.newsContent55 =
                "Awarded as the best sustainable wine tourism destination, thanks in large part to the digitization of the route and its partners with Inventrip.";
            $scope.newsDetail55 = "Link to news";

            $scope.newsTitle54 = "Sismotur awarded at the Digital Tourism congress. October 2020";
            $scope.newsContent54 =
                "For the most relevant action in the field of standardization, with the implementation of Inventrip in the La Canal de Navarrés county and its interoperability with the destination website and touch terminals (developed by Sien Consulting and Insyde respectively, also participants in this award).";
            $scope.newsDetail54 = "Link to news";

            $scope.newsTitle53 =
                "Inventrip and Signing enter the official catalog of the DTI Network. October 2020";
            $scope.newsContent53 =
                "Our tourist information and smart signage platforms, Inventrip and Signing, are part of the technological solutions of the Smart Tourist Destinations Network that Minister Reyes Maroto presented during the opening of Digital Tourism 2020.";
            $scope.newsDetail53 = "Link to catalog";

            $scope.newsTitle52 = "Sismotur enters the DTI Network - October 2020";
            $scope.newsContent52 =
                "The III plenary commission of the Network of Smart Tourist Destinations, which has been chaired by Minister Reyes Maroto, approves the incorporation of 19 new members, including our company Sismotur.";
            $scope.newsDetail52 = "Link to news";

            $scope.newsTitle51 =
                "Update of the semantics manual for Covid-19. July 2020";
            $scope.newsContent51 =
                "Sismotur collaborates with SEGITTUR in a pilot project with Conil, Santa Susanna and Sanxenxo (Inventrip destinations) to update the semantics manual of smart tourist destinations and implements functionalities in Inventrip to inform about Covid.";
            $scope.newsDetail51 = "Link to news";

            $scope.newsTitle50 =
                "Consulting assignment for the Ministry of Commerce and Tourism of Peru. Ollantaytambo, July 2019";
            $scope.newsContent50 =
                "The experts and partners of Sismotur, Augusto Ramos et Manuel Mariscal, counsel MINCETUR in the implementation of a Smart Tourist Destination connected with Inventrip in Ollantaytambo, in the Sacred Valley and access door to Machu Picchu.";

            $scope.newsTitle49 =
                "Consulting assignment for the cross-border association of the Alqueva Lake (ATLA, Portugal). July 2019";
            $scope.newsContent49 =
                "Sismotur has won the contract to elaborate an information and smart signage plan of the 9 Portuguese  municipalities portugaises in ATLA, including the implementation of our platforms Signing and Inventrip.";

            $scope.newsTitle48 =
                "Delivering the first Inventrip Digital Kits. Province of Salamanca, June 2019";
            $scope.newsContent48 =
                "The Province of Salamanca and Sismotur gave 110 digital kits connected with their local Inventrip platform to local businesses and tourism offices. During the event were presented the QR codes, NFC, and Beacon technologies included in the kit.";
            $scope.newsDetail48 = "Link to Twitter";

            $scope.newsTitle47 = "New UNE norm: Semantics for tourism data. May 2019";
            $scope.newsContent47 =
                'Within the CTN178 smart cities committee, Sismotur has co-drafted with Globaldit the future norm UNE PNE 178503 "Smart Tourist Destinations: Semantics applied to tourism", contributing its expertise of 20 years modeling more than 20.000 tourist resources and the experience acquired managing the Tourism Group in schema.org. This norm has been published for consultation in the Spanish official bulletin and its final approval is expected before end 2019.';
            $scope.newsDetail47 = "Link to the norm";

            $scope.newsTitle46 =
                "2nd Smart Destinations Network meeting - Best practices. April 2019";
            $scope.newsContent46 =
                "Conil de la Frontera has presented its smart tourism signage connected with Inventrip to the Spanish Network of Smart Tourism Destinations, organization created by the Spanish Government. Conil uses smart signs and NFC cards to promote and inform incoming visitors to the town.";
            $scope.newsDetail46 = "Best practices";

            $scope.newsTitle45 =
                "Presentation of Inventrip to the hospitality sector of Sanxenxo. March 2019";
            $scope.newsContent45 =
                "Sanxenxo's tourism councilor and Sismotur's CEO have presented to local hotel businesses the possibilities to connect their establishments with the digital tourist using their local Inventrip platform.";
            $scope.newsDetail45 = "Presentation";

            $scope.newsTitle44 =
                "Smart Signage of Alqueva Lake. Portugal, February 2019";
            $scope.newsContent44 =
                "Sismotur's CEO Augusto Ramos presented to the head of Tourism of Portugal, the president of the region Alentejo-Ribatejo, the president of the cross-border association of the Alqueva Lake (ATLA) and their 9 municipalities, the project to transform the lake in a Smart Tourism Destination connected with Inventrip.";

            $scope.newsTitle43 = "Spain Convention Bureau. Benidorm, February 2019";
            $scope.newsContent43 =
                "Augusto Ramos, CEO of Sismotur, was invited to present the usage of Inventrip for MICE tourism.";

            $scope.newsTitle42 = "Fitur Know How & Export. Madrid, January 2019";
            $scope.newsContent42 =
                "Sismotur was present again in the innovation and technology zone of FITUR presenting the Inventrip Destinations Network, which counts today 40 destinations across Spain and Portugal.";
            $scope.newsDetail42 = "Inventrip Destinations Network";

            $scope.newsTitle41 = "Smart Rural - Asturias. FITUR 2019";
            $scope.newsContent41 =
                "The president of the rural houses association ARCA, Jaime Garcia, presented the project Smart Rural Asturias for the digitalisation of rural accommodations using Inventrip.";

            $scope.newsTitle40 =
                "INTUR, International inland tourism fair. Valladolid, November 2018";
            $scope.newsContent40 =
                "The Tourism deputy of the Salamanca province presented the implementation of Inventrip for the territory. NFC promotional cards where given during the fair.";
            $scope.newsDetail40 = "NFC cards";

            $scope.newsTitle39 = "Turkey Blockchain Summit 2018";
            $scope.newsContent39 =
                "Sismotur was invited to the first blockchain national congress of Turkey, organized by the Turkish Government in Ankara. The CTO of Sismotur, Felipe Santi, presented the potential of IoT and Blockchain on the Tourism industry and organized with our collaborator Enrique Melero a hands-on workshop for 40 engineers: an electronic hotel door lock receiving Bitcoin payments from a smartphone wallet.";

            $scope.newsTitle38 =
                "Inventrip Destinations Network Day. Madrid, October 2018";
            $scope.newsContent38 =
                "Sismotur organized a program of presentations with a panel of experts in digital tourism. Innovative strategies to improve the digitalisation of tourist destinations using Inventrip were discussed during the day.";
            $scope.newsDetail38 = "Program";

            $scope.newsTitle37 =
                "Sismotur was chosen to create the new smart signage plan of Santander";
            $scope.newsContent37 =
                "Sismotur's partners Manuel Mariscal and Augusto Ramos presented to the Santander's mayoress Gema Igual and to the city's tourism sector the principles of the new plan, which incorporates the Beacon technology to connect Santander with the digital tourist.";

            $scope.newsTitle36 = "4th International Tourism Days. Agueda, July 2018";
            $scope.newsContent36 =
                "Sismotur was invited to present the experience of Reguengos de Monsaraz in its transformation into a Smart Tourism Destination. Augusto Ramos, Sismotur's CEO, presented the Inventrip platform to connect the destination with the digital tourist.";

            $scope.newsTitle35 = "Sismotur wins the IoT + Blockchain hackaton 2018";
            $scope.newsContent35 =
                'Our use case "Proof of Visit", based on Inventrip, won the international hackaton IoT Blockchain Camp 2018. Engineers and business leaders where present, some of them from relevant blockchain companies like Ambrosus and Climate Coin. They validated the pertinence of using Beacons as digital notaries to register the passage of tourists across a territory and enable the creation of reward mechanisms linked to their behaviour.';
            $scope.newsDetail35 = "IoT Blockchain Camp 2018";

            $scope.newsTitle34 =
                "BTL, International Tourism Fair. Lisboa, March 2018";
            $scope.newsContent34 =
                "Augusto Ramos, CEO of Sismotur, was invited to present to municipal and regional tourism heads of the Azores Islands the experience of Sismotur implementing Smart Tourism Destinations connected with Inventrip.";

            $scope.newsTitle33 =
                "Innovatur Project. Puerto de la Cruz and Arona, January 2018";
            $scope.newsContent33 =
                "Within the european project Innovatur, whose goal is to reactivate and modernize tourist destinations in the Canary, Madeira and Azores Islands, Sismotur presented the usage of the smart signage to energize shopping zones in Smart Tourism Destinations.";
            $scope.newsDetail33 = "Innovatur";

            $scope.newsTitle32 = "Fitur Know How & Export. Madrid, January 2018";
            $scope.newsContent32 =
                "Second presentation about blockchain of Sismotur's CEO and CTO, delving into the concepts exposed in 2017 and presenting the use case of Inventrip as tool to contribute to the sustainability of tourism destinations using existing blockchain technologies.";
            $scope.newsDetail32 = "Presentation";

            $scope.newsTitle31 =
                "Green Snacks Forum - EFE press agency. Madrid, November 2017";
            $scope.newsContent31 =
                "Sismotur's CEO participated in a debate about technologies that can enable a sustainable environment organized by Green EFE. He presented the possibilities to equip natural parks with signs to offer contextualized information to incoming visitors, even without an Internet connection.";
            $scope.newsDetail31 = "Debate";

            $scope.newsTitle30 =
                "Digital rural community: building the smart territory. Valladolid, November 2017";
            $scope.newsContent30 =
                "Sara García, manager of the Ribera del Duero Wine Route consortium, and Sismotur's CEO Augusto Ramos, presented the Ribera del Duero Smart Route. They underlined the importance of usign their smart signs in places without Internet connection to offer tourist information.";

            $scope.newsTitle29 = "Barcelona Expo World Congress, November 2017";
            $scope.newsContent29 =
                "Sismotur's COO Manuel Mariscal presented in Barcelona Smart Region's booth the cases of success of the implementation of the tourism smart signage connected with Inventrip in Vilafranca del Penedes and Santa Susanna.";
            $scope.newsDetail29 = "Barcelona Smart Region";

            $scope.newsTitle28 =
                "Smart Destinations Day - UOC Catalonia. Barcelona, October 2017";
            $scope.newsContent28 =
                "Sismotur's CEO Augusto Ramos was invited to participate in the Smart Tourism Destinations day organized by the Universitat Oberta of Catalonia, to present two Catalonian smart destinations which are connected with Inventrip: Santa Susanna and Vilafranca del Penedes.";

            $scope.newsTitle27 = "Green Cities Congres";
            $scope.newsContent27 =
                "In June 2017, Sismotur has been involved in the preparation of a smart city model built by the Ministry of Energy, Tourism and Digital Agenda. Tourists arriving by high-speed train to the railway station get information from a smart sign connected with Inventrip. Photo: CEO of Sismotur with the secretary of State for the Information Society and Digital Agenda and the coordinador of the National Plan of Smart Cities.";

            $scope.newsTitle26 = "III Madrid Smart Cities Congress";
            $scope.newsContent26 =
                'The Region of Castilla y León and Sismotur have presented in April 2017 the project "Smart Route Ribera del Duero: Smart Tourism Signage Connected with Inventrip" in the third edition of the Madrid Smart Cities Congress. Photo: project presentation by the CEO of Sismotur; now the Route Ribera del Duero has 103 digital Tourist Information Offices.';
            $scope.newsDetail26 = "Link to the presentation";
            $scope.newsDetail26_b = "Link to the video";

            $scope.newsTitle25 =
                "Beginning of the smart signage plan of Gran Canaria";
            $scope.newsContent25 =
                "The Gran Canaria Cabildo has commissioned Sismotur to produce the smart signage plan of the island of Gran Canaria. Photo: the councilor of Public Works and Infrastructures (left) with the CEO of Sismotur (right) during the signature of the contract.";
            $scope.newsDetail25 =
                "Link to the announcement of the Gran Canaria Cabildo";

            $scope.newsTitle24 =
                "Reguengos de Monsaraz, first Portuguese destination with a smart signage system";
            $scope.newsContent24 =
                "Sismotur presents to the Wine Routes of Portugal the project done in Reguengos de Monsaraz. Photo: mayor of Reguengos de Monsaraz and president of the European Network of Wine Cities (left), president of the Association of Wine Cities of Portugal (center) and CEO of Sismotur (right).";
            $scope.newsDetail24 = "Link to an article in Publituris";

            $scope.newsTitle23 = "ICEX interviews the CMO of Sismotur during Fitur";
            $scope.newsContent23 =
                "Interview of the magazine El Exportador to Sismotur during Fitur 2017. Photo: CMO of Sismotur.";
            $scope.newsDetail23 = "Link to the interview (video in spanish)";

            $scope.newsTitle22 = "Sismotur exhibits in Fitur Know-how & Export 2017";
            $scope.newsContent22 =
                "Sismotur has showcased with success its smart tourism signage in the Fitur 2017 fair. Picture: the CEO of Sismotur (right) presents our concept to the Viceminister of Tourism of Pérou (center) and to the President of SEGITTUR (left).";
            $scope.newsDetail22 =
                "Link to an article about Sismotur in the journal Fitur Daily";

            $scope.newsTitle21 =
                "EFE interviews Sismotur about Blockchain for Tourism";
            $scope.newsContent21 =
                "EFE Futuro has shown interest about Blockchain technology and has interviewed our experts about its potential applications in the tourism domain.";
            $scope.newsDetail21 = "Link to the article";

            $scope.newsTitle20 =
                "FITUR 2017 - Blockchain technology and applications for Tourism";
            $scope.newsContent20 =
                "Enrique Melero, Blockchain expert, and Felipe Santi, CTO de Sismotur, have introduced this new technology in SEGITTUR Lab.";
            $scope.newsDetail20 = "Slides (PDF file in spanish)";

            $scope.newsTitle19 =
                "Sismotur will present Blockchain and its potential applications for Tourism during FITUR 2017 in SEGITTUR Lab";
            $scope.newsContent19 =
                "Sismotur will expose in FITUR 2017, in the area Know-How & Export (Stand 10B09, next to SEGITTUR). On January 18 at 16:00, in the area SEGITTUR Lab, we will organize an event about Blockchain technology and its applications in the domain of Tourism.";
            $scope.newsDetail19 =
                "Analysis of Blockchain and its potential for Tourism";

            $scope.newsTitle18 =
                "Article by EFE Empresas about Smart Tourism Signage";
            $scope.newsContent18 =
                "Article by EFE Empresas which comments the innovation entailed by connecting a Tourist Destination with the new digital tourists and their smartphones through a smart signage system and Inventrip.";
            $scope.newsDetail18 = "Link to the Article";

            $scope.newsTitle17 = "Article in Kontak's Blog";
            $scope.newsContent17 =
                "Kontakt, world reference in connected technologies and IoT (Internet of the Things) and collaborator of Sismotur, explains the innovation Inventrip brings to the tourism sector.";
            $scope.newsDetail17 = "Link to Kontakt's Blog";

            $scope.newsTitle16 =
                "Presentation of Inventrip for the Wine Route Ribera del Duero";
            $scope.newsContent16 =
                "The Director of Tourism of Castilla y León presents Inventrip, the new smart tourism signage management system from Sismotur.";
            $scope.newsDetail16 = "Link to the Article";

            $scope.newsTitle15 =
                "Las Palmas de Gran Canaria will implement Inventrip";
            $scope.newsContent15 =
                "The City Council and the Cabildo have reached an agreement to implement Sismotur's smart tourism signage in touristic open retail areas and provide information with Inventrip.";
            $scope.newsDetail15 = "Link to the Article";

            $scope.newsTitle14 = "FITUR 2016";
            $scope.newsContent14 =
                "Sismotur fue la elegida para presentar en la inauguración su concepto de Destino Turístico Inteligente a través de la integración de medios físicos y digitales OFF/ON conectando la señalización a la plataforma Inventrip. De esta forma, las señales y el territorio le hablan al móvil del turista.";

            $scope.newsTitle13 =
                "Aportación de Sismotur al Libro Blanco de Destinos Turísticos Inteligentes";
            $scope.newsContent13 =
                "El pasado mes de octubre se presentó en la sede del Ministerio de Industria, Energía y Turismo el Libro Blanco de Destinos Turísticos Inteligentes promovido por Segittur y dentro del marco del Plan Nacional de Ciudades Inteligentes. Sismotur ha participado en la redacción de este Libro Blanco con su  modelo de integración OFF/ON de medios físicos y digitales en un Destino para mejorar la Acogida y la Experiencia del Turista.";

            $scope.newsTitle12 =
                "Sismotur redacta el Plan de Señalización Turística de Euskadi";
            $scope.newsContent12 =
                "Sismotur ha redactado el Plan de Señalización Turística para Euskadi, trabajando codo a codo con el Gobierno Vasco y su Directora General de Turismo y con las tres Diputaciones Forales, unificando criterios, analizando necesidades y especificidades en pos de la Concertación.";

            $scope.newsTitle11 = "Sismotur en INTUR 2015";
            $scope.newsContent11 =
                "En la pasada edición de INTUR en Valladolid, Sismotur presentó los avances de la plataforma Inventrip como herramienta de Promoción de un Destino, Planificador de viajes para el Turista y servicio de información digital en el Territorio vinculado a la Señalización física y a los Recursos y Servicios del Destino.";

            $scope.newsTitle10 =
                "Sismotur Participa en la Jornada de Redes Sociales y Turismo de la Diputación de Barcelona";
            $scope.newsContent10 =
                "Augusto Ramos, CEO de Sismotur, ha impartido una ponencia sobre la capacidad de las Redes Sociales y el Turista como prescriptores de un Destino, la necesidad de que los Territorios se sumen a los nuevos medios de difusión y promoción y cómo Inventrip implementa y explota estos medios para la difusión del Destino por parte de turistas y promotores del mismo.";

            $scope.newsTitle9 =
                "Sismotur con el Principado de Asturias en la presentación de Inventrip para Piloña";
            $scope.newsContent9 =
                "Sismotur ha acompañado al Director General de Turismo del Principado de Asturias en la presentación de Inventrip como plataforma de promoción del Destino y gestión de la información turística para Piloña, zona muy turística de Asturias y que apuesta por las nuevas tecnologías en su desarrollo turístico.";

            $scope.newsTitle8 =
                "Sismotur con Turismo de Extremadura en la presentación de Inventrip para la Sierra de Montánchez";
            $scope.newsContent8 =
                "Felipe Santi, CTO de Sismotur, acompaña a Turismo de Extremadura en la presentación del servicio Inventrip para la mejora de la promoción de la Sierra de Montánchez y Tamuja en su camino hacia un Destino Turístico Inteligente. También se ha presentado un vídeo promocional con Drones asociado a Inventrip para difundir el destino en las redes sociales.";

            $scope.newsTitle7 =
                "Sismotur presentando el proyecto de Ibiza Destino Turístico Inteligente con Beacons e Inventrip";
            $scope.newsContent7 =
                "Sismotur ha acompañado al Ayuntamiento de Ibiza en la presentación del proyecto que convierte al municipio en un Destino Turístico Inteligente con la implantación de la plataforma Inventrip como sistema de gestión de la información turística y de la promoción del Destino, integrado con un plan de señalización inteligente peatonal e interpretativa y una red de Beacons.";

            $scope.newsTitle6 =
                "Presentación de Inventrip en la Sierra Norte de Madrid";
            $scope.newsContent6 =
                "Julio José Julián, CMO de Sismotur, presenta la implantación de la plataforma Inventrip como sistema de gestión de la información turística, planificador de viajes y medio de promoción en las redes sociales del Destino Turístico. Se enmarca dentro de un ambicioso plan para promocionar la Sierra Norte y que se apoya decididamente en las Nuevas Tecnologías y las redes sociales como vehículo de difusión.";

            $scope.newsTitle5 =
                "Sismotur en las Jornadas Técnicas de Turismo en Perú";
            $scope.newsContent5 =
                "De la mano de Segittur y del ICEX, Sismotur ha estado presente en las Jornadas Tecnicas de Turismo que se han celebrado en la capital de Perú. Se ha presentado la visión del Destino Turístico Inteligente y la capacidad de Inventrip como gestor de la información y herramienta de promoción para un Territorio turístico a nivel global.";

            $scope.newsTitle4 =
                "Sismotur en las Jornadas Técnicas de Turismo España-Chile, en Santiago de Chile";
            $scope.newsContent4 =
                "Sismotur acompaña a Segittur y al ICEX en las Jornadas Técnicas de Turismo que se han celebrado en Santiago de Chile, y está presente como testigo de excepción de la firma del convenio bilateral entre Chile y España, presentando Inventrip y la potencia de la visión OFF/ON de integración de elementos físicos y digitales para desarrollar un Destino Turístico Inteligente.";

            $scope.newsTitle3 =
                "Sismotur presenta el Proyecto de Señalización Turística del Camino de Santiago por Castilla y León";
            $scope.newsContent3 =
                "Sismotur ha presentado el Plan de Señalización Turística del Camino de Santiago por las carreteras de Castilla y León, junto con la consejera y el Director General de Turismo. Supone una mejora en la percepción de la calidad del Destino y en el proceso de Acogida al Turista sobre el territorio.";

            $scope.newsTitle2 = "Sismotur en el Cluster de Turismo de Extremadura";
            $scope.newsContent2 =
                "Reportaje de TVE sobre el Cluster de Turismo de Extremadura, donde Augusto Ramos, CEO de Sismotur, expone la capacidad de Inventrip como plataforma de Promoción de un Destino Turístico y su potencia como herramienta para planificar viajes para el turista y como gestor de la información turística de un Territorio.";

            $scope.newsTitle1 =
                "Inventrip recibe el Premio a la mejor idea de Marketing de Destinos de Territorio & Marketing";
            $scope.newsContent1 =
                "Sismotur ha recibido el premio finalista por la aportación de la plataforma Inventrip a la difusión y promoción de un Destino Turístico. El jurado reconoce cómo Inventrip es capaz de unir la parte emotiva de la experiencia de un Turista a la hora de preparar un viaje con la realidad de desplazarse dentro del territorio durante el viaje y la prescripción en positivo que posteriormente hace de dicho Destino.";

            break;
    }
}