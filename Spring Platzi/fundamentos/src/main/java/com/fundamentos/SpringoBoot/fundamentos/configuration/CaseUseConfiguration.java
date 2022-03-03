package com.fundamentos.SpringoBoot.fundamentos.configuration;

import com.fundamentos.SpringoBoot.fundamentos.caseuse.GetUser;
import com.fundamentos.SpringoBoot.fundamentos.caseuse.GetUserImplement;
import com.fundamentos.SpringoBoot.fundamentos.service.UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CaseUseConfiguration {
    @Bean
    GetUser getUser(UserService userService){
        return new GetUserImplement(userService);
    }
}
