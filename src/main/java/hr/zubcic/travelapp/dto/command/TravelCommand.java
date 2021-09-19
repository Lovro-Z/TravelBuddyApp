package hr.zubcic.travelapp.dto.command;

import hr.zubcic.travelapp.model.TransportType;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;

public class TravelCommand {

    @NotBlank(message = "Travel name must not be empty")
    private String travelName;

    @NotBlank(message = "Short description must not be empty")
    private String shortDescription;

    @NotBlank(message = "Description must not be empty")
    private String description;

    @NotNull(message = "Price must not be null")
    @PositiveOrZero(message = "Price cannot be a negative number")
    private Float price;

    @PositiveOrZero(message = "Space left cannot be a negative number")
    private int spaceLeft;

    private TransportType transportation;

    @NotBlank(message = "Image URL must not be empty")
    private String imageURL;

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

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
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
}
