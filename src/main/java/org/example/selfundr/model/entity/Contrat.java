package org.example.selfundr.model.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;


@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Getter
@Setter
public class Contrat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idContrat;

    private Float montantAccorde;
    private Float tauxInteret;
    private int duree;
    private Date dateSignature;
    private float penaliteRetard;
    private String signatureElectronique;
    private String fichierContrat;


    @OneToOne(mappedBy= "contrat")
    private Credit credit;

    @ManyToOne
    private Garant garant;
}
