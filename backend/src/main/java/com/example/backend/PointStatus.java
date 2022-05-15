package com.example.backend;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "points_statuses")
public class PointStatus implements Serializable {
    @Id
    private int id;

    @Column
    private int user;

    @Column
    private int point;

    @Column(name = "is_checked")
    private boolean isChecked;


    public PointStatus(int user, int point, boolean isChecked) {
        this.id = user;
        this.user = user;
        this.point = point;
        this.isChecked = isChecked;
    }

    public PointStatus() {
        super();
    }

    public boolean isChecked() {
        return isChecked;
    }

    public void setChecked(boolean checked) {
        isChecked = checked;
    }

    public int getUser() {
        return user;
    }

    public void setUser(int user) {
        this.user = user;
    }

    public int getPoint() {
        return point;
    }

    public void setPoint(int point) {
        this.point = point;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
