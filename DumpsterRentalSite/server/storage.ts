import { type Booking, type InsertBooking } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBooking(id: string): Promise<Booking | undefined>;
  getAllBookings(): Promise<Booking[]>;
}

export class MemStorage implements IStorage {
  private bookings: Map<string, Booking>;

  constructor() {
    this.bookings = new Map();
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = randomUUID();
    const booking: Booking = {
      id,
      name: insertBooking.name,
      phone: insertBooking.phone,
      email: insertBooking.email,
      serviceType: insertBooking.serviceType,
      dumpsterSize: insertBooking.dumpsterSize ?? null,
      rentalDate: insertBooking.rentalDate ?? null,
      address: insertBooking.address,
      message: insertBooking.message ?? null,
      createdAt: new Date(),
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async getBooking(id: string): Promise<Booking | undefined> {
    return this.bookings.get(id);
  }

  async getAllBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }
}

export const storage = new MemStorage();
