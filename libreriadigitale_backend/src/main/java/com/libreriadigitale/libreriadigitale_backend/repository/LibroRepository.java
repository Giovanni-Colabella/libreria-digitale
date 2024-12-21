package com.libreriadigitale.libreriadigitale_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.libreriadigitale.libreriadigitale_backend.model.Libro;

@Repository
public interface LibroRepository extends JpaRepository<Libro, Integer>{
    
}
