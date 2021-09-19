package hr.zubcic.travelapp.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Travel {

    public Travel(String travelName, String shortDescription, String description, float price, int spaceLeft, TransportType transportation, String imageURL) {
        this.travelName = travelName;
        this.shortDescription = shortDescription;
        this.description = description;
        this.price = price;
        this.spaceLeft = spaceLeft;
        this.transportation = transportation;
        this.imageURL = imageURL;
    }

    public Travel() {
    }

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "travel_name")
    private String travelName;

    @Column(name = "short_description")
    private String shortDescription;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private float price;

    @Column(name = "space_left")
    private int spaceLeft;

    @Column(name = "transportation")
    @Enumerated(EnumType.STRING)
    private TransportType transportation;

    @Column(name = "image_url")
    private String imageURL;

    @OneToMany(mappedBy = "travel", cascade = CascadeType.ALL)
    private List<User> users;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTravelName() {
        return travelName;
    }

    public void setTravelName(String travelName) {
        this.travelName = travelName;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getSpaceLeft() {
        return spaceLeft;
    }

    public void setSpaceLeft(int spaceLeft) {
        this.spaceLeft = spaceLeft;
    }

    public TransportType getTransportation() {
        return transportation;
    }

    public void setTransportation(TransportType transportation) {
        this.transportation = transportation;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    @Override
    public String toString() {
        return "Travel{" +
                "id=" + id +
                ", travelName='" + travelName + '\'' +
                ", shortDescription='" + shortDescription + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", spaceLeft=" + spaceLeft +
                ", transportation=" + transportation +
                ", imageURL='" + imageURL + '\'' +
                '}';
    }
}
