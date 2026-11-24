const express = require("express");
const chatRouter = express.Router();
const { Chat } = require("../models/chat");
const { userAuth } = require("../middlewares/auth");

chatRouter.get("/chat/:targetUserId", userAuth, async (req, res) => {
  try {
    const { targetUserId } = req.params;
    const userId = req.user._id;

    let chat = await Chat.findOne({
      participants: { $all: [userId, targetUserId] },
    }).populate({
      path: "messages.senderId",
      select: "firstName lastName",
    });

    if (!chat) {
      return res.json({ messages: [] });
    }

    res.json(chat);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = chatRouter;
