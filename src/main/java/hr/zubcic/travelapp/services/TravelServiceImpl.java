package hr.zubcic.travelapp.services;

import hr.zubcic.travelapp.dto.TravelDTO;
import hr.zubcic.travelapp.dto.command.TravelCommand;
import hr.zubcic.travelapp.model.Travel;
import hr.zubcic.travelapp.repositories.TravelRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
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
    public TravelDTO findByTravelId(Long id) {
        return travelRepository.findById(id).map(this::mapTravelToDTO).orElse(null);
    }

    @Override
    @Transactional
    public Optional<TravelDTO> update(Long id, TravelCommand updateTravel) {
        Travel travelToUpdate = travelRepository.findById(id).orElse(null);
        if (travelToUpdate != null) {
            travelToUpdate.setTravelName(updateTravel.getTravelName());
            travelToUpdate.setShortDescription(updateTravel.getShortDescription());
            travelToUpdate.setPrice(updateTravel.getPrice());
            travelToUpdate.setSpaceLeft(updateTravel.getSpaceLeft());
            return Optional.of(mapTravelToDTO(travelToUpdate));
        }
        return Optional.empty();
    }

    @Override
    public void deleteTravel(Long id) {
        Travel travel = travelRepository.findById(id).orElse(null);
        travelRepository.delete(travel);
    }

    private TravelDTO mapTravelToDTO(final Travel travel) {
        return new TravelDTO(travel.getId(), travel.getTravelName(), travel.getShortDescription(), travel.getPrice(), travel.getSpaceLeft());
    }
}
