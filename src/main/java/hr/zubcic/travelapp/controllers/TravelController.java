package hr.zubcic.travelapp.controllers;

import hr.zubcic.travelapp.dto.TravelDTO;
import hr.zubcic.travelapp.dto.command.TravelCommand;
import hr.zubcic.travelapp.services.TravelService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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

    @GetMapping("/{id}")
    public TravelDTO getTravelByName(@PathVariable final Long id) {
        return travelService.findByTravelId(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TravelDTO> update(@PathVariable Long id, @Valid @RequestBody final TravelCommand updateTravel) {
        return travelService.update(id, updateTravel)
                .map(ResponseEntity::ok)
                .orElseGet(
                        () -> ResponseEntity.notFound().build()
                );
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        travelService.deleteTravel(id);
    }
}
