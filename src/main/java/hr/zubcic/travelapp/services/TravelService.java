package hr.zubcic.travelapp.services;

import hr.zubcic.travelapp.dto.TravelDTO;
import hr.zubcic.travelapp.dto.command.TravelCommand;
import hr.zubcic.travelapp.model.TransportType;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface TravelService {

    List<TravelDTO> findAll();

    TravelDTO findByTravelId(Long id);

    Optional<TravelDTO> save(TravelCommand command);

    Optional<TravelDTO> update(Long id, TravelCommand updateTravel);

    void deleteTravel(Long id);

    List<TravelDTO> filterTravels(String text, Double price, TransportType transportation);
}
