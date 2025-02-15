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
public class Investissement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idInvestissement;
    private Float montantInvestissement;
    private Date dateInvestissement;
    private Float pourcentageParticipation;
    private Float rendementEstime;
    private int dureeEngagement;
    private String contratInvestissement;
    @Enumerated(EnumType.STRING)
    private ModePaiement modePaiement;


    @ManyToOne(cascade = CascadeType.ALL)
    private Portfolio portfolio;

    @ManyToMany(mappedBy="investissements", cascade = CascadeType.ALL)
    private List<User> users;
}
