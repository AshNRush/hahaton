package com.example.backend;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StatusesRepository extends JpaRepository<PointStatus, Integer> {
}
