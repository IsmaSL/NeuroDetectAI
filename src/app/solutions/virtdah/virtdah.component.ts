import { Component } from '@angular/core';
import { ContactUsComponent } from '../../shared/components/contact-us/contact-us.component';

@Component({
    selector: 'app-virtdah',
    standalone: true,
    imports: [
        ContactUsComponent
    ],
    templateUrl: './virtdah.component.html',
    styleUrl: './virtdah.component.scss'
})
export class VirtdahComponent {
    // Header
    title = "VirTDAH";
    description = "VirTDAH es una aplicación innovadora diseñada para mejorar el nivel de concentración en niños con Trastorno por Déficit de Atención e Hiperactividad (TDAH) utilizando técnicas de coordinación. A través de actividades de clasificación de objetos, VirTDAH ayuda a los niños a desarrollar habilidades de organización y atención, contribuyendo significativamente a su desarrollo cognitivo y facilitando un tratamiento accesible y efectivo."

    // Features
    subtitle_1 = "Mejora tu concentración con VirTDAH";

    icon_feature_1 = "bi bi-boxes";
    feature_title_1 = "Técnicas de Coordinación";
    description_feature_1 = "VirTDAH utiliza actividades de clasificación de objetos para ayudar a los niños con TDAH a mejorar su capacidad de organización y atención de manera divertida y efectiva.";

    icon_feature_2 = "bi bi-graph-up";
    feature_title_2 = "Desarrollo Cognitivo";
    description_feature_2 = "El videojuego está diseñado para estimular el desarrollo cognitivo de los niños, ayudándoles a establecer semejanzas, diferencias y relaciones de pertenencia entre diversos elementos.";

    icon_feature_3 = "bi bi-heart";
    feature_title_3 = "Apoyo Terapéutico Accesible";
    description_feature_3 = "VirTDAH ofrece una solución de bajo costo que beneficia a médicos, clínicas y hospitales con presupuestos limitados, proporcionando una herramienta accesible para el tratamiento del TDAH."

    // Steps
    step_title_1 = "Regístrate";
    step_description_1 = "Crea una cuenta para acceder a VirTDAH y comenzar a mejorar la concentración de los niños con TDAH a través de actividades lúdicas y educativas.";
    
    step_title_2 = "Crea un Perfil";
    step_description_2 = "Gestiona los perfiles de los niños, incluyendo el historial de actividades y progresos para un seguimiento detallado y personalizado.";
    
    step_title_3 = "Disfruta de la App";
    step_description_3 = "Sumérgete en el mundo de VirTDAH y ayuda a los niños a desarrollar habilidades de organización y atención mientras se divierten en entornos diseñados específicamente para ellos."
    
    info_title_1 = "Comunicación Eficaz";
    info_description_1 = "VirTDAH facilita una comunicación fluida entre el terapeuta y el niño, permitiendo un seguimiento y supervisión del progreso en tiempo real para garantizar la mejor experiencia terapéutica.";

    info_title_2 = "Recopilación de Feedback";
    info_description_2 = "Recoge y analiza los comentarios de los niños y terapeutas para mejorar continuamente las actividades y escenarios del videojuego, asegurando una experiencia enriquecedora y efectiva para todos los usuarios."

    // Testimonials
    testimonial_title = "Lo que dicen nuestros usuarios";
    // Team
    team_title = "¿Quieres saber más?";
    team_description = "Descubre cómo VirTDAH puede mejorar las capacidades de concentración de los niños con TDAH y brindarles una mejor calidad de vida. Visita nuestro blog para conocer más sobre las últimas investigaciones y avances en el tratamiento del TDAH."
    
    // Imágenes 
    imageTitle = "assets/images/projects/virtdah/1.jpg";
    imageSteps = "assets/images/projects/virtdah/2.jpg";
    imageInfo_1 = "assets/images/projects/virtdah/3.jpg";
    imageInfo_2 = "assets/images/projects/virtdah/4.jpg";
}
