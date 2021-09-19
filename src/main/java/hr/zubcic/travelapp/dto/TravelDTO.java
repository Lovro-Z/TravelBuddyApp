package hr.zubcic.travelapp.dto;

import hr.zubcic.travelapp.model.TransportType;

public class TravelDTO {

    public TravelDTO(Long id, String travelName, String shortDescription, String description, float price, int spaceLeft, TransportType transportation, String imageUrl) {
        this.id = id;
        this.travelName = travelName;
        this.shortDescription = shortDescription;
        this.description = description;
        this.price = price;
        this.spaceLeft = spaceLeft;
        this.transportation = transportation;
        this.imageUrl = imageUrl;
    }

    private Long id;
    private String travelName;
    private String shortDescription;
    private String description;
    private float price;
    private int spaceLeft;
    private TransportType transportation;
    private String imageUrl;

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

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString() {
        return "TravelDTO{" +
                "id=" + id +
                ", travelName='" + travelName + '\'' +
                ", shortDescription='" + shortDescription + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", spaceLeft=" + spaceLeft +
                ", transportation=" + transportation +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }
}
