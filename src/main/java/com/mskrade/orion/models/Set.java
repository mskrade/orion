package com.mskrade.orion.models;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.time.LocalDate;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Set {

    private String code;
    private String name;
    @JsonAlias("set_type")
    private String setType;
    @JsonAlias("released_at")
    private LocalDate releaseDate;

}