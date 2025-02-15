package org.example.selfundr.model.entity;


import jakarta.persistence.*;
import lombok.*;

import java.util.Date;


@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Entity
public class Portfeuille {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPortefeuille;
    private int idUser;
    private Float valeurTotale;
    private Float montantEpargne;
    private Float montantInvestie;
    private Float soldeDisponible;
    private Float montantCredit;
    private Float rendementPrevisionnel;
    private Date dateCreation;
    private String scoreFinancier;
    private String statutPortefeuille;

    @Enumerated(EnumType.STRING)
    private StatutPortfeuille statutPortfeuille;

    @OneToOne(mappedBy= "portfeuille")
    private User user;

}
