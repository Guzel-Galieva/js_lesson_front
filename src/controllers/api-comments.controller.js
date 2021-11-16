// const { Router } = require("express");
// const ErrorResponse = require("../classes/error-response");
// const ToDo = require("../dataBase/models/ToDo.model");
// const { requireToken, asyncHandler } = require("../middlewares/middlewares");
// const router = Router();

// function initRoutes() {
//   router.post("/", asyncHandler(requireToken), asyncHandler(createComment));
//   router.delete("/", asyncHandler(requireToken), asyncHandler(deleteComments));
//   router.patch("/:id", asyncHandler(requireToken), asyncHandler(patchComment));
//   router.patch("/:id", asyncHandler(requireToken), asyncHandler(makeDone));
// }

// async function createComment(req, res, next) {
//   const comment = await Comment.create(req.body);
//   //ToDo.userId = req.userId;
//   res.status(200).json({ comment });
// }

// async function deleteCommentById(req, res, next) {
//   const comment = await Comment.findByPk({
//     where: {
//       id: req.params.id,
//       //userId: req.userId,
//     },
//   });

//   if (!comment) {
//     throw new ErrorResponse("No comment found", 404);
//   }

//   await comment.destroy();

//   res.status(200).json({ message: "Comment is delete!" });
// }

// async function deleteComments(req, res, next) {
//   await Comment.destroy({
//     //userId: req.userId,
//     truncate: true,
//   });

//   res.status(200).json({ message: "OK!" });
// }

// async function patchComment(req, res, next) {
//   const comment = await comment.findByPk({
//     where: {
//       id: req.params.id,
//       //userId: req.userId,
//     },
//   });

//   if (!comment) {
//     throw new ErrorResponse("No comment found", 404);
//   }

//   await comment.update(req.body);
//   res.status(200).json(comment);
// }

// async function makeDone(req, res, next) {
//     const comment = await comment.findByPk({
//       where: {
//         id: req.params.id,
//         //userId: req.userId,
//       },
//     });
  
//     if (!comment) {
//       throw new ErrorResponse("No comment found", 404);
//     }
  
//     await comment.update(comment.status = 'Done');
//     res.status(200).json(comment);
//   }

// initRoutes();

// module.exports = router;