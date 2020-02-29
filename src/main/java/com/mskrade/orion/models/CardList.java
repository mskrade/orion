package com.mskrade.orion.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;

import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class CardList {

    @JsonAlias("has_more")
    private Boolean hasMore;
    @JsonAlias("next_page")
    private String nextPage;
    private List<Card> data;
}
