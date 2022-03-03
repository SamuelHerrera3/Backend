package com.fundamentos.SpringoBoot.fundamentos;

import com.fundamentos.SpringoBoot.fundamentos.bean.MyBean;
import com.fundamentos.SpringoBoot.fundamentos.bean.MyBeanWithDependency;
import com.fundamentos.SpringoBoot.fundamentos.component.ComponentDependency;
import com.fundamentos.SpringoBoot.fundamentos.entity.User;
import com.fundamentos.SpringoBoot.fundamentos.repository.UserRepository;
import com.fundamentos.SpringoBoot.fundamentos.service.UserService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class FundamentosApplication implements CommandLineRunner {

	Log LOGGER = LogFactory.getLog(FundamentosApplication.class);

	private ComponentDependency componentDependency;
	private MyBean myBean;
	private MyBeanWithDependency myBeanWithDependency;
	private UserRepository userRepository;
	private UserService userService;

	public FundamentosApplication(@Qualifier("componentTwoImplement") ComponentDependency componentDependency, MyBean myBean, MyBeanWithDependency myBeanWithDependency, UserRepository userRepository, UserService userService){
		this.componentDependency = componentDependency;
		this.myBean = myBean;
		this.myBeanWithDependency = myBeanWithDependency;
		this.userRepository = userRepository;
		this.userService = userService;
	}

	public static void main(String[] args) {
		SpringApplication.run(FundamentosApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Save();
		saveWithErrorTransactional();
	}

	private void Save(){
		User user1 = new User("Jhon", "Jhon@mail.com", LocalDate.of(2000,03,20));
		User user2 = new User("Carla", "Carla@mail.com", LocalDate.of(2000,9,1));
		User user3 = new User("Crhis", "Crhis@mail.com", LocalDate.of(2000,8,22));
		List<User> list = Arrays.asList(user1, user2, user3);
		list.stream().forEach(userRepository::save);

	}

	private void saveWithErrorTransactional(){
		User test1 = new User("TestTransaction1", "TestTransactional1@mail.com",LocalDate.now());
		User test2 = new User("TestTransaction2", "TestTransactional2@mail.com",LocalDate.now());
		User test3 = new User("TestTransaction3", "TestTransactional3@mail.com",LocalDate.now());

		List<User> users = Arrays.asList(test1, test2, test3);
		try{
			userService.saveTransactional(users);
		}catch (Exception e){
			LOGGER.error("Esta es una exception dentro del metodo transactional" + e);
		}
		userService.getAllUsers().stream()
				.forEach( user ->
						LOGGER.info("Este es el usuario dentro del metodo transactional" + user));

	}
}
