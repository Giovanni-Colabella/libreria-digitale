package com.libreriadigitale.libreriadigitale_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.libreriadigitale.libreriadigitale_backend.model.Libro;

@Repository
public interface LibroRepository extends JpaRepository<Libro, Integer>{
    
	//JPQL
	@Query("SELECT l FROM Libro l WHERE " +
	"LOWER(l.titolo) LIKE LOWER(CONCAT('%', :keyword, '%'))")
	List<Libro> cercaLibri(String keyword);

}