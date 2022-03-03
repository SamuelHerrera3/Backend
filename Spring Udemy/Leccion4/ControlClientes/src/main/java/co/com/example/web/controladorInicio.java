package co.com.example.web;

import co.com.example.servicio.PersonaService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@Slf4j
public class controladorInicio {
    
    @Autowired
    private PersonaService personaService; 
    @GetMapping("/")
    public String inicio(Model model){
        
        var personas = personaService.ListaPersonas();
        
        log.info("ejecutando el controlador Sping MVC");
        model.addAttribute("personas", personas);
        return "index";
        
    }
}