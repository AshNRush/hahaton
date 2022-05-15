package com.example.backend;
import java.util.Dictionary;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true, length = 11)
    private String phoneNumber;

    @Column(name = "first_name", nullable = false, length = 20)
    private String firstName;

    @Column(name = "is_in_quest_mode")
    private boolean isInQuestMode;

    @Column(name = "last_found_point")
    private int lastFoundPoint;

    public User(String phoneNumber, String firstName, boolean isInQuestMode, int lastFoundPoint) {
        this.phoneNumber = phoneNumber;
        this.firstName = firstName;
        this.isInQuestMode = isInQuestMode;
        this.lastFoundPoint = lastFoundPoint;
    }

    public User() {
        super();
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public boolean isInQuestMode() {
        return isInQuestMode;
    }

    public void setInQuestMode(boolean inQuestMode) {
        isInQuestMode = inQuestMode;
    }

    public void setLastFoundPoint(int lastFoundPoint) {
        this.lastFoundPoint = lastFoundPoint;
    }

    public int getLastFoundPoint() {
        return lastFoundPoint;
    }
}
