package com.mskrade.orion.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Card {

    private String name;
    @JsonProperty("mana_cost")
    private String manaCost;
    @JsonProperty("oracle_text")
    private String oracleText;
    private int power;
    private int toughness;
    @JsonProperty("flavor_text")
    private String flavorText;

}
