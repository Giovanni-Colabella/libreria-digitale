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
        if (libro == null) {
            throw new IllegalArgumentException("Il libro fornito è null");
        }
        if (!repo.existsById(id)) {
            throw new IllegalArgumentException("Libro con id " + id + " non trovato");
        }
        libro.setId(id);
        try {
            return repo.save(libro);
        } catch (Exception e) {
            throw new RuntimeException("Errore durante l'aggiornamento del libro", e);
        }
    }

	public List<Libro> cercaLibri(String keyword) {
		return repo.cercaLibri(keyword);
	}

}
