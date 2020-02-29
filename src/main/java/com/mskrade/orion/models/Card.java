package com.mskrade.orion.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Card {

    private String name;
    private String type_line;
    private String mana_cost;
    private String oracle_text;
    private String flavor_text;
    private String power;
    private String toughness;
    private String loyalty;

    @JsonProperty("typeLine")
    public String getTypeLine() {
        return type_line;
    }

    @JsonProperty("manaCost")
    public String getManaCost() {
        return mana_cost;
    }

    @JsonProperty("oracleText")
    public String getOracleText() {
        return oracle_text;
    }

    @JsonProperty("flavorText")
    public String getFlavorText() {
        return flavor_text;
    }

}
