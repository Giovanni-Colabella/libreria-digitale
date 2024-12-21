package com.libreriadigitale.libreriadigitale_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.libreriadigitale.libreriadigitale_backend.model.Libro;
import com.libreriadigitale.libreriadigitale_backend.service.LibroService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class LibroController {
    
    @Autowired
    private LibroService service;

    @RequestMapping("/catalogo")
    public ResponseEntity<List<Libro>> getLibri() {
        return new ResponseEntity<>(service.getLibri(), HttpStatus.OK);
    }

    @RequestMapping("/catalogo/{id}")
    public ResponseEntity<Libro> getLibro(@PathVariable int id) {
        return new ResponseEntity<>(service.getLibro(id), HttpStatus.OK);
    }

    @PostMapping("/catalogo")
    public ResponseEntity<Libro> aggiungiLibro(@RequestBody Libro nuovoLibro) {
        Libro libroSalvato = service.aggiungiLibro(nuovoLibro);
        return new ResponseEntity<>(libroSalvato, HttpStatus.CREATED);
    }

    @PutMapping("/catalogo/{id}")
    public ResponseEntity<Libro> aggiornaLibro(@PathVariable int id, @RequestBody Libro libro) {
        Libro libroAggiornato = service.aggiornaLibro(id, libro);
        if (libroAggiornato == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(libroAggiornato);
    }

    @DeleteMapping("/catalogo/{id}")
    public ResponseEntity<?> deleteLibro(@PathVariable int id) {
        try {
            boolean eliminato = service.eliminaLibro(id);

            if (eliminato) {
                return ResponseEntity.ok("Libro eliminato con successo.");
            } else {
                return ResponseEntity.status(404).body("Libro non trovato.");
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Errore interno del server.");
        }
    }

}
