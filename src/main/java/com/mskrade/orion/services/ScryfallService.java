package com.mskrade.orion.services;

import com.mskrade.orion.models.CardList;
import com.mskrade.orion.models.ScryfallSetList;
import com.mskrade.orion.models.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ScryfallService {

    @Autowired
    private RestTemplate restTemplate;

    public CardList getCardlist(String set) {
        return restTemplate.getForObject("https://api.scryfall.com/cards/search?q=e:" + set, CardList.class);
    }

    public List<Set> getSetList() {
        ScryfallSetList scryfallSetList = restTemplate.getForObject("https://api.scryfall.com/sets", ScryfallSetList.class);
        List<Set> clientSetList = scryfallSetList.getData().stream()
                .filter(set ->
                        "core".equalsIgnoreCase(set.getSetType())
                        || "expansion".equalsIgnoreCase(set.getSetType())
                        || "funny".equalsIgnoreCase(set.getSetType())
                )
                .sorted((Comparator.comparing(Set::getReleaseDate)))
                .collect(Collectors.toList());
        return clientSetList;
    }
}
