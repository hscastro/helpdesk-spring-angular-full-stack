package com.hscastro.helpdesk.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hscastro.helpdesk.entities.Tecnico;

@Repository
public interface PessoaRepository extends JpaRepository<Tecnico, Integer> {

}
