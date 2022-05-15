package com.example.backend;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PointsRepository extends JpaRepository<Point, Integer> {
}
