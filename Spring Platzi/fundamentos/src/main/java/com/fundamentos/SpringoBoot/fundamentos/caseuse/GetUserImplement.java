package com.fundamentos.SpringoBoot.fundamentos.caseuse;

import com.fundamentos.SpringoBoot.fundamentos.entity.User;
import com.fundamentos.SpringoBoot.fundamentos.service.UserService;

import java.util.List;

public class GetUserImplement implements GetUser {

    private UserService userService;

    public GetUserImplement(UserService userService) {
        this.userService = userService;
    }

    @Override
    public List<User> getAll() {

        return userService.getAllUsers();
    }
}
