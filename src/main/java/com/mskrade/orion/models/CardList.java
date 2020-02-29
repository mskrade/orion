package com.mskrade.orion.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class CardList {

    @JsonProperty("has_more")
    private Boolean hasMore;
    @JsonProperty("next_page")
    private String nextPage;
    private List<Card> data;
}
