
package co.com.example.servicio;

import co.com.example.domain.Persona;
import java.util.List;

public interface PersonaService {
    public List<Persona> ListaPersonas();
    
    public void guardar(Persona persona);
    
    public void eliminar(Persona persona);
        
    public Persona encontrarPersona(Persona persona);

}
