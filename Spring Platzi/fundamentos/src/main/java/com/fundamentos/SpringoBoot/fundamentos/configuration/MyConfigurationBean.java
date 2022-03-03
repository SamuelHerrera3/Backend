package com.fundamentos.SpringoBoot.fundamentos.configuration;

import com.fundamentos.SpringoBoot.fundamentos.bean.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MyConfigurationBean {

    @Bean
    public MyBean beanOperation(){
        return new MyBeanImpl2();
    }

    @Bean
    public MyOperation beanOperationOperation(){
        return new MyOperationImpl();
    }

    @Bean
    public MyBeanWithDependency beanOperationWithDependency(MyOperation myOperation){
        return new MyBeanWithDependencyImpl(myOperation);
    }
}
