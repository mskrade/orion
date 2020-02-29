package com.mskrade.orion.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.time.LocalDate;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Set {

    private String code;
    private String name;
    @JsonProperty("set_type")
    private String setType;
    @JsonProperty("released_at")
    private LocalDate releaseDate;

    @JsonProperty("setType")
    public String getSetType() {
        return setType;
    }

    @JsonProperty("releaseDate")
    public LocalDate getReleaseDate() {
        return releaseDate;
    }

}