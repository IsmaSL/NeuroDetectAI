import { Component } from '@angular/core';
import { ContactUsComponent } from '../../shared/components/contact-us/contact-us.component';

@Component({
    selector: 'app-hshop',
    standalone: true,
    imports: [
        ContactUsComponent
    ],
    templateUrl: './hshop.component.html',
    styleUrl: './hshop.component.scss'
})
export class HshopComponent {
    // Header
    title = "Happy Shop";
    description = "Happy Shop es una aplicación diseñada para mejorar el nivel de concentración en niños con Trastorno por Déficit de Atención e Hiperactividad (TDAH) utilizando técnicas de memoria. A través de actividades lúdicas que fortalecen la memoria de trabajo, Happy Shop ofrece una herramienta efectiva y motivadora para apoyar el tratamiento de niños con TDAH, facilitando la terapia de manera divertida y accesible."

    // Features
    subtitle_1 = "Aumenta la concentración con Happy Shop";

    icon_feature_1 = "bi bi-memory";
    feature_title_1 = "Técnicas de Memoria";
    description_feature_1 = "Happy Shop utiliza actividades basadas en la memoria de trabajo para ayudar a los niños con TDAH a mejorar su capacidad de concentración de manera efectiva y entretenida.";

    icon_feature_2 = "bi bi-gamepad";
    feature_title_2 = "Aprendizaje Lúdico";
    description_feature_2 = "El videojuego está diseñado para que los niños aprendan y mejoren su memoria mientras juegan, haciéndolo más atractivo y motivador para ellos.";

    icon_feature_3 = "bi bi-heart";
    feature_title_3 = "Apoyo Terapéutico";
    description_feature_3 = "Happy Shop se convierte en un aliado para los especialistas, proporcionando una herramienta adicional para el tratamiento de niños con TDAH, complementando las terapias tradicionales de manera accesible y divertida.";

    // Steps
    step_title_1 = "Regístrate";
    step_description_1 = "Crea una cuenta para acceder a Happy Shop y comenzar a mejorar la concentración de los niños con TDAH a través de actividades lúdicas y educativas.";

    step_title_2 = "Crea un Perfil";
    step_description_2 = "Gestiona los perfiles de los niños, incluyendo el historial de actividades y progresos para un seguimiento detallado y personalizado.";

    step_title_3 = "Disfruta de la App";
    step_description_3 = "Sumérgete en el mundo de Happy Shop y ayuda a los niños a desarrollar habilidades de concentración mientras se divierten en entornos diseñados específicamente para ellos.";

    // More Info
    info_title_1 = "Comunicación Eficaz";
    info_description_1 = "Happy Shop facilita una comunicación fluida entre el terapeuta y el niño, permitiendo un seguimiento y supervisión del progreso en tiempo real para garantizar la mejor experiencia terapéutica.";
    
    info_title_2 = "Recopilación de Feedback";
    info_description_2 = "Recoge y analiza los comentarios de los niños y terapeutas para mejorar continuamente las actividades y escenarios del videojuego, asegurando una experiencia enriquecedora y efectiva para todos los usuarios.";
    
    // Testimonials
    testimonial_title = "Lo que dicen nuestros usuarios";
    // Team
    team_title = "¿Quieres saber más?";
    team_description = "Descubre cómo Happy Shop puede mejorar las capacidades de concentración de los niños con TDAH y brindarles una mejor calidad de vida. Visita nuestro blog para conocer más sobre las últimas investigaciones y avances en el tratamiento del TDAH.";
    
    // Imágenes 
    imageTitle = "assets/images/projects/hshop/1.jpg";
    imageSteps = "assets/images/projects/hshop/2.jpg";
    imageInfo_1 = "assets/images/projects/hshop/3.jpg";
    imageInfo_2 = "assets/images/projects/hshop/4.jpg";
}
