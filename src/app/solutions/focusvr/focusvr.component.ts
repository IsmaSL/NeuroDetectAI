import { Component } from '@angular/core';
import { ContactUsComponent } from '../../shared/components/contact-us/contact-us.component';

@Component({
    selector: 'app-focusvr',
    standalone: true,
    imports: [
        ContactUsComponent
    ],
    templateUrl: './focusvr.component.html',
    styleUrl: './focusvr.component.scss'
})
export class FocusvrComponent {
    // Header
    title = "FOCUSVR";
    description = "FOCUSVR es una innovadora aplicación de realidad virtual diseñada para mejorar la concentración en niños con TDAH. Utiliza técnicas de atención sostenida y entornos virtuales interactivos para ayudar a los niños a desarrollar habilidades de concentración, mejorar su rendimiento escolar y sus habilidades de comunicación."

    // Features
    subtitle_1 = "Mejora tu concentración usando FOCUSVR";

    icon_feature_1 = "bi bi-eye";
    feature_title_1 = "Interfaz interactiva";
    description_feature_1 = "FOCUSVR ofrece una interfaz inmersiva que permite a los niños con TDAH mejorar su concentración a través de escenarios virtuales interactivos.";

    icon_feature_2 = "bi bi-person-workspace";
    feature_title_2 = "Atención Sostenida";
    description_feature_2 = "Utiliza técnicas de atención sostenida para ayudar a los niños a desarrollar la capacidad de mantener la atención en tareas largas y aburridas, mejorando su rendimiento escolar y habilidades de comunicación.";

    icon_feature_3 = "bi bi-headset-vr";
    feature_title_3 = "Realidad Virtual";
    description_feature_3 = "La realidad virtual se convierte en un aliado en el tratamiento del TDAH, ofreciendo terapias innovadoras que mejoran la atención, reducen la impulsividad y brindan una experiencia atractiva y efectiva.";

    // Steps
    step_title_1 = "Regístrate";
    step_description_1 = "Crea una cuenta para acceder a FOCUSVR y comenzar a mejorar la concentración de los niños con TDAH a través de actividades virtuales divertidas y educativas.";

    step_title_2 = "Crea un Perfil";
    step_description_2 = "Gestiona los perfiles de los niños, incluyendo el historial de actividades y progresos para un seguimiento detallado y personalizado.";

    step_title_3 = "Disfruta de la App";
    step_description_3 = "Sumérgete en el mundo de FOCUSVR y ayuda a los niños a desarrollar habilidades de concentración mientras se divierten en entornos virtuales diseñados específicamente para ellos.";

    // More Info
    info_title_1 = "Comunicación sin barreras";
    info_description_1 = "FOCUSVR permite una comunicación efectiva entre el terapeuta y el niño, facilitando la supervisión y el seguimiento del progreso en tiempo real, asegurando siempre la mejor experiencia terapéutica.";

    info_title_2 = "Recopila Retroalimentación";
    info_description_2 = "Recoge y analiza comentarios de los niños y terapeutas para mejorar continuamente las actividades y escenarios virtuales, asegurando una experiencia enriquecedora y efectiva para todos los usuarios.";

    // Testimonials
    testimonial_title = "Lo que dicen nuestros usuarios";
    // Team
    team_title = "¿Quieres saber más?";
    team_description = "Descubre cómo FOCUSVR puede mejorar las capacidades de concentración de los niños con TDAH y brindarles una mejor calidad de vida. Visita nuestro blog para conocer más sobre las últimas investigaciones y avances en el tratamiento del TDAH.";

    // Imágenes 
    imageTitle = "assets/images/projects/focusvr/1.jpg";
    imageSteps = "assets/images/projects/focusvr/2.jpg";
    imageInfo_1 = "assets/images/projects/focusvr/3.jpg";
    imageInfo_2 = "assets/images/projects/focusvr/4.jpg";
}
