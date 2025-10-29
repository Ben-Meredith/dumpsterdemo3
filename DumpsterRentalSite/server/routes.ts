import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/bookings", async (req, res) => {
    try {
      const result = insertBookingSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          error: "Validation failed", 
          message: validationError.message 
        });
      }

      const booking = await storage.createBooking(result.data);
      
      return res.status(201).json(booking);
    } catch (error) {
      console.error("Error creating booking:", error);
      return res.status(500).json({ 
        error: "Internal server error", 
        message: "Failed to create booking" 
      });
    }
  });

  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getAllBookings();
      return res.json(bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      return res.status(500).json({ 
        error: "Internal server error", 
        message: "Failed to fetch bookings" 
      });
    }
  });

  app.get("/api/bookings/:id", async (req, res) => {
    try {
      const booking = await storage.getBooking(req.params.id);
      
      if (!booking) {
        return res.status(404).json({ 
          error: "Not found", 
          message: "Booking not found" 
        });
      }
      
      return res.json(booking);
    } catch (error) {
      console.error("Error fetching booking:", error);
      return res.status(500).json({ 
        error: "Internal server error", 
        message: "Failed to fetch booking" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
