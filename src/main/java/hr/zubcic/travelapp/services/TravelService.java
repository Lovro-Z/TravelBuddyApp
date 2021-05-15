package hr.zubcic.travelapp.services;

import hr.zubcic.travelapp.dto.TravelDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TravelService {

    List<TravelDTO> findAll();

    TravelDTO findByTravelName(String travelName);
}
