package hr.zubcic.travelapp.controllers;

import hr.zubcic.travelapp.dto.TravelDTO;
import hr.zubcic.travelapp.dto.command.TravelCommand;
import hr.zubcic.travelapp.model.TransportType;
import hr.zubcic.travelapp.services.TravelService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("travel")
@CrossOrigin(origins = "http://localhost:3000")
public class TravelController {

    private final TravelService travelService;

    public TravelController(TravelService travelService) {
        this.travelService = travelService;
    }

    @GetMapping
    public List<TravelDTO> getAllTravels(@RequestParam(required = false) String text, @RequestParam(required = false) Double price, @RequestParam(required = false) TransportType transportation) {
        return travelService.filterTravels(text, price, transportation);
    }

    @GetMapping("/{id}")
    public TravelDTO getTravelByName(@PathVariable final Long id) {
        return travelService.findByTravelId(id);
    }

    @Secured("ROLE_ADMIN")
    @PostMapping
    public ResponseEntity<TravelDTO> save(@Valid @RequestBody final TravelCommand command) {
        return travelService.save(command)
                .map(
                        travelDTO -> ResponseEntity
                                .status(HttpStatus.CREATED)
                                .body(travelDTO)
                )
                .orElseGet(
                        () -> ResponseEntity
                                .status(HttpStatus.CONFLICT)
                                .build()
                );
    }

    @Secured("ROLE_ADMIN")
    @PutMapping("/{id}")
    public ResponseEntity<TravelDTO> update(@PathVariable Long id, @Valid @RequestBody final TravelCommand updateTravel) {
        return travelService.update(id, updateTravel)
                .map(ResponseEntity::ok)
                .orElseGet(
                        () -> ResponseEntity.notFound().build()
                );
    }

    @Secured("ROLE_ADMIN")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        travelService.deleteTravel(id);
    }
}
