package hr.zubcic.travelapp.services;

import hr.zubcic.travelapp.dto.TravelDTO;
import hr.zubcic.travelapp.dto.command.TravelCommand;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface TravelService {

    List<TravelDTO> findAll();

    TravelDTO findByTravelId(Long id);

    Optional<TravelDTO> update(Long id, TravelCommand updateTravel);

    void deleteTravel(Long id);
}
