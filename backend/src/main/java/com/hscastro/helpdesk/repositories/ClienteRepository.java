package com.hscastro.helpdesk.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hscastro.helpdesk.entities.Pessoa;

@Repository
public interface ClienteRepository extends JpaRepository<Pessoa, Integer> {

}
