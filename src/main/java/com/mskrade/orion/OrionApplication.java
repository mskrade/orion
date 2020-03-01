package com.mskrade.orion;

import com.mskrade.orion.models.Card;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;

@SpringBootApplication
public class OrionApplication {

	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}

	@Bean
	public HashMap<String, List<Card>> hashMap() {return new HashMap<>();}

	public static void main(String[] args) {
		SpringApplication.run(OrionApplication.class, args);
	}

}
