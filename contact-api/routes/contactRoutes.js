const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST: Save message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(201).json({
      success: true,
      data: contact
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: Fetch all messages
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
