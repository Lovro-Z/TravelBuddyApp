package hr.zubcic.travelapp.controllers;

import hr.zubcic.travelapp.dto.UserDTO;
import hr.zubcic.travelapp.dto.command.UserCommand;
import hr.zubcic.travelapp.security.SecurityUtils;
import hr.zubcic.travelapp.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/current-user")
    public ResponseEntity<UserDTO> getCurrentUser() {
        return SecurityUtils.getCurrentUserUsername()
                .map(
                        username -> userService.findByUsername(username)
                                .map(ResponseEntity::ok)
                                .orElseGet(
                                        () -> ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).build()
                                )
                )
                .orElseGet(
                        () -> ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).build()
                );
    }

    @PostMapping
    public ResponseEntity<UserDTO> save(@Valid @RequestBody final UserCommand command) {
        return userService.save(command)
                .map(
                        userDTO -> ResponseEntity
                                .status(HttpStatus.CREATED)
                                .body(userDTO)
                )
                .orElseGet(
                        () -> ResponseEntity
                                .status(HttpStatus.CONFLICT)
                                .build()
                );
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> update(@PathVariable Long id, @Valid @RequestBody final UserCommand userCommand) {
        return userService.update(id, userCommand)
                .map(ResponseEntity::ok)
                .orElseGet(
                        () -> ResponseEntity.notFound().build()
                );
    }

    @PutMapping("/book/{id}")
    public ResponseEntity<UserDTO> bookTravel(@PathVariable Long id, @RequestParam Long travelId) {
        return userService.bookTravel(id, travelId)
                .map(ResponseEntity::ok)
                .orElseGet(
                        () -> ResponseEntity.notFound().build()
                );
    }

    @PutMapping("/cancel/{id}")
    public ResponseEntity<UserDTO> cancelTravel(@PathVariable Long id) {
        return userService.cancelTravel(id)
                .map(ResponseEntity::ok)
                .orElseGet(
                        () -> ResponseEntity.notFound().build()
                );
    }
}
