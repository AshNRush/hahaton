package com.example.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StatusesRepository statusesRepository;

    @Autowired
    private PointsRepository pointsRepository;

    @GetMapping("/{id}")
    public ResponseEntity<User> findUserById(@PathVariable(value = "id") Integer id) {
        var user = userRepository.findById(id);

        return user.map(value -> ResponseEntity.ok().body(value)).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}/nextpoint")
    public ResponseEntity<Integer> findNextPointById(@PathVariable(value = "id") int id){
        var nextPoint = pointsRepository.findById(id + 1);
        return nextPoint.map(point -> ResponseEntity.ok(point.getId())).orElseGet(() -> ResponseEntity.ok(1));
    }

    @GetMapping("/{id}/status")

    @PostMapping("/update")
    public PointStatus updateCheckpoint(@RequestParam User user){
        return statusesRepository.save(new PointStatus(user.getId(), user.getLastFoundPoint(), true));
    }


    @PostMapping
    public User saveUser(@RequestParam String phoneNumber, @RequestParam String firstName,
                         @RequestParam boolean isInQuestMode, @RequestParam Integer lastFoundPoint) {
        var user = new User(phoneNumber, firstName, isInQuestMode, lastFoundPoint);
        var savedUser = userRepository.save(user);
        updateCheckpoint(savedUser);
        return savedUser;
    }
}
