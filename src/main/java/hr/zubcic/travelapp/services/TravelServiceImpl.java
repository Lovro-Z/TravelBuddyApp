package hr.zubcic.travelapp.services;

import hr.zubcic.travelapp.dto.TravelDTO;
import hr.zubcic.travelapp.dto.command.TravelCommand;
import hr.zubcic.travelapp.model.TransportType;
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
    public Optional<TravelDTO> save(final TravelCommand command) {
        Travel travel = travelRepository.save(mapCommandToTravel(command));
        return Optional.of(mapTravelToDTO(travel));
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
            travelToUpdate.setTransportation(updateTravel.getTransportation());
            travelToUpdate.setDescription(updateTravel.getDescription());
            travelToUpdate.setImageURL(updateTravel.getImageURL());
            return Optional.of(mapTravelToDTO(travelToUpdate));
        }
        return Optional.empty();
    }

    @Override
    public void deleteTravel(Long id) {
        Travel travel = travelRepository.findById(id).orElse(null);
        travelRepository.delete(travel);
    }

    @Override
    public List<TravelDTO> filterTravels(String text, Double price, TransportType transportation) {
        return travelRepository.findAll().stream()
                .filter(travel -> (text == null || (!text.isBlank()) && (travel.getTravelName().toLowerCase().contains(text.toLowerCase()) || travel.getShortDescription().toLowerCase().contains(text.toLowerCase()) || travel.getDescription().toLowerCase().contains(text.toLowerCase()))))
                .filter(travel -> (price == null) || (price > 0 && travel.getPrice() <= price))
                .filter(travel -> ((transportation == null) || (transportation.equals(travel.getTransportation()))))
                .map(this::mapTravelToDTO)
                .collect(Collectors.toList());
    }

    private TravelDTO mapTravelToDTO(final Travel travel) {
        return new TravelDTO(travel.getId(), travel.getTravelName(), travel.getShortDescription(), travel.getDescription(), travel.getPrice(), travel.getSpaceLeft(), travel.getTransportation(), travel.getImageURL());
    }

    private Travel mapCommandToTravel(TravelCommand command) {
        return new Travel(command.getTravelName(), command.getShortDescription(), command.getDescription(), command.getPrice(), command.getSpaceLeft(), command.getTransportation(), command.getImageURL());
    }
}
