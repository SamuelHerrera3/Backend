package co.com.example;

import co.com.example.domain.Persona;
import java.util.ArrayList;
import java.util.Arrays;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@Slf4j
public class controladorInicio {
    
    @Value("${index.saludo}")
    private String saludo;
            
    
    @GetMapping("/")
    public String inicio(Model model){
        var mensaje = "Hola con thymeleaf";
        
        var persona1 = new Persona();
        persona1.setNombre("Juan");
        persona1.setApellido("Perez");
        persona1.setEmail("jperez@mil.com");
        persona1.setTelefono("5544321");
        
        var persona2 = new Persona();
        persona2.setNombre("Carla"); 
        persona2.setApellido("Gomez");
        persona2.setEmail("cgomez@mail.com");
        persona2.setTelefono("13228800");
        
//        var personas = new ArrayList();
//        personas.add(persona);
//        personas.add(persona);        
        
        var personas = Arrays.asList(persona1, persona2);
  

        log.info("ejecutando el controlador Sping MVC");
        model.addAttribute("mensaje", mensaje);
        model.addAttribute("saludo", saludo);
        //model.addAttribute("persona", persona);
        model.addAttribute("personas", personas);
        return "index";
        
    }
}