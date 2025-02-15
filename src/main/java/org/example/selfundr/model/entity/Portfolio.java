package org.example.selfundr.model.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.Year;
import java.util.Date;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Entity
public class Portfolio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProjet;
    private String titreProjet;
    private String descriptionProjet;
    private Float montantRecherche;
    private Float montantCollecte;
    private Date dateCreation;
    private Float rendementPrevisionnel;
    @Enumerated(EnumType.STRING)
    private StatutProjet statutProjet;


    @ManyToOne
    private User user ;



}
