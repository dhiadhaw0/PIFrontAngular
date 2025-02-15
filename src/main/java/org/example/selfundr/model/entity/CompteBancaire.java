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
public class CompteBancaire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCompte;
    private Long Rib;
    private Long IBAN;
    private Float solde;
    @Enumerated(EnumType.STRING)
    private TypeCompteBancaire typeCompteBancaire;


    @ManyToMany(mappedBy="compteBancaires", cascade = CascadeType.ALL)
    private List<User> users;
}

