const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Simple shared-secret check so the GET routes below aren't world-readable.
// Anyone who knows your MongoDB Atlas dashboard login already sees this data,
// but the API itself shouldn't hand it out to whoever finds the URL.
function requireAdminKey(req, res, next) {
  const key = req.header("x-admin-key");
  if (!process.env.ADMIN_KEY || key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
}

// POST: Save message — stays public, this is the contact form submit
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
      data: contact,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: Fetch all messages — now requires the admin key header
router.get("/", requireAdminKey, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/email/:email", requireAdminKey, async (req, res) => {
  try {
    const { email } = req.params;

    const contacts = await Contact.find({ email }).sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
