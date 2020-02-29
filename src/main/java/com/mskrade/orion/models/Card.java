package com.mskrade.orion.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Card {

    private String name;
    @JsonAlias("type_line")
    private String typeLine;
    @JsonAlias("mana_cost")
    private String manaCost;
    @JsonAlias("oracle_text")
    private String oracleText;
    @JsonAlias("flavor_text")
    private String flavorText;
    private String power;
    private String toughness;
    private String loyalty;

}
