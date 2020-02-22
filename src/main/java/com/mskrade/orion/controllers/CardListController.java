package com.mskrade.orion.controllers;

import com.mskrade.orion.model.CardList;
import com.mskrade.orion.services.ScryfallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CardListController {

    @Autowired
    ScryfallService scryfallService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/cardlist")
    @ResponseBody
    public CardList getCardlist(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        return scryfallService.getCardlist();
    }

}