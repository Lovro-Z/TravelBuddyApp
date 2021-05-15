package hr.zubcic.travelapp.services;

import hr.zubcic.travelapp.dto.TravelDTO;
import hr.zubcic.travelapp.model.Travel;
import hr.zubcic.travelapp.repositories.TravelRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TravelServiceImpl implements TravelService {

    private final TravelRepository travelRepository;

    public TravelServiceImpl(TravelRepository travelRepository) {
        this.travelRepository = travelRepository;
    }

    @Override
    public List<TravelDTO> findAll() {
        return travelRepository.findAll().stream().map(this::mapTravelToDTO).collect(Collectors.toList());
    }

    @Override
    public TravelDTO findByTravelName(String travelName) {
        return travelRepository.findByTravelName(travelName).map(this::mapTravelToDTO).orElse(null);
    }

    private TravelDTO mapTravelToDTO(final Travel travel) {
        return new TravelDTO(travel.getTravelName(), travel.getShortDescription(), travel.getPrice(), travel.getSpaceLeft());
    }
}
