package com.mskrade.orion.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;


import java.util.LinkedList;
import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class ScryfallSetList {

    private List<Set> data;

}
