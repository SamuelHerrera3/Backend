package co.com.example;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class controladorInicio {
    
    @GetMapping("/")
    public String inicio(){
        log.info("ejecutando el controlador REST");
        return "HolaMundo con Spring";
    }
}