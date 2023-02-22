import { Router } from "express";
abstract class Controller {
  abstract setRouter(): Router;
}
export default Controller;
