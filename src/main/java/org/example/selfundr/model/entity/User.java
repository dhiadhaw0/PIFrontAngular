package org.example.selfundr.model.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Entity

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idUser;
    private String nom;
    private String prenom;
    private String email;
    private String motDePasse;
    private int cin;
    private String adresse;
    private String profession;
    private float salaire;
    private int numTel;
    private String matriculeFiscale;
    private Date dateDeNaissance;
    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToOne
    private Portfeuille portfeuille;

    @OneToMany (cascade = CascadeType.ALL, mappedBy="user")
    private List<Credit> credits;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<CompteBancaire> compteBancaires;

    @OneToMany (cascade = CascadeType.ALL, mappedBy="user")
    private List<Reclamation> reclamations;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<Formation> formations;

    @OneToMany (cascade = CascadeType.ALL, mappedBy="user")
    private List<Trasaction> trasactions;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<Investissement> investissements;

}


