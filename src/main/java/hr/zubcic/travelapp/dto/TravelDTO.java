package hr.zubcic.travelapp.dto;

public class TravelDTO {

    public TravelDTO(Long id, String travelName, String shortDescription, float price, int spaceLeft) {
        this.id = id;
        this.travelName = travelName;
        this.shortDescription = shortDescription;
        this.price = price;
        this.spaceLeft = spaceLeft;
    }

    private Long id;
    private String travelName;
    private String shortDescription;
    private float price;
    private int spaceLeft;

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
                "id=" + id +
                ", travelName='" + travelName + '\'' +
                ", shortDescription='" + shortDescription + '\'' +
                ", price=" + price +
                ", spaceLeft=" + spaceLeft +
                '}';
    }
}
