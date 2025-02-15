package org.example.selfundr.model.entity;


import jakarta.persistence.*;
import lombok.*;
import org.w3c.dom.Text;

import java.util.ArrayList;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Entity
public class Formation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idFormation;
    private String titre;
    private String description;
    private int duree;
    private Float prix;
    private boolean certificat;
    @Column(nullable = false)
    private float noteMoyenne = 0;

    @ElementCollection
    private List<Float> notesUsers = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private TypeFormation typeFormation ;

    @Enumerated(EnumType.STRING)
    private StatutFormation statutFormation;



    @ManyToMany(mappedBy="formations", cascade = CascadeType.ALL)
    private List<User> users;
}
