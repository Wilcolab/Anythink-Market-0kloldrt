/**
 * Express router for handling comment-related API endpoints.
 * 
 * @module routes/api/comments
 */

 /**
    * GET /
    * Retrieves all comments from the database.
    * 
    * @route GET /
    * @returns {Object[]} 200 - An array of comment objects
    * @returns {Object} 500 - Internal server error
    */

 /**
    * DELETE /:id
    * Deletes a comment by its ID.
    * 
    * @route DELETE /:id
    * @param {string} id.path.required - The ID of the comment to delete
    * @returns {void} 204 - No content, comment deleted successfully
    * @returns {Object} 500 - Internal server error
    */

 /**
    * POST /
    * Creates a new comment.
    * 
    * @route POST /
    * @param {Object} req.body.required - The comment object to create
    * @returns {Object} 201 - The created comment object
    * @returns {Object} 400 - Failed to create comment
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");
//Hey Github Copilot
module.exports = router;

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: "Failed to create comment" });
    }
});