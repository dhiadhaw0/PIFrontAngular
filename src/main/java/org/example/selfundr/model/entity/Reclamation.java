package org.example.selfundr.model.entity;

import jakarta.persistence.*;
import lombok.*;


@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Entity
public class Reclamation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idReclam;
    private String sujet;
    private String description;
    @Enumerated(EnumType.STRING)
    private StatutReclam statutReclam;

    @ManyToOne
    private User user;
}
