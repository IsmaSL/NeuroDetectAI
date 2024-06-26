import { Component } from '@angular/core';
import { ContactUsComponent } from '../../shared/components/contact-us/contact-us.component';

@Component({
	selector: 'app-detec-adhd',
	standalone: true,
	imports: [
		ContactUsComponent
	],
	templateUrl: './detec-adhd.component.html',
	styleUrl: './detec-adhd.component.scss'
})
export class DetecAdhdComponent {
	// Header
	title = "DETEC - TDAH";
	description = "Aplicación Web para la identificación del nivel del Trastorno de Déficit de Atención e Hiperactividad, DETEC-TDAH es una herramienta sólida y práctica para el proceso de identificación de pacientes con TDAH; cuyo objetivo principal es identificar pacientes con el Trastorno por Déficit de Atención e Hiperactividad con técnicas de IA mediante navegadores web.";
	// Features
	subtitle_1 = "Ahorra tu tiempo utilizando DETEC-TDAH";
	
	icon_feature_1 = "bi bi-people";
	feature_title_1 = "Interfaz amigable";
	description_feature_1 = "DETEC-TDAH cuenta con una interfaz intuitiva y fácil de usar que permite a los profesionales médicos navegar rápidamente por los datos de los pacientes y realizar diagnósticos de manera eficiente.";

	icon_feature_2 = "bi bi-bar-chart";
	feature_title_2 = "Paneles completos";
	description_feature_2 = "Obtén una vista general de la prevalencia del TDAH entre los pacientes registrados con paneles detallados. Rastrea el historial de pacientes, visualiza resultados de pruebas y monitorea el progreso a lo largo del tiempo.";

	icon_feature_3 = "bi bi-laptop";
	feature_title_3 = "Sincronización de datos en tiempo real";
	description_feature_3 = "Sincroniza sin problemas con dispositivos vestibles como la banda Muse a través de Bluetooth para recolectar y analizar datos EEG en tiempo real, asegurando diagnósticos precisos.";
	// Steps
	step_title_1 = "Regístrate";
	step_description_1 = "Regístrate como profesional médico para acceder a la aplicación y comenzar a diagnosticar el TDAH en los pacientes con facilidad.";

	step_title_2 = "Crea Perfil";
	step_description_2 = "Crea y gestiona perfiles de pacientes, incluyendo historias clínicas detalladas y diagnósticos anteriores para un seguimiento integral.";

	step_title_3 = "Disfruta de la app";
	step_description_3 = "Aprovecha el poder de la IA y la sincronización de datos en tiempo real para proporcionar diagnósticos precisos de TDAH y mejorar la atención al paciente.";
	// More Info
	info_title_1 = "Comunicación sin interrupciones";
	info_description_1 = "Utiliza DETEC-TDAH para comunicarte de manera efectiva con tu equipo y gestionar la información de los pacientes de manera segura. Las actualizaciones en tiempo real y la sincronización de datos aseguran que siempre tengas la información más reciente a tu disposición.";

	info_title_2 = "Recopila comentarios";
	info_description_2 = "Recopila y analiza los comentarios de los pacientes para mejorar continuamente tus procesos de diagnóstico. Nuestras herramientas completas te permiten monitorear el progreso del paciente y ajustar los planes de tratamiento según sea necesario.";
	// Testimonials
	testimonial_title = "Lo que dicen nuestros usuarios";
	// Team
	team_title = "¿Quieres conocer más?";
	team_description = "Descubre cómo DETEC-TDAH puede mejorar tus capacidades de diagnóstico y mejorar la atención al paciente. Visita nuestro blog para conocer más sobre los últimos avances en el diagnóstico y tratamiento del TDAH.	";	
	// Imágenes 
	imageTitle = "assets/images/projects/dtdah/1.png";
	imageSteps = "assets/images/projects/dtdah/3.png";
	imageInfo_1 = "assets/images/projects/dtdah/4.jpg";
	imageInfo_2 = "assets/images/projects/dtdah/5.jpg";
}
