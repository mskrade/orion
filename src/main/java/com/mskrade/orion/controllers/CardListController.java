package com.mskrade.orion.controllers;

import com.mskrade.orion.models.CardList;
import com.mskrade.orion.models.Set;
import com.mskrade.orion.services.ScryfallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class CardListController {

    @Autowired
    ScryfallService scryfallService;

    @GetMapping("/cardlist/{set}")
    @ResponseBody
    public CardList getCardList(@PathVariable  String set) {
        return scryfallService.getCardList(set);
    }

    @GetMapping("/setlist")
    @ResponseBody
    public List<Set> getSetList() {
        return scryfallService.getSetList();
    }

}