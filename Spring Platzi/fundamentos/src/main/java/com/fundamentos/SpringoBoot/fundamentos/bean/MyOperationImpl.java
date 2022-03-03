package com.fundamentos.SpringoBoot.fundamentos.bean;

public class MyOperationImpl implements MyOperation{

    @Override
    public int sum(int number) {
        return number+1;
    }
}
