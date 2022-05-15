package com.example.backend;


import javax.persistence.*;

@Entity
@Table(name = "points")
public class Point {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "flavor_text")
    private String flavorText;

    @Column(name = "hint_text")
    private String hintText;

    @Column
    private double longtitude;

    @Column
    private double latitude;

    @Column(name = "easter_child")
    private int easterChild;

    @Column(name = "easter_parent")
    private int easterParent;

    @Column(name = "logical_id")
    private int logicalId;

    public Point(String flavorText, String hintText, double longtitude, double latitude, int easterChild, int easterParent, int logicalId) {
        this.flavorText = flavorText;
        this.hintText = hintText;
        this.longtitude = longtitude;
        this.latitude = latitude;
        this.easterChild = easterChild;
        this.easterParent = easterParent;
        this.logicalId = logicalId;
    }

    public Point() {
        super();
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFlavorText() {
        return flavorText;
    }

    public void setFlavorText(String flavorText) {
        this.flavorText = flavorText;
    }

    public String getHintText() {
        return hintText;
    }

    public void setHintText(String hintText) {
        this.hintText = hintText;
    }

    public double getLongtitude() {
        return longtitude;
    }

    public void setLongtitude(double longtitude) {
        this.longtitude = longtitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public int getEasterChild() {
        return easterChild;
    }

    public void setEasterChild(int easterChild) {
        this.easterChild = easterChild;
    }

    public int getEasterParent() {
        return easterParent;
    }

    public void setEasterParent(int easterParent) {
        this.easterParent = easterParent;
    }

    public int getLogicalId() {
        return logicalId;
    }

    public void setLogicalId(int logicalId) {
        this.logicalId = logicalId;
    }
}
