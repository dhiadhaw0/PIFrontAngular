package org.example.selfundr.model.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Entity
public class Garant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idGarant;
    private String nom;
    private String prenom;
    private String CIN;
    private Float salaire;
    @Enumerated(EnumType.STRING)
    private TypeGarant typeGarant;

    @OneToMany(cascade = CascadeType.ALL, mappedBy="garant")
    private List<Contrat> contrats;
}
