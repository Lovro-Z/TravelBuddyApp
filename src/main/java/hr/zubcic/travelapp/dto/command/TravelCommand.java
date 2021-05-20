package hr.zubcic.travelapp.dto.command;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;

public class TravelCommand {

    @NotBlank(message = "Travel name must not be empty")
    private String travelName;

    @NotBlank(message = "Short description must not be empty")
    private String shortDescription;

    @NotNull(message = "Price must not be null")
    @PositiveOrZero(message = "Price cannot be a negative number")
    private float price;

    @PositiveOrZero(message = "Space left cannot be a negative number")
    private int spaceLeft;

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
}
