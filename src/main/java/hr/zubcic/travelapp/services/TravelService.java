package hr.zubcic.travelapp.services;

import hr.zubcic.travelapp.dto.TravelDTO;
import hr.zubcic.travelapp.model.Travel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface TravelService {

    List<TravelDTO> findAll();

    TravelDTO findByTravelId(Long id);

    //TODO add travelCommand with valdation(add validation dependency)
    Optional<TravelDTO> update(Long id, Travel updateTravel);

    void deleteTravel(Long id);
}
