package hr.zubcic.travelapp.repositories;

import hr.zubcic.travelapp.model.Travel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TravelRepository extends JpaRepository<Travel, Long> {

}
