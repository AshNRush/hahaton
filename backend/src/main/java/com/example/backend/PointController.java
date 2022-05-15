package com.example.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/point")
public class PointController {

    @Autowired
    private PointsRepository pointsRepository;

    @GetMapping("/{id}/hint")
    public ResponseEntity<String> findHintById(@PathVariable(value = "id") int id){
        var point = pointsRepository.findById(id);
        return point.map(value -> ResponseEntity.ok().body(value.getHintText())).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Point> findPointById(@PathVariable(value = "id") Integer id) {
        var point = pointsRepository.findById(id);

        return point.map(value -> ResponseEntity.ok().body(value)).orElseGet(() -> ResponseEntity.notFound().build());
    }


    @PostMapping
    public Point savePoint(@RequestParam String flavorText, @RequestParam String hintText,
                           @RequestParam double latitude, @RequestParam double longtitude,
                           Integer easterChild, Integer easterParent, int logicalId){
        var point = new Point(flavorText, hintText, longtitude, latitude, easterChild, easterParent, logicalId);
        return pointsRepository.save(point);
    }
}
