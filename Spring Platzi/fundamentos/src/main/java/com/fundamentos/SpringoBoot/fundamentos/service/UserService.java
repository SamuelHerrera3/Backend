package com.fundamentos.SpringoBoot.fundamentos.service;

import com.fundamentos.SpringoBoot.fundamentos.entity.User;
import com.fundamentos.SpringoBoot.fundamentos.repository.UserRepository;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.beans.Transient;
import java.util.List;

@Service
public class UserService {

    private final Log LOG = LogFactory.getLog(UserService.class);
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @Transactional
    public void saveTransactional(List<User> users){
        users.stream()
                .peek(user ->LOG.info("usuario insertado: " + user))
                .forEach(userRepository::save);
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public User save(User newUser) {
        return userRepository.save(newUser);
    }

    public void delete(Long id) {
        userRepository.delete(new User(id));
    }

    public User update(User newUser, Long id) {
        return
            userRepository.findById(id)
                    .map(
                            user -> {
                                user.setName(newUser.getName());
                                user.setEmail(newUser.getEmail());
                                user.setBirthDate(newUser.getBirthDate());
                                return userRepository.save(user);
                            }).get();
    }
}
