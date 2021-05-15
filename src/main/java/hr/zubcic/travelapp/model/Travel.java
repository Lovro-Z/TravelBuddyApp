package hr.zubcic.travelapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Travel {

    public Travel(Long id, String travelName, String shortDescription, float price, int spaceLeft) {
        this.id = id;
        this.travelName = travelName;
        this.shortDescription = shortDescription;
        this.price = price;
        this.spaceLeft = spaceLeft;
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

    @Column(name = "price")
    private float price;

    @Column(name = "space_left")
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
        return "Travel{" +
                "id=" + id +
                ", travelName='" + travelName + '\'' +
                ", shortDescription='" + shortDescription + '\'' +
                ", price=" + price +
                ", spaceLeft=" + spaceLeft +
                '}';
    }
}
