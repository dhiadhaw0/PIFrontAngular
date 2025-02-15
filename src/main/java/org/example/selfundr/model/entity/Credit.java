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
public class Credit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCredit;

    private Float montantDemande;
    private Float montantAccorde;

    private Float paiementMensuel;
    private Float tauxInteret;

    @Enumerated(EnumType.STRING)
    private StatutDemandeCredit statusCredit;

    @Enumerated(EnumType.STRING)
    private StatutCredit creditHistory;

    @Enumerated(EnumType.STRING)
    private PackCredit packCredit;

    private Date dateDebutCredit;
    private Date dateFinCredit;

    @ManyToOne
    private User user;

    @OneToOne
    private Contrat contrat;
}
