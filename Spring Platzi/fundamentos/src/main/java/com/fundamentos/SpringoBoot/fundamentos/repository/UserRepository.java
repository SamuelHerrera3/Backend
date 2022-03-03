package com.fundamentos.SpringoBoot.fundamentos.repository;

import com.fundamentos.SpringoBoot.fundamentos.entity.User;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends PagingAndSortingRepository<User, Long> {
    @Query("Select u from User u WHERE u.email=?1")
    Optional<User> findByUserEmail(String email);

    List<User> findAll();

}
