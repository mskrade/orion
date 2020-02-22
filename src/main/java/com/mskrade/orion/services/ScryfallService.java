package com.mskrade.orion.services;

import com.mskrade.orion.model.CardList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ScryfallService {

    @Autowired
    private RestTemplate restTemplate;

    public CardList getCardlist () {
        return restTemplate.getForObject("https://api.scryfall.com/cards/search?q=e:war+cmc>5", CardList.class);
    }
}
