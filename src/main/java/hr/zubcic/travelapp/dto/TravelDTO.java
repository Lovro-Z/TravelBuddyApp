package hr.zubcic.travelapp.dto;

public class TravelDTO {

    public TravelDTO(String travelName, String shortDescription, float price, int spaceLeft) {
        this.travelName = travelName;
        this.shortDescription = shortDescription;
        this.price = price;
        this.spaceLeft = spaceLeft;
    }

    private String travelName;
    private String shortDescription;
    private float price;
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

    @Override
    public String toString() {
        return "TravelDTO{" +
                "travelName='" + travelName + '\'' +
                ", shortDescription='" + shortDescription + '\'' +
                ", price=" + price +
                ", spaceLeft=" + spaceLeft +
                '}';
    }
}
