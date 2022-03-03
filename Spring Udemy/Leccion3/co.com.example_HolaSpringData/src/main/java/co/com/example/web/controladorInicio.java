package co.com.example.web;

import co.com.example.dao.PersonaDao;
import co.com.example.domain.Persona;
import java.util.ArrayList;
import java.util.Arrays;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@Slf4j
public class controladorInicio {
    
    @Autowired
    private PersonaDao personaDao; 
    @GetMapping("/")
    public String inicio(Model model){
        
        var personas = personaDao.findAll();
        
        log.info("ejecutando el controlador Sping MVC");
        model.addAttribute("personas", personas);
        return "index";
        
    }
}