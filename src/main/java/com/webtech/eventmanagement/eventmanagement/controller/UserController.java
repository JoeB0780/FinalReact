package com.webtech.eventmanagement.eventmanagement.controller;

import com.webtech.eventmanagement.eventmanagement.model.Role;
import com.webtech.eventmanagement.eventmanagement.model.User;
import com.webtech.eventmanagement.eventmanagement.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping({"", "/", "/home"})
    public String home(Model model) {
        return "index";

    // Ensure index.html exists in src/main/resources/templates
    }

    @GetMapping("/register")
    public String showRegisterForm(Model model) {
        model.addAttribute("user", new User());
        return "register"; // Ensure register.html exists in templates
    }

    @PostMapping("/register")
    public String registerUser(@ModelAttribute("user") User user, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "register"; // Return the registration page if validation fails
        }

        // Register user
        userService.registerUser(user);
        model.addAttribute("message", "Registration successful! You can log in now.");
        return "login"; // Redirect to login page after successful registration
    }

    @GetMapping("/login")
    public String showLoginForm() {
        return "login"; // Ensure login.html exists in templates
    }

    @PostMapping("/login")
    public String loginUser(String username, String password, HttpSession session, Model model) {
        User user = userService.loginUser(username);

        if (user == null || !user.getPassword().equals(password)) {
            model.addAttribute("error", "Invalid username or password");
            return "login"; // Show login page again with error message
        }

        // Set user information in session
        session.setAttribute("loggedInUser", user);

        // Redirect based on the role
        if (user.getRole() != null) {
            switch (user.getRole()) {
                case ROLE_ADMIN:
                    return "redirect:/admin";
                case ROLE_CUSTOMER:
                    return "redirect:/customer";
                case ROLE_ACCOUNTANT:
                    return "redirect:/accountant";
                case ROLE_MANAGER:
                    return "redirect:/manager";
                default:
                    return "redirect:/login"; // Redirect to login if role is unknown
            }
        }

        return "redirect:/login";
    }

    @GetMapping("/admin")
    public String showAdminDashboard(Model model) {
        List<User> users = userService.getAllUsers(); // Fetch all users
        model.addAttribute("users", users); // Add users to the model
        return "admin"; // Return the name of your admin dashboard template
}
    @GetMapping("/accountant")
    public String accountantPage(HttpSession session) {
        if (!isLoggedInAs(session, Role.ROLE_ACCOUNTANT)) {
            return "redirect:/login";
        }
        return "accountant"; // Ensure accountant.html exists in templates
    }

    @GetMapping("/customer")
    public String customerPage(HttpSession session) {
        if (!isLoggedInAs(session, Role.ROLE_CUSTOMER)) {
            return "redirect:/login";
        }
        return "customer"; // Ensure customer.html exists in templates
    }

    @GetMapping("/manager")
    public String managerPage(HttpSession session) {
        if (!isLoggedInAs(session, Role.ROLE_MANAGER)) {
            return "redirect:/login";
        }
        return "manager"; // Ensure manager.html exists in templates
    }


    @GetMapping("/logout")
    public String logout(HttpSession session, RedirectAttributes redirectAttributes) {
        session.invalidate(); // Invalidate session on logout
        redirectAttributes.addFlashAttribute("message", "You are logged out.");
        return "redirect:/login"; // Redirect to login after logout
    }

    // Utility method to check user role
    private boolean isLoggedInAs(HttpSession session, Role role) {
        User user = (User) session.getAttribute("loggedInUser");
        return user != null && role.equals(user.getRole());
    }

}
