import { Component } from '@angular/core';
import { ContactUsComponent } from '../../shared/components/contact-us/contact-us.component';

@Component({
    selector: 'app-vtea',
    standalone: true,
    imports: [
        ContactUsComponent
    ],
    templateUrl: './vtea.component.html',
    styleUrl: './vtea.component.scss'
})
export class VteaComponent {
    // Header
    title = "LinguaTEA";
    description = "LinguaTEA es una innovadora aplicación que utiliza técnicas de procesamiento del lenguaje natural para mejorar las habilidades del lenguaje en niños con TEA. A través de actividades interactivas, LinguaTEA ayuda a desarrollar la comunicación y el habla de manera efectiva y accesible."

    // Features
    subtitle_1 = "Mejora tus habilidades lingüísticas con LinguaTEA";

    icon_feature_1 = "bi bi-chat";
    feature_title_1 = "Técnicas de Procesamiento del Lenguaje Natural";
    description_feature_1 = "LinguaTEA utiliza actividades específicas que incorporan técnicas de procesamiento del lenguaje natural para evaluar y mejorar la pronunciación y la comunicación de los niños con TEA.";

    icon_feature_2 = "bi bi-activity";
    feature_title_2 = "Actividades Interactivas";
    description_feature_2 = "El videojuego incluye una serie de actividades lúdicas diseñadas para fortalecer las habilidades lingüísticas y mantener a los niños comprometidos y motivados durante el proceso de aprendizaje.";

    icon_feature_3 = "bi bi-heart";
    feature_title_3 = "Apoyo Terapéutico";
    description_feature_3 = "LinguaTEA ofrece una solución accesible y efectiva para los especialistas, automatizando la evaluación del habla y facilitando el seguimiento del progreso de los niños."

    // Steps
    step_title_1 = "Regístrate";
    step_description_1 = "Crea una cuenta para acceder a LinguaTEA y comenzar a mejorar las habilidades lingüísticas de los niños con TEA a través de actividades interactivas y educativas.";
    
    step_title_2 = "Crea un Perfil";
    step_description_2 = "Gestiona los perfiles de los niños, incluyendo el historial de actividades y progresos para un seguimiento detallado y personalizado.";
    
    step_title_3 = "Disfruta de la App";
    step_description_3 = "Sumérgete en el mundo de LinguaTEA y ayuda a los niños a desarrollar sus habilidades de comunicación mientras se divierten en entornos diseñados específicamente para ellos."
    
    // Info
    info_title_1 = "Comunicación Eficaz";
    info_description_1 = "LinguaTEA permite la mejora de la comunicación en niños con TEA a través de una interfaz amigable y actividades interactivas que tanto los niños como los terapeutas comprenderán con facilidad.";
    
    info_title_2 = "Recopilación de Feedback";
    info_description_2 = "Utiliza técnicas de procesamiento del lenguaje natural (PNL) para proporcionar retroalimentación constante sobre lo que repiten los niños. Los datos evaluados se enviarán a los terapeutas en tiempo real, permitiéndoles analizar y ajustar las actividades y escenarios del videojuego para asegurar una experiencia enriquecedora y efectiva para todos los usuarios."
    
    // Testimonials
    testimonial_title = "Lo que dicen nuestros usuarios";
    // Team
    team_title = "¿Quieres saber más?";
    team_description = "Descubre cómo ----- puede mejorar las habilidades del lenguaje de los niños con TEA y brindarles una mejor calidad de vida. Visita nuestro blog para conocer más sobre las últimas investigaciones y avances en el tratamiento del TEA."
    
    // Imágenes 
    imageTitle = "assets/images/projects/vtea/1.jpg";
    imageSteps = "assets/images/projects/vtea/1.png";
    imageInfo_1 = "assets/images/projects/vtea/2.png";
    imageInfo_2 = "assets/images/projects/vtea/5.png";
}
