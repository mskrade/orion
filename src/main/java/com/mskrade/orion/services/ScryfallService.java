package com.mskrade.orion.services;

import com.mskrade.orion.models.Card;
import com.mskrade.orion.models.CardList;
import com.mskrade.orion.models.ScryfallSetList;
import com.mskrade.orion.models.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ScryfallService {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private HashMap<String, List<Card>> cardCache;

    private static final String BASE_CARD_URL = "https://api.scryfall.com/cards/search?q=e:";
    private static final String SET_URL = "https://api.scryfall.com/sets";

    public List<Card> getCardList(String set) {
        if (cardCache.containsKey(set)) {
            return cardCache.get(set);
        } else {
            CardList initialList = restTemplate.getForObject(BASE_CARD_URL + set, CardList.class);
            List<CardList> pages = getAllPages(initialList, set);
            List<Card> fullSet = combinePages(pages);
            cardCache.put(set, fullSet);
            return fullSet;
        }
    }

    private List<CardList> getAllPages(CardList cardList, String set) {
        List<CardList> pages = new LinkedList<>();
        pages.add(cardList);
        int nextPage = 2;
        while (cardList.getHasMore()) {
            cardList = restTemplate.getForObject(BASE_CARD_URL + set + "&page=" + nextPage, CardList.class);
            pages.add(cardList);
            nextPage++;
        }
        return pages;
    }

    private List<Card> combinePages(List<CardList> pages) {
        List<Card> fullSet = new LinkedList<>();
        for (CardList page: pages) {
            fullSet.addAll(page.getData());
        }
        return fullSet;
    }

    public List<Set> getSetList() {
        ScryfallSetList scryfallSetList = restTemplate.getForObject(SET_URL, ScryfallSetList.class);
        return scryfallSetList.getData().stream()
                .filter(set ->
                        "core".equalsIgnoreCase(set.getSetType())
                        || "expansion".equalsIgnoreCase(set.getSetType())
                        || "funny".equalsIgnoreCase(set.getSetType())
                )
                .sorted((Comparator.comparing(Set::getReleaseDate)))
                .collect(Collectors.toList());
    }
}
