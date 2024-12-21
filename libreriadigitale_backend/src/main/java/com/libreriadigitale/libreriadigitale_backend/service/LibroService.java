package com.libreriadigitale.libreriadigitale_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.libreriadigitale.libreriadigitale_backend.model.Libro;
import com.libreriadigitale.libreriadigitale_backend.repository.LibroRepository;

@Service
public class LibroService {
    
    @Autowired
    private LibroRepository repo;

    public List<Libro> getLibri() {
        return repo.findAll();
    }

    public Libro getLibro(int id) {
        return repo.findById(id).orElse(null);
    }

    public boolean eliminaLibro(int id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return true;
        }
        return false;
    }

    public Libro aggiungiLibro(Libro nuovoLibro) {
        return repo.save(nuovoLibro);
    }

    public Libro aggiornaLibro(int id, Libro libro) {
        if(!repo.existsById(id))
            return null;
        libro.setId(id);
        return repo.save(libro);
    }


}
