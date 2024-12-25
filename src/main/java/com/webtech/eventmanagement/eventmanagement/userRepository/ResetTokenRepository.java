package com.webtech.eventmanagement.eventmanagement.userRepository;

import com.webtech.eventmanagement.eventmanagement.model.ResetToken;
import com.webtech.eventmanagement.eventmanagement.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ResetTokenRepository extends JpaRepository<ResetToken, Long> {
    void deleteByToken(String token);
    Optional<ResetToken> findByUser(User user);
    Optional<ResetToken> findByToken(String token);
}