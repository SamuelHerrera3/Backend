package com.fundamentos.SpringoBoot.fundamentos.bean;

public class MyBeanImpl implements MyBean{
    @Override
    public void print() {
        System.out.println("Hola desde mi implementacion propia del bean");
    }
}
