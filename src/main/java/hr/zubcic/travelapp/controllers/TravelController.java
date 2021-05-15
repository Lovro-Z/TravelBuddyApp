package hr.zubcic.travelapp.controllers;

import hr.zubcic.travelapp.dto.TravelDTO;
import hr.zubcic.travelapp.services.TravelService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("travel")
public class TravelController {

    private final TravelService travelService;

    public TravelController(TravelService travelService) {
        this.travelService = travelService;
    }

    @GetMapping
    public List<TravelDTO> getAllTravels() {
        return travelService.findAll();
    }

    @GetMapping("/{travelName}")
    public TravelDTO getTravelByName(@PathVariable final String travelName) {
        return travelService.findByTravelName(travelName);
    }
}
